import Link from 'next/link';
import CTA from "@/components/CTA";

export default function ServicesPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                    我们的服务
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    我们提供端到端的 AI 工程服务，帮助企业利用人工智能技术解决复杂问题，创造商业价值。
                </p>
            </section>

            {/* Detailed Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">

                {/* Service 1: AI Engineering */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">AI 工程</h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            我们将前沿的 AI 模型转化为可靠的、可扩展的生产系统。不仅仅是演示，而是真正的工程落地。
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['大语言模型 (LLM) 应用开发', 'RAG (检索增强生成) 系统构建', '模型微调与优化', 'MLOps 与基础设施搭建'].map((item, i) => (
                                <li key={i} className="flex items-center text-foreground">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="text-blue-500 font-medium hover:text-blue-400 flex items-center transition-colors">
                            探讨此服务 <span className="ml-2">→</span>
                        </Link>
                    </div>
                    <div className="bg-card border border-border rounded-2xl p-8">
                        <h3 className="text-lg font-semibold mb-4 text-muted-foreground">案例研究</h3>
                        <div className="text-2xl font-bold mb-2">企业级知识库问答系统</div>
                        <p className="text-muted-foreground mb-6">
                            为一家财富 500 强企业构建了基于 RAG 的内部知识库助手，将员工检索信息的时间缩短了 70%。
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-accent px-3 py-1 rounded text-sm">LangChain</div>
                            <div className="bg-accent px-3 py-1 rounded text-sm">Pinecone</div>
                            <div className="bg-accent px-3 py-1 rounded text-sm">OpenAI</div>
                        </div>
                    </div>
                </div>

                {/* Service 2: AI Strategy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                    <div className="lg:order-2">
                        <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">AI 战略与咨询</h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            在 AI 浪潮中迷失方向？我们帮助您制定清晰的 AI 转型路线图，识别高价值场景，规避风险。
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['AI 成熟度评估', '用例识别与 ROI 分析', '技术选型建议', 'AI 团队建设指导'].map((item, i) => (
                                <li key={i} className="flex items-center text-foreground">
                                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="text-purple-500 font-medium hover:text-purple-400 flex items-center transition-colors">
                            探讨此服务 <span className="ml-2">→</span>
                        </Link>
                    </div>
                    <div className="lg:order-1 bg-card border border-border rounded-2xl p-8">
                        <h3 className="text-lg font-semibold mb-4 text-muted-foreground">案例研究</h3>
                        <div className="text-2xl font-bold mb-2">金融科技 AI 转型规划</div>
                        <p className="text-muted-foreground mb-6">
                            协助一家金融科技公司制定了为期 3 年的 AI 战略，确定了 5 个核心落地场景，预计每年节省成本 200 万美元。
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-accent px-3 py-1 rounded text-sm">战略规划</div>
                            <div className="bg-accent px-3 py-1 rounded text-sm">技术咨询</div>
                        </div>
                    </div>
                </div>

                {/* Service 3: Custom Development */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">定制 AI 开发</h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            针对您的独特业务流程，开发高度定制化的 AI 解决方案。不只是套用 API，而是深度集成。
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['计算机视觉应用', '预测性分析模型', '智能自动化流程 (RPA + AI)', '边缘 AI 部署'].map((item, i) => (
                                <li key={i} className="flex items-center text-foreground">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="text-green-500 font-medium hover:text-green-400 flex items-center transition-colors">
                            探讨此服务 <span className="ml-2">→</span>
                        </Link>
                    </div>
                    <div className="bg-card border border-border rounded-2xl p-8">
                        <h3 className="text-lg font-semibold mb-4 text-muted-foreground">案例研究</h3>
                        <div className="text-2xl font-bold mb-2">工业质检视觉系统</div>
                        <p className="text-muted-foreground mb-6">
                            开发了一套基于深度学习的视觉检测系统，将生产线缺陷检测准确率从 85% 提升至 99.5%。
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-accent px-3 py-1 rounded text-sm">PyTorch</div>
                            <div className="bg-accent px-3 py-1 rounded text-sm">Edge AI</div>
                            <div className="bg-accent px-3 py-1 rounded text-sm">CV</div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Process Section */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">我们的工作流程</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            经过验证的敏捷开发流程，确保项目按时交付并达到预期效果。
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: '1. 发现与规划', desc: '深入理解业务需求，定义成功指标，制定技术方案。' },
                            { title: '2. 原型与验证', desc: '快速构建 MVP，验证核心假设，收集反馈。' },
                            { title: '3. 开发与优化', desc: '迭代开发生产级代码，持续优化模型性能。' },
                            { title: '4. 部署与运维', desc: '自动化部署，建立监控体系，确保长期稳定运行。' },
                        ].map((step, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-bold text-muted/50 absolute -top-8 -left-4 z-0">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
