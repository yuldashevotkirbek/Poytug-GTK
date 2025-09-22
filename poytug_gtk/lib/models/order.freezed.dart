// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'order.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;

/// @nodoc
mixin _$CustomerOrder {

 String get id; String get productId; String get productName; double get quantityKg; int get totalPriceSum; String get statusUz;// "Buyurtma tasdiqlandi"
 String get dateYMD;// yyyy-MM-dd only
 String get driverName; String get driverPhone; String get estimatedDayUz;
/// Create a copy of CustomerOrder
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$CustomerOrderCopyWith<CustomerOrder> get copyWith => _$CustomerOrderCopyWithImpl<CustomerOrder>(this as CustomerOrder, _$identity);

  /// Serializes this CustomerOrder to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is CustomerOrder&&(identical(other.id, id) || other.id == id)&&(identical(other.productId, productId) || other.productId == productId)&&(identical(other.productName, productName) || other.productName == productName)&&(identical(other.quantityKg, quantityKg) || other.quantityKg == quantityKg)&&(identical(other.totalPriceSum, totalPriceSum) || other.totalPriceSum == totalPriceSum)&&(identical(other.statusUz, statusUz) || other.statusUz == statusUz)&&(identical(other.dateYMD, dateYMD) || other.dateYMD == dateYMD)&&(identical(other.driverName, driverName) || other.driverName == driverName)&&(identical(other.driverPhone, driverPhone) || other.driverPhone == driverPhone)&&(identical(other.estimatedDayUz, estimatedDayUz) || other.estimatedDayUz == estimatedDayUz));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,productId,productName,quantityKg,totalPriceSum,statusUz,dateYMD,driverName,driverPhone,estimatedDayUz);

@override
String toString() {
  return 'CustomerOrder(id: $id, productId: $productId, productName: $productName, quantityKg: $quantityKg, totalPriceSum: $totalPriceSum, statusUz: $statusUz, dateYMD: $dateYMD, driverName: $driverName, driverPhone: $driverPhone, estimatedDayUz: $estimatedDayUz)';
}


}

/// @nodoc
abstract mixin class $CustomerOrderCopyWith<$Res>  {
  factory $CustomerOrderCopyWith(CustomerOrder value, $Res Function(CustomerOrder) _then) = _$CustomerOrderCopyWithImpl;
@useResult
$Res call({
 String id, String productId, String productName, double quantityKg, int totalPriceSum, String statusUz, String dateYMD, String driverName, String driverPhone, String estimatedDayUz
});




}
/// @nodoc
class _$CustomerOrderCopyWithImpl<$Res>
    implements $CustomerOrderCopyWith<$Res> {
  _$CustomerOrderCopyWithImpl(this._self, this._then);

  final CustomerOrder _self;
  final $Res Function(CustomerOrder) _then;

/// Create a copy of CustomerOrder
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = null,Object? productId = null,Object? productName = null,Object? quantityKg = null,Object? totalPriceSum = null,Object? statusUz = null,Object? dateYMD = null,Object? driverName = null,Object? driverPhone = null,Object? estimatedDayUz = null,}) {
  return _then(_self.copyWith(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,productId: null == productId ? _self.productId : productId // ignore: cast_nullable_to_non_nullable
as String,productName: null == productName ? _self.productName : productName // ignore: cast_nullable_to_non_nullable
as String,quantityKg: null == quantityKg ? _self.quantityKg : quantityKg // ignore: cast_nullable_to_non_nullable
as double,totalPriceSum: null == totalPriceSum ? _self.totalPriceSum : totalPriceSum // ignore: cast_nullable_to_non_nullable
as int,statusUz: null == statusUz ? _self.statusUz : statusUz // ignore: cast_nullable_to_non_nullable
as String,dateYMD: null == dateYMD ? _self.dateYMD : dateYMD // ignore: cast_nullable_to_non_nullable
as String,driverName: null == driverName ? _self.driverName : driverName // ignore: cast_nullable_to_non_nullable
as String,driverPhone: null == driverPhone ? _self.driverPhone : driverPhone // ignore: cast_nullable_to_non_nullable
as String,estimatedDayUz: null == estimatedDayUz ? _self.estimatedDayUz : estimatedDayUz // ignore: cast_nullable_to_non_nullable
as String,
  ));
}

}


