import React from 'react';
import { ActivityIndicator,View } from 'react-native';
import styles from './styles';

const LoadingScreen = ({color}) => {
    return (
        <View style={styles.root}>
            <ActivityIndicator
                size="large"
                color={color || 'gray'}
             />
        </View>
    )
};

export { LoadingScreen };
