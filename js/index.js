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
//交易金额
$.ajax({
    type:"get",
    url: baseUrl + shouye.transactionAmount,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#index_total_count").text(formatNumber(res.data.count));
        res.data.amountList.forEach(element => {
            switch (element.type) {
                case 1:
                    $("#index_cailiao_count").text(element.amount)
                    break;
                case 2:
                    $("#index_yewu_count").text(element.amount)
                    break;
                case 3:
                    $("#index_shebei_count").text(element.amount)
                    break;
                case 4:
                    $("#index_zhuanye_count").text(element.amount)
                    break;
                default:
                    break;
            }
        });
        let labels = [];
        let values = [];
        res.data.numList.forEach(element=>{
            labels.push(element.month+"月");
            values.push(element.num);
        })
        let  chartDom_index_jiaoyinum = document.getElementById('index_jiaoyinum');
        let myChart_index_jiaoyinum = echarts.init(chartDom_index_jiaoyinum);
        let option_index_jiaoyinum;
        //5.0以下版本
        option_index_jiaoyinum = {
            backgroundColor: 'transparent',
            grid: {
                borderWidth: 0,
                top: '20%',
                left: '0',
                right: '0',
                bottom: '10',
                containLabel :true
            },

            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        show:true,
                        lineStyle: {
                            color: 'rgba(255,255,255)',
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitArea: {
                        show: false,
                    },
                    axisLabel: {
                        show:true
                    },
                    data: labels,
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show:false
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show:false
                    },
                    splitArea: {
                        show: false,
                    },
                },
            ],
            series: [
                {
                    name: '产量',
                    type: 'bar',
                    // "stack": "总量",
                    barWidth: toRemfontSize(62),
                    barGap: '5%',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    fontSize: toRemfontSize(26),
                                    color: '#fff',
                                },
                                formatter:`{c}件`
                            },
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgb(112,116,255)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(144,124,255)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },
                    },
                    data: values,
                },
            ],
        };


        option_index_jiaoyinum && myChart_index_jiaoyinum.setOption(option_index_jiaoyinum);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_index_jiaoyinum.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });
//经济情况
$.ajax({
    type:"get",
    url: baseUrl + shouye.economicsInfo,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#index0_complete_total").text((res.data.progressTotalAmountCount/10000).toFixed(0))
        $("#index0_jindu_total").text((res.data.outputTotalAmountCount/10000).toFixed(0))
        let labels = [];
        let values1 = [];
        let values2 = [];
        res.data.dataList.forEach(element=>{
            labels.push(element.sdate);
            values1.push((element.progressTotalAmount/10000).toFixed(0));
            values2.push((element.outputTotalAmount/10000).toFixed(0));
        })
        var chartDom_jingji_statue = document.getElementById('index_jingji_statue');
        var myChart_jingji_statue = echarts.init(chartDom_jingji_statue);
        var option_jingji_statue;

        option_jingji_statue = {
            grid:{
                // height:"100%",
                top:"20%",
                bottom:0,
                left:0,
                right:0,
                containLabel:true
            },
            xAxis: {
                data:labels,
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                    width:2,
                    color:"white"
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:toRemfontSize(26),
                        color:"white",                
                    }
                }
            },
            yAxis: {
                nameLocation :"end",
                nameTextStyle:{
                    fontSize:toRemfontSize(26),
                    color:"white",
                    align:"right",
                    // lineHeight:60
                },
                margin:0,
                show: true,
                splitNumber:5,
                splitLine: {
                    show: true,
                    lineStyle:{
                        type:"dashed",
                        dashOffset:50,
                        width:0.5
                    }
                },
                axisLine:{
                    show:false
                },
                axisLabel:{
                    align:"left",
                    margin:20,
                    textStyle:{
                        fontSize:toRemfontSize(26),
                        color:"white"
                    }
                }
            },
            legend: {
                itemGap:toRemfontSize(36),
                icon:"rect",
                itemHeight:toRemfontSize(20),
                itemWidth:toRemfontSize(20),
                data: ['完成产值总额', '收进度款总额'],
                textStyle:{
                    fontSize:toRemfontSize(24),
                    color:"white"
                }
            },
            series: [{
                type: 'pictorialBar',
                name: '完成产值总额',
                symbol: 'triangle',
                symbolSize: ['50%', '100%'],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(249,251,97, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(247,142,28, 1)'
                        }])
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            'color': '#FFFFFF'
                        }
                    }
                },
                data:values1
            }, {
                type: 'pictorialBar',
                name: '收进度款总额',
                symbol: 'triangle',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            'color': 'red'
                        }
                    }
                },
                symbolSize: ['50%', '100%'],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,255,230, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,124,198, 1)'
                        }])
                    }
                },
                barGap: '-60%', // Make series be overlap
                data: values2
            }]
        };
        option_jingji_statue && myChart_jingji_statue.setOption(option_jingji_statue);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_jingji_statue.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });
//项目情况
$.ajax({
    type:"get",
    url: baseUrl + shouye.projectInfo,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#index0_xiangmu_total").text(res.data.projectCount)
        $("#index0_zaijian_total").text(res.data.projectBuildingNum)
        $("#index0_xiangmu_count").text(res.data.projectTotalAmount)
        $("#index0_zaijian_count").text(res.data.projectBuildingTotalAmount)
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });
//中标项目
$.ajax({
    type:"get",
    url: baseUrl + shouye.projectBidInfo,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#index0_totalAmount").text(formatNumber(res.data.totalAmount))
        $("#index0_referendumAmount").text(formatNumber(res.data.referendumAmount))
        $("#index0_bidNegotiationAmount").text(formatNumber(res.data.bidNegotiationAmount))
        $("#index0_financingNum").text(res.data.financingNum)
        $("#index0_financingAmount").text(formatNumber(res.data.financingAmount))
        $("#index0_projectConstructionNum").text(res.data.projectConstructionNum)
        $("#index0_projectConstructionAmount").text(formatNumber(res.data.projectConstructionAmount))
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });
 //中间指标
