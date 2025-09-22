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
            Image.asset('assets/images/logo.png', height: 48),
            const SizedBox(width: 12),
            const Text("Poytug' GTK", style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600)),
          ],
        ),
        const SizedBox(height: 24),
        Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text('Yangiliklar va aksiyalar', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600)),
                SizedBox(height: 8),
                Text('Bu bo\'limga keyinroq o\'zingiz yangilik va aksiyalarni kiritishingiz mumkin.'),
              ],
            ),
          ),
        ),
        const SizedBox(height: 16),
        Card(
          child: ListTile(
            title: const Text('Oxirgi buyurtmani takrorlash'),
            subtitle: const Text('So\'nggi tasdiqlangan buyurtmangizni tezda qayta buyurtma qiling'),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {},
          ),
        ),
        const SizedBox(height: 16),
        Card(
          child: ListTile(
            title: const Text('Yetkazishni rejalashtirish'),
            subtitle: const Text('Sizga qulay kunni belgilang'),
            trailing: const Icon(Icons.event_available),
            onTap: () {},
          ),
        ),
      ],
    );
  }
}

