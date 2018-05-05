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

const LoginView = ({classes}) => (
    <form action="">
        <Grid>
            <FormControl className={classes.formControl}>
                <Input id="name-input"/>
                <FormHelperText>Username</FormHelperText>
            </FormControl>
        </Grid>
        <Grid>
            <FormControl className={classes.formControl}>
                <Input id="password-input" type={'password'}/>
                <FormHelperText>Password</FormHelperText>
            </FormControl>
        </Grid>
        <Grid>
            <Button>Submit</Button>
        </Grid>
    </form>);

LoginView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginView);
