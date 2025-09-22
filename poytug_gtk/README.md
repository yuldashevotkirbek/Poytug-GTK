# Poytug' GTK — LPG (Propan) yetkazib berish ilovasi

Bu loyiha Flutter bilan yaratilgan cross‑platform ilova: Web, Android, iOS, Desktop.

## Ishga tushirish

- Flutter 3.24+ o'rnatilgan bo'lishi kerak.
- Paketlarni yuklash:

```bash
flutter pub get
```

- Web uchun build:

```bash
flutter build web --release
```

- Android/iOS/Desktop uchun mos ravishda `flutter run` yoki `flutter build` ishlating.

## Tuzilma

- `lib/pages/` — sahifalar (Bosh sahifa, Mahsulotlar, Buyurtmalar, Profil, Kirish)
- `lib/models/` — `Product`, `OrderModel`
- `lib/services/` — `OrdersService` (mahalliy saqlash), `UserPrefs`
- `lib/utils/pricing.dart` — narx hisob-kitobi (1 kg = 6000 so'm)

## Yangiliklar va aksiyalarni kiritish

Bosh sahifada test ma'lumot yo'q. Siz o'zingiz kiritasiz. Eng sodda yo'l — quyidagi joyni tahrirlash:

- Fayl: `lib/pages/home_page.dart`
- Kartadagi matn o'rniga o'zingizning yangilik va aksiyalar ro'yxatini qo'ying. Masalan, `Column` ichiga `ListTile`lar yoki `Card`lar qo'shish mumkin.

Agar keyinroq CMS/JSON orqali yuklashni xohlasangiz, alohida API xizmatini qo'shish oson: `FutureBuilder` bilan HTTP'dan ma'lumot olib, shu yerda ko'rsating.

## Mahsulotlar va narxlar

- LPG kg narxi: `6000 so'm` (`lib/utils/pricing.dart` ichida `pricePerKg`).
- `lib/pages/products_page.dart` ichida balon og'irliklari asosida narx avtomatik hisoblanadi.

## Buyurtma jarayoni

- Mahsulot tafsilotida `Buyurtma berish` tugmasi bor.
- Buyurtma berilgach, `Buyurtmalar` sahifasida ko'rinadi.
- Sana faqat kun ko'rinishida saqlanadi va ko'rsatiladi (soat emas).
- Haydovchi ma'lumotlari ko'rsatiladi; yetib kelish sanasi `kuni` tarzida yoziladi.
- Ma'lumotlar qurilmada lokalda (`shared_preferences`) saqlanadi.

## Brending

- Logoni `assets/images/logo.png` fayliga joylang. Hozircha placeholder turibdi.
- `pubspec.yaml` allaqachon assetni ro'yxatdan o'tkazgan.

## Til

- Interfeys asosiy ravishda o'zbekcha (lotin).
- Keyinchalik `intl` bilan to'liq lokalizatsiyani kengaytirish mumkin.

## Eslatma

- "Shoshilinch gaz buyurtmasi" va "taxminiy yetkazish vaqti" bloklari olib tashlangan. "Yetkazishni rejalashtirish" qoldirilgan.
