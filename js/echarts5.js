var chartDom = document.getElementById('echarts5');
var myChart = echarts.init(chartDom);
var option;
var pomsPieData = 45.45;
const radius = 5;
var giftImageUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDAgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAxNCBDb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgNDcgNDAgNDcgNDAgMCAwIDAiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLplKbpsqTnuqIt5a6M56i/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMuMDAwMDAwLCAtNDM0Mi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0LUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTMuMDAwMDAwLCA0MzQyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLDIxLjk0MjQ2OTIgQzMyLDE1LjM0Njg0OTIgMjYuNjI3MzkzMiwxMCAyMC4wMDExNzgyLDEwIEMxMy4zNzI2MDY4LDEwIDgsMTUuMzQ2ODQ5MiA4LDIxLjk0MjQ2OTIgQzgsMjUuODI3MTQyNyA5Ljg3MjE2NDk1LDI5LjI2NzQxODEgMTIuNzU3NTg0NywzMS40NDgzNjk4IEMxMy44MTU2MTEyLDMyLjc1MzQyMzEgMTUuMDIwOTEzMSwzNC43MzM4Njc5IDE1LjAyMDkxMzEsMzYuOTg2MzQ1NCBMMTUuMDIwOTEzMSw0MSBMMjQuOTc5MDg2OSw0MSBMMjQuOTc5MDg2OSwzNi45ODYzNDU0IEMyNC45NzkwODY5LDM0LjczMzg2NzkgMjYuMTg0Mzg4OCwzMi43NTM0MjMxIDI3LjI0MjQxNTMsMzEuNDQ4MzY5OCBDMzAuMTI3ODM1MSwyOS4yNjc0MTgxIDMyLDI1LjgyNzE0MjcgMzIsMjEuOTQyNDY5MiIgaWQ9IkZpbGwtMSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjA4MDEyMDIsMzkuOTIwNTA3MyBMMjQuOTE5ODc5OCwzOS45MjA1MDczIEwyNC45MTk4Nzk4LDM2LjQ1NjMwNjQgQzI0LjkxOTg3OTgsMzQuMDM1MzQyMyAyNi4yMTEzODQsMzEuOTMyNDk1MiAyNy4yOTUwNzM1LDMwLjU5MzM2MjggTDI3LjM5MDE3NTIsMzAuNTAyMTM4MSBDMzAuMjY2NzA3NCwyOC4zMjc5NDg1IDMxLjkxNjMxMDUsMjUuMDI4NjUzOSAzMS45MTYzMTA1LDIxLjQ1MjE3NjUgQzMxLjkxNjMxMDUsMTUuMTgyMjMwMiAyNi43OTQ5MDkxLDEwLjA4MDY2MjMgMjAuNTAwNTg3LDEwLjA4MDY2MjMgQzE0LjIwNTA5MDksMTAuMDgwNjYyMyA5LjA4MzY4OTQ4LDE1LjE4MjIzMDIgOS4wODM2ODk0OCwyMS40NTIxNzY1IEM5LjA4MzY4OTQ4LDI1LjAyNzQ4NDQgMTAuNzM0NDY2NywyOC4zMjc5NDg1IDEzLjYwOTgyNDgsMzAuNTAyMTM4MSBMMTMuNzAzNzUyNCwzMC41OTMzNjI4IEMxNC43ODg2MTYsMzEuOTMxMzI1NiAxNi4wODAxMjAyLDM0LjAzNDE3MjcgMTYuMDgwMTIwMiwzNi40NTYzMDY0IEwxNi4wODAxMjAyLDM5LjkyMDUwNzMgWiBNMjYuMDAzNTY5Miw0MSBMMTQuOTk2NDMwOCw0MSBMMTQuOTk2NDMwOCwzNi40NTYzMDY0IEMxNC45OTY0MzA4LDM0LjM3OTE4OTQgMTMuODY2OTUxNiwzMi41MjY2MjU1IDEyLjkwMTg0NTcsMzEuMzIxOTkxMiBDOS43ODU3OTgxNSwyOC45Mzk2MjIxIDgsMjUuMzQ2NzcxIDgsMjEuNDUyMTc2NSBDOCwxNC41ODY5MzAzIDEzLjYwNzQ3NjYsOSAyMC41MDA1ODcsOSBDMjcuMzkyNTIzNCw5IDMzLDE0LjU4NjkzMDMgMzMsMjEuNDUyMTc2NSBDMzMsMjUuMzQ2NzcxIDMxLjIxNDIwMTksMjguOTM5NjIyMSAyOC4wOTgxNTQzLDMxLjMyMTk5MTIgQzI3LjEzMzA0ODQsMzIuNTI2NjI1NSAyNi4wMDM1NjkyLDM0LjM4MDM1ODkgMjYuMDAzNTY5MiwzNi40NTYzMDY0IEwyNi4wMDM1NjkyLDQxIFoiIGlkPSJGaWxsLTMiIGZpbGw9IiMzQzNDM0MiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtNiI+PC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtNSIgZmlsbD0iIzNDM0MzQyIgbWFzaz0idXJsKCNtYXNrLTIpIiBwb2ludHM9IjE1IDQzLjkyMyAyNSA0My45MjMgMjUgNDMgMTUgNDMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTciIGZpbGw9IiMzQzNDM0MiIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIxOCA0Ni45MjMgMjIgNDYuOTIzIDIyIDQ2IDE4IDQ2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC04IiBmaWxsPSIjM0MzQzNDIiBtYXNrPSJ1cmwoI21hc2stMikiIHBvaW50cz0iMTUuNjM1MDM4NCAyNiAxMyAyMi4yNzEzMjcgMTMuOTE1MzggMjEuNjQ2OTE5NCAxNS42MzUwMzg0IDI0LjA4MDU2ODcgMTcuODEzNTk0NCAyMSAxOS45OTIxNTA0IDI0LjA4MDU2ODcgMjIuMTcxOTE0MSAyMS4wMDExODQ4IDI0LjM1NjUwODIgMjQuMDgyOTM4NCAyNi4wODQ2MiAyMS42NDY5MTk0IDI3IDIyLjI3MjUxMTggMjQuMzU2NTA4MiAyNS45OTc2MzAzIDIyLjE3MzEyMTcgMjIuOTE3MDYxNiAxOS45OTA5NDI4IDI2IDE3LjgxMzU5NDQgMjIuOTE5NDMxMyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtOSIgZmlsbD0iIzNDM0MzQyIgbWFzaz0idXJsKCNtYXNrLTIpIiBwb2ludHM9IjE5IDYgMTkuOTIzIDYgMTkuOTIzIDAgMTkgMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTAiIGZpbGw9IiMzQzNDM0MiIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIwIDE4LjkyMyA2IDE4LjkyMyA2IDE4IDAgMTgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTExIiBmaWxsPSIjM0MzQzNDIiBtYXNrPSJ1cmwoI21hc2stMikiIHBvaW50cz0iMTAuMTk2OTk5NSA5IDYgNC44MDMwMDA0OSA2LjgwMzAwMDQ5IDQgMTEgOC4xOTY5OTk1MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTIiIGZpbGw9IiMzQzNDM0MiIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIzNCAxOC45MjMgNDAgMTguOTIzIDQwIDE4IDM0IDE4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xMyIgZmlsbD0iIzNDM0MzQyIgbWFzaz0idXJsKCNtYXNrLTIpIiBwb2ludHM9IjMwLjgwMzAwMDUgOSAzMCA4LjE5Njk5OTUxIDM0LjE5Njk5OTUgNCAzNSA0LjgwMzAwMDQ5Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
option = {
        backgroundColor:'transparent',
        width:"100%",
        graphic: {
            elements: [
            {
                type: 'image',
                style: {
                    image: giftImageUrl,
                    width: 40,
                    height: 50
                },
                left: 'center',
                top: 'center'
            },
            {
                type: 'rect',
                shape: {
                    width: 20,
                    height: 5,
                    r:5
                },
                style: {
                    fill:new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#219ffe',
                        },
                        {
                            offset: 1,
                            color: '#8ddd79',
                        },
                    ]),
                },
                left: 'center',
                bottom: 30
            }
        ]
        },
		series: [
            {
				type: 'pie',
				radius: ['50%', '60%'],
                center: ['50%', '50%'],
				startAngle: 225,
				color: ['#219ffe', 'transparent'],
				label: {
					
				},
				labelLine: {
					normal: {
                        length: 10,
                        length2: 40,
						show: true,
                        minTurnAngle:30
					}
				},
				data: [
                    {
					value: 10,
					name: 1234,
                    label: {
                        formatter:function(parm){
                            return [`{c|${parm.value}个}`+'\n{circle|}\n'+`{b|ppp项目}`];
                        },
                        rich:{
                            circle:{
                                align: 'right',
                                //auto自定义
                                backgroundColor:"auto",
                                borderRadius: 8,
                                width: 8,
                                height: 8,
                                padding: [0,0,0,0]
                            },
                            b:{
                                fontSize:8,
                                   color:'#fff',
                                   padding: [0, -40],
                            },
                             c:{
                                fontSize:8,
                                padding: [0, -40],
                                fontFamily:'led regular',
                            }
                        },
                    },
                    itemStyle: {
                        normal: {
                            borderColor: "transparent",
                            borderWidth: "0"
                        },
                        emphasis: {
                            borderColor: "transparent",
                            borderWidth: "0"
                        }
                    }
				    }
                , {
					value: 4,
					name: 2
				}]
			},
			{
				type: 'pie',
				radius: ['50%', '60%'],
                center: ['50%', '50%'],
				avoidLabelOverlap: false,
				startAngle: 315,
                minAngle:90,
				color: ['#8ddd79', 'none'],
				clockwise: false, //饼图的扇区是否是顺时针排布。
				itemStyle: {
					normal: {
						borderColor: "transparent",
						borderWidth: "0"
					},
					emphasis: {
						borderColor: "transparent",
						borderWidth: "0"
					}
				},
				z: 10,
				label: {
					
				},
				labelLine: {
					// normal: {
                        length: 10,
                        length2: 40,
						show: true,
                        minTurnAngle:30,
                        // showAbove:true
					// }
				},
				data: [{
					value: 4,
					name: 3,
					label: {
                        formatter:function(parm){
                            return [`{c|${parm.value}个}`+'\n{circle|}\n'+`{b|其他投资项目}`];
                        },
                        rich:{
                            b:{
                                fontSize:8,
                                   color:'#fff',
                                   padding: [0, -50],
                            },
                             c:{
                                fontSize:8,
                                fontFamily:'led regular',
                                padding: [0, -20],
                            },
                            circle:{
                                align: 'right',
                                //auto自定义
                                backgroundColor:"auto",
                                borderRadius: 8,
                                width: 8,
                                height: 8,
                                padding: [0,0,0,0]
                            }
                        },
                    },
						 itemStyle: {
                         normal: {
                    shadowColor: 'rgba(3,101,249,1)',
                    shadowBlur: 4
                }
            }
				}, {
					value: 1,
					name: 4,
				}, {
					value: 10,
					name: 0,
				}]
			},
		]
	};
