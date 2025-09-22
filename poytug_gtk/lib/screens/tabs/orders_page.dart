import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../models/order.dart';
import '../../services/storage_service.dart';

class OrdersPage extends StatefulWidget {
  const OrdersPage({super.key});

  @override
  State<OrdersPage> createState() => _OrdersPageState();
}

class _OrdersPageState extends State<OrdersPage> {
  List<CustomerOrder> _orders = [];

  Future<void> _load() async {
    final storage = context.read<StorageService>();
    final raw = storage.getOrdersJson();
    setState(() {
      _orders = raw == null || raw.isEmpty
          ? []
          : (jsonDecode(raw) as List)
              .map((e) => CustomerOrder.fromJson(e as Map<String, dynamic>))
              .toList();
    });
  }

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  Widget build(BuildContext context) {
    if (_orders.isEmpty) {
      return const Center(child: Text('Hozircha buyurtmalar yo\'q'));
    }
    return ListView.separated(
      itemCount: _orders.length,
      separatorBuilder: (_, __) => const Divider(height: 1),
      itemBuilder: (context, index) {
        final o = _orders[index];
        return ListTile(
          title: Text(o.productName),
          subtitle: Text('${o.statusUz} • Sana: ${o.dateYMD}\n${o.driverName} • Tel: ${o.driverPhone}\nKutilayotgan kuni: ${o.estimatedDayUz}'),
          isThreeLine: true,
          trailing: Text('${o.totalPriceSum} so\'m'),
        );
      },
    );
  }
}

