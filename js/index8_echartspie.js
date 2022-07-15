var chartDom = document.getElementById('pie-echarts');
var myChart = echarts.init(chartDom);
var option;
let datas = [
    {
      name: "湘中分公司",
      value: 13046,
    },
    {
      name: "直属项目管理公司",
      value: 39569,
    },
    {
      name: "路桥公司",
      value: 36473,
    },
    {
      name: "温州分公司",
      value: 12674,
    },
    {
        name: "岳阳分公司",
        value: 10113,
      },
      {
        name: "湘南分公司",
        value: 19193,
      },
      {
        name: "四川分公司",
        value: 17896,
      },
      {
        name: "广东直属分公司",
        value: 11751,
      },
      {
        name: "直营项目公司",
        value: 10357,
      },
      {
        name: "长沙经营总公司",
        value: 30386,
      },
  ];
  var formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
  var option = {
    color: ["#F56B6D", "#C065E7", "#765DEB", "#3862D8","#6A89E2", "#1BCBFE", "#6EFBBF", "#40C057","#FFD351", "#FF8E43 "],
    series: [
      {
        name: "",
        type: "pie",
        radius: ["30%", "80%"],
        center: ["50%", "50%"],
        roseType: "radius",
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}\n{value|' +
                        formatNumber(params.value) + '}'
                    );
                },
                // padding: [0 , -100, 25, -100],
                rich: {
                    name: {                      
                        color: 'white'
                    },
                    value: {
                        fontFamily:'led regular',
                        // padding: [10, 0, 0, 20],
                        color: 'white'
                        // color: '#333333'
                    }
                }
            }
        },
        labelLine: {
          length: 1,
          length2: 20,
        },
        data: datas,
      },
    ],
  };
option && myChart.setOption(option);

var chartDom2 = document.getElementById('pie-echarts2');
var myChart2 = echarts.init(chartDom2);

option && myChart2.setOption(option);

window.addEventListener("resize", function() {
  // 让我们的图表调用 resize这个方法
  myChart.resize();
  myChart2.resize();
});

  


  

