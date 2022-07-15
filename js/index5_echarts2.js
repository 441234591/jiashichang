var chartDom = document.getElementById('echarts_5_1');
var myChart = echarts.init(chartDom);
var option;
//自定义提示文字
var getname = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'];
var getvalue =[2200,1100,4321,5547,6392,6432,7323,8123,5392,5392];
var getvalue2 =[2500,1300,5148,6878,7399,7613,0,0,0,0];
var option = {
    grid: {
        top: '15%',
        bottom: 0,
        left: 0,
        right: 0,
        containLabel:true
    },
    legend: {
        data: [{
            name: '去年(万元)',
        }, {
            name: '今年(万元)',
        }],
        // type: "rect",
        top:'0',
        itemGap: 25,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: '13',
            color:'white'
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: 'white',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            lineStyle: {
                color: 'white',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: 'white',
   
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#FFAE00',
            }
        },
        axisTick: {
            show: false
        },
        splitLine:{
            show:true,
            lineStyle:{
                color: "rgba(217, 214, 214, .1)"
            }
        }
    }],
    series: [{
        name: "今年(万元)",
        type: 'bar',
        data: getvalue,
        barWidth: '15px',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    formatter:function(p){
                        if(p.value==0){
                            return ""
                        }
                    },
                    textStyle: {
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
                            color: 'rgb(128,226,130)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgb(39,177,116)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
        },
    },
    {
        name: "去年(万元)",
        type: 'bar',
        data: getvalue2,
        barWidth: '15px',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    formatter:function(p){
                        if(p.value==0){
                            return ""
                        }
                    },
                    textStyle: {
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
                            color: 'rgb(65,202,254)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgb(30,141,243)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            }
        },
    }
    
    ]
};
myChart.setOption(option);
option && myChart.setOption(option);
window.addEventListener("resize", function() {
  // 让我们的图表调用 resize这个方法
  myChart.resize();
});

  


  

