"use client";

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { href: "/services", label: "服务" },
        { href: "/products", label: "产品" },
        { href: "/portfolio", label: "案例" },
        { href: "/resources", label: "资源" },
        { href: "/blog", label: "博客" },
        { href: "/about", label: "关于" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-foreground font-bold text-xl tracking-tighter" onClick={closeMenu}>
                            Ln2ai
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" className="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                联系我们
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="bg-accent inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/80 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground hover:bg-accent block px-3 py-2 rounded-md text-base font-medium"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-foreground text-background hover:bg-foreground/90 block px-3 py-2 rounded-md text-base font-medium mt-4 text-center"
                            onClick={closeMenu}
                        >
                            联系我们
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
