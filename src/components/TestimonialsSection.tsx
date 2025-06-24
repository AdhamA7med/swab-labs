
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      rating: 5,
      comment: 'معمل ممتاز جداً، النتائج دقيقة والخدمة سريعة. الفريق الطبي محترف ومتعاون.',
      service: 'فحص شامل'
    },
    {
      name: 'فاطمة علي',
      rating: 5,
      comment: 'أفضل معمل تحاليل جربته، الأجهزة حديثة والنظافة ممتازة. أنصح الجميع بالتعامل معهم.',
      service: 'تحاليل الغدة الدرقية'
    },
    {
      name: 'محمود حسن',
      rating: 5,
      comment: 'خدمة رائعة واستقبال ممتاز. النتائج جاءت في الوقت المحدد وبدقة عالية.',
      service: 'صورة دم كاملة'
    },
    {
      name: 'نورا سعيد',
      rating: 5,
      comment: 'المعمل نظيف جداً والموظفين مهذبين. سعر التحاليل مناسب والجودة عالية.',
      service: 'وظائف الكبد والكلى'
    },
    {
      name: 'خالد أحمد',
      rating: 5,
      comment: 'تجربة ممتازة من البداية للنهاية. النتائج واضحة ومفصلة مع شرح للقيم.',
      service: 'فحص السكر التراكمي'
    },
    {
      name: 'مريم يوسف',
      rating: 5,
      comment: 'أثق في دقة نتائج معمل القاضي دائماً. خدمة عملاء ممتازة ومتابعة مستمرة.',
      service: 'فيتامينات ومعادن'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-medical-softBlue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Quote className="w-8 h-8 text-medical-blue" />
            <span className="text-medical-blue font-semibold">آراء عملائنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-900 mb-6">
            ماذا يقول{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
              عملاؤنا
            </span>
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            نفخر بثقة عملائنا الكرام وآرائهم الإيجابية حول خدماتنا المتميزة
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 medical-card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-medical-blue/20" />
                    <div className="flex space-x-reverse space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-medical-gray-700 leading-relaxed text-sm">
                    "{testimonial.comment}"
                  </p>

                  {/* Service */}
                  <div className="text-xs text-medical-blue bg-medical-softBlue px-3 py-1 rounded-full inline-block">
                    {testimonial.service}
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-reverse space-x-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-medical-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-medical-gray-500">عميل معمل القاضي</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-medical-blue to-medical-green p-8 rounded-3xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">انضم لعائلة عملائنا الراضين</h3>
            <p className="text-lg mb-6 opacity-90">
              احجز موعدك اليوم واستمتع بخدمة طبية متميزة ونتائج دقيقة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm opacity-80">
                📞 للحجز: 01097933148 | 📱 واتساب: 01097933148
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
