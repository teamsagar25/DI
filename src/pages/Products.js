
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import Layout from "./Layout";
import { categories, products } from "./productsData";

export default function Products() {
  const [category, setCategory] = useState("All");

  const list =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <Layout>
      <Box sx={{ bgcolor: "#f7f8f9", py: 10, minHeight: "80vh" }}>
        <Container maxWidth="xl">

          {/* HEADER */}
          <Box sx={{ mb: 5 }}>
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

           
          </Box>

          {/* CATEGORIES */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              mb: 5,
              overflowX: "auto",
              pb: 1,
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categories.map((item) => {
              const Icon = item.icon;
              const active = category === item.name;

              return (
                <Card
                  key={item.name}
                  onClick={() => setCategory(item.name)}
                  elevation={0}
                  sx={{
                    minWidth: 105,
                    cursor: "pointer",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: active ? "#0871b9" : "#e2e6e9",
                    bgcolor: active ? "#0871b9" : "#fff",
                    color: active ? "#fff" : "#222",
                    transition: "0.2s",
                    "&:hover": {
                      borderColor: "#0871b9",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 1.5,
                      "&:last-child": { pb: 1.5 },
                      textAlign: "center",
                    }}
                  >
                    <Icon sx={{ fontSize: 25, mb: 0.5 }} />

                    <Typography
                      sx={{
                        fontSize: 11,
                        fontWeight: active ? 600 : 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>

          {/* PRODUCTS */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {list.map((product) => (
              <Card
                key={product.name}
                elevation={0}
                sx={{
                  borderRadius: 0,
                  bgcolor: "#fff",
                }}
              >
                {/* FIXED IMAGE */}
                <Box
                  sx={{
                    height: 240,
                    width: "100%",
                    p: 2,
                    boxSizing: "border-box",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* DETAILS */}
                <CardContent sx={{ p: 2.5 }}>
                  <Chip
                    label={product.category}
                    size="small"
                    sx={{
                      bgcolor: "#eef6fb",
                      color: "#0871b9",
                      fontSize: 9,
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 16,
                      mb: 1,
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography sx={{ fontWeight: 700 }}>
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

        </Container>
      </Box>
    </Layout>
  );
}
