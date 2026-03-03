import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';

export default function TopNavbar() {
    const { t, i18n } = useTranslation();

    // Theme state
    const [isDark, setIsDark] = useState(true);

    // Toggle theme
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#131122]/70 backdrop-blur-[12px] border-b border-border-dark transition-colors duration-300 w-full overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-3">
                    <div className="size-8 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">AILOGY</span>
                </NavLink>

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    <NavLink to="/" end className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}>
                        {t('Executive Summary')}
                    </NavLink>
                    <NavLink to="/platform" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}>
                        {t('Market & Platform')}
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}>
                        {t('Products & Sự Tăng Trưởng')}
                    </NavLink>
                    <NavLink to="/financials" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}>
                        {t('Strategy & Financials')}
                    </NavLink>
                    <NavLink to="/team" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}>
                        {t('Team & Ask')}
                    </NavLink>
                </nav>

                <div className="flex items-center gap-3 xl:gap-4">
                    <div className="flex bg-slate-200/50 dark:bg-slate-800/50 rounded-full p-1 border border-slate-300 dark:border-slate-700 backdrop-blur-md">
                        <button
                            onClick={() => i18n.changeLanguage('en')}
                            className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${i18n.language === 'en'
                                ? 'bg-white dark:bg-surface-dark text-primary shadow-sm'
                                : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                                }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => i18n.changeLanguage('vn')}
                            className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${i18n.language === 'vn'
                                ? 'bg-white dark:bg-surface-dark text-primary shadow-sm'
                                : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                                }`}
                        >
                            VN
                        </button>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-full h-9 w-9 xl:w-auto xl:px-4 bg-slate-200/50 hover:bg-slate-300/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-800 dark:text-white text-xs lg:text-sm font-bold shadow-sm border border-slate-300 dark:border-slate-700 backdrop-blur-sm transition-all"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        <span className="hidden xl:inline">{isDark ? 'Light' : 'Dark'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
