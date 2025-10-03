import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" gutterBottom>Welcome to Payment Gateway</Typography>
      <Button variant="contained" size="large" onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </Button>
    </Box>
  );
};

export default Home;
