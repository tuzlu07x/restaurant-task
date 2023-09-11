# First Exercise

## Project Usage Guide

This document provides the necessary steps to clone the project, install dependencies, set up the database with seed data, compile frontend assets, and access the RESTful endpoint at /restaurants.

## Step 1: Clone the Project

To clone the project to your local machine, use the following command:

```
git clone

```

## Step 2: Install Composer Dependencies

After navigating to the project folder, use Composer to install the required PHP dependencies:

```
composer install
```

## Step 3: Create the Database and Seed Data

To create the database and populate it with sample data, run the following command:

```
php artisan migrate --seed
```

## Step 4: Install NPM Dependencies and Compile Frontend

Install frontend dependencies and compile frontend assets by running the following commands:

```
npm install
npm run dev
```

## Step 5: Access the RESTful Endpoint

Open your browser or use your preferred API testing tool to navigate to the following URL:

```
http://localhost:8000/restaurants
```

You can access the RESTful endpoint by following the relevant routing in the RestaurantController.

## Notes

For more information or documentation about the project, refer to the project's source code and relevant documentation.

# Second Excercise

## First

    if you wanna see my API you should go to app/Entegration/Kanye

    you go to this address for login http://localhost:8000/login

```
    email = test@test.com
    password = 123456789
```

And after you logined the page redirect this address http://localhost:8000/kanye
