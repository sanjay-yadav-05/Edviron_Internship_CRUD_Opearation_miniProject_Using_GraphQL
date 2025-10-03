import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_PAYMENT } from "../graphql/mutations";
import { GET_ALL_PAYMENTS } from "../graphql/queries";
import type { CreatePaymentInput, PaymentStatus } from "../graphql/types";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Alert,
  Paper,
} from "@mui/material";

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState<CreatePaymentInput>({
    userId: "",
    amount: 0,
    currency: "INR",
    method: "UPI",
    description: "",
  });

  const [createPayment, { loading, error, data }] = useMutation(
    CREATE_PAYMENT,
    {
      refetchQueries: [{ query: GET_ALL_PAYMENTS }],
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPayment({
        variables: {
          createPaymentInput: formData,
        },
      });
      // Reset form
      setFormData({
        userId: "",
        amount: 0,
        currency: "INR",
        method: "UPI",
        description: "",
      });
    } catch (err) {
      console.error("Error creating payment:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) : value,
    }));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Payment
      </Typography>

      {data && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Payment created successfully! ID: {data.createPayment.id}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Error: {error.message}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="User ID"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          required
          margin="normal"
          inputProps={{ min: 0.01, step: 0.01 }}
        />

        <TextField
          fullWidth
          select
          label="Currency"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </TextField>

        <TextField
          fullWidth
          select
          label="Payment Method"
          name="method"
          value={formData.method}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="UPI">UPI</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="Debit Card">Debit Card</MenuItem>
          <MenuItem value="Net Banking">Net Banking</MenuItem>
          <MenuItem value="PayPal">PayPal</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Description (Optional)"
          name="description"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={3}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? "Creating..." : "Create Payment"}
        </Button>
      </Box>
    </Paper>
  );
};

export default PaymentForm;
