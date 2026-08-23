import React from "react";
import { AppBar, Toolbar, Container, Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff", color: "#111" }}>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "#fff", color: "#111", borderBottom: "1px solid #eee" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 72, justifyContent: "space-between" }}>
            <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "#111" }}>
              <Typography sx={{ fontSize: 28, fontWeight: 800, color: "#0871b9", letterSpacing: "-2px" }}>DI</Typography>
              <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5 }}>INTERNATIONAL</Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button component={Link} to="/" sx={{ color: "#555", textTransform: "none" }}>Home</Button>
              <Button component={Link} to="/products" sx={{ color: "#555", textTransform: "none" }}>Products</Button>
              <Button component={Link} to="/about" sx={{ color: "#555", textTransform: "none" }}>About</Button>
              <Button component={Link} to="/contact" sx={{ color: "#555", textTransform: "none" }}>Contact</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {children}

      <Box sx={{ py: 3, px: { xs: 3, md: 8 }, borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
        <Typography sx={{ fontWeight: 800, color: "#0871b9" }}>DI INTERNATIONAL</Typography>
        <Typography sx={{ fontSize: 11, color: "#888" }}>© 2026 DI International</Typography>
      </Box>
    </Box>
  );
}
