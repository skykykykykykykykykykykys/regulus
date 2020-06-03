import React, { useState } from "react";
import ResultBoard from "./ResultBoard";
import {Grid} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/**
 * nanya jumlah char
 * 
 * ngasih nama charnya
 * 
 * 
 */



function OptionsBoard(props) {
    console.log("masuk optionsboard");

    const [state, setState] = useState({
        numChars: 0,
        charNames: [],
        charOptions:[],
        charPositions: []
    });
    const [numChars, setCharNum] = useState(0);
    const [charNames, setCharNames] = useState([]);
    const [charOptions, setCharOptions] = useState({
        
    });
    const [charPositions, setCharPositions] = useState({

    });

    function handleCharNum(event, output) {
        setCharNum(output);
        console.log(numChars);
        //logika ngebuat state array dinamik

        var arrCharNames = [];
        for (let i = 0; i<numChars; i++) {
            arrCharNames.push("");
        }
        setCharNames(arrCharNames);
    }

    function createCharNameField(index){
        return (
            <Grid>
                <h1>Isi nama karakter:</h1>
                <form>
                    <TextField id="charNames" label="standard"/>
                </form>
            </Grid>
        )
    }

    function renderCharName(charNum) {
        //render text field buat ngisi nama karakter
        console.log(charNames);
        return (
            <div className="charNameField">
                <h1>Isi nama karakter:</h1>
                
            </div>
        );
    }
    /*
        {charNames.map(names, index =>
                    <Grid>
                        <h1>Ini charNameField : {names}</h1>
                        <TextField id={index} label="standard" onChange="..." />
                    </Grid>
                )}
    */

    return (
        <div >
        <Grid className="optionsBoard">
            <h1>Case Name : {props.caseFixed}</h1>
            <Grid>
                <Typography>
                    Jumlah Karakter :
                </Typography>
                <Slider
                    defaultValue={2}
                    step={1}
                    marks
                    min={2}
                    max={4}
                    valueLabelDisplay="auto"
                    onChangeCommitted={handleCharNum}
                />
            </Grid>
            <Grid>
                {renderCharName(numChars)}
            </Grid>
            <ResultBoard/>
        </Grid>
            
            
            
        </div>
        
    );
}

export default OptionsBoard;