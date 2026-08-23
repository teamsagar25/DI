import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <Box sx={{ bgcolor: "#f6f8fa", minHeight: { xs: 520, md: 620 }, display: "flex", alignItems: "center" }}>
        <Container maxWidth="xl">
          <Box sx={{ px: { xs: 2, md: 8 }, py: 10 }}>
            <Typography sx={{ color: "#0871b9", fontSize: 11, fontWeight: 700, letterSpacing: 2, mb: 2 }}>
              DI INTERNATIONAL
            </Typography>

            <Typography component="h1" sx={{ fontWeight: 700, fontSize: { xs: 50, sm: 65, md: 88 }, lineHeight: 0.98, letterSpacing: "-5px", maxWidth: 800 }}>
              Better technology.
              <br />
              <Box component="span" sx={{ color: "#0871b9" }}>Simply.</Box>
            </Typography>

            <Typography sx={{ color: "#666", maxWidth: 470, lineHeight: 1.8, mt: 4, mb: 4 }}>
              Quality electronics, appliances and smart technology for modern living.
            </Typography>

            <Button component={Link} to="/products" variant="contained" endIcon={<ArrowForward />}
              sx={{ bgcolor: "#0871b9", borderRadius: 0, px: 3, py: 1.4, textTransform: "none", boxShadow: "none", "&:hover": { bgcolor: "#075c98", boxShadow: "none" } }}>
              Explore Products
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography sx={{ color: "#0871b9", fontSize: 10, fontWeight: 700, letterSpacing: 2, mb: 2 }}>
          WELCOME
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: { xs: 32, md: 48 }, letterSpacing: "-2px", maxWidth: 750 }}>
          Technology that fits modern life.
        </Typography>
      </Container>
    </Layout>
  );
}
