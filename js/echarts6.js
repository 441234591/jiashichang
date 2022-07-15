var chartDom = document.getElementById('echarts6');
var myChart = echarts.init(chartDom);
var option;

option = {
    grid:{
        // height:"100%",
        top:"20%",
        bottom:0,
        left:0,
        right:0,
        containLabel:true
    },
    xAxis: {
        data: ['2019', '2020', '2021','2022'],
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
            width:2,
            color:"white"
            }
        },
        axisLabel:{
            textStyle:{
                fontSize:toRemfontSize(26),
                color:"white",                
            }
        }
    },
    yAxis: {
        nameLocation :"end",
        nameTextStyle:{
            fontSize:toRemfontSize(26),
            color:"white",
            align:"right",
            // lineHeight:60
        },
        margin:0,
        show: true,
        splitNumber:5,
        splitLine: {
            show: true,
            lineStyle:{
                type:"dashed",
                dashOffset:50,
                width:0.5
            }
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            align:"left",
            margin:20,
            textStyle:{
                fontSize:toRemfontSize(26),
                color:"white"
            }
        }
    },
    legend: {
        itemGap:toRemfontSize(36),
        icon:"rect",
        itemHeight:toRemfontSize(20),
        itemWidth:toRemfontSize(20),
        data: ['完成产值总额', '收进度款总额'],
        textStyle:{
            fontSize:toRemfontSize(24),
            color:"white"
        }
    },
    series: [{
        type: 'pictorialBar',
        name: '完成产值总额',
        symbol: 'triangle',
        symbolSize: ['50%', '100%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(249,251,97, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(247,142,28, 1)'
                }])
            }
        },
        label: {
            normal: {
                show: false,
                position: 'top',
                textStyle: {
                    'color': '#FFFFFF'
                }
            }
        },
        data: [{
            value: 150,
        }, {
            value: 170,
            symbolPatternSize: 800
        }, {
            value: 210,
            symbolPatternSize: 100
        } ,{
            value: 220,
            symbolPatternSize: 100
        }]
    }, {
        type: 'pictorialBar',
        name: '收进度款总额',
        symbol: 'triangle',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        label: {
            normal: {
                show: false,
                position: 'top',
                textStyle: {
                    'color': 'red'
                }
            }
        },
        symbolSize: ['50%', '100%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,255,230, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0,124,198, 1)'
                }])
            }
        },
        barGap: '-60%', // Make series be overlap
        data: [{
            value: 120,
        }, {
            value: 140,
            symbolPatternSize: 800
        }, {
            value: 170,
            symbolPatternSize: 100
        }, {
            value: 190,
            symbolPatternSize: 100
        }]
    }]
};
option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});