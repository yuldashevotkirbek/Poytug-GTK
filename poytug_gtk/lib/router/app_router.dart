import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../screens/splash_screen.dart';
import '../screens/auth/login_screen.dart';
import '../screens/root_shell.dart';
import '../services/storage_service.dart';

GoRouter createAppRouter(StorageService storageService) {
  return GoRouter(
    initialLocation: '/splash',
    routes: [
      GoRoute(
        path: '/splash',
        builder: (context, state) => SplashScreen(storageService: storageService),
      ),
      GoRoute(
        path: '/login',
        builder: (context, state) => const LoginScreen(),
      ),
      ShellRoute(
        builder: (context, state, child) => RootShell(child: child),
        routes: [
          GoRoute(
            path: '/',
            builder: (context, state) => const SizedBox.shrink(),
            redirect: (context, state) => '/home',
          ),
          GoRoute(
            path: '/home',
            builder: (context, state) => const RootShellTab(index: 0),
          ),
          GoRoute(
            path: '/products',
            builder: (context, state) => const RootShellTab(index: 1),
          ),
          GoRoute(
            path: '/orders',
            builder: (context, state) => const RootShellTab(index: 2),
          ),
          GoRoute(
            path: '/profile',
            builder: (context, state) => const RootShellTab(index: 3),
          ),
          GoRoute(
            path: '/product/:id',
            builder: (context, state) {
              final id = state.pathParameters['id']!;
              return RootShell.productDetail(id);
            },
          ),
        ],
      ),
    ],
    redirect: (context, state) async {
      final isLoggedIn = await storageService.isLoggedIn();
      final loggingIn = state.matchedLocation == '/login';
      if (!isLoggedIn && !loggingIn && state.matchedLocation != '/splash') {
        return '/login';
      }
      if (isLoggedIn && loggingIn) {
        return '/home';
      }
      return null;
    },
  );
}

