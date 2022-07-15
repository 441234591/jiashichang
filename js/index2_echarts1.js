var chartDoms = document.getElementsByClassName('echarts1');

for(var i=0;i<4;i++){

var chartDom =chartDoms[i];
var myChart = echarts.init(chartDom);
var option;
var color = ['#FEB61B','#FBEB23','#6FD581','#189BFF'   
];

var legend = [
    'A需求类型',
    'B需求类型',
    'C需求类型',
];

var seriesData = [
    { "name": "市镇公用工程", "value": 5 },
    { "name": "建筑与环境设备工程", "value": 4 },
    { "name": "会计", "value": 8 },
    { "name": "其他", "value": 10 },
]

var option = {
    grid:{
        top:0,
        left:0,
        right:0,
        bottom:0
    },
    color: color,
    series: [{
        name: '需求类型占比',
        type: 'pie',
        center: ['50%', '50%'],
        radius: '100%',
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            show: false,
            length: 0,
            length2: 0,
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{title|{a}}:{value|{c}}',
                rich: {
                    value: {
                        fontSize: 8,
                        color:'#ffffff',
                    },
                    title:{
                        fontSize: 8,
                        color:'#ffffff',
                    }
                },
            }
        },
        data: seriesData,
    }],
};
option && myChart.setOption(option);
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法   
    myChart.setOption(option);   
    myChart.resize();
});
}