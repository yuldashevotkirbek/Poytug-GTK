import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';
import { useLanguage } from './Header';

export const Testimonials = () => {
  const { t, currentLang } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {t('testimonials.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {mockData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {currentLang === 'ru' ? stat.labelRu : currentLang === 'en' ? stat.labelEn : stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-500" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{currentLang === 'ru' ? testimonial.textRu : currentLang === 'en' ? testimonial.textEn : testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};