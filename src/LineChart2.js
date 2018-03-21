import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import styles from './styles';
import ChartView from './rn-echarts/index';
import { StackNavigator } from 'react-navigation';
import { lineOption} from './data';
import Button from './Button';
import color from './color';
import Toast, {DURATION} from 'react-native-easy-toast'
import {getLineOption,getLineOption2} from "./data";
export default class LineChart2 extends Component {
    static navigationOptions = {
        title: 'LineChart2',
    }
    constructor(props) {
        super(props);
        this._index=-1;
        this.state = {
            option:{},
            isCheckedItem:2,
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
    dateItemClicked = (info: Object) => {
        if (info === 1) {
            this.setState({isCheckedItem:1})
            let array=["09-04","09-05","09-06","09-07","09-08","09-09","09-10","09-11","09-12","09-13","09-14","09-14",];
            this.chart.setOption(getLineOption2());
        } else if (info === 2) {
            this.setState({isCheckedItem:2})
            ;
            if (this && this.chart) {
                let array=["09-08","09-09","09-10","09-11","09-12","09-13","09-14","09-14",]
                this.chart.setOption(getLineOption2());
            }
        }
    }
    render() {
        let {isCheckedItem}= this.state;
        let defaultArray=["09-10","09-11","09-12","09-13","09-14","09-14",];
        let lineOption_=getLineOption2();
        console.log(isCheckedItem+"===================");
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
                <View style={{flexDirection: 'row', justifyContent: 'flex-start',paddingLeft:10}}>

                    <Button title='7天'
                            style={isCheckedItem === 1 ? [styles_.labelStyle,{color: color.white}]: styles_.labelStyle}
                            containerStyle={isCheckedItem == 1 ? styles_.dateLabelBorderCheckedStyle : styles_.dateLabelBorderNormalStyle}
                            onPress={this.dateItemClicked.bind(this, 1)}></Button>
                    <Button title='12个月'
                            style={isCheckedItem === 2 ? [styles_.labelStyle,{color: color.white}]: styles_.labelStyle}
                            containerStyle={isCheckedItem === 2 ? [styles_.dateLabelBorderCheckedStyle,{marginRight: 20,}] :[styles_.dateLabelBorderNormalStyle,{marginRight:20}]}
                            onPress={this.dateItemClicked.bind(this, 2)}></Button>
                </View>
                <ChartView
                    ref={(c) => this.chart = c}
                    option={lineOption_}
                    onMessage={this.onMessage}
                />
                <Toast ref="toast"/>
            </View>
        );
    }

}
const styles_ = StyleSheet.create({
    labelStyle:{
        color: color.black,
        fontSize: 12,
    },
    dateLabelBorderCheckedStyle: {
        borderColor: color.green,
        borderRadius: 8,
        borderWidth: 1,
        width: 45,
        height: 20,
        marginRight: 30,
        marginLeft: 0,
        backgroundColor:color.green,
    },
    dateLabelBorderNormalStyle: {
        width: 45,
        height: 20,
        marginRight: 30,
        marginLeft: 0,
    },
})