//     const color = ['#FF801C', '#00FEFF'];
// //const radius = 5;
// const datas = [
//     {
//         name: '故障车辆',
//         value: 25,
//     },
//     {
//         name: '在线车辆',
//         value: 75,
//         otherName: '任务车辆',
//         otherValue: 35,
//     },
// ];
// let sum = 0;
// for (i of datas) {
//     sum += i.value;
// }
// const title = {
//     name: '车辆总数',
//     value: sum,
//     unit: '辆',
// };
// const rich = {
//     name: {
//         color: '#fff',
//         fontSize: 16,
//         align: 'left',
//         padding: [0, 10, 0, 0],
//     },
//     value: {
//         color: '#ccc',
//         fontSize: 14,
//         align: 'left',
//     },
//     title: {
//         color: '#fff',
//         fontSize: 17,
//     },
//     titleUnit: {
//         color: '#fff',
//         fontSize: 16,
//         padding: [15, 0, 0, 0],
//     },
//     titleValue: {
//         color: '#fff',
//         fontSize: 40,
//         fontWeight: 600,
//         padding: [15, 5, 5, 5],
//     },
// };
// option = {
//     color,
//     backgroundColor: '#000E1A',
//     series: [
//         {
//             type: 'pie',
//             center: ['50%', '50%'],
//             radius: ['50%', '60%'],
//             data: datas,
//             startAngle: 180,
//             label: {
//                 show: true,
//                 position: 'outside',
//                 alignTo: 'labelLine',
//                 // ·圆点
//                 backgroundColor: 'auto', //圆点颜色，auto：映射的系列色
//                 height: 0,
//                 width: 0,
//                 lineHeight: 0,
//                 distanceToLabelLine: 0, //圆点到labelline距离
//                 borderRadius: radius,
//                 padding: [radius, -radius, radius, -radius],
//                 formatter: '',
//             },
//             labelLine: {
//                 normal: {
//                     length: 50,
//                     length2: 30,
//                     lineStyle: {
//                         width: 2,
//                     },
//                 },
//             },
//             // labelLayout(params) {
//             //     return {
//             //         x: '10%',
//             //     };
//             // },
//         },
//         {
//             type: 'pie',
//             center: ['50%', '50%'],
//             radius: ['50%', '60%'],
//             data: datas,
//             startAngle: 180,
//             label: {
//                 show: true,
//                 position: 'outside',
//                 alignTo: 'labelLine',
//                 formatter: (i) => {
//                     if (i.data.otherValue) {
//                         return `{name|${i.name}}\n\n{value|${i.value}（${i.data.otherName}：${i.data.otherValue}）}`;
//                     } else {
//                         return `{name|${i.name}}\n\n{value|${i.value}}`;
//                     }
//                 },
//                 rich,
//             },
//             labelLine: {
//                 normal: {
//                     show: false,
//                     length: 50,
//                     length2: 30,
//                     lineStyle: {
//                         width: 2,
//                     },
//                 },
//             },
//         },
//         {
//             type: 'pie',
//             center: ['50%', '50%'],
//             radius: ['50%', '60%'],
//             data: datas,
//             startAngle: 180,
//             label: {
//                 show: true,
//                 position: 'center',
//                 formatter: () => `{title|${title.name}}\n{titleValue|${title.value}}{titleUnit|${title.unit}}`,
//                 rich,
//             },
//         },
//     ],
// };

    option && myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });