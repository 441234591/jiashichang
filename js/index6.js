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

//科技课题
$.ajax({
    type:"get",
    url: baseUrl + kejiguanli.technoSubject,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels =[];
        let value1 = [];
        let value2= [];
        $("#index6_keyanketi").empty();
        res.data.forEach(element => {
            let item = $("<div class='item'></div>");
            let num = $("<div class='num'></div>").text(element.overyearNum);
            let des = $("<div class='des'></div>").text(element.subjectType);
            labels.push(element.subjectType);
            value1.push(element.lastyearNum);
            value2.push(element.overyearNum);
            item.append(num);
            item.append(des);
            $("#index6_keyanketi").append(item);
        });
        let chartDom6 = document.getElementById('echart-index6-1');
        let myChartindex6_1 = echarts.init(chartDom6);
        option_6_1 = {
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
                color:"white",
                fontSize:toRemfontSize(26)
              },
              itemGap:toRemfontSize(54),
              itemWidth:toRemfontSize(26),
              itemHeight:toRemfontSize(26)
            },
            xAxis: [
              {
                type: 'category',
                data: labels,
                axisPointer: {
                  type: 'shadow'
                },
                axisLabel:{
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                    color:"white",
                    fontSize:toRemfontSize(26)
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
                data: value2,
                barWidth:toRemfontSize(62),
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#40C8FE',
                        },
                        {
                            offset: 1,
                            color: '#1E8DF3',
                        },
                      ])
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
                data: value1,
                barWidth:toRemfontSize(62), 
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#7CDF81',
                        },
                        {
                            offset: 1,
                            color: '#2BB475',
                        },
                      ])
                    },
                    
                },
              }
            ]
          };
          option_6_1 && myChartindex6_1.setOption(option_6_1);
          window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartindex6_1.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//科技成果 
$.ajax({
    type:"get",
    url: baseUrl + kejiguanli.technoAchievement,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#keyanchengguo_total").text(res.data.achievementTotal);
        $("#keyanchengguo_workTotal").text(res.data.workTotal);
        let labels =[];
        let value1 = [];
        let value2= [];
        res.data.list.forEach(element => {
            labels.push(element.achievementType);
            value1.push(element.lastyearNum);
            value2.push(element.overyearNum);
        });
        let chartDom6_3 = document.getElementById('echart-index6-3');
        let myChartindex6__3 = echarts.init(chartDom6_3);
        option_6_3 = {
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
                color:"white",
                fontSize:toRemfontSize(26)
              },
              itemGap:toRemfontSize(54),
              itemWidth:toRemfontSize(26),
              itemHeight:toRemfontSize(26)
            },
            xAxis: [
              {
                type: 'category',
                data: labels,
                axisPointer: {
                  type: 'shadow'
                },
                axisLabel:{
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                data: value2,
                barWidth:toRemfontSize(62),
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#40C8FE',
                        },
                        {
                            offset: 1,
                            color: '#1E8DF3',
                        },
                      ])
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
                data: value1,
                barWidth:toRemfontSize(62), 
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#7CDF81',
                        },
                        {
                            offset: 1,
                            color: '#2BB475',
                        },
                      ])
                    },
                    
                },
              }
            ]
          };
          option_6_3 && myChartindex6__3.setOption(option_6_3);
          window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartindex6_3.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//科技bim实施概况
