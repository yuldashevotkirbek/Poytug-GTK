class Product {
  final String id;
  final String nameUz;
  final double weightKg;
  final String imageAsset;

  const Product({
    required this.id,
    required this.nameUz,
    required this.weightKg,
    required this.imageAsset,
  });

  double priceSum(double pricePerKg) => weightKg * pricePerKg;
}

