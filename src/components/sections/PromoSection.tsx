import React from 'react';

interface PromoSectionProps {
  imageUrl: string;
  altText: string;
  subtitle: string;
  title: string;
  offerDetails: string;
  link: string;
  linkText: string;
  disclaimer: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({
  imageUrl,
  altText,
  subtitle,
  title,
  offerDetails,
  link,
  linkText,
  disclaimer
}) => {
  return (
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
      <img
        alt={altText}
        src={imageUrl}
        className="h-32 w-full object-cover md:h-full"
      />
      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest">{subtitle}</p>
        <h2 className="mt-6 font-black uppercase">
          <span className="text-4xl font-black sm:text-5xl lg:text-6xl">{title}</span>
          <span className="mt-2 block text-sm">{offerDetails}</span>
        </h2>
        <a
          className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
          href={link}
        >
          {linkText}
        </a>
        <p className="mt-8 text-xs font-medium uppercase text-gray-400">
          {disclaimer}
        </p>
      </div>
    </section>
  );
};

export default PromoSection;
