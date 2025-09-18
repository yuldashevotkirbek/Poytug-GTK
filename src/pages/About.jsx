import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { CheckCircle, Users, Award, Shield, Truck } from 'lucide-react';
import { useLanguage } from '../components/Header';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Users,
      title: '10,000+',
      subtitle: t('about.customerTitle') || 'Mamnun mijozlar',
      description: 'O\'zbekiston bo\'ylab minglab oila va biznes mijozlarimiz'
    },
    {
      icon: Award,
      title: '15+',
      subtitle: 'Yillik tajriba',
      description: 'Propan sohasida uzoq yillik professional tajriba'
    },
    {
      icon: Shield,
      title: '100%',
      subtitle: t('about.safetyTitle') || 'Xavfsizlik kafolati',
      description: 'Barcha xavfsizlik me\'yorlari va standartlariga rioya'
    },
    {
      icon: Truck,
      title: '50+',
      subtitle: 'Xizmat hududlari',
      description: 'O\'zbekistonning barcha viloyat va shaharlarida'
    }
  ];

  const whyChooseUs = [
    'Ishonchli va vaqtinda yetkazib berish',
    'Professional va tajribali jamoa',
    'Raqobatbardosh narxlar',
    '24/7 mijozlarni qo\'llab-quvvatlash',
    'Zamonaviy uskunalar va texnologiyalar',
    'Ekologik toza va xavfsiz mahsulotlar'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {t('about.badge')}
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {t('about.missionTitle')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.story1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.story2')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
              <Link to="/services">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  {t('nav.services')}
                </Button>
              </Link>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-sm font-semibold text-blue-600 mb-2">
                        {achievement.subtitle}
                      </div>
                      <p className="text-xs text-gray-600">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.valuesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.valuesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.safetyTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.safetyDescription')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.customerTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.customerDescription')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.qualityTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.qualityDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};