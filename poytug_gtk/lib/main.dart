import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

import 'router/app_router.dart';
import 'services/storage_service.dart';
import 'utils/constants.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final storageService = await StorageService.create();
  runApp(MyApp(storageService: storageService));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key, required this.storageService});

  final StorageService storageService;

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final GoRouter router = createAppRouter(storageService);
    return MultiProvider(
      providers: [
        Provider<StorageService>.value(value: storageService),
      ],
      child: MaterialApp.router(
        title: appTitle,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
          useMaterial3: true,
          fontFamily: 'Roboto',
        ),
        routerConfig: router,
        locale: const Locale('uz'),
        supportedLocales: const [
          Locale('uz'),
          Locale('ru'),
          Locale('en'),
        ],
        localizationsDelegates: const [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
        ],
      ),
    );
  }
}
