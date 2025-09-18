import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Truck, Shield, Clock, Phone } from 'lucide-react';
import { mockAPI } from '../mock';
import { toast } from 'sonner';
import { useLanguage } from './Header';

export const Hero = () => {
  const { t } = useLanguage();
  const [zipCode, setZipCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationSearch = async () => {
    if (!zipCode.trim()) {
      toast.error('Iltimos, mintaqa kodini kiriting');
      return;
    }

    setIsLoading(true);
    try {
      const result = await mockAPI.findLocation(zipCode);
      if (result.success) {
        toast.success(`${result.region} hududida xizmat ko'rsatamiz! Telefon: ${result.phone}`);
      }
    } catch (error) {
      toast.error('Xatolik yuz berdi, qayta urinib ko\'ring');
    } finally {
      setIsLoading(false);
    }
  };

  const keyFeatures = [
    {
      icon: Truck,
      title: t('hero.feature1Title'),
      description: t('hero.feature1Desc')
    },
    {
      icon: Shield,
      title: t('hero.feature2Title'),
      description: t('hero.feature2Desc')
    },
    {
      icon: Clock,
      title: t('hero.feature3Title'),
      description: t('hero.feature3Desc')
    }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/20 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
                <span className="text-blue-600"> {t('hero.titleBlue')}</span> 
                <span className="text-orange-500"> {t('hero.titleOrange')}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            

            {/* Quick Location Search */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('hero.locationTitle')}
                </h3>
                <div className="flex gap-3">
                  <Input
                    placeholder={t('hero.locationPlaceholder')}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleLocationSearch()}
                  />
                  <Button 
                    onClick={handleLocationSearch}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 px-6"
                  >
                    {isLoading ? t('hero.locationButtonLoading') : t('hero.locationButton')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Key Features */}
          <div className="space-y-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            
          </div>
        </div>
      </div>
    </section>
  );
};