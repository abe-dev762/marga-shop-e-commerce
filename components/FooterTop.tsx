import React from 'react';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';


interface ContactDataProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const contactData: ContactDataProps[] = [
    {
    title: "Visit Us",
    subtitle: "East Java, Indonesia",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+62 81235443524",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 09:00 AM - 09:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "Mshop@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];


const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b'>
        {contactData?.map((item, index) => (
            <div
            key={index}
            className='flex items-center gap-3 group hover:bg-gray-100 p-4 transition-colors hoverEffect'>
                {item?.icon}
                <div>
                    <h3 className='font-semibold text-gray-800 group-hover:text-black hoverEffect'>
                        {item?.title}
                    </h3>
                    <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-800 hoverEffect'>
                        {item?.subtitle}
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FooterTop;