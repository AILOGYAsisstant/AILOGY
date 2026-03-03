import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Screen2() {
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
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-24 min-h-screen">

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 mt-8 relative"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-sm">hub</span>
          <span className="text-xs font-bold tracking-widest uppercase">{t('Market & Platform')}</span>
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {t('Decoding the Sovereign Intelligence Market')}
        </h1>
        <p className="relative z-10 text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
          {t('General AI fails in secure, localized contexts. We address the core vulnerabilities of national and enterprise infrastructure with a purpose-built sovereign architecture.')}
        </p>
      </motion.header>

      {/* 4. Problem (Pain Points) */}
      <section className="flex flex-col gap-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4 border-l-4 border-red-500 pl-4"
        >
          {t('The Critical Bottlenecks')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Pain Point 1 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">dns</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Severe Data Fragmentation')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t('Valuable intelligence is locked across hundreds of siloed departmental servers, making cohesive cross-agency search biologically impossible.')}</p>
          </motion.div>

          {/* Pain Point 2 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">policy</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Sovereignty & Compliance')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t('Strict data localization laws (e.g., Decree 13/ND-CP) prohibit routing sensitive state or financial data through public cloud APIs like OpenAI or Google.')}</p>
          </motion.div>

          {/* Pain Point 3 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Exorbitant Legacy Costs')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t('Maintaining legacy on-premise relational databases and paying millions of dollars annually for rigid enterprise search indices.')}</p>
          </motion.div>

          {/* Pain Point 4 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">psychology_alt</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{t('Dangerous Hallucinations')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t('When applied to legal or strategic frameworks, standard GenAI models frequently invent incorrect citations, rendering them useless for critical operations.')}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. Market Opportunity (TAM/SAM/SOM FIXED) & 6. Solution */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Solution Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl border border-primary/30 bg-primary/5 relative overflow-hidden flex flex-col h-full justify-center"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-9xl text-primary">verified_user</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 relative z-10">{t('The AILOGY Platform Solution')}</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed relative z-10">
            {t('A unified, air-gapped sovereign intelligence architecture. We do not just build chatbots; we build the foundational nervous system.')}
          </p>

          <ul className="space-y-4 relative z-10 flex flex-col gap-2">
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-surface-dark/50 backdrop-blur shadow-sm border border-border-dark">
              <span className="material-symbols-outlined text-primary-light mt-1">check_circle</span>
              <span className="font-bold text-slate-900 dark:text-white leading-tight">
                {t('Unified Data Lakehouse')}<br />
                <span className="text-sm font-normal text-slate-600 dark:text-slate-400">{t('Real-time synchronization across entirely siloed state systems.')}</span>
              </span>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-surface-dark/50 backdrop-blur shadow-sm border border-border-dark">
              <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
              <span className="font-bold text-slate-900 dark:text-white leading-tight">
                {t('Hardware-Agnostic Engine')}<br />
                <span className="text-sm font-normal text-slate-600 dark:text-slate-400">{t('Deployable directly onto internal on-premise hardware clusters (Air-gapped).')}</span>
              </span>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-surface-dark/50 backdrop-blur shadow-sm border border-border-dark">
              <span className="material-symbols-outlined text-accent-success mt-1">check_circle</span>
              <span className="font-bold text-slate-900 dark:text-white leading-tight">
                {t('Zero-Hallucination Framework')}<br />
                <span className="text-sm font-normal text-slate-600 dark:text-slate-400">{t('RAG-centric architecture generating 100% verified legal and institutional responses.')}</span>
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Market TAM/SAM/SOM Container WITH LIGHT MODE FIX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-light dark:bg-surface-dark rounded-3xl p-10 border border-border-dark shadow-xl h-full flex flex-col"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
              <span className="material-symbols-outlined text-2xl">pie_chart</span>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">{t('Market Dynamics')}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">{t('Vietnam & SEA Focus')}</p>
            </div>
          </div>

          <div className="relative flex-1 flex flex-col justify-center items-center gap-4 py-8">
            {/* TAM */}
            <div className="w-full max-w-sm rounded-[2rem] border-2 border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-800/50 p-6 text-center hover:border-slate-400 dark:hover:border-slate-600 transition-colors shadow-sm">
              <div className="font-black text-3xl text-slate-700 dark:text-slate-400 mb-1">$5.8 B</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-1">TAM</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{t('Total State & Enterprise Cloud/Data Spend (SEA)')}</div>
            </div>

            {/* SAM */}
            <div className="w-11/12 max-w-xs rounded-[2rem] border-2 border-primary/50 bg-primary/10 p-6 text-center -mt-6 z-10 backdrop-blur-md hover:border-primary transition-colors shadow-md">
              <div className="font-black text-3xl text-primary mb-1">$1.2 B</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-1">SAM</div>
              <div className="text-xs text-slate-700 dark:text-slate-300">{t('Sovereign Cloud, localized GovTech & Defense IT')}</div>
            </div>

            {/* SOM */}
            <div className="w-10/12 max-w-[16rem] rounded-[2rem] border-2 border-accent bg-accent/20 p-6 text-center -mt-6 z-20 backdrop-blur-md hover:scale-105 transition-transform shadow-xl shadow-accent/20">
              <div className="font-black text-3xl text-slate-900 dark:text-white mb-1">$250 M</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-1">SOM</div>
              <div className="text-xs text-slate-800 dark:text-slate-200">{t('Capturable 5-year Gov AI infrastructure projects')}</div>
            </div>
          </div>

          <div className="text-center mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-success/10 text-accent-success font-bold text-sm">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              {t('Market growing at 34% CAGR driven by recent National Digital Transformation decrees.')}
            </span>
          </div>
        </motion.div>

      </section>

      {/* Technology Architecture Section */}
      <section className="flex flex-col gap-10 py-10 border-t border-border-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">{t('Core Technology Architecture')}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('A modular, scalable, and ruthlessly secure technology stack designed specifically for massive institutional ingestion.')}</p>
        </motion.div>

        {/* Horizontal Tech Flow */}
        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Connector Line hidden on mobile */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-1 bg-gradient-to-r from-red-500 via-primary to-accent-success z-0 rounded-full opacity-30"></div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">input</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t('1. Ingestion Layer')}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-[200px]">{t('OCR pipelines parsing hardcopy legal documents & diverse legacy DBs via custom API connectors.')}</p>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">schema</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t('2. Vectorization & Lake')}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-[200px]">{t('Generating multi-dimensional embeddings strictly structured for Gov Context retention.')}</p>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(64,48,232,0.3)]">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t('3. Sovereign Core LLM')}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-[200px]">{t('Mixture-of-Experts (MoE) securely inferencing in complete isolation from the external internet.')}</p>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-accent-success mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">dashboard</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t('4. Application APIs')}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-[200px]">{t('Orbyte Financial, VP CP Portals, and Camera Edu integrating instantly with end-user workflows.')}</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
