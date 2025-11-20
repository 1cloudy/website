import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-foreground font-bold text-xl tracking-tighter">
                            Ln2ai
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link href="/services" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                服务
                            </Link>
                            <Link href="/products" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                产品
                            </Link>
                            <Link href="/portfolio" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                案例
                            </Link>
                            <Link href="/resources" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                资源
                            </Link>
                            <Link href="/blog" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                博客
                            </Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                关于
                            </Link>
                            <Link href="/contact" className="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                联系我们
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        <ThemeToggle />
                        {/* Mobile menu button placeholder - implementing simple version first */}
                        <button type="button" className="bg-accent inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/80 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
