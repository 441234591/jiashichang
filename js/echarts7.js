var chartDom = document.getElementById('echarts7');
var myChart = echarts.init(chartDom);
var option;
var valueCurrent=25;
option = {
    "series": [
        {
            type: 'gauge',
            // startAngle: 50,
            name: '外圈灰色线',
            radius: '98%',
            startAngle: 180,
            endAngle: -179.9999,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [1, new echarts.graphic.LinearGradient(
                            1, 0, 0, 0, [{
                                offset: 0,
                                color:  'rgba(52,100,138, 1)' // 0% 处的颜色
                            },
                            {
                                offset: 0.6,
                                color:  'rgba(52,100,138, 0.6)' // 60% 处的颜色
                            },
                            {
                                offset: 0.95,
                                color: 'rgba(52,100,138, 0.9)' // 95% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(52,100,138, 1)' // 100% 处的颜色
                            }
                            ]
                        )],
                        [
                            0, 'rgba(52,100,138,1)'
                        ]
                    ],
                    width: 100,
                    opacity:.1
                }
            },
            splitLine: { // 分隔线
                show: false
            },
            detail: {
                show: false
            },
            axisLabel: {
                show: false,
            },
        },       
        {
            "name": "外部刻度",
            "type": "gauge",
            "radius": "85%",
            "min": 0,
            "max": 100,
            "splitNumber": 10,
            "axisLabel": {
                "show": false,
                "distance":-50
            },
            "progress":{
                "show":false
            },
            "startAngle": 90,
            "endAngle": -269.9999,
            "axisLine": {
                show: true,
                lineStyle: {
                    width:10,
                    color: [
                        [
                            valueCurrent / 100, new echarts.graphic.LinearGradient(
                                0, 1, 1, 0, [{
                                        offset: 0,
                                        color: 'rgba(49,183,191,0)',
                                     }, 
                                    //{
                                    //     offset: 0.3,
                                    //     color: 'rgba(43,125,195,0)',
                                    // },
                                    {
                                        offset: 1,
                                        color: 'rgba(49,183,191,1)',
                                    }
                                ]
                            )
                        ],
                        [
                            1, 'rgba(43,125,195,0)'
                        ]
                    ]
                }
            },

            "axisTick": {//小刻度
                "show": true,
                "splitNumber":5,
                "lineStyle": {
                    "color": "#015C95",
                    "width": 1
                },
                "length": 5
            },
            "splitLine": {
                "show": false,
            },
            "detail": {
                "show": false,
                "color":"white",
                "fontSize":toRemfontSize(68),
                "offsetCenter":[0,"10%"],
                formatter: function (value) {
                    return value.toFixed(0)+"%";
                }
            },
            "pointer": {
                show: true,
                width: 2,
                itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 0,
                      y2: 0,
                      colorStops: [{
                          offset: 0, color: 'green' // 0% 处的颜色
                      }, {
                          offset: 0.3, color: 'yellow' // 0% 处的颜色
                      }, {
                          offset: 1, color: 'red' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                    }
                },
                icon: 'rect',
                length: '100%',
                width:1
                // "offsetCenter":[70,89],
                // "width":100
            },
            markPoint: {
                // symbol:'circle',
                // symbolSize:15,
                // itemStyle: {
                //     color: "#fff"
                // },
                data: [{
                    x: "50%",
                    y: "50%",
                    symbol: 'circle',
                    symbolSize: 55,
                    itemStyle: {
                        color: "transparent"
                    },
                }, ]
            },
            data:[
                valueCurrent
            ]
        },
        {
            type: 'gauge',
            // startAngle: 50,
            name: '内圈灰色线',
            radius: '50%',
            startAngle: 180,
            endAngle: -179.9999,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(52,100,138,0.3)',
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(145,207,255,0.6)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(241,246,246,1)',
                                }
                            ]
                        )],
                        [
                            1, 'rgba(28,128,245,.0)'
                        ]
                    ],
                    width: 1,
                    opacity:1
                }
            },
            splitLine: { // 分隔线
                show: false
            },
            detail: {
                show: false
            },
            axisLabel: {
                show: false,
            },
        },  
    ]
}
option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});