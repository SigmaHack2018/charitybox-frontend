import React, {Component} from 'react';
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

class LoginView extends Component {

    state = {
        email: '',
        password: ''
    }

    handleEmailChange = event => this.setState({email: event.target.value});

    handlePasswordChange = event => this.setState({password: event.target.value});

    onSubmit = (event) => {
        this.props.onLogin(this.state);
        event.preventDefault();
    };

    render() {
        const {classes} = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="email-input" type={'email'} onChange={this.handleEmailChange}/>
                        <FormHelperText>Username</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="password-input" type={'password'} onChange={this.handlePasswordChange}/>
                        <FormHelperText>Password</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid>
                    <Button type={'submit'}>Submit</Button>
                </Grid>
            </form>)
    };
}

LoginView.propTypes = {
    classes: PropTypes.object.isRequired,
    onLogin: PropTypes.func
};

export default withStyles(styles)(LoginView);
