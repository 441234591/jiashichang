let chartDom6 = document.getElementById('echart-index6-1');
let myChart6 = echarts.init(chartDom6);
let option_6;
let color1=new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  {
      offset: 0,
      color: '#40C8FE',
  },
  {
      offset: 1,
      color: '#1E8DF3',
  },
])
let color2=new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  {
      offset: 0,
      color: '#7CDF81',
  },
  {
      offset: 1,
      color: '#2BB475',
  },
])
let color3=new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  {
      offset: 0,
      color: '#A2A4FF',
  },
  {
      offset: 1,
      color: '#7277F6',
  },
])
let color4=new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  {
      offset: 0,
      color: '#FBAF7C',
  },
  {
      offset: 1,
      color: '#D65A14',
  },
])
let color5=new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  {
      offset: 0,
      color: '#2782EE',
  },
  {
      offset: 1,
      color: '#37CFFC',
  },
])
option_6 = {
    grid:{
        top:"25%",
        left:0,
        right:0,
        bottom:0,
        containLabel:true
    },
    color: ['#35ABFD', '#2f4533'],
    legend: {
      data: ['历年课题数量(个)', '上年度课题数量(个)'],
      top:0,
      textStyle:{
        color:"white"
      },
      itemWidth:10,
      itemHeight:10
    },
    xAxis: [
      {
        type: 'category',
        data: ['企业级', '集团级', '市级', '省级',"国家级"],
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
        splitNumber:'4',
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
        name: '历年课题数量(个)',
        type: 'bar',
        label: {
            show: false,
            position: 'top',
            color: 'white'
        },
        data: [
          5, 4, 15, 1,9
        ],
        barWidth:20,
        itemStyle: {
            normal: {
              color: color1
            },
        },
      },
      {
        name: '上年度课题数量(个)',
        type: 'bar',
        label: {
            show: false,
            position: 'top',
            color: 'white'
        },
        data: [
          8, 7, 6, 4,4
        ],
        barWidth:20, 
        itemStyle: {
            normal: {
              color: color2
            },
            
        },
      }
    ]
  };
  

  option_6 && myChart6.setOption(option_6);
//科技创奖
let chartDom6_2 = document.getElementById('echart-index6-2');
let myChart6_2 = echarts.init(chartDom6_2);
option_6.series[0].itemStyle.normal.color = color3;
option_6.series[1].itemStyle.normal.color = color4;
option_6.series[0].name = '国家级';
option_6.series[1].name = '省级';
option_6.legend.data=['国家级','省级'];
option_6.xAxis[0].data=['绿色建设','绿色施工','新技术应用','装配式']
option_6.title={
  text:'示范工程',
  left:0,
  top:0,
  textStyle:{
    color:'white',
    fontSize:12
  }
}
option_6 && myChart6_2.setOption(option_6);

//碳排放量
let chartDom4 = document.getElementById('echart-index6-4');
let myChart4 = echarts.init(chartDom4);
option_6.series[0].itemStyle.normal.color = color1;
option_6.series[1].itemStyle.normal.color = color2;
option_6.series[0].name = '碳排放量(吨)';
option_6.series[1].name = '减碳量(吨)';
option_6.series[0].data=[16,16,16,15,16,11,14];
option_6.series[1].data=[5,5,5,5,5,5,5];
option_6.legend.data=['碳排放量(吨)','减碳量(吨)'];
option_6.xAxis[0].data=['房建','市政','土方','道路与桥梁','水利水电','机电安装','装饰装修']
option_6.title={
  text:'碳排放量',
  left:0,
  top:0,
  textStyle:{
    color:'white',
    fontSize:12
  }
}
option_6 && myChart4.setOption(option_6);

//垃圾产生量
let chartDom5 = document.getElementById('echart-index6-5');
let myChart5 = echarts.init(chartDom5);
option_6.series[0].itemStyle.normal.color = color1;
option_6.series[1].itemStyle.normal.color = color4;
option_6.series[0].name = '建筑垃圾产生量(吨)';
option_6.series[1].name = '建筑垃圾减少量(吨)';
option_6.series[0].data=[200,300,360,250,300,200,210];
option_6.series[1].data=[100,100,100,100,100,100,100];
option_6.legend.data=['建筑垃圾产生量(吨)','建筑垃圾减少量(吨)'];
option_6.xAxis[0].data=['房建','市政','土方','道路与桥梁','水利水电','机电安装','装饰装修']
option_6.title={
  text:'垃圾产生量',
  left:0,
  top:0,
  textStyle:{
    color:'white',
    fontSize:12
  }
}
option_6 && myChart5.setOption(option_6);

//科研成果
let chartDom3 = document.getElementById('echart-index6-3');
let myChart3 = echarts.init(chartDom3);
option_6.series[0].itemStyle.normal.color = color1;
option_6.series[0].data = [1,2,3,4,5,6];
option_6.series.pop();
option_6.series[0].name = '科研成果总量(个)';
option_6.legend.data=['科研成果总量(个)'];
option_6.xAxis[0].data=['专利','工法','标准','软著','专著','论文'];
option_6.title={
  show:false
}
option_6 && myChart3.setOption(option_6);




let color6_1 = ['#FF8A3C ', '#393230'];
let echartData6_1 = [
    {
        name: '已实施',
        value: '89',
    },
    {
        name: '未实施',
        value: '11',
    },
];

let total6_1 = echartData6_1.reduce((a, b) => {
    return a + b.value * 1;
}, 0);
let paichar = document.getElementById('pie-echart');
let myChart_paichar = echarts.init(paichar);
optionpie = {
    color: color6_1,
    legend: {
      // orient: 'vertical',
      icon: 'circle',
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
    title: [
        {
            text: `{name|` + `89%` + `}\n{val|` + `完成率` + `}`,
            //subtext: '{val|' + total + '次}',
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
                },
            }
        },
    ],
    series: [
        {
            type: 'pie',
            radius: ['60%', '85%'],
            center: ['50%', '42%'],
            data: echartData6_1,
            hoverAnimation: false,
            labelLine: {
             show:false
          },
        },
    ],
};
optionpie && myChart_paichar.setOption(optionpie);




window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
    myChart2.resize();
    myChart3.resize();
});



