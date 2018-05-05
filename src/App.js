import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Register from './Register';
import {merge} from 'lodash';
import Login from './Login';
import Welcome from './Welcome';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class App extends Component {
    state = {
        userData: null,
        view: 'welcome'
    };

    updateAppState = (newState) => {
        console.log('Updating state', newState)
        this.setState(merge({}, this.state, newState))
    };

    getView = () => {
        switch (this.state.view) {
            case 'welcome':
                return (<Welcome onSelection={selection => this.updateAppState({view: selection})}/>);
            case 'register':
                return (<Register onRegister={userData => this.updateAppState({userData})}/>);
            case 'login':
                return (<Login onLogin={userData => this.updateAppState({userData})}/>);
            default:
                return (<Welcome onSelection={selection => this.updateAppState({view: selection})}/>)
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            CharityBox
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={24}
                      alignItems={'center'}
                      direction={'row'}
                      justify={'center'}>
                    <Grid item xs={8} align={'center'}>
                        {this.getView()}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
