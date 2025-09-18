import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { mockData } from '../mock';
import { useLanguage } from '../components/Header';

export const ContactPage = () => {
  const { t, currentLang } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: currentLang === 'ru' ? 'Телефон' : currentLang === 'en' ? 'Phone' : 'Telefon',
      value: mockData.company.phone,
      description: currentLang === 'ru' ? 'Звоните в рабочее время' : currentLang === 'en' ? 'Call during business hours' : 'Ish vaqtida qo\'ng\'iroq qiling'
    },
    {
      icon: Mail,
      title: 'Email',
      value: mockData.company.email,
      description: currentLang === 'ru' ? 'Отправьте нам сообщение' : currentLang === 'en' ? 'Send us a message' : 'Bizga xabar yuboring'
    },
    {
      icon: MapPin,
      title: currentLang === 'ru' ? 'Адрес' : currentLang === 'en' ? 'Address' : 'Manzil',
      value: currentLang === 'ru' ? 'Весь Узбекистан' : currentLang === 'en' ? 'All Uzbekistan' : 'Butun O\'zbekiston',
      description: currentLang === 'ru' ? 'Обслуживаем все регионы' : currentLang === 'en' ? 'We serve all regions' : 'Barcha hududlarni qamrab olamiz'
    },
    {
      icon: Clock,
      title: currentLang === 'ru' ? 'Рабочее время' : currentLang === 'en' ? 'Working Hours' : 'Ish vaqti',
      value: '24/7',
      description: currentLang === 'ru' ? 'Круглосуточное обслуживание' : currentLang === 'en' ? 'Round-the-clock service' : 'Kun-tunu xizmat'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {t('nav.contact')}
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {currentLang === 'ru' ? 'Свяжитесь с нами' : currentLang === 'en' ? 'Contact Us' : 'Biz bilan bog\'laning'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'ru' ? 'Готовы начать работу с UzPropan? Свяжитесь с нами для получения бесплатного предложения или по любым вопросам.' :
             currentLang === 'en' ? 'Ready to get started with UzPropan? Contact us for a free quote or any questions you may have.' :
             'UzPropan bilan ishlashga tayyormisiz? Bepul taklifnoma olish yoki har qanday savol uchun biz bilan bog\'laning.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {currentLang === 'ru' ? 'Контактная информация' : currentLang === 'en' ? 'Contact Information' : 'Aloqa ma\'lumotlari'}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-blue-600 font-medium mb-1">
                              {info.value}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('footer.socialTitle')}
                  </h3>
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Facebook className="h-6 w-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Instagram className="h-6 w-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Send className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};