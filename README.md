

## 🤖 Introduction

Built with the latest Next.js and TypeScript, **Finan Smart** is an advanced AI financial advice tool. It allows users to input their income, expenses, and budgets, and receive personalized financial advice based on their financial data. This project is perfect for those looking to learn how to integrate AI-driven insights and financial management into a Next.js application.


## ⚙️ Tech Stack

- Next.js
- TypeScript
- OpenAI API
- Tailwind CSS

## 🔋 Features

- **Income and Expense Input**: Allows users to input their income and expenses.
- **Budget Management**: Enables users to manage their budgets effectively.
- **Personalized Financial Advice**: Provides detailed financial advice based on user-specific financial data using OpenAI's GPT-4 model.
- **Responsive Design**: Ensures a seamless experience across different devices.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/mendsalbert/ai-finance-tracking.git
cd ai-finance-tracking
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_OPENAI_API_KEY=
NEXT_PUBLIC_DATABASE_URL=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the respective service providers' websites.

### Running the Project

```bash
npm run dev
```

![image](https://github.com/user-attachments/assets/6b329416-6264-4fda-9b84-e60632fd3dbd)



