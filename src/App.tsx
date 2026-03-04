import TopNavbar from './components/TopNavbar';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen6 from './pages/Screen6';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased transition-colors duration-300">
      <TopNavbar />
      <main className="flex-1 w-full relative pt-20">
        <section id="executive-summary">
          <Screen1 />
        </section>

        <section id="market-platform">
          <Screen2 />
        </section>

        <section id="company">
          <Screen6 />
        </section>

        <section id="financials-ask">
          <Screen3 />
        </section>
      </main>

      {/* Footer CTA */}
      <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-dark py-8 mt-auto w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
            <p>© 2026 AILOGY Inc. {t('All rights reserved.')}</p>
            <div className="flex gap-4 uppercase tracking-widest">
              <span>{t('Strictly Confidential')}</span>
              <span className="hidden sm:inline">•</span>
              <span>{t('Investor Relations')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
