import 'package:intl/intl.dart';

String formatYMD(DateTime dt) {
  return DateFormat('yyyy-MM-dd').format(dt);
}

String estimateDayUz(DateTime base) {
  final today = DateTime(base.year, base.month, base.day);
  final tomorrow = today.add(const Duration(days: 1));
  final afterTomorrow = today.add(const Duration(days: 2));
  final now = DateTime.now();
  final d = DateTime(now.year, now.month, now.day);
  if (d == today) return 'Bugun';
  if (d == tomorrow) return 'Ertaga';
  if (d == afterTomorrow) return 'Indinga';
  return DateFormat('yyyy-MM-dd').format(base);
}

