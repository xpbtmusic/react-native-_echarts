import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './styles';
import ChartView from './rn-echarts/index';
import { StackNavigator } from 'react-navigation';
import { lineOption } from './data';
import Toast, {DURATION} from 'react-native-easy-toast'
export default class LineChart extends Component {
    static navigationOptions = {
        title: 'LineChart',
    };
    constructor(props) {
        super(props);
        this._index=-1;
        this.state = {
            option:{}
        }
    }

    onMessage = e => {
        var index = e.nativeEvent.data;
        console.log("--"+index)
        if (index >= 0) {
            this._onTipClicked(index);
        }

    }
    _onTipClicked = (index: Object) => {
        if (index !== this._index&&index>=0) {
            this._index = index;
            this.refs.toast.show(this._index);
        }
    }

    render() {
        //this.setState({option:lineOption});
        //默认进入页面，选中某个列
        setTimeout(
            () => {
                if (this && this.chart) {
                    this.chart.dispatchAction({type: 'showTip', seriesIndex: '0', dataIndex: '6'});
                }
            },
            0
        );
        return (
            <View style={styles.container}>
                <ChartView
                    ref={(c) => this.chart = c}
                    option={lineOption}
                    onMessage={this.onMessage}
                />
                <Toast ref="toast"/>
            </View>
        );
    }
}