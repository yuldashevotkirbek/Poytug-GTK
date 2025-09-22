import 'package:flutter/material.dart';
import '../services/user_prefs.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  @override
  Widget build(BuildContext context) {
    final name = UserPrefs.userName ?? 'Foydalanuvchi';
    final phone = UserPrefs.userPhone ?? '';
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        const CircleAvatar(radius: 36, child: Icon(Icons.person, size: 36)),
        const SizedBox(height: 12),
        Text(name, textAlign: TextAlign.center, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
        if (phone.isNotEmpty) ...[
          const SizedBox(height: 4),
          Text(phone, textAlign: TextAlign.center),
        ],
        const SizedBox(height: 24),
        const ListTile(
          leading: Icon(Icons.info_outline),
          title: Text('Ilova haqida'),
          subtitle: Text("Poytug' GTK — LPG yetkazib berish platformasi"),
        ),
      ],
    );
  }
}

