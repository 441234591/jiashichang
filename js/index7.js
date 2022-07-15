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

//当年交易金额 
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costYearTrade,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
       res.data.list.forEach(element => {
        if(element.projectName=="材料采购"){
            $("#index7_dangnian_cailiao").text(((element.totalAmount/10000).toFixed(1)));
        }else if(element.projectName=="劳务分包"){
            $("#index7_dangnian_laowu").text(((element.totalAmount/10000).toFixed(1)));
        }else if(element.projectName=="设备租赁"){
            $("#index7_dangnian_shebei").text(((element.totalAmount/10000).toFixed(1)));
        }else if(element.projectName=="专业分包"){
            $("#index7_dangnian_zhuanye").text(((element.totalAmount/10000).toFixed(1)));
        }
       });
       $("#index7_total_money").text((res.data.totalSumAmount/10000).toFixed(1))
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//分公司清结算累计
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costBranchLiquidate,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels = [];
        let values1_amount = [];
        let values1_count = [];
        let values2_amount = [];
        let values2_count = [];
        let values3_amount = [];
        let values3_count = [];
        res.data.forEach(element=>{
            labels.push(element.branchName);
            element.list.forEach(el=>{
                if(el.projectName =="定案"){
                    values1_amount.push((el.totalAmount/10000).toFixed(0));
                    values1_count.push(el.totalNum);
                }else if(el.projectName =="送审"){
                    values2_amount.push((el.totalAmount/10000).toFixed(0));
                    values2_count.push(el.totalNum);
                }else if(el.projectName =="竣工备案"){
                    values3_amount.push((el.totalAmount/10000).toFixed(0));
                    values3_count.push(el.totalNum);
                }
            })
        })
        let chartDomIndex7_right_bottom = document.getElementById('echart-right-bottom');
        let myChartIndex7_right_bottom = echarts.init(chartDomIndex7_right_bottom);
        let optionIndex7_right_bottom;       
        optionIndex7_right_bottom = {
            grid:{
                top:"10%",
                left: '15%',
                right:'5%',
                bottom:0,
                containLabel:true
            },
            color: ['#35ABFD', '#2f4533'],
            legend: {
              //data: ['定案(万)', '送审(万)','竣工备案(万)'],
              icon:'rect',
              itemGap:toRemfontSize(30),
              itemWidth:toRemfontSize(30),
              itemHeight:toRemfontSize(30),
              textStyle:{
                color:"white",
                fontSize:toRemfontSize(30),
              }
            },
            yAxis: [
              {
                type: 'category',
                inverse:true,
                data: labels,
                axisPointer: {
                  type: 'shadow'
                },
                axisLabel:{
                    color:"white",
                    align:'left',
                    padding: [0, 0, 0, -toRemfontSize(280)],
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
            xAxis: [
              {
                type: 'value',
                min: 0,
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
            ],
            series: [
              {
                name: '定案(万元)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: values1_amount,
                barWidth:toRemfontSize(24),
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
                name: '送审(万元)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: values2_amount,
                barWidth:toRemfontSize(24),
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
                name: '竣工备案(万元)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: values3_amount,
                barWidth:toRemfontSize(24),
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
          
        
        optionIndex7_right_bottom && myChartIndex7_right_bottom.setOption(optionIndex7_right_bottom);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartIndex7_right_bottom.resize();
        });
        $("#index7_right_bottom_jiner").on("click",function(){
            console.log($(this))
            $("#index7_right_bottom_jiner").addClass("btn_jiner").removeClass('btn_shuliang');
            $("#index7_right_bottom_shuliang").addClass("btn_shuliang").removeClass('btn_jiner');
            optionIndex7_right_bottom.series[0].data=values1_amount;
            optionIndex7_right_bottom.series[0].name="定案(万)"
            optionIndex7_right_bottom.series[1].data=values2_amount;
            optionIndex7_right_bottom.series[1].name="送审(万)"
            optionIndex7_right_bottom.series[2].data=values3_amount;
            optionIndex7_right_bottom.series[2].name="竣工备案(万)"
            optionIndex7_right_bottom && myChartIndex7_right_bottom.setOption(optionIndex7_right_bottom);
        })
        $("#index7_right_bottom_shuliang").on("click",function(){
            $("#index7_right_bottom_shuliang").removeClass("btn_shuliang").addClass('btn_jiner');
            $("#index7_right_bottom_jiner").removeClass("btn_jiner").addClass('btn_shuliang');
            optionIndex7_right_bottom.series[0].data=values1_count;
            optionIndex7_right_bottom.series[0].name="定案(个)"
            optionIndex7_right_bottom.series[1].data=values2_count;
            optionIndex7_right_bottom.series[1].name="送审(个)"
            optionIndex7_right_bottom.series[2].data=values3_count;
            optionIndex7_right_bottom.series[2].name="竣工备案(个)"
            optionIndex7_right_bottom && myChartIndex7_right_bottom.setOption(optionIndex7_right_bottom);
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//清结算累计趋势
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costLiquidate,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels = [];
        let values1_amount = [];
        let values1_count = [];
        let values2_amount = [];
        let values2_count = [];
        let values3_amount = [];
        let values3_count = [];
        res.data.forEach(element=>{
            labels.push(element.monthKey);
            element.list.forEach(el=>{
                if(el.projectName =="定案"){
                    values1_amount.push((el.totalAmount/10000).toFixed(0));
                    values1_count.push(el.totalNum);
                }else if(el.projectName =="送审"){
                    values2_amount.push((el.totalAmount/10000).toFixed(0));
                    values2_count.push(el.totalNum);
                }else if(el.projectName =="竣工备案"){
                    values3_amount.push((el.totalAmount/10000).toFixed(0));
                    values3_count.push(el.totalNum);
                }
            })
        })
        let chartDomindex7_right_top = document.getElementById('line-qingjie-echart');
        let myChartIndex7_right_top = echarts.init(chartDomindex7_right_top);
        let optionIndex7_right_top;
        let colors=['#3678C6','#4A50A4'+'#58A55D'+'#F3CB4A']
        optionIndex7_right_top = {
            backgroundColor: 'transparent',
            grid: {
                top: '10%',
                bottom: '0%',
                left:0,
                right:0,
                containLabel:true
            },
            legend: {
                show: true,
                icon: 'line',
                textStyle: {
                    color: 'white',
                    fontSize:toRemfontSize(30)
                },
                // width:"80%",
                orient:"horizontal",
                itemWidth:toRemfontSize(40),
                itemHeight:toRemfontSize(5),
                // right:0
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    color: '#d3d5d6',
                    fontSize:toRemfontSize(30)
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white',
                    }
                },
                axisTick: {
                    show: false
                },
                boundaryGap: true,
                data: labels,
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                nameTextStyle: {
                     color: '#d2d2d2',
                     padding: [0, 0, 0, -50],
                },
                splitNumber: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#05365d',
                        width: 1,
                        type:'dashed'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 20,
                    textStyle: {
                        color: '#d3d5d6',
                        fontSize:toRemfontSize(30)
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [
                 {
                    name: '送审(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    showAllSymbol: false,
                    symbol: 'circle',
                    symbolSize: toRemfontSize(28),
                    itemStyle: {
                        show:false,
                        color: "#D15B1F",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#3678C6",
                        shadowColor: '#D15B1F',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values2_amount
                },
                {
                    name: '定案(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    symbolSize: toRemfontSize(28),
                    symbol: 'circle',
                    itemStyle: {
                        show:false,
                        color: "#4A50A4",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#4A50A4",
                        shadowColor: '#4A50A4',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values1_amount
                },
                {
                    name: '竣工备案(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'circle',
                    symbolSize: toRemfontSize(28),
                    itemStyle: {
                        show:false,
                        color: "#58A55D",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#58A55D",
                        shadowColor: '#58A55D',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values3_amount
                }
            ]
        };
        optionIndex7_right_top && myChartIndex7_right_top.setOption(optionIndex7_right_top);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartIndex7_right_top.resize();
        });
        $("#index7_right_top_jiner").on("click",function(){
            console.log($(this))
            $("#index7_right_top_jiner").addClass("btn_jiner").removeClass('btn_shuliang');
            $("#index7_right_top_shuliang").addClass("btn_shuliang").removeClass('btn_jiner');
            optionIndex7_right_top.series[0].data=values2_amount;
            optionIndex7_right_top.series[0].name="定案(万元)"
            optionIndex7_right_top.series[1].data=values1_amount;
            optionIndex7_right_top.series[1].name="送审(万元)"
            optionIndex7_right_top.series[2].data=values3_amount;
            optionIndex7_right_top.series[2].name="竣工备案(万元)"
            optionIndex7_right_top && myChartIndex7_right_top.setOption(optionIndex7_right_top);
        })
        $("#index7_right_top_shuliang").on("click",function(){
            $("#index7_right_top_shuliang").removeClass("btn_shuliang").addClass('btn_jiner');
            $("#index7_right_top_jiner").removeClass("btn_jiner").addClass('btn_shuliang');
            optionIndex7_right_top.series[0].data=values2_count;
            optionIndex7_right_top.series[0].name="定案(个)"
            optionIndex7_right_top.series[1].data=values1_count;
            optionIndex7_right_top.series[1].name="送审(个)"
            optionIndex7_right_top.series[2].data=values3_count;
            optionIndex7_right_top.series[2].name="竣工备案(个)"
            optionIndex7_right_top && myChartIndex7_right_top.setOption(optionIndex7_right_top);
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//材料价格趋势
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costMaterial,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels = [];
        let values1_amount = [];
        let values2_amount = [];
        let values3_amount = [];
        res.data.forEach(element=>{
            labels.push(element.monthKey);
            element.list.forEach(el=>{
                if(el.materialName =="钢材"){
                    values1_amount.push((el.totalAmount/10000).toFixed(0));
                }else if(el.materialName =="模板"){
                    values2_amount.push((el.totalAmount/10000).toFixed(0));
                }else if(el.materialName =="木方"){
                    values3_amount.push((el.totalAmount/10000).toFixed(0));
                }
            })
        })
        console.log(values1_amount)
        console.log(values2_amount)
        console.log(values3_amount)
        let chartDomindex7_middle_bottom = document.getElementById('echart-middle-bottom');
        let myChartindex7_middle_bottom = echarts.init(chartDomindex7_middle_bottom);
        let optionindex7_middle_bottom;
        let colors=['#3678C6','#4A50A4'+'#58A55D'+'#F3CB4A']
        optionindex7_middle_bottom = {
            backgroundColor: 'transparent',
            grid: {
                top: '10%',
                bottom: '0%',
                left:0,
                right:0,
                containLabel:true
            },
            legend: {
                show: true,
                icon: 'line',
                textStyle: {
                    color: 'white',
                    fontSize:toRemfontSize(30)
                },
                // width:"80%",
                orient:"horizontal",
                itemWidth:toRemfontSize(40),
                itemHeight:toRemfontSize(5),
                // right:0
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    color: '#d3d5d6',
                    fontSize:toRemfontSize(30)
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white',
                    }
                },
                axisTick: {
                    show: false
                },
                boundaryGap: true,
                data: labels,
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                nameTextStyle: {
                     color: '#d2d2d2',
                     padding: [0, 0, 0, -50],
                },
                splitNumber: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#05365d',
                        width: 1,
                        type:'dashed'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 20,
                    textStyle: {
                        color: '#d3d5d6',
                        fontSize:toRemfontSize(30)
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [
                 {
                    name: '钢材(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    showAllSymbol: false,
                    symbol: 'circle',
                    symbolSize: toRemfontSize(28),
                    itemStyle: {
                        show:false,
                        color: "#D15B1F",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#3678C6",
                        shadowColor: '#D15B1F',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values1_amount
                },
                {
                    name: '模板(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    symbolSize: toRemfontSize(28),
                    symbol: 'circle',
                    itemStyle: {
                        show:false,
                        color: "#4A50A4",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#4A50A4",
                        shadowColor: '#4A50A4',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values2_amount
                },
                {
                    name: '木方(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'circle',
                    symbolSize: toRemfontSize(28),
                    itemStyle: {
                        show:false,
                        color: "#58A55D",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#58A55D",
                        shadowColor: '#58A55D',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values3_amount
                }
            ]
        };
        optionindex7_middle_bottom && myChartindex7_middle_bottom.setOption(optionindex7_middle_bottom);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartindex7_middle_bottom.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//采购趋势
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costPurchase,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels = [];
        let values1_amount = [];
        let values1_count = [];
        res.data.forEach(element=>{
            labels.push(element.monthKey);
            element.list.forEach(el=>{
                values1_amount.push((el.totalAmount/100000000).toFixed(0));
                values1_count.push(el.totalNum);      
            })
        })
        console.log(values1_amount);
        console.log(values1_count)
        let chartDomIndex7_left_bottom = document.getElementById('echart-left-bottom');
        let myChartIndex7_left_bottom = echarts.init(chartDomIndex7_left_bottom);
        let optionIndex7_left_bottom;
        optionIndex7_left_bottom = {
            grid:{
                top:"10%",
                left:0,
                right:0,
                bottom:0,
                containLabel:true
            },
            color: ['#35ABFD', '#2f4533'],
            legend: {
              data: ['金额(万元)', '数量(个)'],
              itemWidth:toRemfontSize(30),
              itemHeight:toRemfontSize(30),
              itemGap:toRemfontSize(30),
              textStyle:{
                color:"white",
                fontSize:toRemfontSize(30),
              }
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
                    fontSize:toRemfontSize(26),
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
                min: 0,
                //interval:500,
                axisLine: {
                    show: false
                },
                axisLabel:{
                    color:"white",
                    fontSize:toRemfontSize(30),
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
                min: 0,
                interval:100,
                position:'right',
                axisLine: {
                    show: false
                },
                axisLabel:{
                    color:"white",
                    fontSize:toRemfontSize(30),
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
                name: '金额(万元)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data:values1_amount,
                barWidth:20,
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
                                color: '#40C9FE',
                            },
                        ]),
                    },
                },
              },
              {
                name: '数量(个)',
                type: 'bar',
                label: {
                    show: false,
                    position: 'top',
                    color: 'white'
                },
                data: values1_count,
                yAxisIndex: 1,
                barWidth:20, 
                itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 1,
                                color: '#F69C20',
                            },
                            {
                                offset: 0,
                                color: '#D6CF57',
                            },
                        ]),
                    },
                    
                },
              }
            ]
          };
          
        
        optionIndex7_left_bottom && myChartIndex7_left_bottom.setOption(optionIndex7_left_bottom);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartIndex7_left_bottom.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//合格供方
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costQualifiedSupplier,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
       res.data.list.forEach(element => {
        if(element.projectName=="跟踪项目"){
            $("#index7_gongfang_gengzong").text(element.projectNum);
        }else if(element.projectName=="劳务分包"){
            $("#index7_gongfang_laowu").text(element.projectNum);
        }else if(element.projectName=="设备租赁"){
            $("#index7_gongfang_zhuling").text(element.projectNum);
        }else if(element.projectName=="专业分包"){
            $("#index7_gongfang_fenbao").text(element.projectNum);
        }
       });
       $("#index7_gongfang_total").text(res.data.totalProjectNum)
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//供应商交易排名 
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costSupplierRanking,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let index7_cailiao_data = [];
        let index7_zhuling_data = [];
        let index7_laowu_data = [];
        let index7_zhuanye_data = [];
        $("#marqueeList").empty();
        res.data.forEach(element=>{
            let type = element.projectName;
            element.list.forEach((el,index)=>{
                let li=$("<li></li>");
                let div=$("<div></div>");
                let indexnum = $("<span class='indexnum'></span>").text(index+1);
                let listtitle = $("<span class='listtitle'></span>").text(el.branchName);
                div.append(indexnum);
                div.append(listtitle);
                let listmoney = $("<span class='listmoney'></span>").text(`¥ ${formatNumber(el.totalAmount)}    元`);
                li.append(div).append(listmoney);
                if(type=="劳务分包"){
                    index7_laowu_data.push(li);
                }else if(type=="设备租赁"){
                    index7_zhuling_data.push(li);
                }else if(type=="材料采购"){
                    index7_cailiao_data.push(li);
                    $("#marqueeList").append(li);
                }else if(type=="专业分包"){
                    index7_zhuanye_data.push(li);
                }
            })
        })

        $("#btn_index7_cailiao").on("click",function(){
            $("#btn_index7_cailiao").addClass("active");
            $("#btn_index7_zhuling").removeClass("active");
            $("#btn_index7_laowu").removeClass("active");
            $("#btn_index7_zhuanye").removeClass("active");
            $("#marqueeList").empty();
            console.log(index7_cailiao_data);
            index7_cailiao_data.forEach(el=>{
                $("#marqueeList").append(el);
            })
        })
        $("#btn_index7_zhuling").on("click",function(){
            $("#btn_index7_zhuling").addClass("active");
            $("#btn_index7_cailiao").removeClass("active");
            $("#btn_index7_laowu").removeClass("active");
            $("#btn_index7_zhuanye").removeClass("active");
            $("#marqueeList").empty();
            index7_zhuling_data.forEach(el=>{
                $("#marqueeList").append(el);
            })
        })
        $("#btn_index7_laowu").on("click",function(){
            $("#btn_index7_laowu").addClass("active");
            $("#btn_index7_zhuling").removeClass("active");
            $("#btn_index7_cailiao").removeClass("active");
            $("#btn_index7_zhuanye").removeClass("active");
            $("#marqueeList").empty();
            index7_laowu_data.forEach(el=>{
                $("#marqueeList").append(el);
            })
        })
        $("#btn_index7_zhuanye").on("click",function(){
            $("#btn_index7_zhuanye").addClass("active");
            $("#btn_index7_zhuling").removeClass("active");
            $("#btn_index7_laowu").removeClass("active");
            $("#btn_index7_cailiao").removeClass("active");
            $("#marqueeList").empty();
            index7_zhuanye_data.forEach(el=>{
                $("#marqueeList").append(el);
            })
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }

})
//累积交易趋势
$.ajax({
    type:"get",
    url: baseUrl + chengbenkongzhi.costTradeData,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels = [];
        let values1_amount = [];
        let values1_count = [];
        let values2_amount = [];
        let values2_count = [];
        let values3_amount = [];
        let values3_count = [];
        let values4_amount = [];
        let values4_count = [];
        res.data.forEach(element=>{
            labels.push(element.monthKey);
            element.list.forEach(el=>{
                if(el.projectName =="材料采购"){
                    values1_amount.push((el.totalAmount/10000).toFixed(0));
                    values1_count.push(el.tradeNum);
                }else if(el.projectName =="劳务分包"){
                    values2_amount.push((el.totalAmount/10000).toFixed(0));
                    values2_count.push(el.tradeNum);
                }else if(el.projectName =="设备租赁"){
                    values3_amount.push((el.totalAmount/10000).toFixed(0));
                    values3_count.push(el.tradeNum);
                }else if(el.projectName =="专业分包"){
                    values4_amount.push((el.totalAmount/10000).toFixed(0));
                    values4_count.push(el.tradeNum);
                }
            })
        })
        let chartDomindex7_top_left = document.getElementById('top-left-echart');
        let myChartIndex7_top_left = echarts.init(chartDomindex7_top_left);
        let optionIndex7_top_left;
        let colors=['#3678C6','#4A50A4'+'#58A55D'+'#F3CB4A']
        optionIndex7_top_left = {
            backgroundColor: 'transparent',
            grid: {
                top: '10%',
                bottom: '0%',
                left:0,
                right:0,
                containLabel:true
            },
            legend: {
                show: true,
                icon: 'line',
                textStyle: {
                    color: 'white',
                    fontSize:toRemfontSize(30)
                },
                // width:"80%",
                orient:"horizontal",
                itemWidth:toRemfontSize(40),
                itemHeight:toRemfontSize(5),
                // right:0
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    color: '#d3d5d6',
                    fontSize:toRemfontSize(30)
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white',
                    }
                },
                axisTick: {
                    show: false
                },
                boundaryGap: true,
                data: labels,
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                nameTextStyle: {
                     color: '#d2d2d2',
                     padding: [0, 0, 0, -50],
                },
                splitNumber: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#05365d',
                        width: 1,
                        type:'dashed'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 20,
                    textStyle: {
                        color: '#d3d5d6',
                        fontSize:toRemfontSize(30)
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [
                 {
                    name: '材料采购(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    showAllSymbol: false,
                    symbol: 'circle',
                    symbolSize: toRemfontSize(28),
                    itemStyle: {
                        show:false,
                        color: "#3678C6",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#3678C6",
                        shadowColor: '#3678C6',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values1_amount
                },
                {
                    name: '劳务分包(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    symbolSize: toRemfontSize(28),
                    symbol: 'circle',
                    itemStyle: {
                        show:false,
                        color: "#4A50A4",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#4A50A4",
                        shadowColor: '#4A50A4',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values2_amount
                },
                {
                    name: '设备租赁(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'circle',
                    symbolSize: toRemfontSize(28),
                    itemStyle: {
                        show:false,
                        color: "#58A55D",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#58A55D",
                        shadowColor: '#58A55D',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values3_amount
                },
                {
                    name: '专业分包(万元)',
                    type: 'line',
                    symbol: 'none',  //取消折点圆圈
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'circle',
                    symbolSize: toRemfontSize(28),
                    itemStyle: {
                        show:false,
                        color: "#F4CD49",
                        borderColor: "#fff",
                        borderWidth: toRemfontSize(3),
                    },
                    lineStyle: {
                        width: 2,
                        // color: "#58A55D",
                        shadowColor: '#F4CD49',
                        shadowBlur: 4,
                    },
                    tooltip: {
                        show: false
                    },
                    data: values4_amount
                }
            ]
        };
        optionIndex7_top_left && myChartIndex7_top_left.setOption(optionIndex7_top_left);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChartIndex7_top_left.resize();
        });
        $("#index7_top_left_jinger").on("click",function(){
            console.log($(this))
            $("#index7_top_left_jinger").addClass("btn_jiner").removeClass('btn_shuliang');
            $("#index7_top_left_shuliang").addClass("btn_shuliang").removeClass('btn_jiner');
            optionIndex7_top_left.series[0].data=values2_amount;
            optionIndex7_top_left.series[0].name="材料采购"
            optionIndex7_top_left.series[1].data=values1_amount;
            optionIndex7_top_left.series[1].name="劳务分包"
            optionIndex7_top_left.series[2].data=values3_amount;
            optionIndex7_top_left.series[2].name="设备租赁"
            optionIndex7_top_left.series[3].data=values4_amount;
            optionIndex7_top_left.series[3].name="专业分包"
            optionIndex7_top_left && myChartIndex7_top_left.setOption(optionIndex7_top_left);
        })
        $("#index7_top_left_shuliang").on("click",function(){
            $("#index7_top_left_shuliang").removeClass("btn_shuliang").addClass('btn_jiner');
            $("#index7_top_left_jinger").removeClass("btn_jiner").addClass('btn_shuliang');
            optionIndex7_top_left.series[0].data=values2_count;
            optionIndex7_top_left.series[0].name="材料采购"
            optionIndex7_top_left.series[1].data=values1_count;
            optionIndex7_top_left.series[1].name="劳务分包"
            optionIndex7_top_left.series[2].data=values3_count;
            optionIndex7_top_left.series[2].name="设备租赁";
            optionIndex7_top_left.series[3].data=values4_count;
            optionIndex7_top_left.series[3].name="专业分包"
            optionIndex7_top_left && myChartIndex7_top_left.setOption(optionIndex7_top_left);
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});


