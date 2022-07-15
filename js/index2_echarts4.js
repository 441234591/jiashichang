var chartDom = document.getElementById('echartsking');
var myChart = echarts.init(chartDom);
var option;
var bgColor = '#001037';
var title = '大专';
var color = ['#E96B5A', '#5E5BF6', '#2489FF', '#19FFF1', '#657797', '#F6C021'];
var echartData = [{
        name: "大专",
        value: "686"
    },
    {
        name: "其他",
        value: "341"
    },
    {
        name: "研究生",
        value: "20"
    },
    {
        name: "大学一本",
        value: "334"
    },
    {
        name: "大学二本",
        value: "360"
    },
    {
        name: "大学三本",
        value: "330"
    }
];

var formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
var total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);

option = {
    backgroundColor: 'transparent',
    color: color,
    legend: {
      // orient: 'vertical',
      icon: 'rect',
      bottom: '0',
      // right: '15%',
      itemGap: 10,
      itemWidth: 12,
      itemHeight: 12,
      textStyle:{
          color:'#fff',
          fontWeight: 'normal',
      },
      // data: legends,
  },
    title: [{
        text: '{name|' + '686' + '}\n{val|' + title + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                val: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#fefefe',
                    padding: [5, 0]
                },
                name: {
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#fefefe',
                }
            }
        }
    },{
        text: '单位：个',
        top: 20,
        left: 20,
        textStyle: {
            fontSize: 14,
            color:'#666666',
            fontWeight: 400
        },
        show: false
    }],
    series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        startAngle:270,
        itemStyle: {
            normal: {
                // borderColor: bgColor,
                // borderWidth: 2
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 20,
                lineStyle: {
                     color: 'white'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}{value|' +
                        formatNumber(params.value) + '}'
                    );
                },
                // padding: [0 , -100, 25, -100],
                rich: {
                    name: {
                        fontSize: 12,
                        padding: [0, 0, 0, 10],
                        color: 'white'
                    },
                    value: {
                        fontSize: 12,
                        fontWeight: 'bolder',
                        fontFamily:'led regular',
                        // padding: [10, 0, 0, 20],
                        color: 'white'
                        // color: '#333333'
                    }
                }
            }
        },
    }]
};


  

option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});