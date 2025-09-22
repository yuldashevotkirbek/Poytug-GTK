// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:poytug_gtk/main.dart';
import 'package:poytug_gtk/services/storage_service.dart';

void main() {
  testWidgets('App builds', (WidgetTester tester) async {
    // Provide a minimal StorageService for tests.
    final storage = await StorageService.create();
    await tester.pumpWidget(MyApp(storageService: storage));

    expect(find.byType(MaterialApp), findsWidgets);

    // Smoke build only
  });
}
