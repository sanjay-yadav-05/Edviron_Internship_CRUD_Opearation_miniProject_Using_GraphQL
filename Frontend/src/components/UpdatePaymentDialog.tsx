// import React, { useState } from "react";
// import { useMutation } from "@apollo/client/react";
// import { UPDATE_PAYMENT } from "../graphql/mutations";
// import { GET_ALL_PAYMENTS } from "../graphql/queries";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   MenuItem,
// } from "@mui/material";
// import type { Payment, PaymentStatus } from "../graphql/types";

// interface Props {
//   open: boolean;
//   payment: Payment | null;
//   onClose: () => void;
// }

// const UpdatePaymentDialog: React.FC<Props> = ({ open, payment, onClose }) => {
//   const [status, setStatus] = useState<PaymentStatus>(
//     payment?.status || PaymentStatus.PENDING
//   );
//   const [transactionId, setTransactionId] = useState(
//     payment?.transactionId || ""
//   );

//   const [updatePayment, { loading }] = useMutation(UPDATE_PAYMENT, {
//     refetchQueries: [{ query: GET_ALL_PAYMENTS }],
//   });

//   const handleSubmit = async () => {
//     if (!payment) return;

//     try {
//       await updatePayment({
//         variables: {
//           updatePaymentInput: {
//             id: payment.id,
//             status,
//             transactionId,
//           },
//         },
//       });
//       onClose();
//     } catch (err) {
//       console.error("Error updating payment:", err);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Update Payment</DialogTitle>
//       <DialogContent>
//         <TextField
//           fullWidth
//           select
//           label="Status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value as PaymentStatus)}
//           margin="normal"
//         >
//           <MenuItem value={PaymentStatus.PENDING}>Pending</MenuItem>
//           <MenuItem value={PaymentStatus.SUCCESS}>Success</MenuItem>
//           <MenuItem value={PaymentStatus.FAILED}>Failed</MenuItem>
//           <MenuItem value={PaymentStatus.REFUNDED}>Refunded</MenuItem>
//         </TextField>

//         <TextField
//           fullWidth
//           label="Transaction ID"
//           value={transactionId}
//           onChange={(e) => setTransactionId(e.target.value)}
//           margin="normal"
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={handleSubmit} disabled={loading} variant="contained">
//           Update
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default UpdatePaymentDialog;


import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client/react";
import { UPDATE_PAYMENT } from "../graphql/mutations";
import { GET_ALL_PAYMENTS } from "../graphql/queries";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import type { Payment } from "../graphql/types";
import { PaymentStatus } from "../graphql/types"; // ✅ runtime import

interface Props {
  open: boolean;
  payment: Payment | null;
  onClose: () => void;
}

const UpdatePaymentDialog: React.FC<Props> = ({ open, payment, onClose }) => {
  // Update state when payment prop changes
  const [status, setStatus] = useState<PaymentStatus>(
    PaymentStatus.PENDING
  );
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (payment) {
      setStatus(payment.status);
      setTransactionId(payment.transactionId || "");
    }
  }, [payment]);

  const [updatePayment, { loading }] = useMutation(UPDATE_PAYMENT, {
    refetchQueries: [{ query: GET_ALL_PAYMENTS }],
  });

  const handleSubmit = async () => {
    if (!payment) return;

    try {
      await updatePayment({
        variables: {
          updatePaymentInput: {
            id: payment.id,
            status,
            transactionId,
          },
        },
      });
      onClose();
    } catch (err) {
      console.error("Error updating payment:", err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Update Payment</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value as PaymentStatus)}
          margin="normal"
        >
          <MenuItem value={PaymentStatus.PENDING}>Pending</MenuItem>
          <MenuItem value={PaymentStatus.SUCCESS}>Success</MenuItem>
          <MenuItem value={PaymentStatus.FAILED}>Failed</MenuItem>
          <MenuItem value={PaymentStatus.REFUNDED}>Refunded</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={loading} variant="contained">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdatePaymentDialog;
