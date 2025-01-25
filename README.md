# To run this repo

`pnpm prisma generate`
 + créer un .env 
 + set les var env dans le fichier
# Fastory, Technical test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What I Did

- I began to setup the repo, update dependencies etc.
- I have updated the login form to handle the name and password method to auth user.
- update login form to handle name/password method
- abstract the communication with star wars API

## To Do

- add table to represent data displayed
- add pagination to navigate through different pages
- implement search feature
- create a page for each item in db
- add debounce to search feature

## Bonus 

- reset-password page with a question to change password 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# BoirlerPlateWEB2024

This boilerpalte was created with different tools : 

- React + NextJS
- Prisma Orm
- Tailwind
- Typescript
- Zod
- React Hook Form
- Shadcn/ui

I could possibly add this packages if i think it's relevant:
- Resend
- react-email
- GSAP
- NextAuth

If needed, I use Vercel to deploy the app and Neon to deploy db
