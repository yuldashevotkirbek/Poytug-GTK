import 'package:freezed_annotation/freezed_annotation.dart';
import '../utils/constants.dart';

part 'product.freezed.dart';
part 'product.g.dart';

@freezed
abstract class Product with _$Product {
  const factory Product({
    required String id,
    required String nameUz,
    required String descriptionUz,
    required String imageAsset,
    required double weightKg,
  }) = _Product;

  const Product._();

  factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);

  int get priceSum => (weightKg * lpgPricePerKg).round();
}

final List<Product> defaultProducts = [
  const Product(
    id: 'balon-5kg',
    nameUz: 'Propan balon 5 kg',
    descriptionUz: 'Uy xo\'jaligi uchun qulay kichik hajmli propan baloni.',
    imageAsset: 'assets/images/logo.png',
    weightKg: 5,
  ),
  const Product(
    id: 'balon-10kg',
    nameUz: 'Propan balon 10 kg',
    descriptionUz: 'O\'rta hajmli ehtiyojlar uchun mos.',
    imageAsset: 'assets/images/logo.png',
    weightKg: 10,
  ),
  const Product(
    id: 'balon-20kg',
    nameUz: 'Propan balon 20 kg',
    descriptionUz: 'Katta ehtiyojlar va tadbirkorlar uchun.',
    imageAsset: 'assets/images/logo.png',
    weightKg: 20,
  ),
  const Product(
    id: 'balon-50kg',
    nameUz: 'Propan balon 50 kg',
    descriptionUz: 'Korxonalar uchun mos yirik hajm.',
    imageAsset: 'assets/images/logo.png',
    weightKg: 50,
  ),
];

