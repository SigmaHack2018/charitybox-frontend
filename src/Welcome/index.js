import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        'text-align': 'center'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        'text-align': 'center'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

const WelcomeView = ({classes, onSelection}) => (
    <div>
        <Grid>
            <p>Welcome! Please sign up or login</p>
        </Grid>
        <Button color="primary" onClick={() => onSelection('login')}>
            Log in
        </Button>
        <Button color="primary" onClick={() => onSelection('register')}>
            Sign up
        </Button>
    </div>
);

WelcomeView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeView);
