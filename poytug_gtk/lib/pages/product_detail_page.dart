import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';

import '../models/order.dart';
import '../models/product.dart';
import '../services/orders_service.dart';
import '../utils/pricing.dart';

class ProductDetailPage extends StatefulWidget {
  final Product product;
  const ProductDetailPage({super.key, required this.product});

  @override
  State<ProductDetailPage> createState() => _ProductDetailPageState();
}

class _ProductDetailPageState extends State<ProductDetailPage> {
  int _qty = 1;
  DateTime _deliveryDay = DateTime.now().add(const Duration(days: 1));

  @override
  Widget build(BuildContext context) {
    final p = widget.product;
    final total = (p.priceSum(Pricing.pricePerKg) * _qty).round();
    return Scaffold(
      appBar: AppBar(title: Text(p.nameUz)),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Center(child: Image.asset(p.imageAsset, height: 140)),
          const SizedBox(height: 16),
          Text('Narxi: ${Pricing.priceText(p.priceSum(Pricing.pricePerKg))} (kg = 6000 so\'m)'),
          const SizedBox(height: 8),
          Row(
            children: [
              const Text('Soni:'),
              const SizedBox(width: 8),
              IconButton(onPressed: () => setState(() => _qty = (_qty > 1) ? _qty - 1 : 1), icon: const Icon(Icons.remove_circle_outline)),
              Text('$_qty'),
              IconButton(onPressed: () => setState(() => _qty += 1), icon: const Icon(Icons.add_circle_outline)),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              const Text('Yetkazish kuni:'),
              const SizedBox(width: 12),
              FilledButton.tonal(
                onPressed: () async {
                  final now = DateTime.now();
                  final picked = await showDatePicker(
                    context: context,
                    firstDate: DateTime(now.year, now.month, now.day),
                    lastDate: DateTime(now.year + 1),
                    initialDate: _deliveryDay,
                    helpText: 'Yetkazish kunini tanlang',
                  );
                  if (picked != null) setState(() => _deliveryDay = picked);
                },
                child: Text(OrdersService.formatDate(_deliveryDay)),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Text('Jami: ${Pricing.priceText(total.toDouble())}', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
          const SizedBox(height: 16),
          FilledButton(
            onPressed: () async {
              final id = const Uuid().v4();
              final order = OrderModel(
                id: id,
                product: p,
                quantity: _qty,
                totalSum: total,
                createdDate: DateTime.now(),
                deliveryDay: _deliveryDay,
                driverName: 'Haydovchi: Akmal',
                driverPhone: '+998 90 000 00 00',
                statusUz: 'Buyurtma tasdiqlandi',
              );
              final orders = await OrdersService.load();
              orders.insert(0, order);
              await OrdersService.save(orders);
              if (!mounted) return;
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Buyurtma berildi')));
              Navigator.of(context).pop();
            },
            child: const Text('Buyurtma berish'),
          ),
        ],
      ),
    );
  }
}

