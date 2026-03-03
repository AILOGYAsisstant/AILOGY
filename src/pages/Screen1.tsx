
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Screen1() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white relative w-full overflow-x-hidden transition-colors duration-300">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #272447 1px, transparent 1px), linear-gradient(to bottom, #272447 1px, transparent 1px)' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 1. Cover Slide */}
      <section className="relative pt-24 pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light dark:bg-surface-dark border border-primary/30 text-xs font-medium text-primary mb-6">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                {t('PITCH DECK 2026')}
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
                <img src={`${import.meta.env.BASE_URL}assets/images/banner.png`} alt="AILOGY" className="h-[120px] md:h-[192px] object-contain dark:invert drop-shadow-xl" />
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded">AI</span>
                <span className="px-3 py-1 bg-accent/10 text-accent-success font-bold text-sm rounded">DATA</span>
                <span className="px-3 py-1 border border-border-dark text-slate-600 dark:text-slate-400 font-bold text-sm rounded">PLATFORM</span>
              </div>

              <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed">
                {t('Tiên phong công nghệ dữ liệu và trí tuệ nhân tạo')}
              </h2>


              {/* Presenter Info */}
              <div className="flex items-center gap-6 pt-8 border-t border-border-dark max-w-md">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Presenter')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">Đỗ Tiến Đăng</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Founder</span>
                </div>
                <div className="w-px h-10 bg-border-dark"></div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Date')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">March 2026</span>
                </div>
                <div className="w-px h-10 bg-border-dark"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t('Backed By')}</span>
                  <span className="font-bold text-slate-900 dark:text-white">Hiveres</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-[100px] rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2674&auto=format&fit=crop" alt="Abstract Data" className="relative z-10 rounded-3xl border border-white/10 shadow-2xl opacity-90 object-cover h-[500px] w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-[1.02]" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Giới thiệu công ty (Who is AILOGY) */}
      <section className="py-24 border-t border-border-dark bg-surface-light/50 dark:bg-surface-dark/30 relative">
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
                {t('AILOGY is a premier AI and Data infrastructure company fundamentally transforming how governments and large enterprises process, secure, and leverage their localized data.')}
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
    </div>
  );
}
