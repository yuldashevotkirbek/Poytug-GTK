import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../models/product.dart';
import '../models/order.dart';
import '../services/storage_service.dart';
import 'package:provider/provider.dart';
import '../utils/date_utils_uz.dart';

class ProductDetailScreen extends StatefulWidget {
  const ProductDetailScreen({super.key, required this.productId});
  final String productId;

  @override
  State<ProductDetailScreen> createState() => _ProductDetailScreenState();
}

class _ProductDetailScreenState extends State<ProductDetailScreen> {
  double _qtyKg = 1;
  Product? _product;

  @override
  void initState() {
    super.initState();
    _product = defaultProducts.firstWhere((p) => p.id == widget.productId);
    _qtyKg = _product?.weightKg ?? 1;
  }

  @override
  Widget build(BuildContext context) {
    final product = _product!;
    final total = (product.priceSum / product.weightKg * _qtyKg).round();
    return Scaffold(
      appBar: AppBar(title: Text(product.nameUz)),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Image.asset(product.imageAsset, height: 160),
          const SizedBox(height: 16),
          Text(product.descriptionUz),
          const SizedBox(height: 16),
          Row(
            children: [
              const Text('Miqdor (kg):'),
              const SizedBox(width: 12),
              Expanded(
                child: Slider(
                  min: 1,
                  max: 100,
                  divisions: 99,
                  value: _qtyKg,
                  label: _qtyKg.toStringAsFixed(0),
                  onChanged: (v) => setState(() => _qtyKg = v),
                ),
              ),
              SizedBox(
                width: 56,
                child: Text(_qtyKg.toStringAsFixed(0), textAlign: TextAlign.center),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text('Jami: $total so\'m'),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () async {
              final storage = context.read<StorageService>();
              final existing = storage.getOrdersJson();
              final list = existing != null && existing.isNotEmpty
                  ? (jsonDecode(existing) as List).map((e) => CustomerOrder.fromJson(e as Map<String, dynamic>)).toList()
                  : <CustomerOrder>[];

              final nowYMD = formatYMD(DateTime.now());
              final estimatedDay = estimateDayUz(DateTime.now());
              final newOrder = CustomerOrder(
                id: DateTime.now().millisecondsSinceEpoch.toString(),
                productId: product.id,
                productName: product.nameUz,
                quantityKg: _qtyKg,
                totalPriceSum: total,
                statusUz: 'Buyurtma tasdiqlandi',
                dateYMD: nowYMD,
                driverName: 'Haydovchi: Akmal',
                driverPhone: '+998 90 123-45-67',
                estimatedDayUz: estimatedDay,
              );
              list.insert(0, newOrder);
              await storage.saveOrdersJson(jsonEncode(list.map((e) => e.toJson()).toList()));
              if (!mounted) return;
              if (context.canPop()) {
                context.pop();
              } else {
                context.go('/orders');
              }
            },
            child: const Text('Buyurtma berish'),
          ),
        ],
      ),
    );
  }
}

