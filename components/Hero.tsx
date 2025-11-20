import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-background pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 max-w-4xl">
                    <span className="block">面向未来的</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        AI 工程
                    </span>
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    我们构建生产就绪的 AI 系统，改变企业的运营方式。从战略规划到落地部署，全程助力。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary-foreground bg-primary hover:opacity-90 md:text-lg transition-all">
                        开始构建
                    </Link>
                    <Link href="/services" className="inline-flex items-center justify-center px-8 py-3 border border-input text-base font-medium rounded-full text-foreground hover:bg-accent md:text-lg transition-all backdrop-blur-sm">
                        查看案例
                    </Link>
                </div>

                <div className="mt-20">
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">深受前瞻性企业信赖</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale dark:invert-0 invert">
                        {/* Placeholders for logos */}
                        <div className="h-8 w-24 bg-muted-foreground/20 rounded"></div>
                        <div className="h-8 w-24 bg-muted-foreground/20 rounded"></div>
                        <div className="h-8 w-24 bg-muted-foreground/20 rounded"></div>
                        <div className="h-8 w-24 bg-muted-foreground/20 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
