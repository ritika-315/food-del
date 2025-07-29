# TOMATO - Food Ordering Website

This repository hosts the source code for TOMATO, a dynamic food ordering website built with the MERN Stack. It offers a user-friendly platform for seamless online food ordering.

## Demo

- Frontend URL = "https://food-del-frontend-og4n.onrender.com"
- Backend URL = "https://food-del-backend-mnh7.onrender.com"
- Admin URL = "https://food-del-admin-a8ut.onrender.com"


## Features

- User Panel
- Admin Panel
- JWT Authentication
- Password Hashing with Bcrypt
- Stripe Payment Integration
- Login/Signup
- Logout
- Add to Cart
- Place Order
- Order Management
- Products Management
- Filter Food Products
- Login/Signup
- Authenticated APIs
- REST APIs
- Role-Based Identification
- Beautiful Alerts

## Screenshots

![Hero](<img width="1895" height="823" alt="image" src="https://github.com/user-attachments/assets/189d8f43-946c-4f29-b18d-7ee51cb2a5f9" />
)
- Hero Section

![Products](<img width="1892" height="822" alt="image" src="https://github.com/user-attachments/assets/1c4c6201-4518-454f-94b6-44b566d24038" />
)
- Products Section

![Cart](<img width="1893" height="821" alt="image" src="https://github.com/user-attachments/assets/2944f2b6-a1c2-46db-baf2-7e117043817c" />
)
- Cart Page

![Login](<img width="1898" height="822" alt="image" src="https://github.com/user-attachments/assets/7eb6240f-4496-49fe-86d8-7e7027139f81" />
)
- Login Popup

## Run Locally

Clone the project

```bash
    git clone https://github.com/ritika-315/food-del/
```
Go to the project directory

```bash
    cd food-del
```
Install dependencies (frontend)

```bash
    cd frontend
    npm install
```
Install dependencies (admin)

```bash
    cd admin
    npm install
```
Install dependencies (backend)

```bash
    cd backend
    npm install
```
Setup Environment Vaiables

```Make .env file in "backend" folder and store environment Variables
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
 ```

Setup the Frontend and Backend URL
   - App.jsx in Admin folder
      const url = YOUR_BACKEND_URL
     
  - StoreContext.js in Frontend folder
      const url = YOUR_BACKEND_URL

  - orderController in Backend folder
      const frontend_url = YOUR_FRONTEND_URL 

Start the Backend server

```bash
    npm run server
```

Start the Frontend server

```bash
    npm run dev
```

Start the Admin server

```bash
    npm run dev
```
## Tech Stack
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)
* [Stripe](https://stripe.com/)
* [JWT-Authentication](https://jwt.io/introduction)
* [Multer](https://www.npmjs.com/package/multer)

## Deployment

The application is deployed on Render.

