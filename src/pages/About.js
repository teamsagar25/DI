import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Layout from "./Layout";

export default function About() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 16 } }}>
        <Typography sx={{ color: "#0871b9", fontSize: 10, fontWeight: 700, letterSpacing: 2, mb: 2 }}>
          ABOUT DI INTERNATIONAL
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: { xs: 42, md: 70 }, lineHeight: 1, letterSpacing: "-3px", maxWidth: 800 }}>
          Technology should feel <Box component="span" sx={{ color: "#0871b9" }}>simple.</Box>
        </Typography>
        <Typography sx={{ color: "#666", maxWidth: 650, lineHeight: 1.9, mt: 5, fontSize: 17 }}>
          DI International brings together quality electronics, home appliances and smart technology for homes and businesses across Nepal.
        </Typography>
      </Container>
    </Layout>
  );
}
