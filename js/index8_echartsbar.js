var chartDom = document.getElementById('bar-echarts');
var myChart = echarts.init(chartDom);
var option;
var color4=new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 1,
        color: '#FBAF7C',
    },
    {
        offset: 0,
        color: '#D65A14',
    },
  ])
  var formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
//自定义提示文字
var getname = ["直属项目管理公司", "路桥公司" ,"长沙经营总公司","湘南分公司","四川分公司","湘中分公司","温州分公司","广东直属分公司","直营项目公司","岳阳分公司"];
var getvalue =[39569,36473,30386,19193,17896,13046,12674,11751,10357,10113];
var option = {
    grid: {
        top: 0,
        bottom: 0,
        left: '4%',
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
                    formatter: params => {
                        return (                            
                            formatNumber(params.value) + '万元'
                        );
                    },
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
option && myChart.setOption(option);

var chartDom2 = document.getElementById('bar-echarts2');
var myChart2 = echarts.init(chartDom2);
option.series[0].itemStyle.normal.color = color4;
option && myChart2.setOption(option);
window.addEventListener("resize", function() {
  // 让我们的图表调用 resize这个方法
  myChart.resize();
  myChart2.resize();
});

  


  