$.ajax({
    type:"get",
    url: baseUrl + kejiguanli.technoBim,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let echartData6_1 = [];
        let obj={};
        obj.name = "已实施";
        obj.value = res.data.alreadyImplement;
        echartData6_1.push(obj);
        let obj1 ={};
        obj1.name = "未实施";
        obj1.value = res.data.noImplement;
        echartData6_1.push(obj1);
        console.log(echartData6_1);
        
        let paichar = document.getElementById('pie-echart');
        let myChart_paichar = echarts.init(paichar);
        let color6_1 = ['#FF8A3C ', '#393230'];
        let total6_1 = echartData6_1.reduce((a, b) => {
            return a + b.value * 1;
        }, 0);
        optionpie = {
            color: color6_1,
            legend: {
            // orient: 'vertical',
            icon: 'circle',
            bottom: '0',
            // right: '15%',
            itemGap: toRemfontSize(42),
            itemWidth: toRemfontSize(24),
            itemHeight: toRemfontSize(24),
            textStyle:{
                color:'#fff',
                fontWeight: 'normal',
                fontSize:toRemfontSize(28)
            },
            // data: legends,
                    },
            title: [
                {
                    text: `{name|` + `${res.data.alreadyImplement}%` + `}\n{val|` + `完成率` + `}`,
                    //subtext: '{val|' + total + '次}',
                    top: 'center',
                    left: 'center',
                    textStyle: {
                        rich: {
                            val: {
                                fontSize: toRemfontSize(28),
                                fontWeight: 'normal',
                                color: '#fefefe',
                                padding: [toRemfontSize(18), 0]
                            },
                            name: {
                                fontSize: toRemfontSize(57),
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
                },label:{
                    show:false
                }
                
                },
            ],
        };
        optionpie && myChart_paichar.setOption(optionpie);
        window.addEventListener("resize", function() {
            myChart_paichar.resize();
        });      
            },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//科技bim实施概况数据
$.ajax({
    type:"get",
    url: baseUrl + kejiguanli.technoBimData,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels =[];
        let value1 = [];
        res.data.forEach(el=>{
            labels.push(el.branchName);
            value1.push(el.bimPercentage);
        })
        let chartDom_index6_bim = document.getElementById('bar-echarts-wrap');
        let myChart_index6_bim = echarts.init(chartDom_index6_bim);
        var option_index6_bim = {
            grid: {
                top: 0,
                bottom: 0,
                left: '12%',
                right: '10%',
                containLabel:true
            },
            yAxis: [{
                data: labels,
                inverse:true,
                axisLabel: {
                    padding: [0, 0, 0, -toRemfontSize(280)],
                    align:'left',
                    color: 'white',
                    textStyle: {
                        fontSize: toRemfontSize(26)
                    },
                },
                axisLine: {
                    show:true,
                    lineStyle: {
                        color: 'white',
                        width:toRemfontSize(4)
                    }
                },
                axisTick: {
                    show: false
                },
            }],
            xAxis: [{
                type: 'value',
                axisLabel: {
                   show:false,
                   fontSize:toRemfontSize(26)
                },
                axisLine: {
                    show:false,
                },
                axisTick: {
                    show: false
                },
                splitLine:{
                    show:false,
                }
            }],
            series: [
                {
                type: 'bar',
                data: value1,
                barWidth: toRemfontSize(20),
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'right',
                            formatter:`{c}%`,
                            textStyle: {
                                color: '#fff',
                                fontSize: toRemfontSize(22)
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
                                    color: 'rgb(252,103,62)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(252,138,106)', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
            }   
            ]
        };
        option_index6_bim && myChart_index6_bim.setOption(option_index6_bim);
        window.addEventListener("resize", function() {
          // 让我们的图表调用 resize这个方法
          myChart_index6_bim.resize();
        });

    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//科技碳排
$.ajax({
    type:"get",
    url: baseUrl + kejiguanli.technoCarbon,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels =[];
        let value1 = [];
        let value2= [];

        res.data.forEach(element => {
            labels.push(element.carbonType);
            value1.push(element.putNum);
            value2.push(element.reductionNum);
        });
        let chartDomindex6_4 = document.getElementById('echart-index6-4');
        let myChartindex6_4 = echarts.init(chartDomindex6_4);
        let option_6_4 = {
            grid:{
                top:"25%",
                left:0,
                right:0,
                bottom:0,
                containLabel:true
            },
            title:{
                text:'碳排放量',
                left:0,
                top:0,
                textStyle:{
                  color:'white',
                  fontSize:toRemfontSize(26)
                }
            },
            color: ['#35ABFD', '#2f4533'],
            legend: {
              data: ['碳排放量(吨)','减碳量(吨)'],
              top:0,
              textStyle:{
                color:"white",
                fontSize:toRemfontSize(26)
              },
              itemGap:toRemfontSize(50),
              itemWidth:toRemfontSize(26),
              itemHeight:toRemfontSize(26)
            },
            xAxis: [
              {
                type: 'category',
                data: labels,
                axisPointer: {
                  type: 'shadow'
                },
                axisLabel:{
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                name: '碳排放量(吨)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: value1,
                barWidth:toRemfontSize(62),
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#40C8FE',
                        },
                        {
                            offset: 1,
                            color: '#1E8DF3',
                        },
                      ])
                    },
                },
              },
              {
                name: '减碳量(吨)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: value2,
                barWidth:toRemfontSize(62), 
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#7CDF81',
                        },
                        {
                            offset: 1,
                            color: '#2BB475',
                        },
                      ])
                    },
                    
                },
              }
            ]
        };
          option_6_4 && myChartindex6_4.setOption(option_6_4);
          window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartindex6_4.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//科技垃圾
