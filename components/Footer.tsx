import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Open Mortgage</h3>
            <p className="text-gray-300 text-sm mb-4">
              {tFooter('tagline')}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-white">
                  {tFooter('emailLabel')}:
                </span>{' '}
                <a
                  href="mailto:info@omlending.com.au"
                  className="text-gray-300 hover:text-white"
                >
                  info@omlending.com.au
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">
                  {tFooter('sydneyLabel')}:
                </span>{' '}
                1211/87-89 Liverpool Street, Sydney NSW 2000
              </p>
              <p>
                <span className="font-semibold text-white">
                  {tFooter('brisbaneLabel')}:
                </span>{' '}
                Suite 1.8, 7 Clunies Ross Court, Eight Mile Plains QLD 4113
              </p>
              <p>
                <span className="font-semibold text-white">
                  {tFooter('hobartLabel')}:
                </span>{' '}
                Level 1/22 Liverpool Street, Hobart TAS 7000
              </p>
              <p>
                <span className="font-semibold text-white">
                  {tFooter('hoursLabel')}:
                </span>{' '}
                {tFooter('hoursValue')}
              </p>
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

