// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'order.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_CustomerOrder _$CustomerOrderFromJson(Map<String, dynamic> json) =>
    _CustomerOrder(
      id: json['id'] as String,
      productId: json['productId'] as String,
      productName: json['productName'] as String,
      quantityKg: (json['quantityKg'] as num).toDouble(),
      totalPriceSum: (json['totalPriceSum'] as num).toInt(),
      statusUz: json['statusUz'] as String,
      dateYMD: json['dateYMD'] as String,
      driverName: json['driverName'] as String,
      driverPhone: json['driverPhone'] as String,
      estimatedDayUz: json['estimatedDayUz'] as String,
    );

Map<String, dynamic> _$CustomerOrderToJson(_CustomerOrder instance) =>
    <String, dynamic>{
      'id': instance.id,
      'productId': instance.productId,
      'productName': instance.productName,
      'quantityKg': instance.quantityKg,
      'totalPriceSum': instance.totalPriceSum,
      'statusUz': instance.statusUz,
      'dateYMD': instance.dateYMD,
      'driverName': instance.driverName,
      'driverPhone': instance.driverPhone,
      'estimatedDayUz': instance.estimatedDayUz,
    };
