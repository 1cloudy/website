import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                    联系我们
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    准备好开始您的 AI 之旅了吗？或者只是想聊聊？我们随时为您服务。
                </p>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">发送消息</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">名字</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="张"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">姓氏</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="三"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">工作邮箱</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="zhangsan@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">公司名称</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="您的公司"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">如何帮助您？</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                    placeholder="请简要描述您的项目需求..."
                                />
                            </div>

                            <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                发送消息
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">联系方式</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">电子邮箱</h3>
                                        <p className="text-muted-foreground mt-1">hello@ln2ai.com</p>
                                        <p className="text-muted-foreground">careers@ln2ai.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">办公地址</h3>
                                        <p className="text-muted-foreground mt-1">
                                            北京市海淀区中关村大街 1 号<br />
                                            海龙大厦 12 层
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">电话</h3>
                                        <p className="text-muted-foreground mt-1">+86 10 8888 8888</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                            <h3 className="text-xl font-bold mb-4">常见问题</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium mb-1">你们的项目周期通常是多久？</h4>
                                    <p className="text-sm text-muted-foreground">典型的 AI 工程项目周期为 2-4 个月，具体取决于复杂度和范围。</p>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">你们支持哪些技术栈？</h4>
                                    <p className="text-sm text-muted-foreground">我们精通 Python, PyTorch, TensorFlow, Next.js, 以及主流的云平台 (AWS, Azure, GCP)。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
