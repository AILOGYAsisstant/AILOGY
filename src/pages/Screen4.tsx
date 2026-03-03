import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Screen4() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-20 min-h-screen overflow-hidden">

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 mt-8 relative z-10"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-sm">groups</span>
          <span className="text-xs font-bold tracking-widest uppercase">{t('Team & Edge')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {t('Unfair Advantage & Capital Defense')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
          {t('Supported by the Hiveres ecosystem, navigated by industry veterans, and protected by extreme infrastructure lock-in. A strategic moat designed for absolute capital security.')}
        </p>
      </motion.header>

      {/* 19. Team (With Avatars) */}
      <section className="flex flex-col gap-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white"
        >
          {t('Core Leadership & Experts')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Founders */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-primary/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-primary/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <h3 className="text-sm uppercase tracking-widest text-primary font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {t('Core Founders')}
            </h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white relative z-10">
              <div className="flex items-center gap-4 group">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80" alt="Đỗ Tiến Đăng" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Đỗ Tiến Đăng</span>
                  <span className="text-sm font-medium text-slate-500">Founder & CEO</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80" alt="Nguyễn Thanh Bình" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Thanh Bình</span>
                  <span className="text-sm font-medium text-slate-500">Co-founder</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80" alt="Huỳnh Thái Học" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Huỳnh Thái Học</span>
                  <span className="text-sm font-medium text-slate-500">Co-founder & AI Lead</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-accent/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-accent/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <h3 className="text-sm uppercase tracking-widest text-accent font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {t('Leadership & Tech Experts')}
            </h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white relative z-10">
              <div className="flex items-center gap-4 group">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" alt="Nguyễn Phú Bình" className="w-14 h-14 rounded-full object-cover border-2 border-accent/30 group-hover:border-accent transition-colors" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Phú Bình</span>
                  <span className="text-sm font-medium text-slate-500">Strategic Ops</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80" alt="Nguyễn Lan Anh" className="w-14 h-14 rounded-full object-cover border-2 border-accent/30 group-hover:border-accent transition-colors" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Lan Anh</span>
                  <span className="text-sm font-medium text-slate-500">Growth & PnL</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80" alt="Nguyễn Thị Kiều Anh" className="w-14 h-14 rounded-full object-cover border-2 border-accent/30 group-hover:border-accent transition-colors" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Thị Kiều Anh</span>
                  <span className="text-sm font-medium text-slate-500">Technical Expert</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advisors */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-slate-400/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-slate-400/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-400/10 rounded-full blur-2xl"></div>
            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              {t('Strategic Advisors')}
            </h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white relative z-10">
              <div className="flex items-center gap-4 group opacity-80">
                <div className="w-14 h-14 rounded-full border-2 border-slate-400/50 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Đỗ Tiến Đăng</span>
                  <span className="text-sm font-medium text-slate-500">Executive Advisor</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group opacity-80">
                <div className="w-14 h-14 rounded-full border-2 border-slate-400/50 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Phú Bình</span>
                  <span className="text-sm font-medium text-slate-500">Strategic Advisor</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 9 & 10. Competitive Landscape & Advantage */}
      <section className="flex flex-col gap-10 py-10 border-t border-border-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">{t('Competitive Landscape')}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">{t('Positioning against generic cloud APIs, legacy analytics, and open-source wrappers.')}</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Quadrant Matrix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl border border-border-dark bg-white dark:bg-surface-dark p-6 md:p-10 relative overflow-hidden min-h-[500px] flex items-center justify-center shadow-2xl shadow-primary/5"
          >
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-b border-r border-border-dark/30 border-dashed"></div>
              <div className="border-b border-l border-border-dark/30 border-dashed"></div>
              <div className="border-t border-r border-border-dark/30 border-dashed"></div>
              <div className="border-t border-l border-border-dark/30 border-dashed"></div>
            </div>

            {/* Axis Labels */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] md:text-sm font-black text-slate-500 tracking-widest uppercase bg-white dark:bg-surface-dark px-4">{t('High Institutional Trust')}</div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] md:text-sm font-black text-slate-500 tracking-widest uppercase bg-white dark:bg-surface-dark px-4">{t('Low Trust / Compliance')}</div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] md:text-sm font-black text-slate-500 tracking-widest uppercase bg-white dark:bg-surface-dark px-4">{t('Generic Solution')}</div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[10px] md:text-sm font-black text-slate-500 tracking-widest uppercase bg-white dark:bg-surface-dark px-4">{t('High Customization')}</div>

            <div className="relative w-full h-[400px] max-w-2xl">
              {/* AILOGY */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[10%] right-[20%] flex flex-col items-center gap-3 z-20 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md border-2 border-primary flex items-center justify-center shadow-[0_0_40px_rgba(64,48,232,0.5)]">
                  <div className="w-6 h-6 rounded-full bg-primary shadow-lg border-2 border-white"></div>
                </div>
                <span className="text-white font-bold bg-slate-900 px-4 py-1.5 rounded-full shadow-2xl border border-border-dark text-sm tracking-wider">AILOGY</span>
              </motion.div>

              {/* Competitors */}
              <div className="absolute top-[20%] left-[20%] flex flex-col items-center gap-2 opacity-60">
                <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center"></div>
                <span className="text-slate-600 dark:text-slate-500 text-xs font-bold">{t('Legacy Gov Tech')}</span>
              </div>
              <div className="absolute bottom-[25%] right-[25%] flex flex-col items-center gap-2 opacity-60">
                <div className="w-8 h-8 rounded-full bg-surface-border flex items-center justify-center"></div>
                <span className="text-slate-600 dark:text-slate-500 text-xs font-bold">{t('Open Source')}</span>
              </div>
              <div className="absolute bottom-[20%] left-[15%] flex flex-col items-center gap-2 opacity-60">
                <div className="w-12 h-12 rounded-full bg-surface-border flex items-center justify-center"></div>
                <span className="text-slate-600 dark:text-slate-500 text-xs font-bold">{t('Public Cloud APIs')}</span>
              </div>
            </div>
          </motion.div>

          {/* Advantages List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6 justify-center"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors border border-transparent hover:border-border-dark">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                <span className="material-symbols-outlined">api</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{t('Technological Supremacy')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('Deep integration capabilities replacing surface-level chat tools; MoE foundation models trained exclusively on sovereign institutional data.')}</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors border border-transparent hover:border-border-dark">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-1">
                <span className="material-symbols-outlined">database</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{t('Data Moat')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('Exclusive access to critical sector data feeding a continuous feedback loop that generic public LLMs legally cannot access.')}</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors border border-transparent hover:border-border-dark">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent-success/10 flex items-center justify-center text-accent-success mt-1">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{t('Ecosystem Leverage')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t('Hiveres network unlocks immediate deployment pilots within Ministry of Finance, Ministry of Public Security, and major universities.')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 20 & 21. Hiveres Support & Exit Opportunities */}
      <section className="grid lg:grid-cols-2 gap-8 py-10 border-t border-border-dark">

        {/* Hiveres */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl border border-primary-light/30 bg-primary/5 shadow-inner"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary-light/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-light text-3xl">corporate_fare</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t('Hiveres Support')}</h2>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            {t('AILOGY receives unparalleled structural leverage from its parent holding, utilizing the Hiveres Technology Institute to establish deep-seated bureaucratic network pipelines.')}
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Bộ Tài Chính', 'Bộ Công An', 'Bộ Nội Vụ', 'Viện trí tuệ nhân tạo', 'Bộ KHCN'
            ].map((min, idx) => (
              <span key={idx} className="px-4 py-2 border border-primary-light/30 bg-white/50 dark:bg-surface-dark/50 backdrop-blur rounded-full text-sm font-bold text-slate-800 dark:text-slate-200 shadow-sm">{t(min)}</span>
            ))}
          </div>
        </motion.div>

        {/* Exit & Defense */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-accent-success/30 bg-accent-success/5 flex flex-col justify-center flex-1 relative overflow-hidden shadow-inner"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 mix-blend-overlay">
            <span className="material-symbols-outlined text-9xl">verified</span>
          </div>

          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 relative z-10">{t('Exit Path & Assurances')}</h2>

          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-5 p-6 border border-border-dark bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent-success/20 flex items-center justify-center mt-1">
                <span className="material-symbols-outlined text-accent-success font-bold">account_balance</span>
              </div>
              <div>
                <h4 className="font-black text-lg text-slate-900 dark:text-white mb-2">{t('M&A and IPO Potential')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('Highly attractive target for strategic acquisition by telecom giants or international firms aiming to shortcut Vietnam’s regulatory data walls.')}</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 border border-accent/30 bg-gradient-to-br from-white/90 to-accent/5 dark:from-surface-dark/90 dark:to-accent/10 backdrop-blur-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                <span className="material-symbols-outlined text-accent font-bold">policy</span>
              </div>
              <div>
                <h4 className="font-black text-lg text-slate-900 dark:text-white mb-2">{t('3-Year Capital Return Guarantee')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {t('If the company is not listed or has not experienced a liquidity event within 3 years, the founders commit to repurchasing the shares at original value plus the average commercial bank interest rate.')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

    </div>
  );
}
