import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Container, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';



function NewCase() {
    return (
        <div className="NewCase">
            <Container>
                <h1>Add your case below!</h1>
                <form className="caseName" noValidate autoComplete="off">
                    <Input placeholder="Palestine vs Israel" inputProps={{'aria-label' : 'description'}}></Input>
                </form>
                <Fab className="floatButton" color="primary" aria-lavel="add">
                    <AddIcon />
                </Fab>
            </Container>
            
        </div>
    );
}

export default NewCase;