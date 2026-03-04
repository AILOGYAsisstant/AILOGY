
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Screen1() {
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
    <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white relative w-full overflow-x-hidden transition-colors duration-300">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #272447 1px, transparent 1px), linear-gradient(to bottom, #272447 1px, transparent 1px)' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 1. Cover Slide */}
      <section className="relative pt-24 pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center gap-12 max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >


              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
                <img src={`${import.meta.env.BASE_URL}assets/images/banner.png`} alt="AILOGY" className="h-[120px] md:h-[192px] object-contain dark:invert drop-shadow-xl" />
              </h1>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded">AI</span>
                <span className="px-3 py-1 bg-accent/10 text-accent-success font-bold text-sm rounded">DATA</span>
                <span className="px-3 py-1 border border-border-dark text-slate-600 dark:text-slate-400 font-bold text-sm rounded">PLATFORM</span>
              </div>

              <h2 className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 font-bold whitespace-nowrap mb-10 leading-relaxed">
                {t('TIÊN PHONG CÔNG NGHỆ DỮ LIỆU VÀ TRÍ TUỆ NHÂN TẠO')}
              </h2>


              {/* Presenter Info */}
              <div className="flex items-center justify-center gap-6 pt-8 border-t border-border-dark w-full">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Presenter')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">TS. Đỗ Tiến Đăng</span>
                </div>
                <div className="w-px h-10 bg-border-dark"></div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Tháng 3')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">Năm 2026</span>
                </div>
                <div className="w-px h-10 bg-border-dark"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Backed By')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">Hiveres</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Giới thiệu công ty (Who is AILOGY) */}
      <section id="company-overview" className="py-24 border-t border-border-dark bg-surface-light/50 dark:bg-surface-dark/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{t('Company Overview')}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t('AILOGY')}</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border-dark bg-white dark:bg-surface-dark p-8 shadow-xl"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {t('AILOGY là công ty cơ sở hạ tầng dữ liệu và AI hàng đầu về cơ bản chuyển đổi cách các chính phủ và doanh nghiệp lớn xử lý, bảo mật và tận dụng dữ liệu có sẵn.')}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {t('Born from the strategic ecosystem of the Hiveres Technology Institute, our proprietary vertical AI models and unified data platforms eliminate legacy silos, replacing them with sovereign, secure, and highly intelligent data ecosystems.')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-primary mb-2">45+</div>
                <div className="text-sm font-bold text-slate-500">{t('Petabytes Processed')}</div>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-accent mb-2">12+</div>
                <div className="text-sm font-bold text-slate-500">{t('Government and Enterprise Clients')}</div>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-slate-900 dark:text-primary-light mb-2">99%</div>
                <div className="text-sm font-bold text-slate-500">{t('Hallucination Reduction In Text Generation')}</div>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-border-dark p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-black text-accent-success mb-2">Tier 1</div>
                <div className="text-sm font-bold text-slate-500">{t('Sovereign Security')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Palantir Case Study) */}
      <section className="py-32 relative overflow-hidden bg-white dark:bg-background-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-12 gap-16">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{t('Vision & Mission')}</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                {t('Palantir in South East Asia')}
              </h3>

              <div className="space-y-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent">visibility</span>
                    {t('Long-term Vision')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('To become the indispensable nervous system for national data infrastructure, ensuring every strategic decision is backed by intelligent, secure, and sovereign computation.')}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">flag</span>
                    {t('Our Mission')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('To unlock the value of fragmented government and enterprise data silos using proprietary AI architectures that prioritize absolute security and localized context.')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl rounded-full"></div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded uppercase">Strategic Counterpart</span>
                </div>

                <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{t('The Proven Success Model')}</h4>
                <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                  <Trans i18nKey="Much like Palantir Technologies revolutionized Western government intelligence and enterprise logistics by bridging the gap between fragmented data and operational analytics, AILOGY captures the same high-barrier, high-retention market in region.">
                    Much like <strong className="text-primary font-black ml-1">Palantir Technologies</strong> revolutionized Western government intelligence and enterprise logistics by bridging the gap between fragmented data and operational analytics, AILOGY captures the same high-barrier, high-retention market in region.
                  </Trans>
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-primary/50 transition-colors">
                    <div className="text-primary mb-3"><span className="material-symbols-outlined text-3xl">assured_workload</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('High Barriers to Entry')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Government-grade security requirements create natural monopolies.')}</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-accent/50 transition-colors">
                    <div className="text-accent mb-3"><span className="material-symbols-outlined text-3xl">data_object</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('Compound Data Moat')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Models improve exponentially as they ingest specific structural data.')}</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-accent-success/50 transition-colors">
                    <div className="text-accent-success mb-3"><span className="material-symbols-outlined text-3xl">trending_up</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('Zero Churn Rate')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Infrastructure integration makes replacing the system near-impossible.')}</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-background-dark border border-border-dark hover:border-primary-light/50 transition-colors">
                    <div className="text-primary-light mb-3"><span className="material-symbols-outlined text-3xl">dynamic_feed</span></div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1.5">{t('Expanding Scope')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('Land-and-expand strategies lead to massively growing ACVs.')}</div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="flex flex-col gap-10 py-16 border-t border-border-dark mt-8 max-w-7xl mx-auto px-6 w-full">
        <motion.header
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 relative z-10"
        >
          <div className="flex items-center gap-2 text-primary mb-2">
            <span className="material-symbols-outlined text-sm">groups</span>
            <span className="text-xl font-bold tracking-widest uppercase">{t('Đội ngũ và lợi thế')}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {t('Lợi thế về công nghệ và hệ sinh thái')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-3xl leading-relaxed">
            {t('Được hỗ trợ bởi hệ sinh thái Hiveres, dẫn dắt bởi những chuyên gia kỳ cựu trong ngành và được bảo vệ bởi rào cản hạ tầng cực kỳ kiên cố từ các nơi trên thế giới.')}
          </p>
        </motion.header>

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
              {t('Đồng Sáng Lập')}
            </h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white relative z-10">
              <div className="flex items-center gap-4 group">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">TS. Đỗ Tiến Đăng</span>
                  <span className="text-sm font-medium text-slate-500">Đồng Sáng Lập</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Thanh Bình</span>
                  <span className="text-sm font-medium text-slate-500">Giám đốc điều hành</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-accent/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-accent/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <h3 className="text-sm uppercase tracking-widest text-accent font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {t('Đội ngũ điều hành')}
            </h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white relative z-10">
              <div className="flex items-center gap-4 group">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Phú Bình</span>
                  <span className="text-sm font-medium text-slate-500">Giám Đốc Kinh Doanh</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Th.S Nguyễn Thị Lan Anh</span>
                  <span className="text-sm font-medium text-slate-500">Giám Đốc Vận Hành</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">TS. Huỳnh Thái Học</span>
                  <span className="text-sm font-medium text-slate-500">Giám Đốc Công Nghệ</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advisors */}
          <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-slate-400/30 bg-surface-light dark:bg-surface-dark shadow-xl hover:border-slate-400/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-400/10 rounded-full blur-2xl"></div>
            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-black mb-8 flex items-center gap-2 border-b border-border-dark pb-4">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              {t('Cố Vấn Chiến Lược')}
            </h3>
            <div className="flex flex-col gap-6 text-slate-900 dark:text-white relative z-10">
              <div className="flex items-center gap-4 group opacity-80">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">TS. Đỗ Tiến Đăng</span>
                  <span className="text-sm font-medium text-slate-500">Cố vấn chiến lược</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group opacity-80">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Nguyễn Phú Bình</span>
                  <span className="text-sm font-medium text-slate-500">Cố Vấn Hạ Tầng Dữ Liệu</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group opacity-80">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">TS. Hoàng Thị Kiều Anh</span>
                  <span className="text-sm font-medium text-slate-500">Chuyên Gia Toán Tính Toán</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group opacity-80">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">TS. Phạm Đức Tĩnh</span>
                  <span className="text-sm font-medium text-slate-500">Cố vấn nghiên cứu khoa học</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