$.ajax({
    type:"get",
    url: baseUrl + shouye.indexCenterData,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#index0_managementAmount").text(formatNumber(res.data.managementAmount))
        $("#index0_incomeAmount").text(formatNumber(res.data.incomeAmount))
        $("#index0_recoveryProjectAmount").text(formatNumber(res.data.recoveryProjectAmount))
        $("#index0_taxAmount").text(formatNumber(res.data.taxAmount))
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });
  //合格供方
$.ajax({
    type:"get",
    url: baseUrl + shouye.qualifiedSupplier,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#index0_materialProcurementNum").text(formatNumber(res.data.materialProcurementNum))
        $("#index0_businessSubcontractingNum").text(formatNumber(res.data.businessSubcontractingNum))
        $("#index0_equipmentLeasingNum").text(formatNumber(res.data.equipmentLeasingNum))
        $("#index0_professionalSubcontractingNum").text(formatNumber(res.data.professionalSubcontractingNum))
        $("#index0_hege_total").text(res.data.count)
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });

//合格供方
$.ajax({
    type:"get",
    url: baseUrl + shouye.yearOperate,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels = [];
        let values = [];
        res.data.forEach(element=>{
            labels.push(element.sdate);
            values.push((element.totalAmount/100000000).toFixed(2))
        })
        console.log(values)
        let chartDom_index0_jingyingmubiao = document.getElementById('index0_jingyingmubiao');
        let myChart_index0_jingyingmubiao = echarts.init(chartDom_index0_jingyingmubiao);
        let option_index0_jingyingmubiao;
        //5.0以下版本
        option_index0_jingyingmubiao = {
            backgroundColor:'transparent',
                // title: {
                //     text: 'chart_3'
                // },
                legend: {
                    data: ['公司完成(亿元)'],
                    textStyle:{
                        color:"white",
                        fontSize:toRemfontSize(26)
                    },
                    icon:"rect",
                    itemHeight:toRemfontSize(4),
                    itemWidth:toRemfontSize(20),
                },
                xAxis: {
                data: labels,
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
                    fontSize: toRemfontSize(26)
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
                    fontSize: toRemfontSize(26)
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
                    name:"公司完成(亿元)",
                    symbolSize: toRemfontSize(25),
                    smooth: true,
                    data: values,
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

        option_index0_jingyingmubiao && myChart_index0_jingyingmubiao.setOption(option_index0_jingyingmubiao);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_index0_jingyingmubiao.resize();
        });
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
        let chartDom_index0_yibiao = document.getElementById('index0_yibiao');
        let myChart_gauge_index0_yibiao = echarts.init(chartDom_index0_yibiao);
        let valueCurrent=res.data.percentage;
        option_gauge_index0_yibiao = {
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
        option_gauge_index0_yibiao && myChart_gauge_index0_yibiao.setOption(option_gauge_index0_yibiao);
        $("#index0_yibiao_num").text(valueCurrent+"%")
        // $("#winningBid").text((res.data.totalAmount/10000).toFixed(2));
        // $("#contractAmount_first_middle").text(formatNumber((res.data.contractAmount/10000).toFixed(2)));
        // $("#negotiationBid").text(formatNumber((res.data.negotiationBid/10000).toFixed(2)));
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_gauge.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//按组织层次分布
$.ajax({
    type:"get",
    url: baseUrl + renliziyuan.personDuty,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let index0_data=[];
        res.data.forEach(element=>{
            let obj = {};
            obj.name=element.organizationName;
            obj.value=element.personnelNum;
            index0_data.push(obj);
        })
        let chartDom_index_zhuzhichengji = document.getElementById('index_zhuzhichengji');
        let myChart_index_zhuzhichengji = echarts.init(chartDom_index_zhuzhichengji);
        let option_index_zhuzhichengji;
        let colors = [ '#A2D27D','#DBC44F','#1B93FF', ];
        let data = index0_data;
        let total = data.reduce((prev, curr) => prev + curr.value, 0);
        console.log(total);
        let target1 = 55555;
        option_index_zhuzhichengji = {
            backgroundColor: 'transparent',
            legend: {
                // orient: 'vertical',
                icon: 'rect',
                bottom: '0',
                // right: '15%',
                itemGap: toRemfontSize(26),
                itemWidth: toRemfontSize(20),
                itemHeight: toRemfontSize(20),
                textStyle:{
                    fontSize:toRemfontSize(26),
                    color:'#fff',
                    fontWeight: 'normal',
                },
                // data: legends,
            },
            color: colors,
            series: [
                {
                    type: 'pie',
                    radius: ['30%', '60%'],
                    center:['55%','45%'],
                    minAngle:30,
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                                label: {
                        show: true,
                        formatter:function(parm){
                            console.log(parm);
                            return [`{white|${parm.name}:}`+`{num|${parm.value}}`+`{unit|人}`]
                        },
                        rich:{
                            white:{
                                fontSize:toRemfontSize(28),
                                color:"white"
                            },
                            num:{
                                fontSize:toRemfontSize(40),
                                fontFamily:'led regular',
                            },
                            unit:{
                                fontSize:toRemfontSize(28),
                            }
                        }
                    },
                    labelLine: {
                        //血线
                        show: true,
                        length:toRemfontSize(28),
                        length2:toRemfontSize(28)
                    },
                    data: data
                }
            ]
        };

        option_index_zhuzhichengji && myChart_index_zhuzhichengji.setOption(option_index_zhuzhichengji);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_index_zhuzhichengji.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});