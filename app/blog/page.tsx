import Link from 'next/link';
import CTA from "@/components/CTA";

export default function BlogPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                    见解与新闻
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    关于 AI 工程、策略和未来的最新思考。
                </p>
            </section>

            {/* Blog Posts */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Post 1 */}
                    <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 border border-border">
                            <div className="aspect-[4/3] bg-muted hover:scale-105 transition-transform duration-300 flex items-center justify-center text-muted-foreground">
                                文章配图
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="text-blue-500 font-medium">AI 工程</span>
                            <span>2025年5月15日</span>
                            <span>5 分钟阅读</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">AI 工程的未来：从实验到生产</h3>
                        <p className="text-muted-foreground line-clamp-3">
                            随着 AI 技术的成熟，重点正在从模型开发转向系统工程。本文探讨了构建可靠、可扩展 AI 系统所需的关键原则和实践。
                        </p>
                        <div className="mt-4 flex items-center">
                            <div className="w-8 h-8 bg-muted rounded-full mr-2"></div>
                            <span className="text-sm font-medium">张三, 首席架构师</span>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 border border-border">
                            <div className="aspect-[4/3] bg-muted hover:scale-105 transition-transform duration-300 flex items-center justify-center text-muted-foreground">
                                文章配图
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="text-purple-500 font-medium">团队建设</span>
                            <span>2025年5月10日</span>
                            <span>4 分钟阅读</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">打造高性能 AI 团队</h3>
                        <p className="text-muted-foreground line-clamp-3">
                            招聘数据科学家是不够的。了解如何构建跨职能团队，融合数据科学、工程和产品思维，以交付真正的商业价值。
                        </p>
                        <div className="mt-4 flex items-center">
                            <div className="w-8 h-8 bg-muted rounded-full mr-2"></div>
                            <span className="text-sm font-medium">李四, 运营总监</span>
                        </div>
                    </div>

                    {/* Post 3 */}
                    <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 border border-border">
                            <div className="aspect-[4/3] bg-muted hover:scale-105 transition-transform duration-300 flex items-center justify-center text-muted-foreground">
                                文章配图
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="text-green-500 font-medium">AI 伦理</span>
                            <span>2025年5月2日</span>
                            <span>6 分钟阅读</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors">生产中的 AI 伦理：实用指南</h3>
                        <p className="text-muted-foreground line-clamp-3">
                            如何在不牺牲创新的前提下确保 AI 系统的公平性和透明度？我们分享了在实际项目中实施负责任 AI 的经验教训。
                        </p>
                        <div className="mt-4 flex items-center">
                            <div className="w-8 h-8 bg-muted rounded-full mr-2"></div>
                            <span className="text-sm font-medium">王五, AI 伦理专家</span>
                        </div>
                    </div>

                </div>
            </section>

            <CTA />
        </div>
    );
}
