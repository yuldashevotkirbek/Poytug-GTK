import 'package:shared_preferences/shared_preferences.dart';

class StorageService {
  StorageService(this._prefs);
  final SharedPreferences _prefs;

  static const _keyLoggedIn = 'logged_in';
  static const _keyOrders = 'orders_json';

  static Future<StorageService> create() async {
    final prefs = await SharedPreferences.getInstance();
    return StorageService(prefs);
  }

  Future<bool> isLoggedIn() async {
    return _prefs.getBool(_keyLoggedIn) ?? false;
  }

  Future<void> setLoggedIn(bool value) async {
    await _prefs.setBool(_keyLoggedIn, value);
  }

  String? getOrdersJson() {
    return _prefs.getString(_keyOrders);
  }

  Future<void> saveOrdersJson(String json) async {
    await _prefs.setString(_keyOrders, json);
  }
}

