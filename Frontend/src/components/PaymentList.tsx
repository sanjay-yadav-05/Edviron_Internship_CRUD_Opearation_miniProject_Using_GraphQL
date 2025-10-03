import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_PAYMENTS } from "../graphql/queries";
import type { Payment } from "../graphql/types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  CircularProgress,
  Alert,
  Box,
  Button,
} from "@mui/material";

// ✅ Add Props interface here
interface Props {
  onEdit?: (payment: Payment) => void;
}

const PaymentList: React.FC<Props> = ({ onEdit }) => {
  const { loading, error, data } = useQuery(GET_ALL_PAYMENTS, {
    pollInterval: 5000,
  });

  if (loading)
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return <Alert severity="error">Error loading payments: {error.message}</Alert>;

  const payments: Payment[] = data?.payments || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return "success";
      case "FAILED":
        return "error";
      case "PENDING":
        return "warning";
      case "REFUNDED":
        return "info";
      default:
        return "default";
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Payment History ({payments.length})
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id.substring(0, 8)}...</TableCell>
                <TableCell>{payment.userId}</TableCell>
                <TableCell align="right">{payment.amount.toFixed(2)}</TableCell>
                <TableCell>{payment.currency}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Chip
                    label={payment.status}
                    color={getStatusColor(payment.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>{payment.transactionId || "-"}</TableCell>
                <TableCell>
                  {new Date(payment.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {onEdit && (
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => onEdit(payment)}
                    >
                      Edit
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentList;
