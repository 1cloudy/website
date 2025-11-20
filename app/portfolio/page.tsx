import Link from 'next/link';
import CTA from "@/components/CTA";

export default function PortfolioPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                    成功案例
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    探索我们如何帮助各行各业的客户利用 AI 技术实现业务变革。
                </p>
            </section>

            {/* Featured Projects */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Project 1 */}
                    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors">
                        <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                            项目封面图
                        </div>
                        <div className="p-8">
                            <div className="text-sm text-blue-500 font-medium mb-2">零售 & 电商</div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">零售智能平台</h3>
                            <p className="text-muted-foreground mb-6">
                                为一家大型零售连锁店构建了端到端的智能平台，包括需求预测、库存优化和个性化推荐，使库存周转率提高了 30%。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">时间序列预测</span>
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">推荐系统</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors">
                        <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                            项目封面图
                        </div>
                        <div className="p-8">
                            <div className="text-sm text-purple-500 font-medium mb-2">金融科技</div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors">金融风险评估</h3>
                            <p className="text-muted-foreground mb-6">
                                利用机器学习模型分析海量交易数据，实时识别欺诈行为，将误报率降低了 60%，每年挽回数百万美元损失。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">异常检测</span>
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">实时处理</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors">
                        <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                            项目封面图
                        </div>
                        <div className="p-8">
                            <div className="text-sm text-green-500 font-medium mb-2">医疗健康</div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-green-500 transition-colors">医疗诊断助手</h3>
                            <p className="text-muted-foreground mb-6">
                                辅助医生分析医学影像的 AI 助手，帮助早期发现病变，诊断准确率提升至 98%，显著提高了诊疗效率。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">计算机视觉</span>
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">医疗影像</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors">
                        <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                            项目封面图
                        </div>
                        <div className="p-8">
                            <div className="text-sm text-orange-500 font-medium mb-2">物流与供应链</div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">物流路线优化</h3>
                            <p className="text-muted-foreground mb-6">
                                基于强化学习的动态路线规划系统，考虑实时交通、天气和订单变化，将配送成本降低了 25%。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">强化学习</span>
                                <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">运筹优化</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-16 text-center">客户评价</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <div className="flex text-yellow-500 mb-4">★★★★★</div>
                            <p className="text-muted-foreground mb-6">"Ln2ai 团队不仅技术过硬，而且深刻理解业务。他们交付的不仅仅是代码，而是真正的商业价值。"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-muted rounded-full mr-3"></div>
                                <div>
                                    <div className="font-bold">张伟</div>
                                    <div className="text-xs text-muted-foreground">CTO, RetailTech Inc</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <div className="flex text-yellow-500 mb-4">★★★★★</div>
                            <p className="text-muted-foreground mb-6">"与 Ln2ai 的合作是我们数字化转型中最正确的决定。他们的 AI 战略规划为我们指明了方向。"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-muted rounded-full mr-3"></div>
                                <div>
                                    <div className="font-bold">李娜</div>
                                    <div className="text-xs text-muted-foreground">CEO, FinanceFlow</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <div className="flex text-yellow-500 mb-4">★★★★★</div>
                            <p className="text-muted-foreground mb-6">"专业的团队，高效的交付。视觉检测系统的上线彻底改变了我们的质检流程。"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-muted rounded-full mr-3"></div>
                                <div>
                                    <div className="font-bold">王强</div>
                                    <div className="text-xs text-muted-foreground">生产总监, Manufacturing Corp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
