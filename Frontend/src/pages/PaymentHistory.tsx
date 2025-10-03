// import React from "react";
// import PaymentList from "../components/PaymentList";

// const PaymentHistory: React.FC = () => <PaymentList />;

// export default PaymentHistory;


import React, { useState } from "react";
import PaymentList from "../components/PaymentList";
import UpdatePaymentDialog from "../components/UpdatePaymentDialog";
import type { Payment } from "../graphql/types";

const PaymentHistory: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEdit = (payment: Payment) => {
    setSelectedPayment(payment);
    setDialogOpen(true);
  };

  return (
    <>
      {/* Pass handleEdit to PaymentList */}
      <PaymentList onEdit={handleEdit} />

      {/* Update Payment Dialog */}
      <UpdatePaymentDialog
        open={dialogOpen}
        payment={selectedPayment}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};

export default PaymentHistory;
