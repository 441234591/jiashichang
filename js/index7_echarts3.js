var chartDom = document.getElementById('echart-right-bottom');
var myChart = echarts.init(chartDom);
var option;

option = {
    grid:{
        top:"10%",
        left: '15%',
        right:'5%',
        bottom:0,
        containLabel:true
    },
    color: ['#35ABFD', '#2f4533'],
    legend: {
      data: ['定案(万)', '送审(万)','竣工备案(万)'],
      icon:'rect',
      itemWidth:10,
      itemHeight:10,
      textStyle:{
        color:"white"
      }
    },
    yAxis: [
      {
        type: 'category',
        inverse:true,
        data: ['长沙经营总公司', '岳阳分公司', '张家界分公司', '株洲分公司','永州分公司','湘潭分公司'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel:{
            color:"white",
            align:'left',
            padding: [0, 0, 0, -100],
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
    xAxis: [
      {
        type: 'value',
        min: 0,
        axisLine: {
            show: false
        },
        axisLabel:{
            color:"white",
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
        name: '定案(万)',
        type: 'bar',
        label: {
            show: false,
            position: 'top',
            color: 'white'
        },
        data: [
          9, 3, 1, 15,1,3
        ],
        barWidth:10,
        barGap:0,
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 1,
                        color: '#A5A7FF',
                    },
                    {
                        offset: 0,
                        color: '#6D71F5',
                    },
                ]),
            },
        },
      },
      {
        name: '送审(万)',
        type: 'bar',
        label: {
            show: false,
            position: 'top',
            color: 'white'
        },
        data: [
          13, 7, 3.5, 3.7,3,12.5
        ],
        barWidth:10, 
        barGap:0,
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: '#2BA2DF',
                    },
                    {
                        offset: 1,
                        color: '#2ECDFE',
                    },
                ]),
            },
            
        },
      },
      {
        name: '竣工备案(万)',
        type: 'bar',
        label: {
            show: false,
            position: 'top',
            color: 'white'
        },
        data: [
          11, 6, 2.5, 3,2.5,11
        ],
        barWidth:10, 
        barGap:0,
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: '#D25A14',
                    },
                    {
                        offset: 1,
                        color: '#FDB381',
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