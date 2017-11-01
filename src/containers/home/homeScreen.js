import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator } from 'react-native';
import loadingScreen from '../../shared';
import MeetupList from '../../components/meetupList/meetupList';
import {fetchMyMeetups} from '../../store/actions/meetups-actions';
import styles from './style';

class homeScreen extends Component {

    componentDidMount() {
        this.props.fetchMyMeetups()
    }

    render() {
        const {
            meetups: {
                isFetched,
            data,
            error
            }
        } = this.props;
        if (!isFetched) {
            return (
                <View style={styles.root}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            )
        } else if (error.on) {
            return (
                <View>
                    <Text>{error.message}</Text>
                </View>
            );
        }
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>homeScreen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MeetupList meetups={data} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { meetups: state.meetupReducer.myMeetups };
};

export default connect(mapStateToProps, { fetchMyMeetups })(homeScreen);