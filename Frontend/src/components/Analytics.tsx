// import React from "react";
// import { useQuery } from "@apollo/client/react";
// import {
//   GET_REVENUE_BY_CURRENCY,
//   GET_PAYMENT_METHOD_STATS,
//   GET_PAYMENT_STATUS_STATS,
// } from "../graphql/queries";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import type { PaymentMethodStats, PaymentStatusStats, RevenueByCurrency } from "../graphql/types";


// const Analytics: React.FC = () => {
// //   const { loading: revenueLoading, data: revenueData } = useQuery(
// //     GET_REVENUE_BY_CURRENCY
// //   );

// //   const { loading: methodLoading, data: methodData } = useQuery(
// //     GET_PAYMENT_METHOD_STATS
// //   );

// //   const { loading: statusLoading, data: statusData } = useQuery(
// //     GET_PAYMENT_STATUS_STATS
// //   );

// const { loading: revenueLoading, data: revenueData } = useQuery<{ revenueByCurrency: RevenueByCurrency[] }>(GET_REVENUE_BY_CURRENCY);

// const { loading: methodLoading, data: methodData } = useQuery<{ paymentMethodStats: PaymentMethodStats[] }>(GET_PAYMENT_METHOD_STATS);

// const { loading: statusLoading, data: statusData } = useQuery<{ paymentStatusStats: PaymentStatusStats[] }>(GET_PAYMENT_STATUS_STATS);


//   if (revenueLoading || methodLoading || statusLoading) {
//     return (
//       <Box display="flex" justifyContent="center" p={4}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   const parseData = (jsonString: string) => {
//     try {
//       return JSON.parse(jsonString);
//     } catch {
//       return [];
//     }
//   };

//   const revenueStats = parseData(revenueData?.revenueByCurrency || "[]");
//   const methodStats = parseData(methodData?.paymentMethodStats || "[]");
//   const statusStats = parseData(statusData?.paymentStatusStats || "[]");

//   return (
//     <Box sx={{ mt: 2 }}>
//       <Typography variant="h4" gutterBottom>
//         Analytics Dashboard
//       </Typography>

//       <Grid container spacing={3}>
//         {/* Revenue by Currency */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               Revenue by Currency
//             </Typography>
//             {revenueStats.map((item: any, index: number) => (
//               <Box key={index} sx={{ mb: 2 }}>
//                 <Typography variant="body1">
//                   <strong>{item._id}:</strong> {item.totalRevenue.toFixed(2)}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Transactions: {item.count}
//                 </Typography>
//               </Box>
//             ))}
//           </Paper>
//         </Grid>

//         {/* Payment Methods */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               Payment Methods
//             </Typography>
//             {methodStats.map((item: any, index: number) => (
//               <Box key={index} sx={{ mb: 2 }}>
//                 <Typography variant="body1">
//                   <strong>{item._id}:</strong> {item.count} payments
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Total: {item.totalAmount.toFixed(2)}
//                 </Typography>
//               </Box>
//             ))}
//           </Paper>
//         </Grid>

//         {/* Payment Status */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               Payment Status
//             </Typography>
//             {statusStats.map((item: any, index: number) => (
//               <Box key={index} sx={{ mb: 2 }}>
//                 <Typography variant="body1">
//                   <strong>{item._id}:</strong> {item.count} payments
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Amount: {item.totalAmount.toFixed(2)}
//                 </Typography>
//               </Box>
//             ))}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Analytics;



import React from "react";
import { useQuery } from "@apollo/client/react";
import {
  GET_REVENUE_BY_CURRENCY,
  GET_PAYMENT_METHOD_STATS,
  GET_PAYMENT_STATUS_STATS,
} from "../graphql/queries";
import {
  Box,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";

// Define proper types for stats
interface RevenueStat {
  _id: string; // currency code
  totalRevenue: number;
  count: number;
}

interface MethodStat {
  _id: string; // payment method
  totalAmount: number;
  count: number;
}

interface StatusStat {
  _id: string; // payment status
  totalAmount: number;
  count: number;
}

const Analytics: React.FC = () => {
  // GraphQL Queries
  const { loading: revenueLoading, data: revenueData } = useQuery<{ revenueByCurrency: string }>(
    GET_REVENUE_BY_CURRENCY
  );

  const { loading: methodLoading, data: methodData } = useQuery<{ paymentMethodStats: string }>(
    GET_PAYMENT_METHOD_STATS
  );

  const { loading: statusLoading, data: statusData } = useQuery<{ paymentStatusStats: string }>(
    GET_PAYMENT_STATUS_STATS
  );

  // Loading state
  if (revenueLoading || methodLoading || statusLoading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  // Safe JSON parse helper
  const parseData = <T, >(jsonString: string | undefined): T[] => {
    if (!jsonString) return [];
    try {
      return JSON.parse(jsonString) as T[];
    } catch {
      return [];
    }
  };

  // Parsed stats
  const revenueStats = parseData<RevenueStat>(revenueData?.revenueByCurrency);
  const methodStats = parseData<MethodStat>(methodData?.paymentMethodStats);
  const statusStats = parseData<StatusStat>(statusData?.paymentStatusStats);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Revenue by Currency */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Revenue by Currency
            </Typography>
            {revenueStats.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  <strong>{item._id}:</strong> {item.totalRevenue.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Transactions: {item.count}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Payment Methods */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Payment Methods
            </Typography>
            {methodStats.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  <strong>{item._id}:</strong> {item.count} payments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total: {item.totalAmount.toFixed(2)}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Payment Status */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Payment Status
            </Typography>
            {statusStats.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  <strong>{item._id}:</strong> {item.count} payments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Amount: {item.totalAmount.toFixed(2)}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
