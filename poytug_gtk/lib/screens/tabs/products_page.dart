import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../models/product.dart';
import '../../utils/constants.dart';

class ProductsPage extends StatelessWidget {
  const ProductsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      padding: const EdgeInsets.all(16),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 12,
        crossAxisSpacing: 12,
        childAspectRatio: 0.85,
      ),
      itemCount: defaultProducts.length,
      itemBuilder: (context, index) {
        final product = defaultProducts[index];
        return InkWell(
          onTap: () => context.go('/product/${product.id}'),
          child: Card(
            clipBehavior: Clip.antiAlias,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Expanded(
                  child: Image.asset(product.imageAsset, fit: BoxFit.contain),
                ),
                Padding(
                  padding: const EdgeInsets.all(8),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(product.nameUz, style: const TextStyle(fontWeight: FontWeight.w600)),
                      const SizedBox(height: 4),
                      Text('${product.weightKg.toStringAsFixed(0)} kg'),
                      const SizedBox(height: 4),
                      Text('${product.priceSum} so\'m (kg: $lpgPricePerKg)'),
                    ],
                  ),
                )
              ],
            ),
          ),
        );
      },
    );
  }
}

