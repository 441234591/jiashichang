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

//财务统计头部
$.ajax({
    type:"get",
    url: baseUrl + caiwuguanli.financeStatisHeader,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        for(var i=0;i<res.data.length;i++){
            if(res.data[i].projectName=="本年度营业收入"){
                $("#nianduyinye_shouru").text(formatNumber((res.data[i].totalAmount/10000).toFixed(2)))
                $("#nianduyinye_tongbi").text(`同比:${res.data[i].yearErlier}%`)
                $("#nianduyingye_huanbi").text(`环比:${res.data[i].monthErlier}%`)
                $("#nianduyinye_target").text(formatNumber((res.data[i].targetAmount/10000).toFixed(2)))
                if(res.data[i].yearErlier<0){
                    $("#nianduyinye_icon_tongbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#nianduyinye_icon_tongbi").removeClass('green').addClass('red').text("");
                }
                if(res.data[i].monthErlier<0){
                    $("#nianduyinye_icon_huanbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#nianduyinye_icon_huanbi").removeClass('green').addClass('red').text("");
                }
            }else if(res.data[i].projectName=="本年度回收工程款"){
                $("#back_shouru").text(formatNumber((res.data[i].totalAmount/10000).toFixed(2)))
                $("#back_tongbi").text(`同比:${res.data[i].yearErlier}%`)
                $("#back_huanbi").text(`环比:${res.data[i].monthErlier}%`)
                $("#back_target").text(formatNumber((res.data[i].targetAmount/10000).toFixed(2)))
                if(res.data[i].yearErlier<0){
                    $("#back_icon_tongbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#back_icon_tongbi").removeClass('green').addClass('red').text("");
                }
                if(res.data[i].monthErlier<0){
                    $("#back_icon_huanbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#back_icon_huanbi").removeClass('green').addClass('red').text("");
                }
            }else if(res.data[i].projectName=="本年度利润总额"){
                $("#lirun_shouru").text(formatNumber((res.data[i].totalAmount/10000).toFixed(2)))
                $("#lirun_tongbi").text(`同比:${res.data[i].yearErlier}%`)
                $("#lirun_huanbi").text(`环比:${res.data[i].monthErlier}%`)
                $("#lirun_target").text(formatNumber((res.data[i].targetAmount/10000).toFixed(2)))
                if(res.data[i].yearErlier<0){
                    $("#lirun_icon_tongbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#lirun_icon_tongbi").removeClass('green').addClass('red').text("");
                }
                if(res.data[i].monthErlier<0){
                    $("#lirun_icon_huanbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#lirun_icon_huanbi").removeClass('green').addClass('red').text("");
                }
            }else if(res.data[i].projectName=="本年度税费总额"){
                $("#suifei_shouru").text(formatNumber((res.data[i].totalAmount/10000).toFixed(2)))
                $("#suifei_tongbi").text(`同比:${res.data[i].yearErlier}%`)
                $("#suifei_huanbi").text(`环比:${res.data[i].monthErlier}%`)
                $("#suifei_target").text(formatNumber((res.data[i].targetAmount/10000).toFixed(2)))
                if(res.data[i].yearErlier<0){
                    $("#suifei_icon_tongbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#suifei_icon_tongbi").removeClass('green').addClass('red').text("");
                }
                if(res.data[i].monthErlier<0){
                    $("#suifei_icon_huanbi").removeClass('red').addClass('green').text("");
                }else{
                    $("#suifei_icon_huanbi").removeClass('green').addClass('red').text("");
                }
            }
        }
       
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//财务统计头部
$.ajax({
    type:"get",
    url: baseUrl + caiwuguanli.financeRanking,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))   
        var labels = [];
        var values = [];
        var datalist1 = res.data[0].financeRankingList;
        var pie_datas=[];
        let totalAmount1 = 0;
        for(var i=0;i<datalist1.length;i++){
            labels.push(datalist1[i].branchName);
            values.push(datalist1[i].branchAmount);
            var pie_data = {};
            pie_data.name=datalist1[i].branchName;
            pie_data.value=datalist1[i].branchAmount;
            totalAmount1+=pie_data.value;
            pie_datas.push(pie_data);
        }   
        var chartDom = document.getElementById('bar-echarts');
        var myChart = echarts.init(chartDom);
        var option;
        var color4=new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
                offset: 1,
                color: '#FBAF7C',
            },
            {
                offset: 0,
                color: '#D65A14',
            },
        ])
