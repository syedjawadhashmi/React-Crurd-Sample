import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Facebook, Google } from 'expo';
import Colors from '../../../constants/colors';
import fbConfig from '../../../constants/fbConfig';
import googleConfig from '../../../constants/googleConfig';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';
import { LoadingScreen } from '../../shared/loading';
import { login } from '../../store/actions/login-actions';



const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;

const MeetupText = styled.Text`
  color: ${Colors.redColor};
  fontSize: 18;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: space-around;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
  flexDirection: row;
  paddingHorizontal: 10;
`;

class LoginScreen extends Component {

    _onLoginPress = provider => {
        if (provider == 'facebook') {
            this._loginWithFacebook();
        } else {
            this._loginWithGoogle();
        }
    }

    async _loginWithFacebook() {
        const {
        type,
            token,
    } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
                permissions: ['public_profile', 'email'],
            });

        if (type === 'success') {
            this.props.login(token, 'facebook');
        } else {
            throw new Error('Something wrong with facebook auth!');
        }
    }

    async _loginWithGoogle() {
        try {
            const result = await Google.logInAsync({
                androidClientId: googleConfig.CLIENT_ID_ANDROID,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                this.props.login(result.accessToken, 'google');
            } else {
                return { cancelled: true };
            }
        } catch (e) {
           throw e
        }
    }

    render() {
        if (this.props.isLoading) {
            return <LoadingScreen color={Colors.redColor} />;
        }
        return (
            <FlexContainer>
                <FlexContainer>
                    <Text style={styles.authTitle}>Appointment Mode</Text>
                </FlexContainer>
                <FlexContainer>
                    <FlexContainer>
                        <FlexContainer>
                            <Text style={styles.authWelcomeTitle}>Welcome!</Text>
                        </FlexContainer>
                        <FlexContainer>
                            <Text style={styles.authWelcomeText}>
                                Start managing your
                                <MeetupText>Appointment</MeetupText>
                                quickly and efficently
              </Text>
                        </FlexContainer>
                    </FlexContainer>
                    <BottomButtonWrapper>
                        <Button
                            color="#db3236"
                            onPress={() => this._onLoginPress('google')}
                        >
                            <Text style={styles.buttonAuth}>Sign with Google</Text>
                            <MaterialCommunityIcons name='google' size={30}
                                color='#fff' />
                        </Button>
                        <Button
                            color="#3b5998"
                            onPress={() => this._onLoginPress('facebook')}>
                            <Text style={styles.buttonAuth}>Sign with Facebook</Text>
                            <MaterialCommunityIcons name='facebook' size={30}
                                color='#fff' />
                        </Button>
                    </BottomButtonWrapper>
                </FlexContainer>
            </FlexContainer>
        );
    }
}

export default connect(state => ({
    isLoading: state.loginReducer.isLoading,
}), { login })(LoginScreen);