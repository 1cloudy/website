import Link from 'next/link';
import Image from 'next/image';
import CTA from "@/components/CTA";

export default function ProductsPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                    AI 驱动的产品
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    利用我们预构建的 AI 解决方案加速您的业务，或与我们合作打造您的专属产品。
                </p>
            </section>

            {/* Products Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">

                {/* Product 1 */}
                <div className="bg-card border border-border rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center">
                            <div className="inline-block bg-blue-500/10 text-blue-500 font-semibold px-4 py-1 rounded-full text-sm mb-6 w-fit">
                                企业智能
                            </div>
                            <h2 className="text-3xl font-bold mb-4">数据智能套件</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                将您的非结构化数据转化为可操作的洞察。自动分类、提取和分析文档、邮件和客户反馈。
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">1</div>
                                    <span className="text-muted-foreground">智能文档处理 (IDP)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">2</div>
                                    <span className="text-muted-foreground">多模态数据分析</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">3</div>
                                    <span className="text-muted-foreground">实时仪表盘与报告</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                                    申请演示
                                </button>
                                <button className="border border-input px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors">
                                    了解更多
                                </button>
                            </div>
                        </div>
                        <div className="bg-muted/50 h-full min-h-[400px] flex items-center justify-center p-8">
                            <div className="w-full max-w-md aspect-video relative rounded-lg shadow-2xl border border-border overflow-hidden">
                                <Image src="/images/product-data-suite.png" alt="Data Intelligence Suite" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="bg-card border border-border rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row-reverse">
                        <div className="lg:order-2 p-12 flex flex-col justify-center">
                            <div className="inline-block bg-purple-500/10 text-purple-500 font-semibold px-4 py-1 rounded-full text-sm mb-6 w-fit">
                                客户体验
                            </div>
                            <h2 className="text-3xl font-bold mb-4">智能客服助手</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                基于大语言模型的下一代客服系统。不仅仅是回答常见问题，还能执行复杂任务，提供个性化服务。
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">1</div>
                                    <span className="text-muted-foreground">7x24 小时全天候服务</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">2</div>
                                    <span className="text-muted-foreground">无缝人机协作</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">3</div>
                                    <span className="text-muted-foreground">多语言支持</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                                    申请演示
                                </button>
                                <button className="border border-input px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors">
                                    了解更多
                                </button>
                            </div>
                        </div>
                        <div className="lg:order-1 bg-muted/50 h-full min-h-[400px] flex items-center justify-center p-8">
                            <div className="w-full max-w-md aspect-video relative rounded-lg shadow-2xl border border-border overflow-hidden">
                                <Image src="/images/product-customer-service.png" alt="Smart Customer Service" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="bg-card border border-border rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center">
                            <div className="inline-block bg-green-500/10 text-green-500 font-semibold px-4 py-1 rounded-full text-sm mb-6 w-fit">
                                工业制造
                            </div>
                            <h2 className="text-3xl font-bold mb-4">视觉检测 Pro</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                高精度工业视觉检测平台。利用深度学习技术，在毫秒级时间内识别微小缺陷，确保产品质量。
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">1</div>
                                    <span className="text-muted-foreground">99.9% 检测准确率</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">2</div>
                                    <span className="text-muted-foreground">边缘端实时推理</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-4 text-foreground font-bold">3</div>
                                    <span className="text-muted-foreground">快速适应新产品线</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                                    申请演示
                                </button>
                                <button className="border border-input px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors">
                                    了解更多
                                </button>
                            </div>
                        </div>
                        <div className="bg-muted/50 h-full min-h-[400px] flex items-center justify-center p-8">
                            <div className="w-full max-w-md aspect-video relative rounded-lg shadow-2xl border border-border overflow-hidden">
                                <Image src="/images/product-visual-inspection.png" alt="Visual Inspection Pro" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Custom Solution CTA */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        需要定制解决方案？
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        我们的产品只是开始。我们拥有强大的工程团队，可以为您量身定制 AI 解决方案。
                    </p>
                    <Link href="/services" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary-foreground bg-primary hover:opacity-90 transition-colors">
                        查看我们的服务
                    </Link>
                </div>
            </section>

            <CTA />
        </div>
    );
}
