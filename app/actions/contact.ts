'use server'

import { appendToSheet } from '@/lib/google-sheets';

export async function submitContact(prevState: any, formData: FormData) {
    const rawFormData = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        company: formData.get('company') as string,
        message: formData.get('message') as string,
        date: new Date().toISOString(),
    }

    // Basic validation
    if (!rawFormData.email || !rawFormData.message) {
        return { message: '请填写必要信息 (邮箱和消息)', success: false }
    }

    // Log to server console
    console.log('------------------------------------------------')
    console.log('New Contact Form Submission:')
    console.log(rawFormData)
    console.log('------------------------------------------------')

    // Save to Google Sheets
    const sheetSuccess = await appendToSheet(rawFormData);

    if (!sheetSuccess) {
        console.log('Failed to save to Google Sheet (check credentials)');
    } else {
        console.log('Saved to Google Sheet successfully');
    }

    return { message: '消息已发送！我们会尽快与您联系。', success: true }
}
