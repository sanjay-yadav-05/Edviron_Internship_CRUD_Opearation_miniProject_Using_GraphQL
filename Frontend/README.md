# 💳 Payment Gateway Frontend

A modern React + TypeScript frontend application for managing payment transactions with real-time analytics and beautiful UI.

![React](https://img.shields.io/badge/React-18.2-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![Apollo Client](https://img.shields.io/badge/Apollo%20Client-3.8-purple.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-5.14-blue.svg)

---

## 🚀 Features

* ✅ **Create Payments** – Intuitive form to initiate payment transactions
* ✅ **Payment History** – View all payments in a beautiful data table
* ✅ **Real-time Updates** – Auto-refresh every 5 seconds
* ✅ **Analytics Dashboard** – Visual insights on revenue, methods, and status
* ✅ **Search & Filter** – Quickly find specific payments
* ✅ **Responsive Design** – Works on desktop, tablet, and mobile
* ✅ **Type Safety** – Full TypeScript support with proper typing
* ✅ **Error Handling** – Graceful error messages and loading states

---

## 📂 Project Structure

```
payment-gateway-frontend/
 ├── src/
 │   ├── apollo/
 │   │   └── client.ts              # Apollo Client configuration
 │   │
 │   ├── graphql/
 │   │   ├── types.ts               # TypeScript type definitions
 │   │   ├── queries.ts             # GraphQL queries
 │   │   └── mutations.ts           # GraphQL mutations
 │   │
 │   ├── components/
 │   │   ├── PaymentForm.tsx        # Payment creation form
 │   │   ├── PaymentList.tsx        # Payment table display
 │   │   ├── Analytics.tsx          # Analytics dashboard
 │   │   └── UpdatePaymentDialog.tsx # Update payment modal
 │   │
 │   ├── App.tsx                    # Main application component
 │   ├── index.tsx                  # Application entry point
 │   └── index.css                  # Global styles
 │
 ├── public/
 │   └── index.html                 # HTML template
 │
 ├── package.json                   # Dependencies and scripts
 ├── tsconfig.json                  # TypeScript configuration
 └── README.md                      # This file
```

---

## ⚡ Tech Stack

* **Framework**: [React 18.2](https://react.dev/)
* **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
* **GraphQL Client**: [Apollo Client 3.8](https://www.apollographql.com/docs/react/)
* **UI Library**: [Material-UI 5.14](https://mui.com/)
* **State Management**: Apollo Client Cache
* **HTTP Client**: Apollo Link (built-in)

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (v16 or higher)
* **npm** or **yarn**
* **Backend API** running on `http://localhost:3000/graphql`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/payment-gateway-frontend.git
cd payment-gateway-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
PORT=3001
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:3000/graphql
```

### 4. Start Development Server

```bash
npm start
```

The application will open at → `http://localhost:3001`

---

## 📋 Available Scripts

### `npm start`
Runs the app in development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
The build is minified and optimized for best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

---

## 🎯 Usage Examples

### Creating a Payment

1. Navigate to the payment form at the top of the page
2. Fill in the required fields:
   - **User ID**: e.g., `user123`
   - **Amount**: e.g., `1500.00`
   - **Currency**: Select from dropdown (INR, USD, EUR)
   - **Payment Method**: Select from dropdown (UPI, Credit Card, etc.)
   - **Description**: Optional payment description
3. Click **"Create Payment"** button
4. See success message and new payment appears in the list

### Viewing Payment History

- Scroll down to the **Payment History** section
- View all payments in a sortable table
- Table automatically refreshes every 5 seconds
- Click on a payment row for more details

### Viewing Analytics

- Check the **Analytics Dashboard** section
- See three key metrics:
  - **Revenue by Currency**: Total revenue for each currency
  - **Payment Methods**: Most used payment methods
  - **Payment Status**: Success/Failed/Pending breakdown

---

## 🔌 API Integration

### GraphQL Endpoint

The frontend connects to the backend GraphQL API:

```typescript
// src/apollo/client.ts
const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql', // Backend GraphQL endpoint
});
```

### GraphQL Operations

#### Queries
- `GET_ALL_PAYMENTS` - Fetch all payments
- `GET_PAYMENT_BY_ID` - Fetch single payment by ID
- `GET_PAYMENTS_BY_USER` - Fetch payments for a specific user
- `GET_REVENUE_BY_CURRENCY` - Get revenue analytics by currency
- `GET_PAYMENT_METHOD_STATS` - Get payment method statistics
- `GET_PAYMENT_STATUS_STATS` - Get payment status breakdown

#### Mutations
- `CREATE_PAYMENT` - Create a new payment
- `UPDATE_PAYMENT` - Update payment status or transaction ID
- `DELETE_PAYMENT` - Delete a payment
---