//   var formatNumber = function(num) {
//     let reg = /(?=(\B)(\d{3})+$)/g;
//     return num.toString().replace(reg, ',');
// }
//自定义提示文字
        var getname = labels;
        var getvalue =values;
        var option = {
            grid: {
                top: 0,
                bottom: 0,
                left: '5%',
                right: '10%',
                containLabel:true
            },
            yAxis: [{
                data: getname,
                inverse:true,
                axisLabel: {
                    padding: [0, 0, 0, -toRemfontSize(280)],
                    align:'left',
                    color: 'white',
                    textStyle: {
                        fontSize: toRemfontSize(30)
                    },
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: 'white',
                    }
                },
                axisTick: {
                    show: false
                },
            }],
            xAxis: [{
                type: 'value',
                axisLabel: {
                show:false
        
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
                data: getvalue,
                barWidth: toRemfontSize(32),
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'right',
                            formatter: params => {
                                return (                            
                                    formatNumber(params.value) + '万元'
                                );
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: toRemfontSize(30)
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
                                    color: 'rgb(43,162,223)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(46,205,254)', // 100% 处的颜色
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


        var labels2=[];
        var values2=[];
        var datalist2 = res.data[1].financeRankingList;
        var pie_datas2 = [];
        let totalAmount2 =0;
        for(var i=0;i<datalist2.length;i++){
            labels2.push(datalist2[i].branchName);
            values2.push(datalist2[i].branchAmount);
            var pie_data = {};
            pie_data.name=datalist2[i].branchName;
            pie_data.value=datalist2[i].branchAmount;
            totalAmount2+=pie_data.value;
            pie_datas2.push(pie_data);
        }
        var chartDom2 = document.getElementById('bar-echarts2');
        var myChart2 = echarts.init(chartDom2);
        option.series[0].itemStyle.normal.color = color4;
        option.yAxis[0].data=labels2;
        option.series[0].data=values2;
        option && myChart2.setOption(option);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
            myChart2.resize();
          });

        //饼图
        var chartDom = document.getElementById('pie-echarts');
        var myChart = echarts.init(chartDom);
        var option_pie;
        let datas = pie_datas;
        // var formatNumber = function(num) {
        //     let reg = /(?=(\B)(\d{3})+$)/g;
        //     return num.toString().replace(reg, ',');
        // }
        var option_pie = {
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
                                ((params.value*100)/totalAmount1).toFixed(0) + '%}'
                            );
                        },
                        // padding: [0 , -100, 25, -100],
                        rich: {
                            name: {                      
                                color: 'white',
                                fontSize:toRemfontSize(24)
                            },
                            value: {
                                fontFamily:'led regular',
                                // padding: [10, 0, 0, 20],
                                color: 'white',
                                fontSize:toRemfontSize(30)
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
        option_pie && myChart.setOption(option_pie);

        var chartDom2 = document.getElementById('pie-echarts2');
        var myChart2 = echarts.init(chartDom2);
        option_pie.series[0].data=pie_datas2;
        option_pie.series[0].label.normal.formatter = params => {
            return (
                '{name|' + params.name + '}\n{value|' +
                ((params.value*100)/totalAmount2).toFixed(0) + '%}'
            );
        }
        option_pie && myChart2.setOption(option_pie);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
            myChart2.resize();
          });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});