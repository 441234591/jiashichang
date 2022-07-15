var chartDoms = document.getElementsByClassName('echarts3');



var datax1 = ["总投资","已完成投资"];
var datax2_1 = ["应到位资本金","已到位资本金"];
var datax2_2 = ["应到位银行贷款","已到位银行贷款"];
var datax2_3 = ["已到位其他形式资金"];
var datax3 = ["应回收","已回收"];
var datay = [39569.43,25473.24];
var datay1 = [39569.43];
var dataxs = [datax1,datax2_1,datax2_2,datax2_3,datax3]
for(var i =0;i<chartDoms.length;i++){
  chartDom = chartDoms[i]
  var myChart = echarts.init(chartDom);
  var option;
  option = {
      grid:{
          left:'30%',
          right:'20%',
          top:0,
          bottom:0,
          containLabel:false
      },
      yAxis: {
        type: 'category',
        inverse:true,
        axisTick: {
          show: false
        },
        axisLabel:{
          align:'left',
          padding: [0, 0, 0, -112],     
        },
        axisLine: {
          show: false,
          lineStyle:{
              color:"white"
          }
      },
        data: dataxs[i]
      },
      xAxis: {
        type: 'value',
        splitNumber:4,
          axisLabel:{
              show: false,
              color:"white"
          },
          axisLine: {
              show: false,
          },
          splitLine:{
              show:false,
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
          data:datay,
          type: 'bar',
          barWidth:10,
          showBackground:false,
          itemStyle: {
              normal: {
                  label: {
                      show: true,
                      position: 'right',
                      formatter:"{c}万元",
                      textStyle: {
                          fontSize: 12,
                          color: '#fff',
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
                              color: 'rgb(42,153,254)', // 0% 处的颜色
                          },
                          {
                              offset: 1,
                              color: 'rgb(18,66,132)', // 100% 处的颜色
                          },
                      ],
                      global: false, // 缺省为 false
                  },
              },
          },
        }
      ]
  };
  if(i==3){
    option.series[0].data=datay1
  }
  console.log(option)
  option && myChart.setOption(option);
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
}

  


  

