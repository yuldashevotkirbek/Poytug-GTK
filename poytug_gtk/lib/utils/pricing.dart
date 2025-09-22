class Pricing {
  // LPG kg narxi: 6000 so'm
  static const double pricePerKg = 6000;

  static String priceText(double amount) {
    final value = amount.round();
    final s = value.toString();
    final buf = StringBuffer();
    for (int i = 0; i < s.length; i++) {
      final idx = s.length - i - 1;
      buf.write(s[i]);
      if (idx % 3 == 0 && i != s.length - 1) buf.write(' ');
    }
    return '${buf.toString()} so\'m';
  }
}

