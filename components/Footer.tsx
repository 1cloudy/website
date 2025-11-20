import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background text-foreground border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">保持领先的 AI 洞察</h3>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            获取独家 AI 案例研究、实施指南和行业洞察，每月发送。加入 5,000+ AI 专业人士。
                        </p>
                        <form className="flex gap-2 max-w-md">
                            <input
                                type="email"
                                placeholder="输入您的邮箱"
                                className="flex-1 bg-muted border border-input rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button
                                type="button"
                                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                订阅
                            </button>
                        </form>
                        <p className="text-xs text-muted-foreground mt-3">
                            无垃圾邮件，随时退订。我们尊重您的隐私。
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">公司</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground transition-colors">关于</Link></li>
                            <li><Link href="/services" className="hover:text-foreground transition-colors">服务</Link></li>
                            <li><Link href="/products" className="hover:text-foreground transition-colors">产品</Link></li>
                            <li><Link href="/portfolio" className="hover:text-foreground transition-colors">案例</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground transition-colors">联系</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">资源</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">博客</Link></li>
                            <li><Link href="/resources" className="hover:text-foreground transition-colors">资源库</Link></li>
                            <li><Link href="/case-studies" className="hover:text-foreground transition-colors">案例研究</Link></li>
                            <li><Link href="/team" className="hover:text-foreground transition-colors">团队</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-2xl font-bold tracking-tighter">Ln2ai</div>
                    <div className="text-muted-foreground text-sm">
                        © 2025 Ln2ai. 为未来而建。
                    </div>
                </div>
            </div>
        </footer>
    );
}
