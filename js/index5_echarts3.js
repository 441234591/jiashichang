var chartDom = document.getElementById('echart-5-four-two');
var myChart = echarts.init(chartDom);
var option;
//自定义提示文字
var getname = ["直属项目管理公司", "路桥公司" ,"长沙经营总公司","湘南分公司","四川分公司","湘中分公司","温州分公司","广东直属分公司","直营项目公司","岳阳分公司"];
var getvalue =[7709,7603,6446,3619,2897,2814,2167,1954,1887,1502];
var option = {
    grid: {
        top: 0,
        bottom: 0,
        left: '9%',
        right: '10%',
        containLabel:true
    },
    yAxis: [{
        data: getname,
        inverse:true,
        axisLabel: {
            padding: [0, 0, 0, -100],
            align:'left',
            color: 'white',
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: 'white',
            }
        },
        axisTick: {
            show: false
        },
    }],
    xAxis: [{
        type: 'value',
        axisLabel: {
           show:false
   
        },
        axisLine: {
            show:false,
        },
        axisTick: {
            show: false
        },
        splitLine:{
            show:false,
        }
    }],
    series: [
        {
        type: 'bar',
        data: getvalue,
        barWidth: '10',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'right',
                    formatter:`{c}万元`,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10
                    },
                },
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgb(43,162,223)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgb(46,205,254)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
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

  


  

