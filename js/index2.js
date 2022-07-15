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
    url: baseUrl + renliziyuan.personAge,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let labels = [];
        let value_nan=[];
        let value_nv=[];
        res.data.forEach(element => {
            labels.push(element.ageType);
            element.list.forEach(el=>{
                if(el.gender==0){
                    value_nan.push(el.personnelNum);
                }else{
                    value_nv.push(el.personnelNum);
                }
            })
        });

        var chartDom_index2_middle_bottom = document.getElementById('index2_middle_bottom');
        var myChart_index2_middle_bottom = echarts.init(chartDom_index2_middle_bottom);
        var option_index2_middle_bottom;
        option_index2_middle_bottom = {
            grid:{
                top:"10%",
                left:0,
                right:0,
                bottom:0,
                containLabel:true
            },
            color: ['#35ABFD', '#2f4533'],
            legend: {
                data: ['男', '女'],
                textStyle:{
                    color:"white",
                    fontSize:toRemfontSize(30)
                },
                itemWidth:toRemfontSize(30),
                itemHeight:toRemfontSize(30),
                itemGap:toRemfontSize(36)
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
                min: 0,
                max: 500,
                interval: 100,
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
                name: '男',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top',
                    color: 'white',
                    fontSize:toRemfontSize(24)
                },
                data:value_nan,
                barWidth:toRemfontSize(62),
                itemStyle: {
                    normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 1,
                                color: '#2782EE',
                            },
                            {
                                offset: 0,
                                color: '#37CFFC',
                            },
                        ]),
                    },
                },
            },
            {
                name: '女',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top',
                    color: 'white',
                    fontSize:toRemfontSize(24)
                },
                data: value_nv,
                barWidth:toRemfontSize(62), 
                itemStyle: {
                    normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 1,
                                color: '#F0752B',
                            },
                            {
                                offset: 0,
                                color: '#FDB17F',
                            },
                        ]),
                    },
                    
                },
            }
            ]
        };
  

        option_index2_middle_bottom && myChart_index2_middle_bottom.setOption(option_index2_middle_bottom);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_index2_middle_bottom.resize();
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
        let chartDom_index2_left_bottom = document.getElementById('index2_left_bottom');
        let myChart_index2_left_bottom = echarts.init(chartDom_index2_left_bottom);
        let option_index2_left_bottom;
        let colors = [ '#A2D27D','#DBC44F','#1B93FF', ];
        let index2_data=[];
        res.data.forEach(element=>{
            let obj = {};
            obj.name=element.organizationName;
            obj.value=element.personnelNum;
            index2_data.push(obj);
        })

        let total = index2_data.reduce((prev, curr) => prev + curr.value, 0);
        console.log(total);
        option_index2_left_bottom = {
            backgroundColor: 'transparent',
            legend: {
                // orient: 'vertical',
                icon: 'rect',
                bottom: '0',
                // right: '15%',
                itemGap: toRemfontSize(72),
                itemWidth: toRemfontSize(28),
                itemHeight: toRemfontSize(28),
                textStyle:{
                    color:'#fff',
                    fontWeight: 'normal',
                    fontSize:toRemfontSize(28)
                },
                // data: legends,
            },
            title: [{
                text: '{name|' + total + '}\n{val|' + '总计' + '}',
                top: 'center',
                left: 'center',
                textStyle: {
                    rich: {
                        val: {
                            fontSize: toRemfontSize(36),
                            fontWeight: 'normal',
                            color: '#fefefe',
                            padding: [5, 0]
                        },
                        name: {
                            fontSize: toRemfontSize(65),
                            fontWeight: 'bolder',
                            color: '#fefefe',
                        }
                    }
                }
            }],
            color: colors,
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '60%'],
                    center:['50%','50%'],
                    minAngle:30,
                    roseType:"radius",
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        show: true,
                        formatter:function(parm){
                            console.log(parm);
                            return [`{white|${parm.name}\n}`+`{num|${parm.value}}{unit|人}`]
                        },
                        rich:{
                            white:{
                                fontSize:toRemfontSize(34),
                                color:"white"
                            },
                            num:{
                                fontFamily:'led regular',
                                fontSize:toRemfontSize(72),
                            },
                            unit:{
                                fontSize:toRemfontSize(54),
                            }
                        }
                    },
                    labelLine: {
                        //血线
                        show: true,
                    },
                    data: index2_data
                }
            ]
        };

        option_index2_left_bottom && myChart_index2_left_bottom.setOption(option_index2_left_bottom);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_index2_left_bottom.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//按学历分布
