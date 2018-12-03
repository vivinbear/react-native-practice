import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from '../utils/dva';
import { scaleSize } from '../utils/ScreenUtil';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

export default Clock

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})