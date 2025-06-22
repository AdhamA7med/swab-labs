
import { Heart, MapPin, Award, Shield } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'عن المعمل', href: '#about' },
    { name: 'الباقات', href: '#packages' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const services = [
    'تحاليل الدم الشاملة',
    'فحوصات الغدة الدرقية',
    'فحوصات السكري',
    'وظائف الكلى والكبد',
    'الفيتامينات والمعادن',
    'فحوصات القلب'
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-green rounded-lg flex items-center justify-center animate-pulse-glow">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-medical-red rounded-full flex items-center justify-center">
                  <Shield className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">معامل اسواب</h3>
                <p className="text-blue-300">للتحاليل الطبية</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              معامل اسواب للتحاليل الطبية - رائدون في تقديم أعلى معايير الدقة والجودة في التحاليل الطبية. 
              نلتزم بصحتكم وراحتكم.
            </p>
            <div className="flex items-center space-x-reverse space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-300">معتمد من وزارة الصحة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-bold text-white">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-xl font-bold text-white">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-reverse space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>58 شارع محيي الدين عبد الحميد</p>
                  <p>أمام معهد الألسن - آخر مكرم عبيد</p>
                  <p>مدينة نصر - القاهرة</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-blue-400 font-semibold">📞 للحجز: 01080865555</p>
                <p className="text-green-400 font-semibold">📱 واتساب: 01080184444</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Icons Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center items-center space-x-reverse space-x-8 mb-8">
            {[
              { icon: Heart, color: 'text-red-400' },
              { icon: Shield, color: 'text-blue-400' },
              { icon: Award, color: 'text-yellow-400' },
              { icon: MapPin, color: 'text-green-400' }
            ].map((item, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 animate-float`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 معامل اسواب للتحاليل الطبية. جميع الحقوق محفوظة.
            </p>
            <div className="text-gray-400 text-sm">
              تم تطوير الموقع بواسطة{' '}
              <a
                href="https://wa.me/01153903786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold"
              >
                ادهم احمد
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
