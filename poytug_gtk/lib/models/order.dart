import 'package:freezed_annotation/freezed_annotation.dart';

part 'order.freezed.dart';
part 'order.g.dart';

@freezed
abstract class CustomerOrder with _$CustomerOrder {
  const factory CustomerOrder({
    required String id,
    required String productId,
    required String productName,
    required double quantityKg,
    required int totalPriceSum,
    required String statusUz, // "Buyurtma tasdiqlandi"
    required String dateYMD, // yyyy-MM-dd only
    required String driverName,
    required String driverPhone,
    required String estimatedDayUz, // e.g., "Ertaga", "Bugun", or date
  }) = _CustomerOrder;

  factory CustomerOrder.fromJson(Map<String, dynamic> json) => _$CustomerOrderFromJson(json);
}

