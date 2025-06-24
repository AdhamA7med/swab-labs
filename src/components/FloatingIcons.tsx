
import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingIcons = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contacts = [
    {
      type: 'phone',
      number: '01097933148',
      icon: Phone,
      bgColor: 'bg-medical-blue hover:bg-medical-navy',
      label: 'اتصل بنا'
    },
    {
      type: 'whatsapp',
      number: '+201097933148',
      icon: MessageCircle,
      bgColor: 'bg-medical-green hover:bg-medical-teal',
      label: 'واتساب'
    }
  ];

  const handleContact = (type: string, number: string) => {
    if (type === 'phone') {
      window.location.href = `tel:${number}`;
    } else if (type === 'whatsapp') {
      window.open(`https://wa.me/${number}`, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 bottom-4 z-50 space-y-3">
      {contacts.map((contact, index) => (
        <button
          key={index}
          onClick={() => handleContact(contact.type, contact.number)}
          className={`
            group relative w-14 h-14 ${contact.bgColor} rounded-full shadow-lg 
            flex items-center justify-center text-white
            transition-all duration-300 transform hover:scale-110
            hover:shadow-xl
          `}
          title={contact.label}
        >
          <contact.icon className="w-6 h-6" />
          
          {/* Tooltip */}
          <div className="
            absolute right-16 top-1/2 transform -translate-y-1/2
            bg-medical-gray-900 text-white text-sm px-3 py-2 rounded-lg
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            whitespace-nowrap pointer-events-none
          ">
            {contact.label}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-medical-gray-900"></div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default FloatingIcons;
