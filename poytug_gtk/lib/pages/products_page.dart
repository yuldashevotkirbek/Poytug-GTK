import 'package:flutter/material.dart';
import '../models/product.dart';
import '../utils/pricing.dart';
import 'product_detail_page.dart';

class ProductsPage extends StatelessWidget {
  const ProductsPage({super.key});

  static final List<Product> _items = [
    const Product(id: 'b5', nameUz: 'Propan gaz baloni 5 kg', weightKg: 5, imageAsset: 'assets/images/logo.png'),
    const Product(id: 'b12', nameUz: 'Propan gaz baloni 12 kg', weightKg: 12, imageAsset: 'assets/images/logo.png'),
    const Product(id: 'b27', nameUz: 'Propan gaz baloni 27 kg', weightKg: 27, imageAsset: 'assets/images/logo.png'),
    const Product(id: 'b50', nameUz: 'Propan gaz baloni 50 kg', weightKg: 50, imageAsset: 'assets/images/logo.png'),
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      padding: const EdgeInsets.all(12),
      itemCount: _items.length,
      itemBuilder: (context, i) {
        final p = _items[i];
        final price = Pricing.priceText(p.priceSum(Pricing.pricePerKg));
        return Card(
          child: ListTile(
            leading: Image.asset(p.imageAsset, width: 56, height: 56),
            title: Text(p.nameUz),
            subtitle: Text('Og\'irligi: ${p.weightKg.toStringAsFixed(0)} kg\nNarxi: $price'),
            onTap: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => ProductDetailPage(product: p)),
            ),
          ),
        );
      },
    );
  }
}

