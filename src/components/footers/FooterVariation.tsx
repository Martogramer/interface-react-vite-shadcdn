import React from 'react';

interface FooterProps {
  phone: string;
  services: string[];
  companyInfo: string[];
  socialLinks: { href: string; label: string; icon: React.ReactNode }[];
}

const Footer: React.FC<FooterProps> = ({ phone, services, companyInfo, socialLinks }) => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">Call us</span>
              <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                {phone}
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                    <span className="sr-only">{link.label}</span>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                {companyInfo.map((info) => (
                  <li key={info}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{info}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">Cookies</a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
