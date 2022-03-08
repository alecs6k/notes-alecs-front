import React from "react";
import {
  Box,
  AppBar,
  Container,
  Typography,
  Button,
  Toolbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration: 'none', color: '#ECB365'}} >Notas Alecs</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/tasks/new")}
            >
              Nueva Nota
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
