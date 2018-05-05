import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText, FormControlLabel} from 'material-ui/Form';
import Radio, {RadioGroup} from 'material-ui/Radio';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    centerGroup: {
        'justify-content': 'center',
        'flex-direction': 'row'
    }
});

class RegisterView extends Component {
    state = {
        userType: 'giver',
        name: '',
        email: '',
        password: ''
    };

    handleUserTypeChange = (event) => this.setState({userType: event.target.value});

    handleSubmit = (event) => {
        this.props.onRegister(this.state);
        event.preventDefault();
    };

    handleNameChange = event => this.setState({name: event.target.value});

    handleEmailChange = event => this.setState({email: event.target.value});

    handlePasswordChange = event => this.setState({password: event.target.value});

    render() {
        const {classes} = this.props;

        return (
            <form action="#" onSubmit={this.handleSubmit}>
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="name-input"
                               value={this.state.name}
                               onChange={this.handleNameChange}/>
                        <FormHelperText>Your name</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="email-input"
                               value={this.state.email}
                               onChange={this.handleEmailChange}/>
                        <FormHelperText>Email (optional)</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="password-input"
                               type={'password'}
                               value={this.state.password}
                               onChange={this.handlePasswordChange}/>
                        <FormHelperText>Password</FormHelperText>
                    </FormControl>
                </Grid>
                <RadioGroup
                    aria-label="user type"
                    name="userType"
                    className={classes.centerGroup}
                    value={this.state.userType}
                    onChange={this.handleUserTypeChange}
                >
                    <FormControlLabel value="giver"
                                      control={<Radio color="primary"/>}
                                      label="Giver"/>

                    <FormControlLabel value="receiver"
                                      control={<Radio color="primary"/>}
                                      label="Reciever"/>
                </RadioGroup>
                <Button type={'submit'}>Submit</Button>
            </form>);
    }
}

RegisterView.propTypes = {
    classes: PropTypes.object.isRequired,
    onRegister: PropTypes.func
};

export default withStyles(styles)(RegisterView);
