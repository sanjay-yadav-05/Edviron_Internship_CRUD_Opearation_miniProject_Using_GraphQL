# 💳 Payment Gateway System - Full Stack Application

A complete end-to-end payment gateway solution built with modern technologies. Features a robust NestJS + GraphQL + MongoDB backend and a beautiful React + TypeScript frontend with real-time analytics.

![NestJS](https://img.shields.io/badge/NestJS-10.0-red.svg)
![React](https://img.shields.io/badge/React-18.2-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![GraphQL](https://img.shields.io/badge/GraphQL-16.8-pink.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green.svg)

---

## 🌟 Overview

This project simulates a production-ready **payment gateway system** (similar to Razorpay, Stripe, or PayPal) with:

- **Backend**: RESTful GraphQL APIs for payment processing
- **Database**: MongoDB with advanced aggregation pipelines
- **Frontend**: Modern React SPA with real-time updates
- **Analytics**: Comprehensive payment insights and reporting
- **Type Safety**: Full TypeScript implementation across the stack

---

## 🎯 Key Features

### Backend Features
* ✅ **GraphQL API** – Modern API with type-safe queries and mutations
* ✅ **CRUD Operations** – Create, Read, Update, Delete payments
* ✅ **Payment Status Management** – Track PENDING → SUCCESS/FAILED transitions
* ✅ **MongoDB Aggregations** – Advanced analytics and reporting
* ✅ **Data Validation** – Robust input validation with class-validator
* ✅ **Auto-generated Documentation** – Interactive GraphQL Playground
* ✅ **Modular Architecture** – Clean, maintainable NestJS modules

### Frontend Features
* ✅ **Payment Creation** – User-friendly form to initiate payments
* ✅ **Payment History** – Real-time table with all transactions
* ✅ **Analytics Dashboard** – Visual insights on revenue and methods
* ✅ **Auto-refresh** – Live updates every 5 seconds
* ✅ **Search & Filter** – Find payments quickly
* ✅ **Responsive Design** – Works on all device sizes
* ✅ **Material-UI** – Professional, modern interface

### Analytics & Reporting
* 📊 **Revenue by Currency** – Track earnings per currency (INR, USD, EUR)
* 💳 **Payment Method Usage** – Analyze popular payment methods
* 📈 **Success Rate** – Monitor successful vs failed transactions
* 📅 **Daily Revenue Reports** – Time-series revenue tracking
* 👥 **User Spending Analysis** – Top spenders and average transaction values

---

## 📂 Project Structure

```
payment-gateway-system/
├── backend/                        # NestJS Backend
│   ├── src/
│   │   ├── modules/
│   │   │   └── payments/
│   │   │       ├── dto/            # Data Transfer Objects
│   │   │       ├── entities/       # MongoDB Schemas + GraphQL Types
│   │   │       ├── payments.resolver.ts
│   │   │       ├── payments.service.ts
│   │   │       └── payments.module.ts
│   │   ├── common/
│   │   │   └── enums/              # Shared enumerations
│   │   ├── app.module.ts           # Root module
│   │   └── main.ts                 # Application entry point
│   ├── test/                       # Unit and E2E tests
│   ├── package.json
│   └── README.md                   # Backend documentation
│
├── frontend/                       # React Frontend
│   ├── src/
│   │   ├── apollo/                 # Apollo Client setup
│   │   ├── graphql/                # Queries, mutations, types
│   │   ├── components/             # React components
│   │   ├── App.tsx                 # Main app component
│   │   └── index.tsx               # App entry point
│   ├── public/
│   ├── package.json
│   └── README.md                   # Frontend documentation
│
├── docs/                           # Additional documentation
│   ├── API.md                      # API documentation
│   ├── DEPLOYMENT.md               # Deployment guide
│   └── CONTRIBUTING.md             # Contribution guidelines
│
├── .gitignore
├── LICENSE
└── README.md                       # This file
```

---

## ⚡ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| [NestJS](https://nestjs.com/) | Backend framework (Node.js) |
| [GraphQL](https://graphql.org/) | API query language |
| [Apollo Server](https://www.apollographql.com/) | GraphQL server implementation |
| [MongoDB](https://www.mongodb.com/) | NoSQL database |
| [Mongoose](https://mongoosejs.com/) | MongoDB ODM |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe programming |
| [class-validator](https://github.com/typestack/class-validator) | Input validation |

### Frontend
| Technology | Purpose |
|------------|---------|
| [React](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe programming |
| [Apollo Client](https://www.apollographql.com/docs/react/) | GraphQL client |
| [Material-UI](https://mui.com/) | Component library |
| [React Hooks](https://react.dev/reference/react) | State management |

### DevOps & Tools
| Technology | Purpose |
|------------|---------|
| [Git](https://git-scm.com/) | Version control |
| [ESLint](https://eslint.org/) | Code linting |
| [Prettier](https://prettier.io/) | Code formatting |
| [Jest](https://jestjs.io/) | Testing framework |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

* **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
* **npm** or **yarn** - Comes with Node.js
* **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* **Git** - [Download](https://git-scm.com/)

### Quick Start (5 Minutes)

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/payment-gateway-system.git
cd payment-gateway-system
```

#### 2️⃣ Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
MONGO_URI=mongodb://localhost:27017/payments
PORT=3000
EOF

# Start MongoDB (if running locally)
mongod

# Start backend
npm run start:dev
```

Backend runs at → `http://localhost:3000/graphql`

#### 3️⃣ Setup Frontend

```bash
# Navigate to frontend (new terminal)
cd frontend

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
PORT=3001
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:3000/graphql
EOF

# Start frontend
npm start
```

Frontend opens at → `http://localhost:3001`

#### 4️⃣ Test the Application

1. **Backend**: Visit `http://localhost:3000/graphql` - GraphQL Playground
2. **Frontend**: Visit `http://localhost:3001` - React Application
3. **Create a payment** using the form
4. **View analytics** dashboard
5. **Check payment history** table

---

## 📖 Detailed Setup Instructions

### Backend Setup

#### Step 1: Environment Configuration

Create `backend/.env`:

```env
# Database
MONGO_URI=mongodb://localhost:27017/payments

# Server
PORT=3000
NODE_ENV=development

# Optional: MongoDB Atlas
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/payments
```

#### Step 2: Start MongoDB

**Option A: Local MongoDB**
```bash
mongod --dbpath /path/to/data/directory
```

**Option B: MongoDB Atlas (Cloud)**
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGO_URI` in `.env`

#### Step 3: Install and Run

```bash
cd backend
npm install
npm run start:dev
```

**Verify**: Visit `http://localhost:3000/graphql` - You should see GraphQL Playground

---

### Frontend Setup

#### Step 1: Environment Configuration

Create `frontend/.env`:

```env
PORT=3001
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:3000/graphql
```

#### Step 2: Install and Run

```bash
cd frontend
npm install
npm start
```

**Verify**: Browser opens at `http://localhost:3001` with the payment dashboard

---

## 🎯 Usage Guide

### Creating a Payment

**Via GraphQL Playground** (`http://localhost:3000/graphql`):

```graphql
mutation {
  createPayment(createPaymentInput: {
    userId: "user123"
    amount: 1500.00
    currency: "INR"
    method: "UPI"
    description: "iPhone 15 purchase"
  }) {
    id
    status
    createdAt
  }
}
```

**Via Frontend** (`http://localhost:3001`):

1. Fill the payment form
2. Click "Create Payment"
3. See success message
4. Payment appears in history table

### Updating Payment Status

```graphql
mutation {
  updatePayment(updatePaymentInput: {
    id: "65abc123def456"
    status: SUCCESS
    transactionId: "TXN987654321"
  }) {
    id
    status
    transactionId
  }
}
```

### Viewing Analytics

**Via GraphQL**:

```graphql
query {
  revenueByCurrency
  paymentMethodStats
  paymentStatusStats
}
```

**Via Frontend**:

Check the Analytics Dashboard section - automatically displays all stats visually.

---

## 📊 API Documentation

### GraphQL Schema

#### Types

```graphql
enum PaymentStatus {
  PENDING
  SUCCESS
  FAILED
  REFUNDED
}

type Payment {
  id: ID!
  userId: String!
  amount: Float!
  currency: String!
  method: String!
  status: PaymentStatus!
  transactionId: String
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}
```

#### Queries

| Query | Description | Arguments |
|-------|-------------|-----------|
| `payments` | Get all payments | None |
| `payment(id: ID!)` | Get single payment | `id`: Payment ID |
| `paymentsByUser(userId: String!)` | Get user's payments | `userId`: User identifier |
| `revenueByCurrency` | Revenue analytics | None |
| `paymentMethodStats` | Method usage stats | None |
| `paymentStatusStats` | Status breakdown | None |

#### Mutations

| Mutation | Description | Input |
|----------|-------------|-------|
| `createPayment` | Create new payment | `CreatePaymentInput` |
| `updatePayment` | Update payment | `UpdatePaymentInput` |
| `removePayment` | Delete payment | `id: ID!` |

### Full API Documentation

For complete API documentation, see [docs/API.md](docs/API.md)

---

## 🧪 Testing

### Backend Tests

```bash
cd backend

# Unit tests
npm test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Frontend Tests

```bash
cd frontend

# Unit tests
npm test

# Coverage report
npm test -- --coverage
```

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────┐
│                   Frontend                      │
│  (React + TypeScript + Apollo Client)           │
│  Port: 3001                                     │
└──────────────────┬──────────────────────────────┘
                   │
                   │ GraphQL Queries/Mutations
                   │ HTTP/HTTPS
                   ↓
┌─────────────────────────────────────────────────┐
│                   Backend                       │
│  (NestJS + GraphQL + Apollo Server)             │
│  Port: 3000                                     │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │         GraphQL Layer                    │  │
│  │  (Schema, Resolvers, Validation)         │  │
│  └──────────────┬───────────────────────────┘  │
│                 │                               │
│  ┌──────────────▼───────────────────────────┐  │
│  │         Service Layer                    │  │
│  │  (Business Logic, Data Processing)       │  │
│  └──────────────┬───────────────────────────┘  │
│                 │                               │
│  ┌──────────────▼───────────────────────────┐  │
│  │         Data Layer                       │  │
│  │  (Mongoose ODM, Aggregations)            │  │
│  └──────────────┬───────────────────────────┘  │
└─────────────────┼───────────────────────────────┘
                  │
                  │ MongoDB Protocol
                  ↓
┌─────────────────────────────────────────────────┐
│               MongoDB Database                  │
│  Collections: payments                          │
│  Port: 27017                                    │
└─────────────────────────────────────────────────┘
```

### Data Flow

```
User Action → Frontend Component → Apollo Client → GraphQL Query/Mutation
    → NestJS Resolver → Service Layer → MongoDB → Response
    → Apollo Cache Update → UI Re-render
```

---
