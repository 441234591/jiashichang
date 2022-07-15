var chartDoms = document.getElementsByClassName('echarts_5');

function getData(color) {
  return [{
          value: 28,
          name: '房建',
          itemStyle: {
              color: color
          }
      },
      {
          value: 23,
          name: '市政',
          itemStyle: {
              color: color
          }
      },
      {
          value: 11,
          name: '钢结构',
          itemStyle: {
              color: color
          }
      },
      {
          value: 12,
          name: '机电',
          itemStyle: {
              color: color
          }
      },
      {
          value: 11,
          name: '其他',
          itemStyle: {
              color: color
          }
      },
      {
        value: 15,
        name: '土石方',
        itemStyle: {
            color: color
        }
    }
  ]
}
for(var i=0;i<chartDoms.length;i++){
var chartDom =chartDoms[i]
var myChart = echarts.init(chartDom);
var option;
option = {
  color: ['#1391FF', '#FEBA1C', '#E7697E', '#57C87E', '#FAEA22','#B168FA'],
  legend: {
      orient: 'horizontal',
      icon: 'rect',
      y: 'bottom',
      x: 'center',
      data: getData().map(item => item.name),
      itemWidth:10,
      itemHeight:10,
      textStyle:{
        color:'white'
      }
  },
  grid:{
    left:0,
    right:0,
    top:0,
    bottom:0
  },
  series: [{
      name: '外圈',
      type: 'pie',
      radius: ['0%', '99%'],
      center:['50%','40%'],
      label: {
          normal: {
              show: false,
              // position: 'center'
          },
          // emphasis: {
          //     show: true,
          //     textStyle: {
          //         fontSize: '30',
          //         fontWeight: 'bold'
          //     }
          // }
      },
      itemStyle: {
          normal: {
              borderWidth: 1,
              borderColor: '#fff',
          }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data: getData().map(item => {
          return {
              value: item.value,
              name: item.name
          }
      })
  }, {
      name: '内圈',
      type: 'pie',
      radius: ['48%', '69%'],
      center:['50%','40%'],
      hoverAnimation: false,
      label: {
          normal: {
              show: true,
              position: 'inside',
              color:'#fff',
              formatter: `{b}\n\n{c}`,
              textStyle: {
                fontSize: '.1529rem',
              }
          },
          // emphasis: {
          //     show: true,
          //     textStyle: {
          //         fontSize: '30',
          //         fontWeight: 'bold'
          //     }
          // }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data: getData('transparent')
  }]
};

myChart.setOption(option);
option && myChart.setOption(option);
window.addEventListener("resize", function() {
  // 让我们的图表调用 resize这个方法
  myChart.resize();
});
}
  


  

