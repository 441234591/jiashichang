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


//工程分布
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.projectMinute,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let option_index5_1 = {
            color: ['#1391FF', '#FEBA1C', '#E7697E', '#57C87E', '#FAEA22','#B168FA'],
            legend: {
                orient: 'horizontal',
                icon: 'rect',
                y: 'bottom',
                x: 'center',
                data: [],
                // itemGap:toRemfontSize(40),
                itemWidth:toRemfontSize(28),
                itemHeight:toRemfontSize(28),
                textStyle:{
                  color:'white',
                  fontSize:toRemfontSize(28)
                }
            },
            grid:{
              left:0,
              right:0,
              top:0,
              bottom:0
            },
            series: [{
                name: '外圈',
                type: 'pie',
                radius: ['0%', '99%'],
                center:['50%','40%'],
                label: {
                    normal: {
                        show: false,
                        // position: 'center'
                    },
                    // emphasis: {
                    //     show: true,
                    //     textStyle: {
                    //         fontSize: '30',
                    //         fontWeight: 'bold'
                    //     }
                    // }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#fff',
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: []
            }, {
                name: '内圈',
                type: 'pie',
                radius: ['48%', '69%'],
                center:['50%','40%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        color:'#fff',
                        formatter: `{b}\n\n{c}`,
                        textStyle: {
                          fontSize: toRemfontSize(26),
                        }
                    },
                    // emphasis: {
                    //     show: true,
                    //     textStyle: {
                    //         fontSize: '30',
                    //         fontWeight: 'bold'
                    //     }
                    // }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: []
            }]
          };
        res.data.forEach(element => {
            console.log(element)
            let showdatas = [];
            
            element.list.forEach(datas =>{
                //console.log(datas);
                let showdata ={};
                showdata.name = datas.projectName;
                showdata.value = datas.projectNum;
                showdatas.push(showdata);              
            })
            console.log(showdatas);
            if(element.projectType=="专业"){
                let chartDom5_1 = document.getElementById('echarts5_1');
                let myChart5_1 = echarts.init(chartDom5_1);
                option_index5_1.legend.data=showdatas.map(item => item.name);
                option_index5_1.series[0].data=showdatas.map(item => {
                    return {
                        value: item.value,
                        name: item.name
                    }
                });
                option_index5_1.series[1].data=showdatas.map(item => {
                    return {
                        value: item.value,
                        name: item.name
                    }
                });
                option_index5_1 && myChart5_1.setOption(option_index5_1);
                $("#index5_zhuanye").text(`总计项目${element.totalProject}个`);
            }else if(element.projectType=="区域"){
                let chartDom5_2 = document.getElementById('echarts5_2');
                let myChart5_2 = echarts.init(chartDom5_2);
                option_index5_1.legend.data=showdatas.map(item => item.name);
                option_index5_1.series[0].data=showdatas.map(item => {
                    return {
                        value: item.value,
                        name: item.name
                    }
                });
                option_index5_1.series[1].data=showdatas.map(item => {
                    return {
                        value: item.value,
                        name: item.name
                    }
                });
                option_index5_1 && myChart5_2.setOption(option_index5_1);
                $("#index5_quyu").text(`总计项目${element.totalProject}个`);
            }else if(element.projectType=="在建"){
                let chartDom5_3 = document.getElementById('echarts5_3');
                let myChart5_3 = echarts.init(chartDom5_3);
                option_index5_1.legend.data=showdatas.map(item => item.name);
                option_index5_1.series[0].data=showdatas.map(item => {
                    return {
                        value: item.value,
                        name: item.name
                    }
                });
                option_index5_1.series[1].data=showdatas.map(item => {
                    return {
                        value: item.value,
                        name: item.name
                    }
                });
                option_index5_1 && myChart5_3.setOption(option_index5_1);
                $("#index5_jieduan").text(`总计项目${element.totalProject}个`);
            }
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//奖统计
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.prizeStatis,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        res.data.forEach(element=>{
            //console.log(element)

            if(element.prizeType =="QC小组"){
                element.list.forEach(item =>{
                    if(item.prizeName=="总数"){
                        $("#index5_qc_total").text(item.prizeNum);
                    }else if(item.prizeName=="上年度"){
                        $("#index5_qc_niandu").text(item.prizeNum);
                    }else if(item.prizeName=="省级"){
                        $("#index5_qc_shengji").text(item.prizeNum);
                    }else if(item.prizeName=="国家级"){
                        $("#index5_qc_guojia").text(item.prizeNum);
                    }
                })
                
            }else if(element.prizeType =="在建创优项目"){
                element.list.forEach(item =>{
                    if(item.prizeName=="市级"){
                        $("#index5_zaijianchuangyou_shiji").text(item.prizeNum);
                    }else if(item.prizeName=="省级"){                       
                        $("#index5_zaijianchuangyou_shengji").text(item.prizeNum);
                    }else if(item.prizeName=="国家级"){                     
                        $("#index5_zaijianchuangyou_guojia").text(item.prizeNum);
                    }  
                })
 
            }else if(element.prizeType =="项目获奖情况"){
                element.list.forEach(item =>{
                    if(item.prizeName=="市级"){
                        $("#index5_huojiang_shiji").text(item.prizeNum);
                    }else if(item.prizeName=="省级"){                       
                        $("#index5_huojiang_shengji").text(item.prizeNum);
                    }else if(item.prizeName=="国家级"){                     
                        $("#index5_huojiang_guojia").text(item.prizeNum);
                    }  
                })
            }
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//施工产值
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.constructionOutput,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#index5_shigong_total").text(formatNumber((res.data.totalOutput/100000000).toFixed(2)));
        $("#index5_shangyue").text(formatNumber((res.data.lastMonthOutput/100000000).toFixed(2)));
        $("#index5_leiji").text(formatNumber((res.data.yearOutput/100000000).toFixed(2)));
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//施工产值数据
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.constructionOutputData,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let nowData = parseInt(res.data[0].yearType)>parseInt(res.data[1].yearType)?res.data[0].list:res.data[1].list;
        let agoData = parseInt(res.data[0].yearType)<parseInt(res.data[1].yearType)?res.data[0].list:res.data[1].list;
        let aixsLabels=[];
        let values_now = [];
        let values_ago = [];

        nowData.forEach(element=>{
            values_now.push(element.monthOutput/10000);
        })
        if(nowData.length<12){
            for(let z=0;z<12-nowData.length;z++){
                values_now.push(0)
            }
        }else{
            nowData.forEach(element=>{
                aixsLabels.push(element.monthKey+"月");
            })
        }

        agoData.forEach(element=>{
            values_ago.push(element.monthOutput/10000)
        })
        if(agoData.length<12){
            for(let z=0;z<12-agoData.length;z++){
                values_ago.push(0)
            }
        }else{
            agoData.forEach(element=>{
                aixsLabels.push(element.monthKey+"月");
            })
        }

        console.log(aixsLabels)
        let chartDom_5_1 = document.getElementById('echarts_5_1');
        let myChart_5_1 = echarts.init(chartDom_5_1);
        let option_5_1 = {
                grid: {
                    top: '20%',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    containLabel:true
                },
                legend: {
                    data: [{
                        name: '去年(万元)',
                    }, {
                        name: '今年(万元)',
                    }],
                    // type: "rect",
                    top:'0',
                    itemGap: toRemfontSize(40),
                    itemWidth: toRemfontSize(30),
                    itemHeight: toRemfontSize(30),
                    textStyle: {
                        fontSize: toRemfontSize(28),
                        color:'white'
                    },

                },
                xAxis: [{
                    data: aixsLabels,
                    axisLabel: {
                        margin: 10,
                        color: 'white',
                        textStyle: {
                            fontSize: toRemfontSize(28)
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'white',
                        }
                    },
                    axisTick: {
                        show: false
                    },
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: function(value) {
                            num = value
                            if (num && num != 'undefined' && num != 'null') {
                                let numS = num;
                                numS = numS.toString();
                                numS = numS.replace(/,/gi, '');
                                return numS;
                            } else {
                                return num;
                            }
                        },
                        color: 'white',
                        textStyle:{
                            fontSize:toRemfontSize(28)
                        }
            
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#FFAE00',
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: "rgba(217, 214, 214, .1)"
                        }
                    }
                }],
                series: [{
                    name: "今年(万元)",
                    type: 'bar',
                    data: values_now,
                    barWidth: toRemfontSize(36),
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                formatter:function(p){
                                    if(p.value==0){
                                        return ""
                                    }
                                },
                                textStyle: {
                                    color: '#fff',
                                    fontSize:toRemfontSize(20)
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
                                        color: 'rgb(128,226,130)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(39,177,116)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },
                    },
                },
                {
                    name: "去年(万元)",
                    type: 'bar',
                    data: values_ago,
                    barWidth: toRemfontSize(36),
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                formatter:function(p){
                                    if(p.value==0){
                                        return ""
                                    }
                                },
                                textStyle: {
                                    color: '#fff',
                                    fontSize:toRemfontSize(20)
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
                                        color: 'rgb(65,202,254)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(30,141,243)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        }
                    },
                }
                
                ]
        };
        option_5_1 && myChart_5_1.setOption(option_5_1);
        console.log(aixsLabels)
        console.log(values_ago)
        console.log(values_now)
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//质量考评项目列表数据
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.qualityAssessmentProjectData,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        res.data.forEach((element,index)=>{
            console.log(index,element);
            $("#root5 .right-two .title .des").eq(index).text(element.typeName);
            $("#root5 .right-two .list").eq(index).empty();
            element.list.forEach((el,idex)=>{
                let li = $("<li></li>");
                let onelinediv =$("<div  class='oneline'></div>");
                if(idex%2==0){
                    onelinediv.addClass('oddline');
                }
                let icondiv =$("<div class='icon'></div>");
                if(idex<3){
                    icondiv.addClass('inthree');
                }
                let span = $("<span></span>").text(idex+1);

                let textdiv = $("<div class='text'></div>").text(el.companyName);
                let numdiv= $("<div class='num'></div>").text(el.companyNum);
                icondiv.append(span);
                onelinediv.append(icondiv);
                onelinediv.append(textdiv);
                onelinediv.append(numdiv);
                li.append(onelinediv);
                $("#root5 .right-two .list").eq(index).append(li);
            })
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//质量考评项目
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.qualityAssessmentProject,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        res.data.forEach(el=>{
            if(el.typeName=="本年度质量考评项目"){
                $("#index5_benniandu_total").text(`(${el.typeNum})`);
                $("#index5_benniandu_youliang").text(el.excellentNum);
                $("#index5_benniandu_hege").text(el.qualifiedNum);
            }else if(el.typeName=="上季度质量考评项目"){
                $("#index5_shangjidu_total").text(`(${el.typeNum})`);
                $("#index5_shangjidu_youliang").text(el.excellentNum);
                $("#index5_shangjidu_hege").text(el.qualifiedNum);
                $("#index5_shangjidu_youlianglv").text(el.excellentRate+"%");
                $("#index5_shangjidu_pingjun").text(el.parityScore);
            }else if(el.typeName=="本年度安全考评项目"){
                $("#index5_anquan_total").text(`(${el.typeNum})`);
                $("#index5_anquan_youliang").text(el.excellentNum);
                $("#index5_anquan_hege").text(el.qualifiedNum);
            }else if(el.typeName=="上季度安全考评项目"){
                $("#index5_shangjidu_anquan_total").text(`(${el.typeNum})`);
                $("#index5_shangjidu_anquan_youliang").text(el.excellentNum);
                $("#index5_shangjidu_anquan_hege").text(el.qualifiedNum);
                $("#index5_shangjidu_anquan_youlianglv").text(el.excellentRate+"%");
                $("#index5_shangjidu_anquan_pingjun").text(el.parityScore);
            }
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});


//质量产值
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.qualityOutput,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        $("#zizhichanzhi").empty();
        res.data.forEach((el,index)=>{
            let item = $("<div class='item'></div>");
            let numdiv =$("<div class='num'></div>").text(formatNumber((el.qualityOutputAmount/10000).toFixed(2)));
            let desdiv =$("<div class='des'></div>").text(el.qualityOutputName);
            item.append(numdiv);
            item.append(desdiv);
            $("#zizhichanzhi").append(item);
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

//质量产值排行榜	
$.ajax({
    type:"get",
    url: baseUrl + gongchengguanli.qualityOutputRanking,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        res.data.forEach(el=>{
            if(el.typeName=="分公司上班产值对比"){
                let lables = [];
                let values = [];
                el.list.forEach(element=>{
                    lables.push(element.rankingName);
                    values.push((element.rankingAmount/10000).toFixed(0))
                })
                let chartDom5_42 = document.getElementById('echart-5-four-two');
                let myChart5_42 = echarts.init(chartDom5_42);
                var option5_42 = {
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: '10%',
                        right: '10%',
                        containLabel:true
                    },
                    yAxis: [{
                        data: lables,
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
                        data: values,
                        barWidth: toRemfontSize(31),
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'right',
                                    formatter:`{c}  万元`,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: toRemfontSize(26)
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
                myChart5_42 && myChart5_42.setOption(option5_42);
                window.addEventListener("resize", function() {
                  // 让我们的图表调用 resize这个方法
                  myChart5_42.resize();
                });
            }else{
                $("#list_zizhichanzhi").empty();
                el.list.forEach((el,idex)=>{
                    let li = $("<li></li>");
                    let item = $("<div class='item'></div>");
                    let itemleft = $("<div class='itemleft'></div>");
                    let icon =$("<div class='icon'></div>");
                    if(idex<3){
                        icon.addClass('inthree');
                    }
                    let span = $("<span></span>").text(idex+1);
                    icon.append(span);
                    let company = $("<div class='company'></div>").text(el.rankingName);
                    let money = $("<div class='money'></div>").text((el.rankingAmount/10000).toFixed(0)+'  万元');
                    itemleft.append(icon);
                    itemleft.append(company);
                    item.append(itemleft);
                    item.append(money);
                    li.append(item);
                    $("#list_zizhichanzhi").append(li);
                })
            }
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});