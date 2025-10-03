import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client/react"; // ✅ Correct import
import { GET_PAYMENT_BY_ID } from "../graphql/queries";
import type { Payment } from "../graphql/types";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Button,
  Chip,
} from "@mui/material";

const PaymentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_PAYMENT_BY_ID, {
    variables: { id },
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Error: {error.message}</Alert>;
  }

  const payment: Payment = data?.payment;

  if (!payment) {
    return <Alert severity="warning">Payment not found</Alert>;
  }

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
    <Paper sx={{ p: 4, mt: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Payment Details
      </Typography>

      <Typography>
        <strong>ID:</strong> {payment.id}
      </Typography>
      <Typography>
        <strong>User ID:</strong> {payment.userId}
      </Typography>
      <Typography>
        <strong>Amount:</strong> {payment.amount.toFixed(2)} {payment.currency}
      </Typography>
      <Typography>
        <strong>Method:</strong> {payment.method}
      </Typography>
      <Typography>
        <strong>Status:</strong>{" "}
        <Chip
          label={payment.status}
          color={getStatusColor(payment.status) as any}
          size="small"
        />
      </Typography>
      <Typography>
        <strong>Transaction ID:</strong> {payment.transactionId || "-"}
      </Typography>
      <Typography>
        <strong>Date:</strong> {new Date(payment.createdAt).toLocaleString()}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Description:</strong> {payment.description || "-"}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>
    </Paper>
  );
};

export default PaymentDetails;
