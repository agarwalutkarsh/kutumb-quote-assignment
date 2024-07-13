## Author
This is the Kutumb Assighment Submitted By Utkarsh Agarwal

## Project Overview
This project is a frontend application built using Next.js, Tailwind CSS, Material UI and Axios to interact with the provided APIs for user authentication, quote creation, and retrieval of quotes and generating media url. The application is designed to be responsive and optimized for mobile devices.

## Live Demo
🚀 The project is hosted on vercel and live 🚀. Go to [Project Demo](https://kutumb-quote-assignment.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Running Locally In Development Mode

```bash
git clone https://github.com/agarwalutkarsh/kutumb-quote-assignment.git
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
- Login page - Enables user to login using username and otp
- Quote List Page -
    1. Displays paginated list of quotes
    2. Displays a image stored in mediaUrl with overlay text over the image
    3. Pagination stops where the API return empty response
    4. Below each image, username and created_at info is shown
    5. Responsive design for optimal mobile experience
- Quote Creation Page - Enables the user to post their quote with the image they want.

  ## Possible Future Improvements
  - Designing alternative - Can have inifinite scrolling instead of pagination in the quotes listing.
  - Optimization - CDNs can be explored for Image Optimization
  - Performance Enhancement - Redis cache can be used to cache the data to enhance the performance and user experience


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
