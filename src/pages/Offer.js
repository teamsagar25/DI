import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const offers = [
  {
    title: "AC Summer Offer",
    text: "Special prices on selected inverter ACs.",
    discount: "UP TO 20% OFF",
  },
  {
    title: "Smart TV Offer",
    text: "Upgrade your entertainment with selected Smart TVs.",
    discount: "UP TO 15% OFF",
  },
  {
    title: "Home Appliance Offer",
    text: "Save more on selected kitchen and home appliances.",
    discount: "SPECIAL PRICES",
  },
];

export default function Offer() {
  return (
    <Layout>
      <Box sx={{ bgcolor: "#f7f8f9", py: 10, minHeight: "80vh" }}>
        <Container maxWidth="xl">

          <Box sx={{ mb: 7 }}>
            <Typography
              sx={{
                color: "#0871b9",
                fontSize: 11,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              DI INTERNATIONAL
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 42, md: 64 },
                fontWeight: 600,
                letterSpacing: "-3px",
              }}
            >
              Offers
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {offers.map((offer) => (
              <Grid item xs={12} md={4} key={offer.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 0,
                    bgcolor: "#fff",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      sx={{
                        color: "#0871b9",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        mb: 3,
                      }}
                    >
                      {offer.discount}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 26,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {offer.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#777",
                        lineHeight: 1.7,
                        mb: 4,
                      }}
                    >
                      {offer.text}
                    </Typography>

                    <Button
                      component={Link}
                      to="/products"
                      variant="outlined"
                      sx={{
                        borderRadius: 0,
                        textTransform: "none",
                      }}
                    >
                      Shop Products
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>
    </Layout>
  );
}