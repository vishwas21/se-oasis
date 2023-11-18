import React from "react";
// { useContext, useState, useEffect }
import {
    Toolbar,
    IconButton,
    Grid,
    Box,
    AppBar,
    Button,
    Stack,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import logo from "./../../assests/Logo.png";

function Navbar() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/signin");
        // throw new Error("Function not implemented.");
        return;
    };

    const handleSignUp = () => {
        navigate("/register");
        // throw new Error("Function not implemented.");
        return;
    };

    return (
        <>
            <Grid
                container
                xs={12}
                sx={{ position: "sticky", top: 0, elevation: "90deg" }}
            >
                <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar
                            position="static"
                            sx={{ bgcolor: "#143155", paddingRight: 0 }}
                        >
                            {/* <Paper
                                style={{
                                    border: "none",
                                    width: "100%",
                                    height: "4em",
                                    backgroundColor: "#03326c",
                                }}
                            /> */}
                            <Toolbar
                                sx={{
                                    justifyContent: "space-between",
                                    paddingRight: 0,
                                }}
                            >
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="menu"
                                    sx={{
                                        mr: 2,
                                        backgroundColor: "white",
                                        color: "#000000",
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>

                                {/*<Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1 }}
                                ></Typography> */}
                                {/* <div style={logoContainerStyle}> */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                        }}
                                    />
                                </div>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        title="login"
                                        variant="contained"
                                        // sx={{ mt: 1.8, mb: 2 }}
                                        style={{
                                            display: "flex",
                                            justifyContent: "right",
                                            backgroundColor: "white",
                                            color: "#000000",
                                        }}
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        title="SignUp"
                                        variant="contained"
                                        // sx={{ mt: 1.8, mb: 2 }}
                                        style={{
                                            display: "flex",
                                            justifyContent: "right",
                                            backgroundColor: "white",
                                            color: "#000000",
                                        }}
                                        onClick={handleSignUp}
                                    >
                                        SignUp
                                    </Button>
                                </Stack>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Navbar;
