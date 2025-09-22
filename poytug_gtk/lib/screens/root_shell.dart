import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../utils/constants.dart';
import 'tabs/home_page.dart';
import 'tabs/products_page.dart';
import 'tabs/orders_page.dart';
import 'tabs/profile_page.dart';
import 'product_detail_screen.dart';

class RootShell extends StatefulWidget {
  const RootShell({super.key, required this.child});
  final Widget child;

  static Widget productDetail(String id) => ProductDetailScreen(productId: id);

  @override
  State<RootShell> createState() => _RootShellState();
}

class _RootShellState extends State<RootShell> {
  int _indexFromLocation(GoRouter router) {
    final location = router.routeInformationProvider.value.uri.toString();
    if (location.startsWith('/products')) return 1;
    if (location.startsWith('/orders')) return 2;
    if (location.startsWith('/profile')) return 3;
    return 0;
  }

  @override
  Widget build(BuildContext context) {
    final router = GoRouter.of(context);
    final currentIndex = _indexFromLocation(router);
    return Scaffold(
      appBar: AppBar(
        title: const Text(appTitle),
      ),
      body: IndexedStack(
        index: currentIndex,
        children: const [
          HomePage(),
          ProductsPage(),
          OrdersPage(),
          ProfilePage(),
        ],
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: currentIndex,
        onDestinationSelected: (i) {
          switch (i) {
            case 0:
              context.go('/home');
              break;
            case 1:
              context.go('/products');
              break;
            case 2:
              context.go('/orders');
              break;
            case 3:
              context.go('/profile');
              break;
          }
        },
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), selectedIcon: Icon(Icons.home), label: 'Bosh sahifa'),
          NavigationDestination(icon: Icon(Icons.local_gas_station_outlined), selectedIcon: Icon(Icons.local_gas_station), label: 'Mahsulotlar'),
          NavigationDestination(icon: Icon(Icons.receipt_long_outlined), selectedIcon: Icon(Icons.receipt_long), label: 'Buyurtmalar'),
          NavigationDestination(icon: Icon(Icons.person_outline), selectedIcon: Icon(Icons.person), label: 'Profil'),
        ],
      ),
    );
  }
}

class RootShellTab extends StatelessWidget {
  const RootShellTab({super.key, required this.index});
  final int index;

  @override
  Widget build(BuildContext context) {
    return const SizedBox.shrink();
  }
}

