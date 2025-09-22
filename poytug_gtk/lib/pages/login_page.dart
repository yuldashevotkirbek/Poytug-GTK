import 'package:flutter/material.dart';
import '../services/user_prefs.dart';

class LoginPage extends StatefulWidget {
  static const route = '/login';
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _nameController = TextEditingController();
  final _phoneController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Kirish")),
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 480),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Image.asset('assets/images/logo.png', height: 96),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _nameController,
                    decoration: const InputDecoration(labelText: 'Ism familiya'),
                    validator: (v) => (v == null || v.trim().isEmpty) ? 'Ism kiriting' : null,
                  ),
                  const SizedBox(height: 8),
                  TextFormField(
                    controller: _phoneController,
                    decoration: const InputDecoration(labelText: 'Telefon (+998xx...)'),
                    keyboardType: TextInputType.phone,
                    validator: (v) => (v == null || v.trim().length < 9) ? 'Telefon kiriting' : null,
                  ),
                  const SizedBox(height: 16),
                  SizedBox(
                    width: double.infinity,
                    child: FilledButton(
                      onPressed: () async {
                        if (_formKey.currentState?.validate() != true) return;
                        await UserPrefs.ensureReady();
                        await UserPrefs.saveUser(name: _nameController.text.trim(), phone: _phoneController.text.trim());
                        if (!mounted) return;
                        Navigator.of(context).pushReplacementNamed('/');
                      },
                      child: const Text('Kirish'),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

