import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export const Footer = () => {
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');
  const tResources = useTranslations('resources');
  const tMore = useTranslations('more');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-[#0d3250] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Open Mortgage</h3>
            <p className="text-gray-300 text-sm mb-4">
              {tFooter('tagline')}
            </p>
            <div className="text-sm text-gray-300 space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    {tFooter('sydneyLabel')}
                  </p>
                  <p>1211/87-89 Liverpool Street, Sydney NSW 2000</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    {tFooter('brisbaneLabel')}
                  </p>
                  <p>Suite 1.8, 7 Clunies Ross Court, Eight Mile Plains QLD 4113</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    {tFooter('hobartLabel')}
                  </p>
                  <p>Level 1/22 Liverpool Street, Hobart TAS 7000</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    {tFooter('emailLabel')}
                  </p>
                  <a
                    href="mailto:info@omlending.com.au"
                    className="text-gray-300 hover:text-white break-all"
                  >
                    info@omlending.com.au
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    {tFooter('hoursLabel')}
                  </p>
                  <p>{tFooter('hoursValue')}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tNav('services')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/our-process`}
                  className="text-gray-300 hover:text-white"
                >
                  {tServices('ourService')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/loan-products`}
                  className="text-gray-300 hover:text-white"
                >
                  {tMore('loanProducts')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/home-loan`}
                  className="text-gray-300 hover:text-white"
                >
                  {tServices('homeLoan')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/car-loan`}
                  className="text-gray-300 hover:text-white"
                >
                  {tServices('carLoan')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/commercial-loan`}
                  className="text-gray-300 hover:text-white"
                >
                  {tServices('commercialLoan')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tNav('resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/resources/repayment-calculator`}
                  className="text-gray-300 hover:text-white"
                >
                  {tResources('repaymentCalculator')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resources/stamp-duty-calculator`}
                  className="text-gray-300 hover:text-white"
                >
                  {tResources('stampDutyCalculator')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resources/free-valuation`}
                  className="text-gray-300 hover:text-white"
                >
                  {tResources('freeValuation')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tNav('more')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/about-us`}
                  className="text-gray-300 hover:text-white"
                >
                  {tMore('aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact-us`}
                  className="text-gray-300 hover:text-white"
                >
                  {tMore('contactUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-gray-300 hover:text-white"
                >
                  {tMore('faq')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-center lg:items-start">
            <h4 className="font-semibold mb-4">{tFooter('wechatLabel')}</h4>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/wechat.webp"
                alt={tFooter('wechatAlt')}
                width={120}
                height={120}
                className="rounded-md border border-gray-600 bg-white p-1"
              />
              <p className="text-sm text-gray-300 text-center lg:text-left">
                {tFooter('wechatDescription')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Open Mortgage. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

