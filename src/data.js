
import React from 'react';
import { View } from 'react-native';

const seriesColors = [
    '#e5cf0c',
    '#97b552',
    '#5ab1ef',
    '#dc69aa',
    '#2ec7c9',
    '#d6797f',
    '#d6797f',
    '#95706d',
    '#8d98b3',
    '#b6a2de',
];
export var barOption = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

export function getLineOption2(){

    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];
    var data1 = [Math.random() * 300];
    var data2 = [Math.random() * 300];
    var data3 = [Math.random() * 300];
    var data4 = [Math.random() * 300];
    for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        data1.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        data2.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    var option2 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                smooth:true,
                symbol:'none',
                sampling:'average',
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:data
            },
            { smooth:true,
                symbol:'none',
                sampling:'average',
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:data1
            },
            {
                smooth:true,
                symbol:'none',
                sampling:'average',
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:data2
            }
        ]
    };
    return option2;


}
export function getLineOption(xValueArray,yValueArray){
      var lineOption =  {
        /* dataZoom: {
             type: 'inside',
             startValue: 0,
             endValue: 6,
             zoomLock: true
         },*/
        grid: {
            left: 20,
            right: 20,
            bottom: 25,
            top: 30,
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            paddingLeft: 10,
            paddingRight: 20,
            backgroundColor: '#FFFFFF',//提示框背景颜色
            textStyle: {
                fontSize: 10,
                color: '#666666',
            },
            position: 'left',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#23d2cc',
                    width: 0.5,
                    type: 'solid'
                },
            },
            formatter: "{b}<br/>{c}  ",
            extraCssText: 'box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);' //tooltip阴影
        },

        toolbox: {
            show: false,
            feature: {
                mark: {show: false},
                dataView: {show: false, readOnly: false},
                magicType: {show: false, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: false},
                saveAsImage: {show: false}
            }
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xValueArray,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: '0',//坐标显示间隔
                    textStyle: {
                        color: '#666666',
                        fontSize: 10,

                    }

                }
            },
        ],

        yAxis: [
            {
                type: 'value',
                show: true,
                splitLine: {//分割线条样式
                    show: true,
                    lineStyle: {
                        color: '#f6f7fb',
                        type: 'dashed',
                        width: 1,
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false,
                }

            }
        ],
        series: [
            {
                name: '',
                type: 'line',
                smooth: true,
                symbol: 'emptyCircle',
                showSymbol: false,
                symbolSize: 3,
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90],
                areaStyle: {//填充区颜色
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{//填充区渐变色
                                offset: 0, color: '#f898b3'
                            }, {
                                offset: 0.5, color: '#f898b3'
                            }, {
                                offset: 1, color: '#ffffff'
                            }]
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        //折线点颜色
                        color: '#FA4577',
                    },
                },
                lineStyle: {
                    normal: {
                        //曲线条颜色
                        color: '#FA4577',
                        width: 1,
                        type: 'solid'
                    }
                }
            },

        ]
    };
      return lineOption;

}
export var lineOption =  {
       /* dataZoom: {
            type: 'inside',
            startValue: 0,
            endValue: 6,
            zoomLock: true
        },*/
        grid: {
            left: 20,
            right: 20,
            bottom: 25,
            top: 30,
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            paddingLeft: 10,
            paddingRight: 20,
            backgroundColor: '#FFFFFF',//提示框背景颜色
            textStyle: {
                fontSize: 10,
                color: '#666666',
            },
            position: 'left',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#23d2cc',
                    width: 0.5,
                    type: 'solid'
                },
            },
            formatter: "{b}<br/>{c}  ",
            extraCssText: 'box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);' //tooltip阴影
        },

        toolbox: {
            show: false,
            feature: {
                mark: {show: false},
                dataView: {show: false, readOnly: false},
                magicType: {show: false, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: false},
                saveAsImage: {show: false}
            }
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["09-04","09-05","09-06","09-07","09-08","09-09","09-10","09-11","09-12","09-13","09-14","09-14",],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: '0',//坐标显示间隔
                    textStyle: {
                        color: '#666666',
                        fontSize: 10,

                    }

                }
            },
        ],

        yAxis: [
            {
                type: 'value',
                show: true,
                splitLine: {//分割线条样式
                    show: true,
                    lineStyle: {
                        color: '#f6f7fb',
                        type: 'dashed',
                        width: 1,
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false,
                }

            }
        ],
        series: [
            {
                name: '',
                type: 'line',
                smooth: true,
                symbol: 'emptyCircle',
                showSymbol: false,
                symbolSize: 3,
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90],
                areaStyle: {//填充区颜色
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{//填充区渐变色
                                offset: 0, color: '#f898b3'
                            }, {
                                offset: 0.5, color: '#f898b3'
                            }, {
                                offset: 1, color: '#ffffff'
                            }]
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        //折线点颜色
                        color: '#FA4577',
                    },
                },
                lineStyle: {
                    normal: {
                        //曲线条颜色
                        color: '#FA4577',
                        width: 1,
                        type: 'solid'
                    }
                }
            },

        ]
    };

var pieData = [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 1548, name: '搜索引擎' }
]
export var pieOption = {
    color: seriesColors,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: pieData
        }
    ]
};

export var tableData = pieData.map((item, key) => {
    return [
        <View style={{ backgroundColor: seriesColors[key], height: 10, width: 10 }}></View>,
        item.value
    ]
})