/// Adds pattern-matching-related methods to [CustomerOrder].
extension CustomerOrderPatterns on CustomerOrder {
/// A variant of `map` that fallback to returning `orElse`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _CustomerOrder value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _CustomerOrder() when $default != null:
return $default(_that);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// Callbacks receives the raw object, upcasted.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case final Subclass2 value:
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _CustomerOrder value)  $default,){
final _that = this;
switch (_that) {
case _CustomerOrder():
return $default(_that);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `map` that fallback to returning `null`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _CustomerOrder value)?  $default,){
final _that = this;
switch (_that) {
case _CustomerOrder() when $default != null:
return $default(_that);case _:
  return null;

}
}
/// A variant of `when` that fallback to an `orElse` callback.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String id,  String productId,  String productName,  double quantityKg,  int totalPriceSum,  String statusUz,  String dateYMD,  String driverName,  String driverPhone,  String estimatedDayUz)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _CustomerOrder() when $default != null:
return $default(_that.id,_that.productId,_that.productName,_that.quantityKg,_that.totalPriceSum,_that.statusUz,_that.dateYMD,_that.driverName,_that.driverPhone,_that.estimatedDayUz);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// As opposed to `map`, this offers destructuring.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case Subclass2(:final field2):
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String id,  String productId,  String productName,  double quantityKg,  int totalPriceSum,  String statusUz,  String dateYMD,  String driverName,  String driverPhone,  String estimatedDayUz)  $default,) {final _that = this;
switch (_that) {
case _CustomerOrder():
return $default(_that.id,_that.productId,_that.productName,_that.quantityKg,_that.totalPriceSum,_that.statusUz,_that.dateYMD,_that.driverName,_that.driverPhone,_that.estimatedDayUz);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `when` that fallback to returning `null`
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String id,  String productId,  String productName,  double quantityKg,  int totalPriceSum,  String statusUz,  String dateYMD,  String driverName,  String driverPhone,  String estimatedDayUz)?  $default,) {final _that = this;
switch (_that) {
case _CustomerOrder() when $default != null:
return $default(_that.id,_that.productId,_that.productName,_that.quantityKg,_that.totalPriceSum,_that.statusUz,_that.dateYMD,_that.driverName,_that.driverPhone,_that.estimatedDayUz);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _CustomerOrder implements CustomerOrder {
  const _CustomerOrder({required this.id, required this.productId, required this.productName, required this.quantityKg, required this.totalPriceSum, required this.statusUz, required this.dateYMD, required this.driverName, required this.driverPhone, required this.estimatedDayUz});
  factory _CustomerOrder.fromJson(Map<String, dynamic> json) => _$CustomerOrderFromJson(json);

@override final  String id;
@override final  String productId;
@override final  String productName;
@override final  double quantityKg;
@override final  int totalPriceSum;
@override final  String statusUz;
// "Buyurtma tasdiqlandi"
@override final  String dateYMD;
// yyyy-MM-dd only
@override final  String driverName;
@override final  String driverPhone;
@override final  String estimatedDayUz;

/// Create a copy of CustomerOrder
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$CustomerOrderCopyWith<_CustomerOrder> get copyWith => __$CustomerOrderCopyWithImpl<_CustomerOrder>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$CustomerOrderToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _CustomerOrder&&(identical(other.id, id) || other.id == id)&&(identical(other.productId, productId) || other.productId == productId)&&(identical(other.productName, productName) || other.productName == productName)&&(identical(other.quantityKg, quantityKg) || other.quantityKg == quantityKg)&&(identical(other.totalPriceSum, totalPriceSum) || other.totalPriceSum == totalPriceSum)&&(identical(other.statusUz, statusUz) || other.statusUz == statusUz)&&(identical(other.dateYMD, dateYMD) || other.dateYMD == dateYMD)&&(identical(other.driverName, driverName) || other.driverName == driverName)&&(identical(other.driverPhone, driverPhone) || other.driverPhone == driverPhone)&&(identical(other.estimatedDayUz, estimatedDayUz) || other.estimatedDayUz == estimatedDayUz));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,productId,productName,quantityKg,totalPriceSum,statusUz,dateYMD,driverName,driverPhone,estimatedDayUz);

@override
String toString() {
  return 'CustomerOrder(id: $id, productId: $productId, productName: $productName, quantityKg: $quantityKg, totalPriceSum: $totalPriceSum, statusUz: $statusUz, dateYMD: $dateYMD, driverName: $driverName, driverPhone: $driverPhone, estimatedDayUz: $estimatedDayUz)';
}


}

/// @nodoc
abstract mixin class _$CustomerOrderCopyWith<$Res> implements $CustomerOrderCopyWith<$Res> {
  factory _$CustomerOrderCopyWith(_CustomerOrder value, $Res Function(_CustomerOrder) _then) = __$CustomerOrderCopyWithImpl;
@override @useResult
$Res call({
 String id, String productId, String productName, double quantityKg, int totalPriceSum, String statusUz, String dateYMD, String driverName, String driverPhone, String estimatedDayUz
});




}
/// @nodoc
class __$CustomerOrderCopyWithImpl<$Res>
    implements _$CustomerOrderCopyWith<$Res> {
  __$CustomerOrderCopyWithImpl(this._self, this._then);

  final _CustomerOrder _self;
  final $Res Function(_CustomerOrder) _then;

/// Create a copy of CustomerOrder
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = null,Object? productId = null,Object? productName = null,Object? quantityKg = null,Object? totalPriceSum = null,Object? statusUz = null,Object? dateYMD = null,Object? driverName = null,Object? driverPhone = null,Object? estimatedDayUz = null,}) {
  return _then(_CustomerOrder(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,productId: null == productId ? _self.productId : productId // ignore: cast_nullable_to_non_nullable
as String,productName: null == productName ? _self.productName : productName // ignore: cast_nullable_to_non_nullable
as String,quantityKg: null == quantityKg ? _self.quantityKg : quantityKg // ignore: cast_nullable_to_non_nullable
as double,totalPriceSum: null == totalPriceSum ? _self.totalPriceSum : totalPriceSum // ignore: cast_nullable_to_non_nullable
as int,statusUz: null == statusUz ? _self.statusUz : statusUz // ignore: cast_nullable_to_non_nullable
as String,dateYMD: null == dateYMD ? _self.dateYMD : dateYMD // ignore: cast_nullable_to_non_nullable
as String,driverName: null == driverName ? _self.driverName : driverName // ignore: cast_nullable_to_non_nullable
as String,driverPhone: null == driverPhone ? _self.driverPhone : driverPhone // ignore: cast_nullable_to_non_nullable
as String,estimatedDayUz: null == estimatedDayUz ? _self.estimatedDayUz : estimatedDayUz // ignore: cast_nullable_to_non_nullable
as String,
  ));
}


}

// dart format on
