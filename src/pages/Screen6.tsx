import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Screen6() {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-20 min-h-screen overflow-hidden">

            {/* Header Section */}
            <motion.header
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 mt-8 relative"
            >
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="relative z-10 flex items-center gap-2 text-primary mb-2">
                    <span className="material-symbols-outlined text-sm">rocket</span>
                    <span className="text-xs font-bold tracking-widest uppercase">{t('Products & Traction')}</span>
                </div>
                <h1 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                    {t('Real-World Deployment')}
                </h1>
                <p className="relative z-10 text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
                    {t('We do not just build concepts. AILOGY is actively deployed in the most rigorous government agencies and top-tier enterprises in Vietnam, solving high-stake operational challenges.')}
                </p>
            </motion.header>

            {/* 7. Products & Real-World Implementations (With Demos) */}
            <section className="flex flex-col gap-10 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4"
                >
                    {t('Core Products & Case Studies')}
                    <span className="h-px bg-border-dark flex-1 ml-4 hidden md:block"></span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                    {/* Product 1: Orbyte */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/thu_vien_so_sp.png`} alt="Orbyte Demo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent z-0 pointer-events-none"></div>
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border-4 border-white dark:border-surface-dark bg-white overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}assets/images/orbyte.jpg`} alt="Orbyte Logo" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Orbyte')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Đọc văn bản và chuyển đổi thành metadata (Thư viện số)')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 2: LLMs */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/llms.png`} alt="LLM Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent/5 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('LLMs')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Nền tảng Mô hình Ngôn ngữ Lớn')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 3: Camera Edu */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-accent-success/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-success/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-success/20 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/dong_do.png`} alt="Camera Edu" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent-success/10 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Camera Edu')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Mô hình giám sát an toàn học đường (Camera Edu)')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 4: Gov AI Portal */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/quoc_hoi.jpg`} alt="Gov Portal Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-red-500/10 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('AI Portal')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('AI Portal (proposal với VP CP)')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 5: Novaland */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-primary-light/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/toshiba.jpg`} alt="Enterprise Corporate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-light/10 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Novaland Project')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Dự án với novaland (xem trong proposal)')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 6: EVN Standardizer */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/evn_sp.png`} alt="Grid Data" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-500/10 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('EVN Standardizer')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Mô hình chuẩn hoá dữ liệu (EVN)')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 7: Finister */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-slate-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/20 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/kiem_toan_sp.png`} alt="Finister Data" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-500/10 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Finister')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Mô hình chấm điểm tài chính (Finister)')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 8: Placeholder */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/rui_ro.png`} alt="Financial Risk Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Mô hình rủi ro')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Mô hình đánh giá rủi ro tài chính')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Product 9: Placeholder */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent z-10 pointer-events-none"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/images/kiem_duyet.png`} alt="Content Moderation Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative pt-10">
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent/5 to-transparent z-0 pointer-events-none"></div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Kiểm duyệt Nội dung')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Mô hình phát hiện nội dung độc hại')}
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </section>

            {/* 8. Trusted Partners */}
            <section className="flex flex-col gap-12 py-16 border-t border-border-dark mt-10 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none"></div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white text-center mb-8 relative z-10"
                >
                    {t('Trusted by the Nation’s Pillars')}
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto relative z-10"
                >
                    {/* Partners Badges with hover states */}
                    {[
                        { icon: 'account_balance', name: 'Văn Phòng Quốc Hội', color: 'text-primary' },
                        { icon: 'request_quote', name: 'Bộ Tài Chính', color: 'text-primary' },
                        { icon: 'health_and_safety', name: 'Bộ Y Tế', color: 'text-primary' },
                        { icon: 'bolt', name: 'EVN', color: 'text-accent' },
                        { icon: 'local_shipping', name: 'VNPOST', color: 'text-accent' },
                        { icon: 'fact_check', name: 'Kiểm toán nhà nước', color: 'text-primary-light' },
                        { icon: 'account_balance_wallet', name: 'Tổng cục thuế', color: 'text-primary-light' },
                        { icon: 'location_city', name: 'NOVALAND', color: 'text-slate-500' },
                        { icon: 'school', name: 'ĐH Công Nghiệp HN', color: 'text-slate-500' },
                        { icon: 'school', name: 'ĐH Công Thương HCM', color: 'text-slate-500' },
                        { icon: 'school', name: 'Học Viện Tài Chính', color: 'text-slate-500' },
                        { icon: 'business', name: 'Công ty CP Nam Việt', color: 'text-slate-500' }
                    ].map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="px-6 py-4 rounded-2xl border border-border-dark bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-lg shadow-black/5 flex items-center gap-3 cursor-default hover:border-primary/50 transition-colors"
                        >
                            <span className={`material-symbols-outlined ${partner.color}`}>{partner.icon}</span>
                            <span className="font-bold text-slate-900 dark:text-white">{t(partner.name)}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </div>
    );
}
