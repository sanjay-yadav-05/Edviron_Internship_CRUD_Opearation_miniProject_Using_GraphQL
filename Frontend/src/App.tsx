// import React from "react";
// import { ApolloProvider } from "@apollo/client/react";
// import client from "./apollo/client";
// import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
// import PaymentForm from "./components/PaymentForm";
// import PaymentList from "./components/PaymentList";
// import Analytics from "./components/Analytics";

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               💳 Payment Gateway Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
//           {/* Create Payment Form */}
//           <PaymentForm />

//           {/* Analytics Dashboard */}
//           <Analytics />

//           {/* Payment List */}
//           <PaymentList />
//         </Container>
//       </Box>
//     </ApolloProvider>
//   );
// }

// export default App;



import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import client from "./apollo/client";
import theme from "./theme";

import Home from "./pages/Home";
import CreatePayment from "./pages/CreatePayment";
import PaymentHistory from "./pages/PaymentHistory";
import Dashboard from "./pages/Dashboard";
import PaymentDetailsPage from "./pages/PaymentDetailsPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                💳 Payment Gateway
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/create-payment">Create Payment</Button>
              <Button color="inherit" component={Link} to="/payment-history">Payment History</Button>
              <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            </Toolbar>
          </AppBar>

          <Container sx={{ mt: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-payment" element={<CreatePayment />} />
              <Route path="/payment-history" element={<PaymentHistory />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/payment/:id" element={<PaymentDetailsPage />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
