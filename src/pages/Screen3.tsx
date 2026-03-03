import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Screen3() {
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
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-success/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-2 text-accent-success mb-2">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span className="text-xs font-bold tracking-widest uppercase">{t('Strategy & Financials')}</span>
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {t('A High-Margin Enterprise Profile')}
        </h1>
        <p className="relative z-10 text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
          {t('Recurring licensing revenue scaled across compounding infrastructure deployments. We run a deeply fortified B2B/B2G operational structure.')}
        </p>
      </motion.header>

      {/* 11. Revenue Model */}
      <section className="flex flex-col gap-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white"
        >
          {t('Four Pillars of Revenue')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Revenue Stream 1 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-accent-success/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-success/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-accent-success/20 text-accent-success flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">key</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Enterprise Licensing (SaaS/PaaS)')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Monthly/Annual recurring fees for access to our core LLM APIs and Analytics dashboards.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-accent-success">85%</span></div>
          </motion.div>

          {/* Revenue Stream 2 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-primary/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Tailored Enterprise AI')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Upfront development and deployment fees for isolated, on-premise custom model tuning.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-primary">60%</span></div>
          </motion.div>

          {/* Revenue Stream 3 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-accent/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Data Infrastructure')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Structuring APIs and vectorization pipelines sold sequentially to legacy Gov bodies.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-accent">75%</span></div>
          </motion.div>

          {/* Revenue Stream 4 */}
          <motion.div variants={itemVariants} className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-dark group hover:border-primary-light/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-light/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 rounded-xl bg-primary-light/20 text-primary-light flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">switch_account</span>
            </div>
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">{t('Premium Outsourcing')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{t('Elite dedicated tech-teams generating immediate cash-flow to fund primary R&D.')}</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('Est. Margin: ')}<span className="text-primary-light">40%</span></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 12 & 13. GTM & Road to $1B */}
      <section className="grid lg:grid-cols-2 gap-12 items-center py-10 border-t border-border-dark">
        {/* Expansion Steps */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 flex flex-col gap-6"
        >
          <div className="mb-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{t('Go-To-Market & Expansion')}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t('A deterministic pathway from hyper-local infiltration to global unicorn status.')}</p>
          </div>

          <div className="relative pl-4 border-l-2 border-border-dark dark:border-slate-800 ml-4 py-2 flex flex-col gap-8">
            {/* Timeline Items */}
            {[
              { date: '02/2025', title: 'Thành lập công ty', desc: 'Chính thức thành lập công ty và xây dựng đội ngũ AI, Data và Product cốt lõi. Hoàn thiện định hướng phát triển nền tảng trí tuệ nhân tạo xử lý và chuẩn hóa dữ liệu.' },
              { date: '05/2025', title: 'Hoàn thiện mô hình đọc hiểu dữ liệu văn bản', desc: 'Phát triển thành công mô hình AI đọc hiểu và trích xuất thông tin từ văn bản tài chính – hành chính. Hệ thống giúp tự động hóa quy trình xử lý tài liệu và giảm đáng kể thời gian thao tác thủ công.' },
              { date: '07/2025', title: 'Chuyển giao thư viện số cho Học viện Tài chính', desc: 'Triển khai hệ thống thư viện số tích hợp AI tìm kiếm ngữ nghĩa cho Học viện Tài chính. Giải pháp giúp nâng cao hiệu quả quản lý và tra cứu tài liệu học thuật.' },
              { date: '09/2025', title: 'Nhận đầu tư 500,000 USD', desc: 'Hoàn tất vòng gọi vốn Seed với tổng giá trị 500,000 USD. Nguồn vốn được sử dụng để mở rộng đội ngũ và phát triển sản phẩm nền tảng.' },
              { date: '10/2025', title: 'Chuyển giao mô hình chuẩn hoá dữ liệu cho EVN', desc: 'Triển khai hệ thống chuẩn hóa dữ liệu bằng AI cho Tập đoàn Điện lực Việt Nam. Giải pháp giúp đồng bộ dữ liệu và nâng cao chất lượng báo cáo quản trị.' },
              { date: '12/2025', title: 'Tư vấn cấu trúc dữ liệu cho Bộ Tài chính', desc: 'Thực hiện tư vấn và thiết kế kiến trúc dữ liệu cho Bộ Tài chính. Đề xuất lộ trình chuyển đổi số dựa trên nền tảng AI và Data Governance.' },
              { date: '01/2026', title: 'Bàn giao sản phẩm cho Kiểm toán Nhà nước & ký kết hợp tác Nam Việt', desc: 'Bàn giao hệ thống phân tích dữ liệu cho Kiểm toán Nhà nước Việt Nam. Đồng thời ký kết hợp tác với Công ty Nam Việt để phát triển hệ thống tư vấn giáo dục thông minh.' },
              { date: '02/2026', title: 'Ký kết hợp đồng với VNPost, VPQH, Finister', desc: 'Ký kết triển khai giải pháp AI với Tổng công ty Bưu điện Việt Nam, Văn phòng Quốc hội Việt Nam và Finister. Đánh dấu bước mở rộng mạnh mẽ vào khối cơ quan nhà nước và doanh nghiệp lớn.' }
            ].map((milestone, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-primary/40 border-2 border-white dark:border-background-dark group-hover:bg-primary transition-colors"></div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-primary text-base">{t(milestone.date)}</span>
                    <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">–</span>
                    <span className="font-bold text-slate-800 dark:text-white text-base">{t(milestone.title)}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-1.5">{t(milestone.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Current Financials Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 rounded-3xl bg-white dark:bg-slate-950 p-10 border border-border-dark dark:border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 opacity-5 dark:opacity-20 transition-opacity duration-300" style={{ backgroundImage: 'linear-gradient(to right, #4030e8 1px, transparent 1px), linear-gradient(to bottom, #4030e8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          <h3 className="text-slate-900 dark:text-white text-2xl font-black mb-8 relative z-10">{t('Financial Health Snapshot')}</h3>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-border-dark dark:border-slate-700 p-5 rounded-2xl flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-900 dark:text-white">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{t('Gross Margin')}</span>
              <span className="text-3xl font-black text-accent-success">72%</span>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-border-dark dark:border-slate-700 p-5 rounded-2xl flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-900 dark:text-white">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{t('Burn Rate')}</span>
              <span className="text-3xl font-black text-slate-900 dark:text-white">{t('Low')}</span>
              <span className="text-xs text-slate-500 dark:text-slate-500 mt-1">{t('Offset by Outsourcing')}</span>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/20 border border-border-dark dark:border-primary/50 p-5 rounded-2xl flex flex-col justify-between group shadow-sm text-slate-900 dark:text-white">
              <span className="block text-slate-600 dark:text-slate-300 text-sm font-bold tracking-wider mb-1 uppercase">{t('Current Revenue (End Q1 2026)')}</span>
              <span className="block text-3xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t('$2 Million USD')}</span>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-transparent dark:from-accent/20 border border-border-dark dark:border-accent/50 p-5 rounded-2xl flex flex-col justify-between group shadow-sm text-slate-900 dark:text-white">
              <span className="block text-slate-600 dark:text-slate-300 text-sm font-bold tracking-wider mb-1 uppercase">{t('Total Costs (End Q1 2026)')}</span>
              <span className="block text-3xl font-black text-slate-900 dark:text-white group-hover:text-accent transition-colors">{t('$500K USD')}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 16 & 17. The Ask & Use of Funds */}
      <section className="py-16 mt-10 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-dark relative overflow-hidden flex flex-col items-center text-center px-6">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-4xl flex flex-col items-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase mb-8 inline-block shadow-sm">
            {t('The Investment Opportunity')}
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6">
            2 Millions USD
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium mb-12">
            {t('For')} <strong className="text-slate-900 dark:text-white">10%</strong> {t('Equity Selection')}
          </p>

          <div className="flex gap-4 mb-12">
            <span className="px-5 py-2 rounded-xl bg-white dark:bg-surface-dark border border-border-dark font-bold tracking-wide text-slate-900 dark:text-white shadow-sm">{t('Direct Equity Sale')}</span>
            <span className="px-5 py-2 rounded-xl bg-white dark:bg-surface-dark border border-border-dark font-bold tracking-wide text-slate-900 dark:text-white shadow-sm">{t('Angel Round')}</span>
          </div>

          {/* Use of Funds Bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-8 md:h-12 flex overflow-hidden mb-8 border border-border-dark shadow-inner">
            <div className="bg-primary h-full flex items-center justify-center text-[10px] md:text-xs text-white font-bold w-[45%]" title="45% R&D + Infrastructure">R&D & Infra (45%)</div>
            <div className="bg-accent h-full flex items-center justify-center text-[10px] md:text-xs text-slate-900 font-bold w-[35%]" title="35% Sales & Expansion">Growth (35%)</div>
            <div className="bg-slate-700 dark:bg-slate-400 h-full flex items-center justify-center text-[10px] md:text-xs text-white dark:text-slate-900 font-bold w-[20%]" title="20% Buffer & Ops">Operations (20%)</div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 w-full">
            <div className="flex flex-col items-center text-center">
              <span className="w-4 h-4 rounded bg-primary mb-2"></span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{t('Compute & R&D')}</span>
              <span className="text-xs text-slate-500 mt-1 hidden sm:block">{t('H100 Clusters & Model Dev')}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="w-4 h-4 rounded bg-accent mb-2"></span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{t('Pipeline Expansion')}</span>
              <span className="text-xs text-slate-500 mt-1 hidden sm:block">{t('Enterprise Sales Ops')}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="w-4 h-4 rounded bg-slate-700 dark:bg-slate-400 mb-2"></span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{t('Working Capital')}</span>
              <span className="text-xs text-slate-500 mt-1 hidden sm:block">{t('Legal & Sustained Ops')}</span>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
