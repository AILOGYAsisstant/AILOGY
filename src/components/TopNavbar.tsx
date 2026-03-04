import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function TopNavbar() {
    const { t, i18n } = useTranslation();

    // Theme state
    const [isDark, setIsDark] = useState(false);

    // Mobile menu state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <header className="fixed top-0 z-50 bg-white/70 dark:bg-[#131122]/70 backdrop-blur-[12px] border-b border-border-dark transition-colors duration-300 w-full">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#executive-summary" className="flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}assets/images/logoailogy.png`} alt="AILOGY Logo" className="h-[56px] w-[56px] object-contain" />
                    <img src={`${import.meta.env.BASE_URL}assets/images/banner.png`} alt="AILOGY" className="h-[46px] object-contain dark:invert translate-y-0.5" />
                </a>

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    <a href="#company-overview" className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-800 dark:hover:text-white text-center leading-[1.3]">
                        {i18n.language === 'vn' ? <>Tổng quan</> : <>Overview</>}
                    </a>
                    <a href="#team" className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-800 dark:hover:text-white text-center leading-[1.3]">
                        {i18n.language === 'vn' ? <>Điều Hành</> : <>Executive</>}
                    </a>
                    <a href="#market-platform" className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-800 dark:hover:text-white text-center leading-[1.3]">
                        {i18n.language === 'vn' ? <>Thị Trường<br />& Nền Tảng</> : <>Market<br />& Platform</>}
                    </a>
                    <a href="#company" className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-800 dark:hover:text-white text-center leading-[1.3]">
                        {i18n.language === 'vn' ? <>Sản Phẩm & <br />Sự Tăng Trưởng</> : <>Products & Traction </>}
                    </a>
                    <a href="#financials-ask" className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-800 dark:hover:text-white text-center leading-[1.3]">
                        {i18n.language === 'vn' ? <>Tài Chính<br />& Đầu Tư</> : <>Financials<br />& Ask</>}
                    </a>
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

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden flex items-center justify-center h-9 w-9 rounded-full bg-slate-200/50 hover:bg-slate-300/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-800 dark:text-white"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-[#131122] border-b border-border-dark px-6 py-4 flex flex-col gap-4 shadow-lg">
                    <a href="#company-overview" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary">
                        {t('Summary')}
                    </a>
                    <a href="#team" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary">
                        {t('Executive')}
                    </a>
                    <a href="#market-platform" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary">
                        {t('Market & Platform')}
                    </a>
                    <a href="#company" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary">
                        {t('Company')}
                    </a>
                    <a href="#financials-ask" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary">
                        {t('Financials & Ask')}
                    </a>
                </div>
            )}
        </header>
    );
}