$.ajax({
    type:"get",
    url: baseUrl + renliziyuan.personEducation,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let chartDom_index2_right_bottom = document.getElementById('index2_right_bottom');
        let myChart_index2_right_bottom = echarts.init(chartDom_index2_right_bottom);
        let option_index2_right_bottom;
        let bgColor = '#001037';
        let title = '大专';
        let color = ['#E96B5A', '#5E5BF6', '#2489FF', '#19FFF1', '#657797', '#F6C021'];
        let echartData = [];
        res.data.forEach(element=>{
            let obj={};
            obj.name = element.educationType;
            obj.value=element.personnelNum;
            echartData.push(obj)
        })
        let formatNumber = function(num) {
            let reg = /(?=(\B)(\d{3})+$)/g;
            return num.toString().replace(reg, ',');
        }
        let total = echartData.reduce((a, b) => {
            return a + b.value * 1
        }, 0);
        console.log(total)
        option_index2_right_bottom = {
            backgroundColor: 'transparent',
            color: color,
            legend: {
            // orient: 'vertical',
            icon: 'rect',
            bottom: '0',
            // right: '15%',
            itemGap: toRemfontSize(37),
            itemWidth: toRemfontSize(28),
            itemHeight: toRemfontSize(28),
            textStyle:{
                color:'#fff',
                fontWeight: 'normal',
                fontSize:toRemfontSize(28)
            },
            // data: legends,
        },
            title: [{
                text: '{name|' + total + '}\n{val|' + title + '}',
                top: 'center',
                left: 'center',
                textStyle: {
                    rich: {
                        val: {
                            fontSize: toRemfontSize(36),
                            fontWeight: 'normal',
                            color: '#fefefe',
                            padding: [5, 0]
                        },
                        name: {
                            fontSize: toRemfontSize(65),
                            fontWeight: 'bolder',
                            color: '#fefefe',
                        }
                    }
                }
            }],
            series: [{
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '50%'],
                data: echartData,
                hoverAnimation: false,
                startAngle:270,
                itemStyle: {
                    normal: {
                        // borderColor: bgColor,
                        // borderWidth: 2
                    }
                },
                labelLine: {
                    normal: {
                        length: 20,
                        length2: 20,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: params => {
                            return (
                                '{name|' + params.name + '}{value|' +
                                formatNumber(params.value) + '}{name|人}'
                            );
                        },
                        // padding: [0 , -100, 25, -100],
                        rich: {
                            name: {
                                fontSize: toRemfontSize(34),
                                padding: [0, 0, 0, 10],
                                color: 'white'
                            },
                            value: {
                                fontSize: toRemfontSize(46),
                                fontFamily:'led regular',
                                // padding: [10, 0, 0, 20],
                                color: 'white'
                                // color: '#333333'
                            }
                        }
                    }
                },
            }]
        };
        option_index2_right_bottom && myChart_index2_right_bottom.setOption(option_index2_right_bottom);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart_index2_right_bottom.resize();
        });
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//按职称分布
$.ajax({
    type:"get",
    url: baseUrl + renliziyuan.personJobTitle,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res));
        let color = ['#FEB61B','#FBEB23','#6FD581','#189BFF'   
        ];
        let option_index2_right_top = {
            grid:{
                top:0,
                left:0,
                right:0,
                bottom:0
            },
            legend:{
                show:true,
                right:0,
                itemWidth:toRemfontSize(20), 
                itemHeight:toRemfontSize(20), 
                orient:'vertical',
                textStyle:{
                    color:'#fff',
                    fontWeight: 'normal',
                    fontSize:toRemfontSize(28)
                },
            },
            color: color,
            series: [{
                type: 'pie',
                center: ['30%', '50%'],
                radius: '100%',
                labelLine: {
                    show: false,
                    length: 0,
                    length2: 0,
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{value|{c}}',
                        rich: {
                            value: {
                                fontSize: toRemfontSize(20),
                                color:'#ffffff',
                            },
                            title:{
                                fontSize: toRemfontSize(20),
                                color:'#ffffff',
                            }
                        },
                    }
                },
                data: [],
            }],
        };
        //option_index2_right_top && myChart_index2_right_top.setOption(option_index2_right_top);

        res.data.forEach(element=>{
            let index2_right_top_data = [];
            element.list.forEach(el=>{
                let obj = {};
                obj.name = el.buildingType;
                obj.value=el.personnelNum;
                index2_right_top_data.push(obj);
            });
            if(element.jobType=="高级职称专业分布"){
                $("#index2_gaoji").text(`总计${element.totalPersonnel}本`);
                let chartDom_index2_right_top_1= document.getElementById("index2_right_top1");
                var myChart_index2_right_top_1 = echarts.init(chartDom_index2_right_top_1);
                option_index2_right_top.series[0].data=index2_right_top_data;
                option_index2_right_top && myChart_index2_right_top_1.setOption(option_index2_right_top);
                window.addEventListener("resize", function() {
                    // 让我们的图表调用 resize这个方法    
                    myChart_index2_right_top_1.resize();
                });
            }else if(element.jobType=="一级注册建造师专业分布"){
                $("#index2_1lev").text(`总计${element.totalPersonnel}本`);
                let chartDom_index2_right_top_3= document.getElementById("index2_right_top3");
                let myChart_index2_right_top_3 = echarts.init(chartDom_index2_right_top_3);
                option_index2_right_top.series[0].data=index2_right_top_data;
                option_index2_right_top && myChart_index2_right_top_3.setOption(option_index2_right_top);
                window.addEventListener("resize", function() {
                    // 让我们的图表调用 resize这个方法    
                    myChart_index2_right_top_3.resize();
                });
            }else if(element.jobType=="中级职称专业分布"){
                $("#index2_zhongji").text(`总计${element.totalPersonnel}本`);
                let chartDom_index2_right_top_2= document.getElementById("index2_right_top2");
                let myChart_index2_right_top_2 = echarts.init(chartDom_index2_right_top_2);
                option_index2_right_top.series[0].data=index2_right_top_data;
                option_index2_right_top && myChart_index2_right_top_2.setOption(option_index2_right_top);
                window.addEventListener("resize", function() {
                    // 让我们的图表调用 resize这个方法    
                    myChart_index2_right_top_2.resize();
                });
            }else if(element.jobType=="二级注册建造师专业分布"){
                $("#index2_2lev").text(`总计${element.totalPersonnel}本`);
                let chartDom_index2_right_top_4= document.getElementById("index2_right_top4");
                let myChart_index2_right_top_4 = echarts.init(chartDom_index2_right_top_4);
                option_index2_right_top.series[0].data=index2_right_top_data;
                option_index2_right_top && myChart_index2_right_top_4.setOption(option_index2_right_top);
                window.addEventListener("resize", function() {
                    // 让我们的图表调用 resize这个方法    
                    myChart_index2_right_top_4.resize();
                });
            }

            
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//职业证书
$.ajax({
    type:"get",
    url: baseUrl + renliziyuan.personProfessionCertificate,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        res.data.forEach(element=>{
            if(element.professionType=="岗位资格类"){
                $("#index2_gangwei_total").text(`(${element.totalPersonnel})`)
                element.list.forEach((el,index)=>{
                    $("#index2_gangwei_list .des").eq(index).text(el.professionName);
                    $("#index2_gangwei_list .num").eq(index).text(el.personnelNum);
                })
            }if(element.professionType=="其他证书"){
                $("#index2_qita_total").text(`(${element.totalPersonnel})`)
                element.list.forEach((el,index)=>{
                    $("#index2_qita_list .des").eq(index).text(el.professionName);
                    $("#index2_qita_list .num").eq(index).text(el.personnelNum);
                })
            }if(element.professionType=="安全生产考核类"){
                $("#index2_anquan_total").text(`(${element.totalPersonnel})`)
                element.list.forEach((el,index)=>{
                    $("#index2_anquan_list .des").eq(index).text(el.professionName);
                    $("#index2_anquan_list .num").eq(index).text(el.personnelNum);
                })
            }if(element.professionType=="职称类"){
                $("#index2_zhicheng_total").text(`(${element.totalPersonnel})`)
                element.list.forEach((el,index)=>{
                    $("#index2_zhicheng_list .des").eq(index).text(el.professionName);
                    $("#index2_zhicheng_list .num").eq(index).text(el.personnelNum);
                })
            }if(element.professionType=="注册"){
                $("#index2_zhuce_total").text(`(${element.totalPersonnel})`)
                element.list.forEach((el,index)=>{
                    $("#index2_zhuce_list .des").eq(index).text(el.professionName);
                    $("#index2_zhuce_list .num").eq(index).text(el.personnelNum);
                })
            }

            element.list.forEach(el=>{
                //if(el.)
            })
        })
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});
//在职情况
$.ajax({
    type:"get",
    url: baseUrl + renliziyuan.personJob,
    cache: false,  //禁用缓存
    async: true,	//是否异步
    data: param,  //传入组装的参数
    dataType: "json",
    contentType: "application/json",
    success:function(res){
        console.log(JSON.stringify(res))
        let total = 0;
        res.data.forEach(element=>{
            total+=element.personnelNum;
            if(element.jobName=="履职"){
                $("#index2_lvzhi").text(element.personnelNum);
            }else if(element.jobName=="外聘"){
                $("#index2_waiping").text(element.personnelNum);
            }else if(element.jobName=="待岗"){
                $("#index2_daigang").text(element.personnelNum);
            }
        })
        $("#index2_zaizhi_total").text(`(${total})`)
    },
    error:function(error){
        layer.msg('数据请求失败', {icon:7})
    }
});

