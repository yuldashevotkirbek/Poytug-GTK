import 'dart:convert';

import 'product.dart';

class OrderModel {
  final String id;
  final Product product;
  final int quantity;
  final int totalSum;
  final DateTime createdDate; // Sana, soatsiz
  final DateTime deliveryDay; // Sana, soatsiz
  final String driverName;
  final String driverPhone;
  final String statusUz; // Masalan: "Buyurtma tasdiqlandi"

  const OrderModel({
    required this.id,
    required this.product,
    required this.quantity,
    required this.totalSum,
    required this.createdDate,
    required this.deliveryDay,
    required this.driverName,
    required this.driverPhone,
    required this.statusUz,
  });

  OrderModel copyWith({DateTime? deliveryDay}) => OrderModel(
        id: id,
        product: product,
        quantity: quantity,
        totalSum: totalSum,
        createdDate: createdDate,
        deliveryDay: deliveryDay ?? this.deliveryDay,
        driverName: driverName,
        driverPhone: driverPhone,
        statusUz: statusUz,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'product': {
          'id': product.id,
          'nameUz': product.nameUz,
          'weightKg': product.weightKg,
          'imageAsset': product.imageAsset,
        },
        'quantity': quantity,
        'totalSum': totalSum,
        'createdDate': _dateToIsoDate(createdDate),
        'deliveryDay': _dateToIsoDate(deliveryDay),
        'driverName': driverName,
        'driverPhone': driverPhone,
        'statusUz': statusUz,
      };

  static OrderModel fromJson(Map<String, dynamic> json) => OrderModel(
        id: json['id'] as String,
        product: Product(
          id: json['product']['id'],
          nameUz: json['product']['nameUz'],
          weightKg: (json['product']['weightKg'] as num).toDouble(),
          imageAsset: json['product']['imageAsset'],
        ),
        quantity: json['quantity'] as int,
        totalSum: json['totalSum'] as int,
        createdDate: DateTime.parse(json['createdDate']).toLocal(),
        deliveryDay: DateTime.parse(json['deliveryDay']).toLocal(),
        driverName: json['driverName'] as String,
        driverPhone: json['driverPhone'] as String,
        statusUz: json['statusUz'] as String,
      );

  static String encodeList(List<OrderModel> orders) => jsonEncode(orders.map((o) => o.toJson()).toList());
  static List<OrderModel> decodeList(String source) {
    final data = jsonDecode(source) as List<dynamic>;
    return data.map((e) => OrderModel.fromJson(e)).toList();
  }
}

String _dateToIsoDate(DateTime date) {
  final d = DateTime(date.year, date.month, date.day);
  return d.toIso8601String();
}

