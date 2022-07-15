var chartDom = document.getElementById('index_zhuzhichengji');
var myChart = echarts.init(chartDom);
var option;
var colors = [ '#A2D27D','#DBC44F','#1B93FF', ];
var data = [ 
    {
        name: '公司本部',
        value: 255,
    },
    {
        name: '分公司机关',
        value: 587,
    }, 
    {
        name: '项目部',
        value: 1259,
    },

];
var total = data.reduce((prev, curr) => prev + curr.value, 0);
console.log(total);
let target1 = 55555;
option = {
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
            center:['50%','45%'],
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
            },
            data: data
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});