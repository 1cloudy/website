import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 bg-background text-foreground border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    准备好构建非凡的产品了吗？
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    让我们讨论您的 AI 项目，探索如何将您的愿景变为现实。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary-foreground bg-primary hover:opacity-90 transition-colors">
                        联系我们
                    </Link>
                    <Link href="/about" className="inline-flex items-center justify-center px-8 py-3 border border-input text-base font-medium rounded-full text-foreground hover:bg-accent transition-colors">
                        了解我们
                    </Link>
                </div>
            </div>
        </section>
    );
}
