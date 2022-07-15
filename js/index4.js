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

$.ajax({
    type:"get",
    url: baseUrl + tourongziguanli.contractSign,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        for(var i=0;i<res.data.length;i++){
            if(res.data[i].contractName=="PPP项目总数"){
                $("#ppp_total_xiangmu").text(res.data[i].contractNum)
            }else if(res.data[i].contractName=="其他投资类项目总数"){
                $("#touzi_total_xiangmu").text(res.data[i].contractNum)
            }else if(res.data[i].contractName=="PPP合同总数"){
                $("#ppp_total_hetong").text(res.data[i].contractNum)
            }else if(res.data[i].contractName=="其他投资类合同总数"){
                $("#touzi_total_hetong").text(res.data[i].contractNum)
            }
        }
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
  });
//省外项目
$.ajax({
type:"get",
url: baseUrl + tourongziguanli.projectExternal,
cache: false,  //禁用缓存
async: true,	//是否异步
data: param,  //传入组装的参数
dataType: "json",
contentType: "application/json",
success:function(res){
    console.log(JSON.stringify(res))
    var chartDom = document.getElementById('echarts41');
    var myChart = echarts.init(chartDom);
    var option;
    let labels =[];
    let datay1 = [];
    let datay2 = [];
    for(var i=0;i<res.data.length;i++){
        labels.push(res.data[i].provinceName);
        datay1.push(res.data[i].bidAmount/10000);
        datay2.push(res.data[i].trackAmount/10000);
        //values.push(res.data.)
    }
    console.log(labels)
    console.log(datay1)
    console.log(datay2)
    option = {
        grid:{
            left:0,
            right:0,
            top:'10%',
            bottom:0,
            containLabel:true
        },
        xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLabel:{
            fontSize:toRemfontSize(26)
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:"white"
            }
        },
        data: labels
        },
        yAxis: {
        type: 'value',
        splitNumber:4,
            axisLabel:{
                show: true,
                color:"white",
                fontSize:toRemfontSize(30)
            },
            axisLine: {
                show: false,
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color: "rgba(217, 214, 214, .1)"
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        series: [
        {
            name:'中标项目',
            data: datay1,
            type: 'bar',
            barWidth:toRemfontSize(62),
            barGap:0.1,
            showBackground:true,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
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
                                color: 'rgb(54,228,253)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(29,166,169)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
        },
        {
            name:"跟踪项目",
            data: datay2,
            type: 'bar',
            barWidth:toRemfontSize(62),
            barGap:0.1,
            showBackground:true,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
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
                                color: 'rgb(127,226,130)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(38,176,116)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
        }
        ]
    };


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

//省内项目
$.ajax({
    type:"get",
    url: baseUrl + tourongziguanli.projectInside,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        var chartDom = document.getElementById('echarts42');
        var myChart = echarts.init(chartDom);
        var option;
        let labels =[];
        let datay1 = [];
        let datay2 = [];
        let zhongbiao_total_val=0;
        let zhongbiao_total_num=0;
        let gengzong_total_val=0;
        let gengzong_total_num=0;
        for(var i=0;i<res.data.length;i++){
            labels.push(res.data[i].cityName);
            datay1.push(res.data[i].bidAmount/10000);
            datay2.push(res.data[i].trackAmount/10000);
            zhongbiao_total_val+=res.data[i].bidAmount/10000;
            zhongbiao_total_num+=res.data[i].bidNum;
            gengzong_total_val+= res.data[i].trackAmount/10000;
            gengzong_total_num+=res.data[i].trackNum;
            //values.push(res.data.)
        }
        $("#province_zhongbiao").text(`中标项目${zhongbiao_total_num}个  ${zhongbiao_total_val}亿`)
        $("#province_genzong").text(`跟踪项目${gengzong_total_num}个  ${gengzong_total_val}亿`)
        console.log(labels)
        console.log(datay1)
        console.log(datay2)
        option = {
            grid:{
                left:0,
                right:0,
                top:'10%',
                bottom:0,
                containLabel:true
            },
            xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel:{
                fontSize:toRemfontSize(26)
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:"white"
                }
            },
            data: labels
            },
            yAxis: {
            type: 'value',
            splitNumber:4,
                axisLabel:{
                    show: true,
                    color:"white",
                    fontSize:toRemfontSize(30)
                },
                axisLine: {
                    show: false,
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: "rgba(217, 214, 214, .1)"
                    }
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            series: [
            {
                name:'中标项目',
                data: datay1,
                type: 'bar',
                barWidth:toRemfontSize(62),
                barGap:0.1,
                showBackground:true,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontSize: 12,
                                color: '#fff',
                            },
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
                                    color: 'rgb(54,228,253)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(29,166,169)', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
            },
            {
                name:"跟踪项目",
                data: datay2,
                type: 'bar',
                barWidth:toRemfontSize(62),
                barGap:0.1,
                showBackground:true,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontSize: 12,
                                color: '#fff',
                            },
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
                                    color: 'rgb(127,226,130)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(38,176,116)', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
            }
            ]
        };
    
    
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
//项目统计头部
$.ajax({
type:"get",
url: baseUrl + tourongziguanli.projectStatisHeader,
cache: false,  //禁用缓存
async: true,	//是否异步
data: param,  //传入组装的参数
dataType: "json",
contentType: "application/json",
success:function(res){
    console.log(JSON.stringify(res))
    for(var i =0;i<res.data.length;i++){
        if(res.data[i].projectName=="中标项目"){
            $("#zhongbiaoAcount").text(formatNumber((res.data[i].projectAmount/10000).toFixed(2)))
            $("#zhongbiaoNum").text(res.data[i].projectNum)
        }else if(res.data[i].projectName=="建设项目"){
            $("#jiansheAcount").text(formatNumber((res.data[i].projectAmount/10000).toFixed(2)))
            $("#jiansheNum").text(res.data[i].projectNum)
        }else if(res.data[i].projectName=="运营项目"){
            $("#yunyingAcount").text(formatNumber((res.data[i].projectAmount/10000).toFixed(2)))
            $("#yunyingNum").text(res.data[i].projectNum)
        }else if(res.data[i].projectName=="清算项目"){
            $("#qingsuanAcount").text(formatNumber((res.data[i].projectAmount/10000).toFixed(2)))
            $("#qingsuanNum").text(res.data[i].projectNum)
        }
    }
},
error:function(error){
    layer.msg('数据请求失败', {icon:7})
}
});

//SPV公司
$.ajax({
type:"get",
url: baseUrl + tourongziguanli.spvCompany,
cache: false,  //禁用缓存
async: true,	//是否异步
data: param,  //传入组装的参数
dataType: "json",
contentType: "application/json",
success:function(res){
    //console.log(JSON.stringify(res))
    $("#spv_num").text(res.data.spvNum)
},
error:function(error){
    layer.msg('数据请求失败', {icon:7})
}
});

//SPV公司统计
$.ajax({
    type:"get",
    url: baseUrl + tourongziguanli.spvCompanyStatis,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        var chartDoms = document.getElementsByClassName('index4_echarts3');
        var datax1 = ["总投资","已完成投资"];
        var datax2_1 = ["应到位资本金","已到位资本金"];
        var datax2_2 = ["应到位银行贷款","已到位银行贷款"];
        var datax2_3 = ["已到位其他形式资金"];
        var datax3 = ["应回收","已回收"];
        var datay_zongtouzi=[res.data.totalInvest,res.data.completedInvest];
        var datay_daowei = [res.data.capitalRequired,25473.24];
        var datay_yinghang =[res.data.answerBankLoan,res.data.alreadyBankLoan];
        var datay_other =[res.data.alreadyOtherFunds];
        var datay_recycle = [res.data.answerRecycle,res.data.alreadyRecycle];
        var datays = [datay_zongtouzi,datay_daowei,datay_yinghang,datay_other,datay_recycle]
        var dataxs = [datax1,datax2_1,datax2_2,datax2_3,datax3]
        console.log(datays)
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
                padding: [0, 0, 0, -toRemfontSize(290)], 
                fontSize:toRemfontSize(30)    
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
                data:datays[i],
                type: 'bar',
                barWidth:toRemfontSize(46),
                showBackground:false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'right',
                            formatter:"{c}万元",
                            textStyle: {
                                fontSize: toRemfontSize(30),
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
        // if(i==3){
        //     option.series[0].data=datay1
        // }
        console.log(option)
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