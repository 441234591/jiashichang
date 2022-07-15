var chartDom = document.getElementById('echarts8');
var myChart = echarts.init(chartDom);
var option;
//5.0以下版本
option = {
    backgroundColor:'transparent',
        // title: {
        //     text: 'chart_3'
        // },
        legend: {
            data: ['公司完成(亿元)'],
            textStyle:{
                color:"white",
                fontSize:toRemfontSize(26)
            },
            icon:"rect",
            itemHeight:toRemfontSize(4),
            itemWidth:toRemfontSize(20),
        },
        xAxis: {
          data: ['2018', '2019','2020', '2021', '2022'],
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#727582',
              width: 1
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: toRemfontSize(26)
            }
          }
        },
        yAxis: {
          color: '#fff',
          min:80,
          max:160,
          splitLine: {
            show: true,
            interval:5,
            lineStyle:{
                color: 'rgba(255,255,255,0.12)',
                width:0.5
            }
          },
          axisTick:{
            show:false
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: toRemfontSize(26)
            }
          }
        },
        grid:{
            height:"80%",
            width:"100%",
            top:"20%",
            left:0,
            bottom:"0",
            containLabel: true
        },
        series: [
          {
            type: 'line',
            symbol: 'circle',
            name:"公司完成(亿元)",
            symbolSize: toRemfontSize(25),
            smooth: true,
            data: [80, 130, 155,150, 141],
            itemStyle: {
              //拐点的样式
              color: 'rgba(87, 183, 242, 1)',
              borderWidth: 2,
              borderColor: 'white'
            },
            lineStyle: {
              //线条的样式
              width: 3,
              color: 'rgba(87, 183, 242, 1)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(87, 183, 242, 1)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(6,37,55,0)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ]
      }

option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});
