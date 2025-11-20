export default function Services() {
    return (
        <section className="py-24 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        我们的服务
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        我们与企业合作，构建能够解决实际问题的 AI 系统。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="p-8 rounded-2xl bg-card border border-border hover:bg-accent transition-colors">
                        <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">AI 工程</h3>
                        <p className="text-muted-foreground">
                            构建可扩展的生产就绪 AI 系统。我们专注于代码质量、性能和可靠性。
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="p-8 rounded-2xl bg-card border border-border hover:bg-accent transition-colors">
                        <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">AI 战略</h3>
                        <p className="text-muted-foreground">
                            从概念到部署的战略指导。我们帮助您识别高价值的 AI 机会。
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="p-8 rounded-2xl bg-card border border-border hover:bg-accent transition-colors">
                        <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">定制开发</h3>
                        <p className="text-muted-foreground">
                            针对独特业务需求的定制 AI 解决方案。不只是通用的 API 调用。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
