import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { LoginScreen } from '../containers';
import Navigator from './navigator';

class appNavigator extends Component {
    render() {
        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
        });
        if (this.props.user.isLogged) {
            return <Navigator navigation={navigation} />;
        }
        return <LoginScreen />
    }
}

export default connect(
    state => ({
        navigation: state.navigation,
        user: state.loginReducer,
    })
)(appNavigator)

export const router = Navigator.router;