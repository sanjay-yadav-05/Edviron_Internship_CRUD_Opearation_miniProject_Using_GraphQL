# 💳 Payment Gateway Service (NestJS + GraphQL + MongoDB)

A mini backend service that simulates a **payment gateway system** (like Razorpay/Stripe/PayPal).
It provides **GraphQL APIs** to manage payments and supports **MongoDB aggregation pipelines** for analytics.

---

## 🚀 Features

* ✅ **Create Payment** – initiate a new payment request
* ✅ **Read Payments** – fetch all payments or by ID
* ✅ **Update Payment** – change status (`PENDING → SUCCESS/FAILED`) & add transaction ID
* ✅ **Delete Payment** – remove payment records
* ✅ **Analytics with MongoDB Aggregation** – revenue reports, payment method usage, etc.

---

## 📂 Folder Structure

```
nestjs-payment-service/
 ├── src/
 │   ├── modules/
 │   │   ├── payments/
 │   │   │   ├── dto/                   # GraphQL input DTOs
 │   │   │   │   ├── create-payment.input.ts
 │   │   │   │   ├── update-payment.input.ts
 │   │   │   ├── entities/              # MongoDB schema + GraphQL type
 │   │   │   │   ├── payment.entity.ts
 │   │   │   ├── payments.resolver.ts   # GraphQL queries & mutations
 │   │   │   ├── payments.service.ts    # Business logic (CRUD + aggregation)
 │   │   │   ├── payments.module.ts     # NestJS module definition
 │   │
 │   ├── common/                        # Shared code (enums, filters, guards, interceptors)
 │   │   ├── enums/
 │   │   │   ├── payment-status.enum.ts
 │   │
 │   ├── app.module.ts                  # Root module
 │   ├── main.ts                        # Entry point
 │
 ├── test/                              # Jest tests
 ├── .env                               # Environment variables
 ├── package.json
 ├── README.md
```

---

## ⚡ Tech Stack

* **Backend Framework**: [NestJS](https://nestjs.com/)
* **API**: GraphQL with Apollo Server
* **Database**: MongoDB with Mongoose
* **Language**: TypeScript

---

## 🔧 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/nestjs-payment-service.git
cd nestjs-payment-service
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in root:

```
MONGO_URI=mongodb://localhost:27017/payments
PORT=3000
```

### 4. Run MongoDB

If running locally:

```bash
mongod
```

(or use MongoDB Atlas connection string in `.env`)

### 5. Start the app

```bash
npm run start:dev
```

App runs at → `http://localhost:3000/graphql`

---

## 🎯 Example GraphQL Queries

### Create Payment

```graphql
mutation {
  createPayment(createPaymentInput: {
    userId: "u123"
    amount: 1500
    currency: "INR"
    method: "UPI"
  }) {
    id
    status
  }
}
```

### Get All Payments

```graphql
query {
  payments {
    id
    userId
    amount
    currency
    method
    status
  }
}
```

### Update Payment

```graphql
mutation {
  updatePayment(updatePaymentInput: {
    id: "123"
    status: "SUCCESS"
    transactionId: "TXN98765"
  }) {
    id
    status
    transactionId
  }
}
```

---

## 📊 MongoDB Aggregation Examples

**Total Revenue by Currency**

```js
db.payments.aggregate([
  { $match: { status: "SUCCESS" } },
  { $group: { _id: "$currency", totalRevenue: { $sum: "$amount" } } }
])
```

**Payment Methods Usage**

```js
db.payments.aggregate([
  { $group: { _id: "$method", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])
```

---

## 👨‍💻 Author

**Sanjay Yadav** – SDE Intern @ Edviron
🚀 Passionate about full-stack development, scalable backend systems, and fintech solutions.

---

Made with ❤️ using NestJS, GraphQL & MongoDB
