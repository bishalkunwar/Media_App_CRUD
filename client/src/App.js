import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import rainy_flower from './images/rainy_flower.jpg';
const App = () => {
    return ( <
        Container maxidth = "lg" >
        <
        AppBar position = "static"
        color = "inherit" >
        <
        Typography variant = "h2"
        align = "center" >
        Memories <
        /Typography> <
        img src = { rainy_flower }
        alt = "memories"
        height = "60" / >
        <
        /AppBar>

        <
        Grow in >
        <
        Container >
        <
        Grid container justify = "space-between"
        alignItems = "stretch"
        spacing = { 3 } >
        <
        Grid item xs = { 12 }
        sm = { 7 } >
        <
        Posts / >
        <
        /Grid> <
        Grid item xs = { 12 }
        sm = { 7 } >
        <
        Form / >
        <
        /Grid> <
        /Grid> <
        /Container>

        <
        /Grow>

        <
        /Container>
    );
};

export default App;