var chartDom = document.getElementById('echarts3');
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
      data: ['男', '女'],
      textStyle:{
        color:"white"
      }
    },
    xAxis: [
      {
        type: 'category',
        data: ['小于30岁', '30到39岁', '40到49岁', '50岁及以上'],
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
        max: 500,
        interval: 100,
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

    ],
    series: [
      {
        name: '男',
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            color: 'white'
        },
        data: [
          475, 442, 482, 117
        ],
        barWidth:20,
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 1,
                        color: '#2782EE',
                    },
                    {
                        offset: 0,
                        color: '#37CFFC',
                    },
                ]),
            },
        },
      },
      {
        name: '女',
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            color: 'white'
        },
        data: [
          197, 183, 164, 3
        ],
        barWidth:20, 
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 1,
                        color: '#F0752B',
                    },
                    {
                        offset: 0,
                        color: '#FDB17F',
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