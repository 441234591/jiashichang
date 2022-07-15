var chartDom = document.getElementById('index_jiaoyinum');
var myChart = echarts.init(chartDom);
var option;
//5.0以下版本
var data1 = [4, 2, 1, 3, 5];
var xData = ['CNC-1', 'CNC-2', 'CNC-3', 'CNC-4', 'CNC-5'];
option = {
    backgroundColor: 'transparent',
    grid: {
        borderWidth: 0,
        top: '20%',
        left: '0',
        right: '0',
        bottom: '10',
        containLabel :true
    },

    xAxis: [
        {
            type: 'category',
            axisLine: {
                show:true,
                lineStyle: {
                    color: 'rgba(255,255,255)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                show:false
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show:false
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show:false
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '产量',
            type: 'bar',
            // "stack": "总量",
            barWidth: toRemfontSize(62),
            barGap: '5%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: toRemfontSize(26),
                            color: '#fff',
                        },
                        formatter:`{c}件`
                    },
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(112,116,255)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(144,124,255)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data1,
        },
    ],
};


option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});