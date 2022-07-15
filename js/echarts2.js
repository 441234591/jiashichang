var chartDom = document.getElementById('echarts2');
var myChart = echarts.init(chartDom);
var option;
option = {
    backgroundColor:"transparent",
        grid: {
            bottom:0,
            // top:10,
            height:"85%",
            containLabel:true
        },
        xAxis: [{
            type: 'category',
            nameRotate:0,
            data: ["长沙经营","直属分工司","直营分公司","怀化分公司","海南分公司","湘北分公司","湘中分公司","岳阳分公司","温州分公司"],
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                // margin: 10,
                color: '#e2e9ff',
                rotate:35,
                textStyle: {
                    fontSize: 8
                },
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
                fontSize:8
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                interval: 0,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [{
            type: 'bar',
            data: [3200,2200,2000,2200,1200,800,1000,1200,2000],
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(131,234,133,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(45,199,244,1)' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 10,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#00D6F9',
                        fontSize: 8
                    }
  
                }
            }
        }]
    };
option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});