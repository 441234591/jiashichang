$("#index1").on("click",function(){
    //alert(1);
    window.location.href="index1.html"
})

$("#index2").on("click",function(){
    //alert(1);
    window.location.href="index2.html"
})

$("#index3").on("click",function(){
    //alert(1);
    window.location.href="index3.html"
})

$("#index4").on("click",function(){
    //alert(1);
    window.location.href="index4.html"
})

$("#index5").on("click",function(){
    //alert(1);
    window.location.href="index5.html"
})

$("#index6").on("click",function(){
    //alert(1);
    window.location.href="index6.html"
})

$("#index7").on("click",function(){
    //alert(1);
    window.location.href="index7.html"
})

$("#index8").on("click",function(){
    //alert(1);
    window.location.href="index8.html"
})

param = {
    sdate:"2022"
}

$.ajax({
    type:"get",
    url: baseUrl + shichangjingyin.projectStatis,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#bidProjectAmount").text((res.data.bidProjectAmount/10000).toFixed(2));
        $("#bidProjectNum").text(res.data.bidProjectNum);

        $("#contractAmount").text(formatNumber((res.data.contractAmount/10000).toFixed(2)));
        $("#contractNum").text(res.data.contractNum);

        $("#referendumProjectAmount").text(formatNumber((res.data.referendumProjectAmount/10000).toFixed(2)));
        $("#referendumProjectNum").text(res.data.referendumProjectNum);

        $("#discussingProjectAmount").text(formatNumber((res.data.discussingProjectAmount/10000).toFixed(2)));
        $("#discussingProjectNum").text(res.data.discussingProjectNum);

        $("#trackProjectAmount").text(formatNumber((res.data.trackProjectAmount/10000).toFixed(2)));
        $("#trackProjectNum").text(res.data.trackProjectNum);

        $("#winningProjectAmount").text(formatNumber((res.data.winningProjectAmount/10000).toFixed(2)));
        $("#winningProjectNum").text(res.data.winningProjectNum);
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });
//项目类型统计
$.ajax({
    type:"get",
    url: baseUrl + shichangjingyin.projectTypeStatis,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        var chartDoms = document.getElementsByClassName('pie-chart');
        var colors=['#2E92FF','#8987F9','#FF9A52','#22CED4','#E8E855','#74DE81'];
        var datas=[50,12,7,9,7,15]
        let option = {
            color: ['#EB4B4B', 'rgb(245,245,245)'],
            title: [
                // {
                //     text: formatter,
                //     x: '50%',
                //     y: '45%',
                //     textAlign: 'center',
                //     textStyle: {
                //         fontSize: '40',
                //         fontWeight: '500',
                //         textAlign: 'center',
                //     },
                // },
                {
                    subtext: '占比',
                    text:datas[0]+"%",
                    itemGap:2,
                    left: 'center',
                    top: 'center',
                    textStyle: {
                        fontSize: toRemfontSize(44),
                        color:colors[0]
                    },
                    subtextStyle:{
                    fontSize: toRemfontSize(20),
                    color:colors[0]
                    }
                },
            ],
            polar: {
                radius: ['85%', '100%'],
                center: ['50%', '50%'],
            },
            angleAxis: {
                max: 100,
                show: false,
                startAngle: 0,
            },
            radiusAxis: {
                type: 'category',
                show: true,
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
            series: [
                {
                    name: '1',
                    type: 'bar',
                    roundCap: true,
                    barWidth: 60,
                    showBackground: true,
                    data: [datas[0]],
                    coordinateSystem: 'polar',
                    label: {
                    show: true,
                        position: 'top',
                    },
                    itemStyle: {
                        color: colors[0],             
                    },
                },
            ],
        };
        var fangjiannum =0;
        var shizhengnum=0;
        var gangjiegounum=0;
        var jidiannum=0;
        var tushifangnum=0;
        var othernum =0;
        for(var i=0;i<res.data.length;i++){
            if(res.data[i].projectType=='房建'){
                fangjiannum=res.data[i].winningProjectNum;
                $("#fangjiannum").text(fangjiannum);
                chartDom = chartDoms[0];                 
                option.title[0].textStyle.color=colors[0];
                option.title[0].text=res.data[i].proportion+"%";
                option.title[0].subtextStyle.color=colors[0];
                option.series[0].itemStyle.color=colors[0];
                option.series[0].data =[res.data[i].proportion]
            }else if(res.data[i].projectType=='土石方'){
                tushifangnum=res.data[i].winningProjectNum;
                $("#tushifangnum").text(tushifangnum);
                chartDom = chartDoms[4];                 
                option.title[0].textStyle.color=colors[4];
                option.title[0].text=res.data[i].proportion+"%";
                option.title[0].subtextStyle.color=colors[4];
                option.series[0].itemStyle.color=colors[4];
                option.series[0].data =[res.data[i].proportion]
            }else if(res.data[i].projectType=='市政'){
                shizhengnum=res.data[i].winningProjectNum;
                chartDom = chartDoms[1];                 
                option.title[0].textStyle.color=colors[1];
                option.title[0].text=res.data[i].proportion+"%";
                option.title[0].subtextStyle.color=colors[1];
                option.series[0].itemStyle.color=colors[1];
                option.series[0].data =[res.data[i].proportion]
                $("#shizhengnum").text(shizhengnum);
            }else if(res.data[i].projectType=='钢结构'){
                gangjiegounum=res.data[i].winningProjectNum;
                $("#gangjiegounum").text(gangjiegounum);
                chartDom = chartDoms[2];                 
                option.title[0].textStyle.color=colors[2];
                option.title[0].text=res.data[i].proportion+"%";
                option.title[0].subtextStyle.color=colors[2];
                option.series[0].itemStyle.color=colors[2];
                option.series[0].data =[res.data[i].proportion]
            }else if(res.data[i].projectType=='机电'){
                jidiannum=res.data[i].winningProjectNum;
                $("#jidiannum").text(jidiannum);
                chartDom = chartDoms[3];                 
                option.title[0].textStyle.color=colors[3];
                option.title[0].text=res.data[i].proportion+"%";
                option.title[0].subtextStyle.color=colors[3];
                option.series[0].itemStyle.color=colors[3];
                option.series[0].data =[res.data[i].proportion]
            }else if(res.data[i].projectType=='其他'){
                othernum=res.data[i].winningProjectNum;
                $("#othernum").text(othernum);
                chartDom = chartDoms[5];                 
                option.title[0].textStyle.color=colors[5];
                option.title[0].text=res.data[i].proportion+"%";
                option.title[0].subtextStyle.color=colors[5];
                option.series[0].itemStyle.color=colors[5];
                option.series[0].data =[res.data[i].proportion]
            }
            
            var myChart = echarts.init(chartDom);
            option && myChart.setOption(option);
            window.addEventListener("resize", function() {
                // 让我们的图表调用 resize这个方法
                myChart.resize();
            });
        }
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//获取年度经营指标 
$.ajax({
    type:"get",
    url: baseUrl + shichangjingyin.yearOperate,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        var chartDom = document.getElementById('top-middle');
        var myChart_gauge = echarts.init(chartDom);
        var valueCurrent=res.data.percentage;
        option_gauge = {
            "series": [
                {
                    type: 'gauge',
                    // startAngle: 50,
                    name: '外圈灰色线',
                    radius: '98%',
                    startAngle: 180,
                    endAngle: -179.9999,
                    splitNumber: 0,
                    axisLine: { // 坐标轴线
                        lineStyle: {
                            color: [
                                [1, new echarts.graphic.LinearGradient(
                                    1, 0, 0, 0, [{
                                        offset: 0,
                                        color:  'rgba(85,170,240,1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.6,
                                        color:  'rgba(85,170,240,1)' // 100% 处的颜色
                                    },
                                    {
                                        offset: 0.95,
                                        color: 'rgba(85,170,240,1)' // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(85,170,240,1)' // 100% 处的颜色
                                    }
                                    ]
                                )],
                                [
                                    0, 'rgba(49,183,191,1)'
                                ]
                            ],
                            width: 100,
                            opacity:0.1
                        }
                    },
                    splitLine: { // 分隔线
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                },       
                {
                    "name": "外部刻度",
                    "type": "gauge",
                    "radius": "85%",
                    "min": 0,
                    "max": 100,
                    "splitNumber": 10,
                    "axisLabel": {
                        "show": false,
                        "distance":-50
                    },
                    "progress":{
                        "show":false
                    },
                    "startAngle": 90,
                    "endAngle": -269.9999,
                    "axisLine": {
                        show: true,
                        lineStyle: {
                            width:20,
                            color: [
                                [
                                    valueCurrent / 100, new echarts.graphic.LinearGradient(
                                        0, 1, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(49,183,191,0)',
                                             }, 
                                            //{
                                            //     offset: 0.3,
                                            //     color: 'rgba(43,125,195,0)',
                                            // },
                                            {
                                                offset: 1,
                                                color: 'rgba(49,183,191,1)',
                                            }
                                        ]
                                    )
                                ],
                                [
                                    1, 'rgba(43,125,195,0)'
                                ]
                            ]
                        }
                    },
        
                    "axisTick": {//小刻度
                        "show": true,
                        "splitNumber":5,
                        "lineStyle": {
                            "color": "#015C95",
                            "width": 2
                        },
                        "length": 8
                    },
                    "splitLine": {
                        "show": false,
                    },
                    "detail": {
                        "show": false,
                        "color":"white",
                        "fontSize":toRemfontSize(123),
                        "offsetCenter":[0,"10%"],
                        formatter: function (value) {
                            return value.toFixed(0)+"%";
                        }
                    },
                    "pointer": {
                        show: true,
                        width: 2,
                        itemStyle: {
                            color: {
                              type: 'linear',
                              x: 0,
                              y: 1,
                              x2: 0,
                              y2: 0,
                              colorStops: [{
                                  offset: 0, color: 'green' // 0% 处的颜色
                              }, {
                                  offset: 0.3, color: 'yellow' // 0% 处的颜色
                              }, {
                                  offset: 1, color: 'red' // 100% 处的颜色
                              }],
                              global: false // 缺省为 false
                            }
                        },
                        icon: 'rect',
                        length: '100%',
                        width:1
                        // "offsetCenter":[70,89],
                        // "width":100
                    },
                    markPoint: {
                        // symbol:'circle',
                        // symbolSize:15,
                        // itemStyle: {
                        //     color: "#fff"
                        // },
                        data: [{
                            x: "50%",
                            y: "50%",
                            symbol: 'circle',
                            symbolSize: 180,
                            itemStyle: {
                                color: 'translation'
                            },
                        }, ]
                    },
                    data:[
                        valueCurrent
                    ]
                },
                {
                    type: 'gauge',
                    // startAngle: 50,
                    name: '外圈灰色线',
                    radius: '50%',
                    startAngle: 180,
                    endAngle: -179.9999,
                    splitNumber: 0,
                    axisLine: { // 坐标轴线
                        lineStyle: {
                            color: [
                                [1, new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(52,100,138,0.3)',
                                        }, {
                                            offset: 0.5,
                                            color: 'rgba(145,207,255,0.6)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(241,246,246,1)',
                                        }
                                    ]
                                )],
                                [
                                    1, 'rgba(28,128,245,.0)'
                                ]
                            ],
                            width: 1,
                            opacity:1
                        }
                    },
                    splitLine: { // 分隔线
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                },  
            ]
        }
        option_gauge && myChart_gauge.setOption(option_gauge);
        $("#index3_top_middle_num").text(valueCurrent+"%")
        $("#winningBid").text((res.data.totalAmount/10000).toFixed(2));
        $("#contractAmount_first_middle").text(formatNumber((res.data.contractAmount/10000).toFixed(2)));
        $("#negotiationBid").text(formatNumber((res.data.negotiationBid/10000).toFixed(2)));
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_gauge.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//省外
$.ajax({
    type:"get",
    url: baseUrl + shichangjingyin.provinceExternal,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        //console.log(option_first_right.xAxis)
        let option = {
          grid:{
              top:"10%",
              left:0,
              right:0,
              bottom:0,
              containLabel:true
          },
          color: ['#35ABFD', '#2f4533'],
          legend: {
            data: ['中标金额(万元)', '中标数量(个)'],
            itemWidth:toRemfontSize(30),
            itemHeight:toRemfontSize(30),
            itemGap:toRemfontSize(41),
            textStyle:{
              color:"white",
              fontSize:toRemfontSize(30)
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['云南省', '广西省', '江西省', '浙江省','福建省','陕西省'],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel:{
                  color:"white",
                  fontSize:toRemfontSize(30)
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
              // min: 0,
              // max:50000,
              // interval:10000,
              splitNumber:5,
              axisLine: {
                  show: false
              },
              axisLabel:{
                  color:"white",
                  fontSize:toRemfontSize(30)
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
            {
              type: 'value',
              // min: 0,
              // interval:2,
              // max:10,
              splitNumber:5,
              position:'right',
              axisLine: {
                  show: false
              },
              axisLabel:{
                  color:"white",
                  fontSize:toRemfontSize(30)
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
            }
          ],
          series: [
            {
              name: '中标金额(万元)',
              type: 'bar',
              label: {
                  show: false,
                  position: 'top',
                  color: 'white'
              },
              data: [
                45000, 38000, 32000, 28000,20000,12000
              ],
              barWidth:toRemfontSize(41),
              // barGap:0,
              yAxisIndex: 0,
              itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                              offset: 1,
                              color: '#6D71F5',
                          },
                          {
                              offset: 0,
                              color: '#A5A7FF',
                          },
                      ]),
                  },
              },
            },
            {
              name: '中标数量(个)',
              type: 'bar',
              label: {
                  show: false,
                  position: 'top',
                  color: 'white'
              },
              data: [
                6,5, 4, 3, 2,1
              ],
              yAxisIndex: 1,
              // barGap:0,
              barWidth:toRemfontSize(41), 
              itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                              offset: 1,
                              color: '#D35A14',
                          },
                          {
                              offset: 0,
                              color: '#FCB27F',
                          },
                      ]),
                  },
                  
              },
            }
          ]
        };
        option.xAxis[0].data=[];
        option.series[0].data=[];
        option.series[1].data=[];
        for(var i=0;i<res.data.length;i++){
          option.xAxis[0].data.push(res.data[i].provinceName);
          option.series[0].data.push(res.data[i].winningProjectAmount/10000);
          option.series[1].data.push(res.data[i].winningProjectNum);
        }
        let chartDom_first_right = document.getElementById('top-right');
        let myChart = echarts.init(chartDom_first_right);

        option && myChart.setOption(option);
        window.addEventListener("resize", function() {
          // 让我们的图表调用 resize这个方法
          myChart.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//省内
$.ajax({
  type:"get",
  url: baseUrl + shichangjingyin.provinceInside,
  cache: false,  //禁用缓存
  async: true,	//是否异步
  data: param,  //传入组装的参数
  dataType: "json",
  contentType: "application/json",
  success:function(res){
      console.log(JSON.stringify(res))
      //console.log(option_first_right.xAxis)
      let option = {
        grid:{
            top:"10%",
            left:0,
            right:0,
            bottom:0,
            containLabel:true
        },
        color: ['#35ABFD', '#2f4533'],
        legend: {
          data: ['中标金额(万元)', '中标数量(个)'],
          itemWidth:toRemfontSize(30),
          itemHeight:toRemfontSize(30),
          itemGap:toRemfontSize(38),
          textStyle:{
            color:"white",
            fontSize:toRemfontSize(30)
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['云南省', '广西省', '江西省', '浙江省','福建省','陕西省'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel:{
                color:"white",
                fontSize:toRemfontSize(30)
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
            // min: 0,
            // max:50000,
            // interval:10000,
            splitNumber:5,
            axisLine: {
                show: false
            },
            axisLabel:{
                color:"white",
                fontSize:toRemfontSize(30)
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
          {
            type: 'value',
            // min: 0,
            // interval:2,
            // max:10,
            splitNumber:5,
            position:'right',
            axisLine: {
                show: false
            },
            axisLabel:{
                color:"white",
                fontSize:toRemfontSize(30)
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
          }
        ],
        series: [
          {
            name: '中标金额(万元)',
            type: 'bar',
            label: {
                show: false,
                position: 'top',
                color: 'white'
            },
            data: [
              45000, 38000, 32000, 28000,20000,12000
            ],
            barWidth:toRemfontSize(41),
            // barGap:0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 1,
                          color: '#1CA5A9',
                      },
                      {
                          offset: 0,
                          color: '#36E4FD',
                      },
                    ]),
                },
            },
          },
          {
            name: '中标数量(个)',
            type: 'bar',
            label: {
                show: false,
                position: 'top',
                color: 'white'
            },
            data: [
              6,5, 4, 3, 2,1
            ],
            yAxisIndex: 1,
            // barGap:0,
            barWidth:toRemfontSize(41),
            itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 1,
                          color: '#27B174',
                      },
                      {
                          offset: 0,
                          color: '#7FE282',
                      },
                    ]),
                },
                
            },
          }
        ]
      };
      option.xAxis[0].data=[];
      option.series[0].data=[];
      option.series[1].data=[];
      for(var i=0;i<res.data.length;i++){
        option.xAxis[0].data.push(res.data[i].cityName);
        option.series[0].data.push(res.data[i].winningProjectAmount/10000);
        option.series[1].data.push(res.data[i].winningProjectNum);
      }
      console.log(option.xAxis[0].data)
      console.log(option.series[0].data)
      console.log(option.series[1].data)
      let chartDom_second_right = document.getElementById('second-right');
      let myChart = echarts.init(chartDom_second_right);

      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
  },
  error:function(error){
      layer.msg('数据请求失败', {icon:7})
  }
});
//分公司目标
$.ajax({
  type:"get",
  url: baseUrl + shichangjingyin.subsidiaryBuisiness,
  cache: false,  //禁用缓存
  async: true,	//是否异步
  data: param,  //传入组装的参数
  dataType: "json",
  contentType: "application/json",
  success:function(res){
      console.log(JSON.stringify(res))
      //console.log(option_first_right.xAxis)
      var chartDom3 = document.getElementById('second-left');
      var myChart3 = echarts.init(chartDom3);
      option_second_left = {
        grid:{
            top:"10%",
            left:0,
            right:0,
            bottom:0,
            containLabel:true
        },
        color: ['#35ABFD', '#2f4533'],
        legend: {
          data: ['目标(万元)', '完成情况(万元)','比例(%)'],
          itemWidth:toRemfontSize(30),
          itemHeight:toRemfontSize(30),
          itemGap:toRemfontSize(32),
          textStyle:{
            color:"white",
            fontSize:toRemfontSize(30)
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['长沙经营', '直属分公司', '直营分公司', '怀化分公司','湘南分公司','湘北分公司','湘中分公司','岳阳分公司','温州分公司'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel:{
                color:"white",
                fontSize:toRemfontSize(22)
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
            // min: 0,
            // max:5000,
            // interval:1000,
            axisLine: {
                show: false
            },
            axisLabel:{
                color:"white",
                fontSize:toRemfontSize(30)
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
          {
            type: 'value',
            // min: 0,
            // interval:20,
            // max:100,
            position:'right',
            axisLine: {
                show: false
            },
            axisLabel:{
                color:"white",
                fontSize:toRemfontSize(30)
                
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
          }
        ],
        series: [
          {
            name: '目标(万元)',
            type: 'bar',
            label: {
                show: false,
                position: 'top',
                color: 'white'
            },
            data: [
              4100, 3800, 3500, 3200,2800,2400,1800,1500,1300],
            barWidth:toRemfontSize(27),
            // barGap:0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 1,
                            color: '#1E8DF3',
                        },
                        {
                            offset: 0,
                            color: '#41CAFE',
                        },
                    ]),
                },
            },
          },
          {
            name: '完成情况(万元)',
            type: 'bar',
            label: {
                show: false,
                position: 'top',
                color: 'white'
            },
            data: [
              2400,1800, 1900, 1400, 1600,1300,1000,800,600
            ],
            yAxisIndex: 0,
            // barGap:0,
            barWidth:toRemfontSize(27), 
            itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 1,
                            color: '#6D71F5',
                        },
                        {
                            offset: 0,
                            color: '#A5A7FF',
                        },
                    ]),
                },
                
            },
          },
          {
            name: '比例(%)',
            type: 'bar',
            label: {
                show: false,
                position: 'top',
                color: 'white'
            },
            data: [
              48,35, 38, 28, 30,22,18,16,15
            ],
            yAxisIndex: 1,
            // barGap:0,
            barWidth:toRemfontSize(27), 
            itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 1,
                            color: '#D25A14',
                        },
                        {
                            offset: 0,
                            color: '#FDB382',
                        },
                    ]),
                },
                
            },
          }
        ]
      };
      option_second_left.xAxis[0].data=[];
      option_second_left.series[0].data=[];
      option_second_left.series[1].data=[];
      option_second_left.series[2].data=[];
      for(var i=0;i<res.data.length;i++){
        option_second_left.xAxis[0].data.push(res.data[i].companyName);
        option_second_left.series[0].data.push(res.data[i].targetTotalAmount/10000);
        option_second_left.series[1].data.push(res.data[i].totalAmount/10000);
        option_second_left.series[2].data.push(res.data[i].id);
      }
      console.log(option_second_left.xAxis[0].data)
      console.log(option_second_left.series[0].data)
      console.log(option_second_left.series[1].data)
      option_second_left && myChart3.setOption(option_second_left);
      window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart3.resize();
      });
  },
  error:function(error){
      layer.msg('数据请求失败', {icon:7})
  }
});
//年度目标趋势
$.ajax({
  type:"get",
  url: baseUrl + shichangjingyin.yearTarget,
  cache: false,  //禁用缓存
  async: true,	//是否异步
  data: param,  //传入组装的参数
  dataType: "json",
  contentType: "application/json",
  success:function(res){
      console.log(JSON.stringify(res))
      var chartDom4 = document.getElementById('second-middle');
      var myChart4 = echarts.init(chartDom4);
      option_line = {
        backgroundColor:'transparent',
            // title: {
            //     text: 'chart_3'
            // },
            legend: {
                data: ['金额(亿元)'],
                textStyle:{
                    color:"white",
                    fontSize:toRemfontSize(30)
                },
                icon:"rect",
                itemHeight:toRemfontSize(6),
                itemWidth:toRemfontSize(31),
            },
            xAxis: {
              data: ['2018', '2019', '2021', '2022'],
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
                  fontSize: toRemfontSize(30)
                }
              }
            },
            yAxis: {
              color: '#fff',
              // min:80,
              // max:160,
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
                  fontSize: toRemfontSize(30)
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
                name:"金额(亿元)",
                symbolSize: toRemfontSize(30),
                smooth: true,
                data: [80, 130, 150, 141],
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
      option_line.xAxis.data=[];
      option_line.series[0].data=[];
      for(var i=0;i<res.data.length;i++){
        option_line.xAxis.data.push(res.data[i].sdate);
        option_line.series[0].data.push(res.data[i].totalAmount/100000000);
      }
      console.log(option_line.xAxis.data)
      console.log(option_line.series[0].data)
      option_line && myChart4.setOption(option_line);
      window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart4.resize();
      });
  },
  error:function(error){
      layer.msg('数据请求失败', {icon:7})
  }
});


