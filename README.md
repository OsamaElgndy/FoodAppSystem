# FoodAppSystem

## Overview

FoodAppSystem is a **real-time food ordering system** designed to provide users with a seamless experience for ordering food online. Built with **React**, **Vite**, **TypeScript**, and **Bootstrap** on the front-end, and **Node.js**, **Nest.js**, and **Supabase** for the back-end, this application supports secure user authentication, real-time order processing, and payment integration.

The system provides two types of users: **customers** who can browse food menus, place orders, and manage their profiles, and **admins** who can manage food items, view orders, and perform other administrative tasks. Supabase is used for real-time data handling, authentication, and database interactions.

## Features

- **Real-time Ordering System:** Customers can browse food items, place orders, and track the status of their orders.
- **User Authentication & Roles:** Users can register, log in, and manage their profiles. Admins have special privileges to manage the menu and orders.
- **Food Menu Management:** Admins can add, update, and remove food items from the menu.
- **Order Management:** Customers can place orders, view order history, and track their current orders. Admins can view and manage all customer orders.
- **Payment Integration:** Secure payment system integrated for processing orders (placeholder for future payment systems like Stripe).
- **Responsive UI:** Built using **React** and **Bootstrap** for a clean, responsive, and user-friendly interface.
- **Real-time Data with Supabase:** Real-time updates of order statuses and user profiles.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web apps.
- **TypeScript:** A statically typed superset of JavaScript.
- **Bootstrap:** A front-end framework for building responsive, mobile-first websites.
- **Node.js:** JavaScript runtime for building server-side applications.
- **Nest.js:** A framework for building scalable and maintainable server-side applications with TypeScript.
- **Supabase:** A backend-as-a-service (BaaS) for real-time database management, authentication, and storage. Uses PostgreSQL as the database engine.

## Features

### Front-end

- **Food Menu Browsing:** A clean UI to display food items in categories (e.g., appetizers, main courses, desserts).
- **User Profiles:** Customers can manage their personal information, view order history, and update their account details.
- **Real-time Updates:** The order status (e.g., preparing, completed) is updated in real-time for customers and admins.
- **Responsive Design:** Fully responsive design to ensure smooth experience across desktops, tablets, and mobile devices.

### Back-end

- **RESTful APIs:** Built with **Node.js** and **Nest.js**, the backend supports CRUD operations for food items, orders, and users.
- **Authentication:** JWT-based authentication for secure login and role-based access control for users and admins.
- **Supabase Integration:** Real-time database with Supabase for managing user profiles, food items, and order history. Utilizes Supabase’s PostgreSQL database.
- **Payment Integration (Placeholder):** Future integration for handling secure payment transactions for food orders.

## API Endpoints

### Authentication

- **POST `/auth/register`** - Register a new user (customer/admin)
- **POST `/auth/login`** - Log in with JWT-based authentication
- **POST `/auth/logout`** - Log out the current user

### Users

- **GET `/users/:userId`** - Get user profile details
- **PUT `/users/:userId`** - Update user profile information

### Food Menu (Admin only)

- **GET `/food`** - Retrieve all food items
- **POST `/food`** - Add a new food item (Admin only)
- **PUT `/food/:foodId`** - Update food item details (Admin only)
- **DELETE `/food/:foodId`** - Delete a food item (Admin only)

### Orders

- **GET `/orders`** - Retrieve all orders (Admin only)
- **GET `/orders/:orderId`** - Get details of a specific order (Admin & Customer)
- **POST `/orders`** - Create a new order (Customer)
- **PUT `/orders/:orderId`** - Update order status (Admin only)
- **DELETE `/orders/:orderId`** - Cancel an order (Customer/Admin)

## Installation

### Docker Setup (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/FoodAppSystem.git


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
