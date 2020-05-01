import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}`;
}

export default function DiscreteSlider(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                Expense Range Contribution {props.election}%
      </Typography>
            <Slider
                onChange={props.handleElection}
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={30}
            />
        </div>
    );
}