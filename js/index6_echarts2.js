var chartDom = document.getElementById('bar-echarts-wrap');
var myChart = echarts.init(chartDom);
var option;
//自定义提示文字
var getname = ["长沙经营总公司", "怀化分公司" ,"湘南分公司","湘北分公司","湘中分公司","岳阳分公司","温州分公司","四川分公司","西南分公司","西北分公司","路桥公司"];
var getvalue =[90,86,83,79,75,70,66,60,56,45,30];
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
            show:true,
            lineStyle: {
                color: 'white',
                width:3
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
                    formatter:`{c}%`,
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
                            color: 'rgb(252,103,62)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgb(252,138,106)', // 100% 处的颜色
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

  


  

