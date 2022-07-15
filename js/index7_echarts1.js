var chartDom = document.getElementById('line-qingjie-echart');
var myChart = echarts.init(chartDom);
var option;
var colors=['#3678C6','#4A50A4'+'#58A55D'+'#F3CB4A']
option = {
    backgroundColor: 'transparent',
    grid: {
        top: '10%',
        bottom: '0%',
        left:0,
        right:0,
        containLabel:true
    },
    legend: {
        show: true,
        icon: 'line',
        textStyle: {
            color: 'white',
        },
        // width:"80%",
        orient:"horizontal",
        itemWidth:10,
        // right:0
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            color: '#d3d5d6',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white',
            }
        },
        axisTick: {
            show: false
        },
        boundaryGap: true,
        data: ["1月","2月","3月","4月","5月","6月"],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        nameTextStyle: {
             color: '#d2d2d2',
             padding: [0, 0, 0, -50],
        },
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#05365d',
                width: 1,
                type:'dashed'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#d3d5d6',
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
         {
            name: '送审(万元)',
            type: 'line',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                show:false,
                color: "#3678C6",
                borderColor: "#fff",
                borderWidth: 2
            },
            lineStyle: {
                width: 2,
                // color: "#3678C6",
                shadowColor: '#3678C6',
                shadowBlur: 4,
            },
            tooltip: {
                show: false
            },
            data: [500,600,900,1100,1400,1800]
        },
        {
            name: '定案(万元)',
            type: 'line',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                show:false,
                color: "#4A50A4",
                borderColor: "#fff",
                borderWidth: 2
            },
            lineStyle: {
                width: 2,
                // color: "#4A50A4",
                shadowColor: '#4A50A4',
                shadowBlur: 4,
            },
            tooltip: {
                show: false
            },
            data: [350,400,600,920,1100,1150]
        },
        {
            name: '竣工备案(万元)',
            type: 'line',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                show:false,
                color: "#58A55D",
                borderColor: "#fff",
                borderWidth: 2
            },
            lineStyle: {
                width: 2,
                // color: "#58A55D",
                shadowColor: '#58A55D',
                shadowBlur: 4,
            },
            tooltip: {
                show: false
            },
            data: [300,330,410,600,800,900]
        }
    ]
};
option && myChart.setOption(option);

var chartDom_middle = document.getElementById('echart-middle');
var myChart_middle = echarts.init(chartDom_middle);

option.series[0].name = '钢材(万元)';
option.series[0].data=[4000,3800,4000,4100,4000,4050];
option.series[1].name = '模板(万元)';
option.series[1].data=[1800,1900,1800,1600,1800,1700];
option.series[2].name = '木方(万元)';
option.series[2].data=[3700,3500,3300,3200,3250,3500];
option.legend.data=['钢材(万元)','模板(万元)','木方(万元)'];
option && myChart_middle.setOption(option);


var chartDom_top_left = document.getElementById('top-left-echart');
var myChart_top_left = echarts.init(chartDom_top_left);
option.series[0].name = '材料采购(亿元)';
option.series[0].data=[0,400,570,620,740,950];
option.series[0].smooth=false;
option.series[1].name = '设备租赁(亿元)';
option.series[1].data=[0,610,1040,1210,1580,2100];
option.series[1].smooth=false;
option.series[2].name = '劳务分包(亿元)';
option.series[2].data=[0,450,600,950,1080,1540];
option.series[2].smooth=false;
option.series.push({
    name: '业务分包(亿元)',
    type: 'line',
    symbol: 'none',  //取消折点圆圈
    smooth: false,
    showAllSymbol: true,
    symbol: 'circle',
    symbolSize: 8,
    itemStyle: {
        show:false,
        color: "#F3CB4A",
        borderColor: "#fff",
        borderWidth: 2
    },
    lineStyle: {
        width: 2,
        // color: "#58A55D",
        shadowColor: '#58A55D',
        shadowBlur: 4,
    },
    tooltip: {
        show: false
    },
    data: [0,1000,1300,1500,1700,2300]
});
option.legend.data=['材料采购(亿元)','设备租赁(亿元)','劳务分包(亿元)','业务分包(亿元)'];
option && myChart_top_left.setOption(option);





var chartDombar1 = document.getElementById('echart1');
var myChartbar1 = echarts.init(chartDombar1);
var optionbar1;
//5.0以下版本
var data1 = [4, 2, 1, 3, 5];
var xData = ['CNC-1', 'CNC-2', 'CNC-3', 'CNC-4', 'CNC-5'];
optionbar1 = {
    backgroundColor: 'transparent',
    grid: {
        borderWidth: 0,
        top: '50%',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel :true
    },

    xAxis: [
        {
            type: 'category',
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#2557A3',
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
            barWidth: 20,
            barGap: '5%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        formatter:'{c}件',
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
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


optionbar1 && myChartbar1.setOption(optionbar1);

window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
    myChart_middle.resize();
    chartDombar1.resize();
});