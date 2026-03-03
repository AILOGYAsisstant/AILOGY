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
                    <span className="text-xs font-bold tracking-widest uppercase">{t('Products & Sự Tăng Trưởng')}</span>
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
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-border-dark">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Orbyte Demo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 right-4 z-20 bg-background-light dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-border-dark text-xs font-bold text-primary flex items-center gap-1 shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Live
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg border-4 border-white dark:border-surface-dark">
                                <span className="material-symbols-outlined">finance</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Orbyte')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Our flagship financial risk assessment model. Utilized by leading domestic financial institutions for instant, high-precision credit scoring and anomaly detection.')}
                            </p>
                            <div className="inline-flex items-center gap-2 max-w-max px-3 py-1.5 rounded-lg bg-surface-light dark:bg-background-dark border border-border-dark text-xs font-bold text-slate-700 dark:text-slate-300">
                                {t('Finance Sector')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Product 2: Specialized LLMs */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-border-dark">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="LLM Interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-accent text-slate-900 flex items-center justify-center shadow-lg border-4 border-white dark:border-surface-dark">
                                <span className="material-symbols-outlined">g_translate</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Sovereign LLMs')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Proprietary Large Language Models fine-tuned on Vietnamese syntax and legal frameworks, highly effective at detecting toxic content and filtering systemic risks.')}
                            </p>
                            <div className="inline-flex items-center gap-2 max-w-max px-3 py-1.5 rounded-lg bg-surface-light dark:bg-background-dark border border-border-dark text-xs font-bold text-slate-700 dark:text-slate-300">
                                {t('Core NLP Tech')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Product 3: Camera Edu */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-accent-success/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-success/10 hover:-translate-y-2">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-border-dark">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-success/20 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80" alt="Camera Edu" className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-accent-success text-white flex items-center justify-center shadow-lg border-4 border-white dark:border-surface-dark">
                                <span className="material-symbols-outlined">videocam</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Camera Edu')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('A computer vision school safety monitoring system tracking thousands of real-time feeds to ensure campus compliance and security entirely autonomously.')}
                            </p>
                            <div className="inline-flex items-center gap-2 max-w-max px-3 py-1.5 rounded-lg bg-surface-light dark:bg-background-dark border border-border-dark text-xs font-bold text-slate-700 dark:text-slate-300">
                                {t('Computer Vision')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Product 4: Gov AI Portal */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 lg:mt-8">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-border-dark">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1507668581729-281b376c7ee6?auto=format&fit=crop&w=800&q=80" alt="Gov Portal Dashboard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center shadow-lg border-4 border-white dark:border-surface-dark">
                                <span className="material-symbols-outlined">account_balance</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Gov AI Portal')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Advanced proposal and deployment for the Government Office (VP CP). Creating a centralized, air-gapped portal for secure interstate data interrogation.')}
                            </p>
                            <div className="inline-flex items-center gap-2 max-w-max px-3 py-1.5 rounded-lg bg-surface-light dark:bg-background-dark border border-border-dark text-xs font-bold text-slate-700 dark:text-slate-300">
                                {t('Federal Deploy')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Product 5: EVN Standardizer */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 lg:mt-16">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-border-dark">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80" alt="Grid Data" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg border-4 border-white dark:border-surface-dark">
                                <span className="material-symbols-outlined">bolt</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('EVN Data Standardizer')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Intelligent parsing pipeline deployed for EVN, actively normalizing massive historical energy grid records into structured actionable unified vectors.')}
                            </p>
                            <div className="inline-flex items-center gap-2 max-w-max px-3 py-1.5 rounded-lg bg-surface-light dark:bg-background-dark border border-border-dark text-xs font-bold text-slate-700 dark:text-slate-300">
                                {t('Utility Sector')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Product 6: Enterprise Proposals */}
                    <motion.div variants={itemVariants} className="group rounded-3xl border border-border-dark bg-white dark:bg-surface-dark overflow-hidden flex flex-col hover:border-primary-light/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 lg:mt-24">
                        <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-border-dark">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Enterprise Corporate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                        </div>
                        <div className="p-8 flex flex-col flex-1 relative">
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary-light text-white flex items-center justify-center shadow-lg border-4 border-white dark:border-surface-dark">
                                <span className="material-symbols-outlined">domain</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 mt-4">{t('Enterprise Custom Models')}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                                {t('Customized implementations and proposals for mega-corporations (e.g., Novaland) focusing on real-estate trend prediction and internal knowledge bases.')}
                            </p>
                            <div className="inline-flex items-center gap-2 max-w-max px-3 py-1.5 rounded-lg bg-surface-light dark:bg-background-dark border border-border-dark text-xs font-bold text-slate-700 dark:text-slate-300">
                                {t('Mega-Corporations')}
                            </div>
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
