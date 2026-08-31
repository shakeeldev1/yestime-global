import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '923068509086',
  message,
  className = '',
}) => {
  const { t } = useTranslation('common');
  const resolvedMessage = message ?? t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(resolvedMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.ariaLabel')}
      className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/60 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${className}`}
    >
      <span className="absolute inset-0 -z-10 h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30 duration-1000 group-hover:animate-none" />
      
      {/* Explicit white color and SVG fill applied */}
      <BsWhatsapp className="h-7 w-7 text-white fill-white transition-transform duration-300 group-hover:rotate-6" />
    </a>
  );
};

export default WhatsAppButton;