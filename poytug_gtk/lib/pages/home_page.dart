import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Row(
          children: [
            Image.asset('assets/images/logo.png', height: 56),
            const SizedBox(width: 12),
            const Expanded(
              child: Text(
                "Poytug' GTK — Suyultirilgan uglevodorod gazi (Propan) yetkazib berish",
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
              ),
            ),
          ],
        ),
        const SizedBox(height: 16),
        Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text('Yangiliklar va aksiyalar', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
                SizedBox(height: 8),
                Text('Bu bo\'limga o\'zingiz yangilik va aksiyalarni kiritasiz. Men test ma\'lumot qo\'ymadim.'),
              ],
            ),
          ),
        ),
        const SizedBox(height: 16),
        Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text('Yetkazishni rejalashtirish', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
                SizedBox(height: 8),
                Text('Mijoz buyurtma berishda o\'zi uchun qulay kunni tanlashi mumkin.'),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

