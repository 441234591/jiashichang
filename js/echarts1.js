var chartDom = document.getElementById('echarts1');
var myChart = echarts.init(chartDom);
var option;



data = [{
  name: '直属项目管理公司',
  value: 39569,
},
{
  name: '路桥公司',
  value: 36473,
},
{
  name: '长沙经营总公司',
  value: 30386,
},
{
  name: '广东直营',
  value: 19193,
},
{
  name: '湘中分公司',
  value: 17896,
},{
  name: '江西分公司',
  value: 14752,
},{
  name: '湖北分公司',
  value: 12361,
},{
  name: '广东分公司',
  value: 12472,
},{
  name: '湖南分公司',
  value: 12185,
}
];
getArrByKey = (data, k) => {
let key = k || "value";
let res = [];
if (data) {
  data.forEach(function(t) {
      res.push(t[key]);
  });
}
return res;
};
getSymbolData = (data) => {
let arr = [];
for (var i = 0; i < data.length; i++) {
  arr.push({
      value: data[i].value,
      symbolPosition: 'end'
  })
}
return arr;
}
console.log(getSymbolData(data));
option = {
backgroundColor: 'transparent',
grid: {
  // right: "10%",
  // left: "10%",
  // width: '80%',
  top:0,
  left:"-20%",
  height:'100%',
  containLabel: true
},
xAxis: {
  show: false,
  axisLabel: {
    show: false,
  }
},
yAxis: [
  {
  // triggerEvent: true,
  show: true,
  inverse: false,
  data: getArrByKey(data, 'name'),
  axisLine: {
      show: false
  },
  splitLine: {
      show: false
  },
  axisTick: {
      show: false
  },
  axisLabel: {
      show: true,
      interval: 0,
      color: '#fff',
      align: 'left',
      margin: 100,
      windth:100,
      // fontSize: 12,
      // formatter: function(value, index) {
      //     return '{title|' + value + '}'
      // },
      // rich: {
      //     title: {
      //         width: 0
      //     }
      // }
  },
}, {
  triggerEvent: true,
  show: true,
  data: getArrByKey(data, 'name'),
  axisLine: {
      show: false
  },
  splitLine: {
      show: false
  },
  axisTick: {
      show: false
  },
  axisLabel: {
      interval: 0,
      // shadowOffsetX: '-50px',
      color: ['white'],
      align: 'end',
      verticalAlign: 'center',
      fontSize: 12,
      formatter: function(value, index) {
          return data[index].value
      },
      
  }
}],
series: [{
  name: 'XXX',
  type: 'pictorialBar',
  symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
  symbolSize: [30, 30],
  symbolOffset: [20, 0],
  z: 12,
  itemStyle: {
      normal: {
          color: '#fff'
      }
  },
  data: getSymbolData(data)
}, 
{
  name: '条',
  type: 'bar',
  showBackground: true,
  backgroundStyle: {
    borderRadius:200
  },
  data: data,
  barWidth: 5,
  itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                  offset: 0,
                  color: '#2782EE',
              },
              {
                  offset: 1,
                  color: '#37CFFC',
              },
          ]),
          barBorderRadius: 20
      },
  },
  // label: {
  //     normal: {
  //         color: '#fff',
  //         show: false,
  //         align:"right",
  //         position: [myChart.getWidth() - 180, 0,0,0],
  //         textStyle: {
  //             fontSize: 16,
  //             color: 'white'
  //         },
  //         formatter: function(a, b) {
  //             console.log(myChart.getWidth());
  //             console.log(a);
  //             console.log(b);
  //             return a.value
  //         }
  //     }
  // }
}]
};
option && myChart.setOption(option);

function WidthAdaptive(res) {
    var windth = window.innerWidth;
    let fontSize = windth / 5280;
    return fontSize * res;
}

window.addEventListener("resize", function() {
  // 让我们的图表调用 resize这个方法
  myChart.resize();
});
