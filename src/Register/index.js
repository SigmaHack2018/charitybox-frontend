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
        userType: 'giver'
    };

    handleUserTypeChange = (event) => {
        this.setState({userType: event.target.value});
    }

    render() {
        const {classes} = this.props;

        return (
            <form action="">
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="name-input"/>
                        <FormHelperText>Alignment with an input</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="email-input"/>
                        <FormHelperText>Email (optional)</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl className={classes.formControl}>
                        <Input id="password-input" type={'password'}/>
                        <FormHelperText>Password</FormHelperText>
                    </FormControl>
                </Grid>
                <RadioGroup
                    aria-label="gender"
                    name="gender2"
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
                <Grid>
                    <Button>Submit</Button>
                </Grid>
            </form>);
    }
}

RegisterView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterView);
