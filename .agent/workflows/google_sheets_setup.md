---
description: How to set up Google Sheets API and get credentials
---

# Google Sheets API Setup Guide

Follow these steps to obtain the `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, and `GOOGLE_SHEET_ID`.

## 1. Create a Google Cloud Project
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Click on the project dropdown at the top left and select **"New Project"**.
3.  Give it a name (e.g., "Ln2ai Contact Form") and click **"Create"**.

## 2. Enable Google Sheets API
1.  In the search bar at the top, type **"Google Sheets API"**.
2.  Select "Google Sheets API" from the Marketplace results.
3.  Click **"Enable"**.

## 3. Create a Service Account
1.  In the search bar, type **"Service Accounts"** (under IAM & Admin) and select it.
2.  Click **"+ CREATE SERVICE ACCOUNT"** at the top.
3.  **Step 1**: Give it a name (e.g., "sheets-integrator"). Click "Create and Continue".
4.  **Step 2**: For "Select a role", choose **"Editor"** (Project > Editor) or "Basic > Editor". Click "Continue".
5.  **Step 3**: Click "Done".

## 4. Get Credentials (Email & Key)
1.  You should now see your new service account in the list.
2.  **Copy the Email**: Look for the "Email" column (e.g., `sheets-integrator@project-id.iam.gserviceaccount.com`).
    *   Paste this into your `.env.local` as `GOOGLE_SERVICE_ACCOUNT_EMAIL`.
3.  **Create Key**:
    *   Click on the service account email to open details.
    *   Go to the **"KEYS"** tab.
    *   Click **"ADD KEY"** > **"Create new key"**.
    *   Select **"JSON"** and click "Create".
    *   A JSON file will automatically download to your computer.
4.  **Extract Private Key**:
    *   Open the downloaded JSON file with a text editor.
    *   Find the `"private_key"` field. It looks like `"-----BEGIN PRIVATE KEY-----\n..."`.
    *   Copy the *entire* string (including `-----BEGIN...` and `-----END...`).
    *   Paste this into your `.env.local` as `GOOGLE_PRIVATE_KEY`.

## 5. Create and Share the Sheet
1.  Go to [Google Sheets](https://docs.google.com/spreadsheets) and create a new blank sheet.
2.  **Get Sheet ID**: Look at the URL. It looks like:
    `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_IS_HERE/edit#gid=0`
    *   Copy the long string between `/d/` and `/edit`.
    *   Paste this into your `.env.local` as `GOOGLE_SHEET_ID`.
3.  **Share with Service Account**:
    *   Click the big green **"Share"** button in the top right.
    *   In the "Add people and groups" box, paste the **Service Account Email** (from step 4.2).
    *   Make sure "Editor" is selected.
    *   Click "Send" (uncheck "Notify people" if you want, it doesn't matter).

## 6. Add Headers
1.  In your new Sheet, add the following headers to the first row (A1, B1, C1, etc.):
    *   `firstName`
    *   `lastName`
    *   `email`
    *   `company`
    *   `message`
    *   `date`
    *   *(Note: These must match the keys in the `rawFormData` object in `app/actions/contact.ts`)*

## 7. Test
1.  Restart your dev server (`npm run dev`) to load the new environment variables.
2.  Go to your Contact page and submit the form.
3.  Check your Google Sheet!
