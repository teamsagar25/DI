import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Layout from "./Layout";

export default function Contact() {
  return (
    <Layout>
      <Box sx={{ bgcolor: "#0871b9", color: "#fff", minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "rgba(255,255,255,.7)", fontSize: 10, fontWeight: 700, letterSpacing: 2, mb: 2 }}>
                GET IN TOUCH
              </Typography>
              <Typography sx={{ fontSize: { xs: 55, md: 72 }, fontWeight: 600, letterSpacing: "-3px" }}>
                Let's talk.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2} sx={{ justifyContent: "center", height: "100%" }}>
                <Typography>info@diinternational.com.np</Typography>
                <Typography>+977 9802079410 </Typography>
                <Typography>Biratnagar , Nepal</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
