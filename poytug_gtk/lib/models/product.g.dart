// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'product.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_Product _$ProductFromJson(Map<String, dynamic> json) => _Product(
  id: json['id'] as String,
  nameUz: json['nameUz'] as String,
  descriptionUz: json['descriptionUz'] as String,
  imageAsset: json['imageAsset'] as String,
  weightKg: (json['weightKg'] as num).toDouble(),
);

Map<String, dynamic> _$ProductToJson(_Product instance) => <String, dynamic>{
  'id': instance.id,
  'nameUz': instance.nameUz,
  'descriptionUz': instance.descriptionUz,
  'imageAsset': instance.imageAsset,
  'weightKg': instance.weightKg,
};
