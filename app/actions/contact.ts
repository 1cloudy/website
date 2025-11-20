'use server'

export async function submitContact(prevState: any, formData: FormData) {
    const rawFormData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
    }

    // Basic validation
    if (!rawFormData.email || !rawFormData.message) {
        return { message: '请填写必要信息 (邮箱和消息)', success: false }
    }

    // Simulate email sending (Log to server console)
    console.log('------------------------------------------------')
    console.log('New Contact Form Submission:')
    console.log(rawFormData)
    console.log('------------------------------------------------')

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { message: '消息已发送！我们会尽快与您联系。', success: true }
}
