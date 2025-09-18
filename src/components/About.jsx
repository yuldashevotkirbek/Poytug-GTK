import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle, Users, Award, Shield, Truck } from 'lucide-react';
import { useLanguage } from './Header';

export const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {t('about.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              {t('about.missionTitle')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.story1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.story2')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{reason}</span>
                </div>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              {t('nav.services')}
            </Button>
          </div>

          {/* Image placeholder with achievements */}
          <div className="space-y-6">
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

        {/* Values Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.valuesTitle')}
            </h3>
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
                <h4 className="text-xl font-bold text-gray-900 mb-4">{t('about.safetyTitle')}</h4>
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
                <h4 className="text-xl font-bold text-gray-900 mb-4">{t('about.customerTitle')}</h4>
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
                <h4 className="text-xl font-bold text-gray-900 mb-4">{t('about.qualityTitle')}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.qualityDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};