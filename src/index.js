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
import LineChart2 from "./LineChart2";
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
                    onPress={() => navigate('LineChart2')}
                    title="LineChartExample2"
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
    LineChart:{screen:LineChart},
    LineChart2:{screen:LineChart2}
});

export default SimpleApp;