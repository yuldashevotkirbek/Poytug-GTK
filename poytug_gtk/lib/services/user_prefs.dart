import 'package:shared_preferences/shared_preferences.dart';

class UserPrefs {
  static SharedPreferences? _prefs;

  static Future<void> ensureReady() async {
    _prefs ??= await SharedPreferences.getInstance();
  }

  static bool isLoggedIn() => _prefs?.getString('user_name') != null;

  static Future<void> saveUser({required String name, required String phone}) async {
    await _prefs?.setString('user_name', name);
    await _prefs?.setString('user_phone', phone);
  }

  static String? get userName => _prefs?.getString('user_name');
  static String? get userPhone => _prefs?.getString('user_phone');
}

