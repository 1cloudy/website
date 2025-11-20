import Link from 'next/link';
import CTA from "@/components/CTA";

export default function AboutPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                    关于 Ln2ai
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    我们是一群工程师、研究人员和战略家，致力于构建 AI 的未来。
                </p>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                Ln2ai 成立于 2020 年，当时我们观察到一个普遍现象：许多企业在 AI 实验上投入巨大，但很少能将模型转化为产生实际价值的生产系统。
                            </p>
                            <p>
                                我们看到了"演示软件"和"生产软件"之间的巨大鸿沟。我们的使命就是填补这一鸿沟。
                            </p>
                            <p>
                                今天，我们已经帮助从初创公司到财富 500 强的数十家企业成功落地了 AI 战略。我们不只是交付代码，我们交付的是可衡量的商业成果。
                            </p>
                        </div>
                    </div>
                    <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center text-muted-foreground">
                        团队合影占位符
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-16 text-center">我们的价值观</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-500 font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold mb-3">创新优先</h3>
                            <p className="text-muted-foreground">
                                我们不断探索技术的边界，但始终保持务实。我们追求的不是新奇，而是更优的解决方案。
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-500 font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold mb-3">以人为本</h3>
                            <p className="text-muted-foreground">
                                技术应增强人类的能力，而不是取代人类。我们设计 AI 系统时始终将用户体验放在首位。
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 text-green-500 font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold mb-3">追求卓越</h3>
                            <p className="text-muted-foreground">
                                我们对代码质量、系统稳定性和交付标准有着近乎苛刻的要求。因为在生产环境中，细节决定成败。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
                <p className="text-2xl font-medium leading-relaxed">
                    "通过构建可靠、智能且易于使用的 AI 系统，赋能企业释放数据的潜能，推动社会生产力的飞跃。"
                </p>
            </section>

            <CTA />
        </div>
    );
}
