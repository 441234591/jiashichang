var chartDom = document.getElementById('echarts2');
var myChart = echarts.init(chartDom);
var option;

option = {
    grid:{
        left:0,
        right:0,
        top:'10%',
        bottom:0,
        containLabel:true
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle:{
            color:"white"
        }
    },
      data: [
        '娄底市',
        '岳阳市',
        '张家界',
        '株洲市',
        '永州市',
        '湘潭市',
        '益阳市',
        '邵阳市',
        '长沙市',
      ]
    },
    yAxis: {
      type: 'value',
      splitNumber:4,
        axisLabel:{
            show: true,
            color:"white"
        },
        axisLine: {
            show: false,
        },
        splitLine:{
            show:true,
            lineStyle:{
                color: "rgba(217, 214, 214, .1)"
            }
        }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    series: [
      {
        data: [17, 16, 11, 10, 9, 8, 7, 6, 5],
        type: 'bar',
        barWidth:30,
        showBackground:true,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    position: 'top',
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
                            color: 'rgb(127,226,130)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgb(38,176,116)', // 100% 处的颜色
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
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});