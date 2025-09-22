import 'package:flutter/material.dart';

import '../models/order.dart';
import '../services/orders_service.dart';

class OrdersPage extends StatefulWidget {
  const OrdersPage({super.key});

  @override
  State<OrdersPage> createState() => _OrdersPageState();
}

class _OrdersPageState extends State<OrdersPage> {
  List<OrderModel> _orders = const [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final list = await OrdersService.load();
    setState(() {
      _orders = list;
      _loading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) return const Center(child: CircularProgressIndicator());
    if (_orders.isEmpty) {
      return const Center(child: Text('Hozircha buyurtmalar yo\'q'));
    }
    return RefreshIndicator(
      onRefresh: _load,
      child: ListView.builder(
        padding: const EdgeInsets.all(12),
        itemCount: _orders.length,
        itemBuilder: (context, i) {
          final o = _orders[i];
          return Card(
            child: ListTile(
              title: Text(o.product.nameUz),
              subtitle: Text(
                '${o.statusUz}\nSana: ${OrdersService.formatDate(o.createdDate)}\nYetkazish kuni: ${OrdersService.formatDate(o.deliveryDay)}\nSoni: ${o.quantity} | Jami: ${o.totalSum} so\'m\nHaydovchi: ${o.driverName}\nTel: ${o.driverPhone}',
              ),
            ),
          );
        },
      ),
    );
  }
}