$.ajax({
    type:"get",
    url: baseUrl + kejiguanli.technoRubbish,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels =[];
        let value1 = [];
        let value2= [];

        res.data.forEach(element => {
            labels.push(element.rubbishType);
            value1.push(element.rubbishPutNum);
            value2.push(element.rubbishReductionNum);
        });
        let chartDomindex6_5 = document.getElementById('echart-index6-5');
        let myChartindex6_5 = echarts.init(chartDomindex6_5);
        let option_6_5 = {
            grid:{
                top:"25%",
                left:0,
                right:0,
                bottom:0,
                containLabel:true
            },
            title:{
                text:'垃圾产生量',
                left:0,
                top:0,
                textStyle:{
                  color:'white',
                  fontSize:toRemfontSize(26)
                }
            },
            color: ['#35ABFD', '#2f4533'],
            legend: {
              data: ['建筑垃圾产生量(吨)','建筑垃圾减少量(吨)'],
              top:0,
              textStyle:{
                color:"white",
                fontSize:toRemfontSize(26)
              },
              itemGap:toRemfontSize(44),
              itemWidth:toRemfontSize(26),
              itemHeight:toRemfontSize(26)
            },
            xAxis: [
              {
                type: 'category',
                data: labels,
                axisPointer: {
                  type: 'shadow'
                },
                axisLabel:{
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                name: '建筑垃圾产生量(吨)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: value1,
                barWidth:toRemfontSize(62),
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#40C8FE',
                        },
                        {
                            offset: 1,
                            color: '#1E8DF3',
                        },
                      ])
                    },
                },
              },
              {
                name: '建筑垃圾减少量(吨)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: value2,
                barWidth:toRemfontSize(62), 
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#FBAF7C',
                        },
                        {
                            offset: 1,
                            color: '#D65A14',
                        },
                      ])
                    },
                    
                },
              }
            ]
        };
          option_6_5 && myChartindex6_5.setOption(option_6_5);
          window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartindex6_5.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//科技示范工程
$.ajax({
    type:"get",
    url: baseUrl + kejiguanli.technoDemonstra,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels =[];
        let value1 = [];
        let value2= [];

        res.data.list.forEach(element => {
            labels.push(element.prizeType);
            value1.push(element.nationNum);
            value2.push(element.provinceNum);
        });
        let chartDomindex6_2 = document.getElementById('echart-index6-2');
        let myChartindex6_2 = echarts.init(chartDomindex6_2);
        let option_6_2 = {
            grid:{
                top:"25%",
                left:0,
                right:0,
                bottom:0,
                containLabel:true
            },
            title:{
                text:'示范工程',
                left:0,
                top:0,
                textStyle:{
                  color:'white',
                  fontSize:toRemfontSize(26)
                }
            },
            color: ['#35ABFD', '#2f4533'],
            legend: {
              data: ['国家级','省级'],
              top:0,
              textStyle:{
                color:"white",
                fontSize:toRemfontSize(26)
              },
              itemGap:toRemfontSize(46),
              itemWidth:toRemfontSize(26),
              itemHeight:toRemfontSize(26)
            },
            xAxis: [
              {
                type: 'category',
                data: labels,
                axisPointer: {
                  type: 'shadow'
                },
                axisLabel:{
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                    color:"white",
                    fontSize:toRemfontSize(24)
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
                name: '国家级',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: value1,
                barWidth:toRemfontSize(62),
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#A2A4FF',
                        },
                        {
                            offset: 1,
                            color: '#7277F6',
                        },
                      ])
                    },
                },
              },
              {
                name: '省级',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: value2,
                barWidth:toRemfontSize(62), 
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#FBAF7C',
                        },
                        {
                            offset: 1,
                            color: '#D65A14',
                        },
                      ])
                    },
                    
                },
              }
            ]
        };
          option_6_2 && myChartindex6_2.setOption(option_6_2);
          window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartindex6_2.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

