import Link from 'next/link';
import CTA from "@/components/CTA";

export default function ResourcesPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                    资源中心
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    深入了解 AI 技术、行业趋势和最佳实践。我们分享知识，助您领先一步。
                </p>
            </section>

            {/* Featured Resources */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">精选资源</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="relative rounded-2xl overflow-hidden bg-card border border-border aspect-[16/9] group cursor-pointer">
                        <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
                            资源封面图
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <span className="text-blue-400 font-medium mb-2">白皮书</span>
                            <h3 className="text-2xl font-bold text-white mb-2">2025 企业 AI 落地指南</h3>
                            <p className="text-gray-300 mb-4">全面解析企业如何从 0 到 1 构建 AI 能力，涵盖战略、团队、技术栈和治理。</p>
                            <span className="text-white font-medium group-hover:underline">立即下载 →</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                        <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:bg-accent transition-colors cursor-pointer">
                            <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0"></div>
                            <div>
                                <span className="text-purple-500 text-sm font-medium">技术报告</span>
                                <h3 className="text-xl font-bold mb-2">RAG vs Fine-tuning: 如何选择？</h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">深入对比两种主流 LLM 定制化方案的优劣势、成本和适用场景。</p>
                            </div>
                        </div>
                        <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:bg-accent transition-colors cursor-pointer">
                            <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0"></div>
                            <div>
                                <span className="text-green-500 text-sm font-medium">案例集</span>
                                <h3 className="text-xl font-bold mb-2">金融行业 AI 创新实践 TOP 10</h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">汇集全球领先金融机构的 AI 落地案例，激发您的创新灵感。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Resources */}
                <h2 className="text-2xl font-bold mb-8">所有资源</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-muted"></div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-medium px-2 py-1 bg-accent rounded">指南</span>
                                    <span className="text-xs text-muted-foreground">5 分钟阅读</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2">构建可信赖 AI 系统的 5 个关键原则</h3>
                                <p className="text-muted-foreground text-sm mb-4">确保您的 AI 系统安全、公平、透明且负责任。</p>
                                <Link href="#" className="text-primary font-medium text-sm hover:underline">阅读更多</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">订阅我们的通讯</h2>
                    <p className="text-muted-foreground mb-8">每周获取最新的 AI 洞察、技术更新和行业分析，直接发送到您的收件箱。</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="您的邮箱地址"
                            className="flex-1 bg-background border border-input rounded-full px-6 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                            订阅
                        </button>
                    </form>
                </div>
            </section>

            <CTA />
        </div>
    );
}
