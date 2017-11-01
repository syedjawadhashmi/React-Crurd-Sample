import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import styled from 'styled-components/native';
import HomeScreen from './homeNavigator';
import { createMeetupScreen } from '../containers'
import Colors from '../../constants/colors';

const CloseButton = styled(Touchable) `
  marginLeft: 10;
`;
export default StackNavigator({
    Home: {
        screen: HomeScreen
    },
    createMeetup: {
        screen: createMeetupScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Create a new Meetup',
            headerStyle: {
                backgroundColor: Colors.redColor,
            },
            headerTitleStyle: {
                color: Colors.whiteColor,
            },
            headerLeft: (
                <CloseButton feedback="opacity" onPress={() => navigation.goBack()}>
                    <MaterialIcons
                        name="close"
                        color="#fff"
                        size={30}
                    />
                </CloseButton>
            ),
        }),
    },
}, {
        mode: 'modal',
    });
