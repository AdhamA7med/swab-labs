
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Heart, Award } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'عنوان المعمل',
      details: [
        'مدينة نصر - القاهرة'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'مواعيد العمل',
      details: [
        'السبت - الخميس: 7:00 ص - 11:00 م',
        'الجمعة: 2:00 م - 11:00 م',
        'خدمة عملاء 24/7'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const paymentMethods = [
    { name: 'كاش', icon: '💵' },
    { name: 'Visa', icon: '💳' },
    { name: 'MasterCard', icon: '💳' },
    { name: 'Instapay', icon: '📱' },
    { name: 'المحافظ الإلكترونية', icon: '📲' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Heart className="w-8 h-8 text-medical-blue" />
            <span className="text-medical-blue font-semibold">تواصل معنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            نحن هنا{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
              لخدمتك
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تواصل معنا في أي وقت وسنكون سعداء لمساعدتك والإجابة على جميع استفساراتك
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 medical-card-hover"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Numbers & Payment */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Numbers */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center mb-4">
                📞
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                أرقام التواصل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">للحجز والاستفسار:</h4>
                <p className="text-2xl font-bold text-medical-blue mb-1">01097933148</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">واتساب فقط:</h4>
                <a 
                  href="https://wa.me/+201097933148" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-medical-green mb-1 hover:text-medical-teal transition-colors cursor-pointer"
                >
                  01097933148
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                💳
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                طرق الدفع المتاحة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 p-3 rounded-lg text-center hover:from-blue-50 hover:to-green-50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-1">{method.icon}</div>
                    <p className="text-sm font-medium text-gray-700">{method.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-medical-blue via-medical-green to-medical-teal p-8 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">لماذا تختار معامل اسواب؟</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Award className="w-8 h-8 mx-auto opacity-90" />
                <h4 className="font-semibold">أعلى دقة في النتائج</h4>
                <p className="text-sm opacity-80">99.9% دقة مضمونة</p>
              </div>
              <div className="space-y-2">
                <Clock className="w-8 h-8 mx-auto opacity-90" />
                <h4 className="font-semibold">استلام سريع</h4>
                <p className="text-sm opacity-80">النتائج في نفس اليوم</p>
              </div>
              <div className="space-y-2">
                <Heart className="w-8 h-8 mx-auto opacity-90" />
                <h4 className="font-semibold">عناية فائقة</h4>
                <p className="text-sm opacity-80">اهتمام شخصي بكل مريض</p>
              </div>
              <div className="space-y-2">
                <MapPin className="w-8 h-8 mx-auto opacity-90" />
                <h4 className="font-semibold">موقع مميز</h4>
                <p className="text-sm opacity-80">في قلب مدينة نصر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
