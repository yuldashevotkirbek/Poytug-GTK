import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'pages/home_page.dart';
import 'pages/orders_page.dart';
import 'pages/products_page.dart';
import 'pages/profile_page.dart';
import 'pages/login_page.dart';
import 'services/user_prefs.dart';

class PoytugGtkApp extends StatefulWidget {
  const PoytugGtkApp({super.key});

  @override
  State<PoytugGtkApp> createState() => _PoytugGtkAppState();
}

class _PoytugGtkAppState extends State<PoytugGtkApp> {
  bool _initialized = false;
  bool _isLoggedIn = false;

  @override
  void initState() {
    super.initState();
    _bootstrap();
  }

  Future<void> _bootstrap() async {
    await UserPrefs.ensureReady();
    _isLoggedIn = UserPrefs.isLoggedIn();
    setState(() {
      _initialized = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (!_initialized) {
      return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: const Scaffold(
          body: Center(child: CircularProgressIndicator()),
        ),
      );
    }

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Poytug' GTK",
      locale: const Locale('uz'),
      supportedLocales: const [Locale('uz'), Locale('ru'), Locale('en')],
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange),
        useMaterial3: true,
      ),
      home: _isLoggedIn ? const _RootTabs() : const LoginPage(),
      routes: {
        LoginPage.route: (_) => const LoginPage(),
      },
    );
  }
}

class _RootTabs extends StatefulWidget {
  const _RootTabs();

  @override
  State<_RootTabs> createState() => _RootTabsState();
}

class _RootTabsState extends State<_RootTabs> {
  int _index = 0;
  final _pages = const [HomePage(), ProductsPage(), OrdersPage(), ProfilePage()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Poytug' GTK"),
      ),
      body: _pages[_index],
      bottomNavigationBar: NavigationBar(
        selectedIndex: _index,
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), label: 'Bosh sahifa'),
          NavigationDestination(icon: Icon(Icons.shopping_bag_outlined), label: 'Mahsulotlar'),
          NavigationDestination(icon: Icon(Icons.receipt_long_outlined), label: 'Buyurtmalar'),
          NavigationDestination(icon: Icon(Icons.person_outline), label: 'Profil'),
        ],
        onDestinationSelected: (i) => setState(() => _index = i),
      ),
    );
  }
}

