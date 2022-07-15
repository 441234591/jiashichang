var chartDom = document.getElementById('echart-left-bottom');
var myChart = echarts.init(chartDom);
var option;
option = {
    grid:{
        top:"10%",
        left:0,
        right:0,
        bottom:0,
        containLabel:true
    },
    color: ['#35ABFD', '#2f4533'],
    legend: {
      data: ['金额(亿元)', '数量(个)'],
      itemWidth:10,
      itemHeight:10,
      textStyle:{
        color:"white"
      }
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月','5月','6月'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel:{
            color:"white"
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:"white"
            }
        },
        axisTick: {
            show: false
          }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max:3500,
        interval:500,
        axisLine: {
            show: false
        },
        axisLabel:{
            color:"white"
        },
        splitLine:{
            show:true,
            lineStyle:{
                color: "rgba(217, 214, 214, .1)"
            }
        },
        axisTick:{
            show:false
        }
      },
      {
        type: 'value',
        min: 0,
        interval:100,
        max:700,
        position:'right',
        axisLine: {
            show: false
        },
        axisLabel:{
            color:"white"
        },
        splitLine:{
            show:true,
            lineStyle:{
                color: "rgba(217, 214, 214, .1)"
            }
        },
        axisTick:{
            show:false
        }
      }
    ],
    series: [
      {
        name: '金额(亿元)',
        type: 'bar',
        label: {
            show: false,
            position: 'top',
            color: 'white'
        },
        data: [
          2800, 2400, 2600, 2200,2500,2300
        ],
        barWidth:20,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 1,
                        color: '#1E8DF3',
                    },
                    {
                        offset: 0,
                        color: '#40C9FE',
                    },
                ]),
            },
        },
      },
      {
        name: '数量(个)',
        type: 'bar',
        label: {
            show: false,
            position: 'top',
            color: 'white'
        },
        data: [
          320, 280, 310, 280,300,290
        ],
        yAxisIndex: 1,
        barWidth:20, 
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 1,
                        color: '#F69C20',
                    },
                    {
                        offset: 0,
                        color: '#D6CF57',
                    },
                ]),
            },
            
        },
      }
    ]
  };
  

option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});