import React, { useState } from "react";
import OptionsBoard from "./OptionsBoard";

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Container, Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';



function NewCase() {
    const [caseName, setCaseName] = useState("");
    const [caseFixed, setCaseFixed] = useState("Enter your case name below!");
    const name = "";

    function handleChange(event) {
        setCaseName(event.target.value);
    }

    function handleClick(event) {
        setCaseFixed(caseName);
        console.log(caseName);
    }

    function isNewCase() {
        if (caseFixed === "Enter your case name below!") {
            return true;
        } else {
            return false;
        }
    }

    function renderNewCase() {
        return (
                <Grid container spacing={3} justify="center" className = "newCase">
                <Grid item xs={20}>
                    <h1>{caseFixed}</h1>
                        <Input placeholder="Palestine vs Israel"
                            value={caseName}
                            onChange={handleChange}/>
                        <button className="floatButton" color="primary" onClick={handleClick}>
                            <AddIcon />
                        </button>
                </Grid>
                </Grid>
        );
    }

    function renderOptionsBoard(name) {
        return (
            <div className="optionsBoard">
                <Container>
                    <OptionsBoard
                        caseFixed = {caseFixed}
                    />
                </Container>
            </div>
        )
    }

    if (isNewCase() === true) {
        return renderNewCase();
    } else {
        return renderOptionsBoard(name);
    }


}

export default NewCase;