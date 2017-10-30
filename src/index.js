import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import SimpleExample from './simpleExample';
import AdvanceExample from './advanceExample';
import LineChart from "./LineChart";

class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={() => navigate('LineChart')}
                    title="LineChartExample"
                />
                <Button
                    onPress={() => navigate('SimpleExample')}
                    title="SimpleExample"
                />
                 <Button
                    onPress={() => navigate('AdvanceExample')}
                    title="AdvanceExample"
                />
            </View>
        )
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: Home },
    SimpleExample: { screen: SimpleExample },
    AdvanceExample:{screen:AdvanceExample},
    LineChart:{screen:LineChart}
});

export default SimpleApp;