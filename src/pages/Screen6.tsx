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
                <h1 className="relative z-10 text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {[
                        { title: 'Orbyte', desc: 'Đọc văn bản và chuyển đổi thành metadata', icon: 'library_books' },
                        { title: 'LLMs', desc: 'Xây dựng các mô hình từ đầu', icon: 'psychology' },
                        { title: 'Camera Edu', desc: 'Mô hình giám sát an toàn học đường', icon: 'videocam' },
                        { title: 'AI Portal', desc: 'AI Portal', icon: 'account_balance' },
                        { title: 'Novaland Project', desc: 'Dự án với novaland', icon: 'location_city' },
                        { title: 'EVN Standardizer', desc: 'Mô hình chuẩn hoá dữ liệu', icon: 'bolt' },
                        { title: 'Finister', desc: 'Mô hình chấm điểm tài chính', icon: 'fact_check' },
                        { title: 'Mô hình rủi ro', desc: 'Mô hình đánh giá rủi ro tài chính', icon: 'warning' },
                        { title: 'Kiểm duyệt Nội dung', desc: 'Mô hình phát hiện nội dung độc hại', icon: 'gpp_bad' },
                    ].map((prod, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="p-4 rounded-xl border border-border-dark bg-white dark:bg-surface-dark flex flex-row items-center gap-4 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                                <span className="material-symbols-outlined text-2xl">{prod.icon}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-tight">{t(prod.title)}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">{t(prod.desc)}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Product Gallery */}
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4 mt-16"
                >
                    {t('Triển khai thực tế')}
                    <span className="h-px bg-border-dark flex-1 ml-4 hidden md:block"></span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full overflow-hidden relative mt-8"
                >
                    {/* Fade Masks */}
                    <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>

                    <div className="flex w-max animate-scroll gap-4 py-2 hover:pause">
                        {[
                            'evn(2).png', 'evn.png', 'kiểm toán (1).png', 'kiểm toán .png', 'kiểm toán(1).png',
                            'kiểm toán(3).png', 'kiểm toán(4).png', 'kiểm toán.png', 'thư viện số.png',
                            'z7586005315882_2df0673084d0555202c67061c93d71db.jpg', 'z7586008061761_0dd51ac224605bfff0ecc7fe6c808930.jpg',
                            'evn(2).png', 'evn.png', 'kiểm toán (1).png', 'kiểm toán .png', 'kiểm toán(1).png',
                            'kiểm toán(3).png', 'kiểm toán(4).png', 'kiểm toán.png', 'thư viện số.png',
                            'z7586005315882_2df0673084d0555202c67061c93d71db.jpg', 'z7586008061761_0dd51ac224605bfff0ecc7fe6c808930.jpg'
                        ].map((img, i) => (
                            <img key={i} src={`${import.meta.env.BASE_URL}assets/images/products/${img}`} className="w-72 md:w-80 h-40 md:h-48 object-cover rounded-xl border border-border-dark shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
                        ))}
                    </div>
                </motion.div>

                {/* Seminar Gallery */}
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4 mt-16"
                >
                    {t('Các hoạt động')}
                    <span className="h-px bg-border-dark flex-1 ml-4 hidden md:block"></span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full overflow-hidden relative mt-8"
                >
                    {/* Fade Masks */}
                    <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>

                    <div className="flex w-max animate-scroll gap-4 py-2 [animation-direction:reverse] hover:pause">
                        {[
                            'Bộ Y Tế.jpg', 'EVN.jpeg', 'bộ tài chính 2.JPG',
                            'nam việt 3.JPG', 'quốc hội 2.jpg',
                            'toshiba.JPG', 'đông đô.png',
                            'Bộ Y Tế.jpg', 'EVN.jpeg', 'bộ tài chính 2.JPG',
                            'nam việt 3.JPG', 'quốc hội 2.jpg',
                            'toshiba.JPG', 'đông đô.png'
                        ].map((img, i) => (
                            <img key={i} src={`${import.meta.env.BASE_URL}assets/images/activities/${img}`} className="w-72 md:w-80 h-40 md:h-48 object-cover rounded-xl border border-border-dark shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
                        ))}
                    </div>
                </motion.div>

                {/* Press & Articles Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-4 mt-8 max-w-4xl"
                >
                    <a href="https://www.mof.gov.vn/cong-nghe-thong-tin-va-chuyen-doi-so/tin-tuc-su-kien-3/ai-trong-nganh-tai-chinh-viet-nam-tu-ha-tang-du-lieu-den-van-hanh-thong-minh" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 px-6 rounded-2xl bg-white dark:bg-surface-dark border border-border-dark hover:border-primary/50 shadow-sm transition-all duration-300 hover:shadow-md">
                        <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-2 pr-4 text-sm md:text-base">
                            {t('AI trong ngành tài chính Việt Nam: Từ hạ tầng dữ liệu đến vận hành thông minh')}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </a>

                    <a href="https://cds.moh.gov.vn/trang-chu/-/asset_publisher/9VNAsbzkEbQA/content/hoi-thao-ai-y-te-thanh-cong-ra-mat-mang-luoi-v-rhain-va-thuc-ay-cac-giai-phap-ai-y-te-co-trach-nhiem/pop_up?_101_INSTANCE_9VNAsbzkEbQA_viewMode=print&_101_INSTANCE_9VNAsbzkEbQA_languageId=vi_VN" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 px-6 rounded-2xl bg-white dark:bg-surface-dark border border-border-dark hover:border-accent/50 shadow-sm transition-all duration-300 hover:shadow-md">
                        <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent transition-colors line-clamp-2 pr-4 text-sm md:text-base">
                            {t('Hội thảo AI Y tế thành công, ra mắt Mạng lưới V-RHAIN và thúc đẩy các giải pháp AI Y tế có trách nhiệm')}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </a>
                </motion.div>
            </section>

            {/* 8. Trusted Partners */}
            <section className="flex flex-col gap-12 py-16 border-t border-border-dark mt-10 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center relative z-10"
                >
                    <h2 className="text-2xl md:text-4xl font-black text-primary mb-4">
                        {t('Đối tác')}
                    </h2>
                    <p className="text-slate-900 dark:text-white text-xl md:text-3xl font-bold">
                        {t('Niềm Tin Của Các Trụ Cột Quốc Gia')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10"
                >
                    {/* Partners Logos */}
                    {[
                        { img: 'Emblem_of_Vietnam.svg.webp', name: 'Văn Phòng Quốc Hội' },
                        { img: 'Logo_Bộ_Tài_chính.png', name: 'Bộ Tài Chính' },
                        { img: 'Ministry_of_Health_(Vietnam)_Logo.svg.png', name: 'Bộ Y Tế' },
                        { img: 'env.webp', name: 'EVN' },
                        { img: 'Vietnam_Post_logo.png', name: 'VNPOST' },
                        { img: 'Logo_Kiểm_toán_nhà_nước_Việt_Nam.jpg', name: 'Kiểm toán nhà nước' },
                        { img: 'tongcucthue.png', name: 'Tổng cục thuế' },
                        { img: 'Novaland_Logo.svg', name: 'NOVALAND' },
                        { img: 'haui.png', name: 'ĐH Công Nghiệp HN' },
                        { img: 'huit.jpeg', name: 'ĐH Công Thương HCM' },
                        { img: 'Học_viện_tài_chính.jpg', name: 'Học Viện Tài Chính' },
                        { img: 'Navico.png', name: 'Công ty CP Nam Việt' }
                    ].map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-6 rounded-2xl border border-border-dark bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-lg shadow-black/5 flex flex-col items-center justify-center gap-4 cursor-default hover:border-primary/50 transition-colors text-center"
                        >
                            <div className="h-16 flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}assets/images/partners/${partner.img}`} alt={partner.name} className="max-h-full max-w-full object-contain drop-shadow-sm" />
                            </div>
                            <span className="font-bold text-slate-900 dark:text-white text-sm">{t(partner.name)}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </div>
    );
}
