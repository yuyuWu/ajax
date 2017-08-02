/**
 * Created by Administrator on 2017/7/31.
 */
$(function () {
    //第一组数据
    var data = [];
    var data1 = [];
    //第二组数据
    var data2 = [];
    var data3 = [];
    //第三组数据
    var data4 = [];
    var data5 = [];
    //第四组数据
    var data6 = [];
    var data7 = [];

    function setOption() {
        var myChart = echarts.init(document.getElementById('main'));
        var Chart1 = echarts.init(document.getElementById('group_two'));
        var Chart2 = echarts.init(document.getElementById('group_three'));
        var Chart3 = echarts.init(document.getElementById('group_four'));
        var option = [
            /*第一组数据图表*/
            {
                title: {
                    text: '',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis', /*显示该点的所有数据*/
                    axisPointer: {
                        type: 'none'//坐标显示器设置为没有
                    }
                },
                legend: {
                    data: ['入管温度', '出管温度', 'COT温度']
                },
                toolbox: {
                    right: 600,
                    itemSize: 25,//工具栏 icon 的大小
                    itemGap: 15,//默认10，工具栏 icon
                    show: true,
                    feature: {
                        /*动态类型切换*/
                        magicType: {
                            show: true, title: {
                                line: '折线图切换',
                                bar: '柱形图切换',
                            }, type: ['line', 'bar'],
                        },
                        //restore，还原，复位原始图表
                        restore: {show: true},
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
                xAxis: [
                    { //设置轴线的属性
                        axisLine: {
                            show: true, // 控制x轴线是否显示
                            lineStyle: {
                                color: '#c4c4c4',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        splitLine: {show: false},//去除网格线
                        axisTick: {
                            show: false
                        },//去除x轴的刻度线
                        type: 'category',
                        boundaryGap: true,
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                fontSize: 16,
                                color: '#000'
                            }
                        },
                        data: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12']
                    }
                ],
                yAxis: [
                    {//去除y轴刻度线
                        axisTick: {
                            show: false
                        },
                        //去除网格线
                        splitLine: {
                            show: true
                        },
                        // 控制y轴线是否显示
                        axisLine: {show: false},
                        boundaryGap: false,//不从x轴0刻度开始
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        },
                        interval: 600,
                        splitNumber: 4,
                        min: 700,
                        max: 1100
                    }
                ],
                series: [
                    /*入管温度*/
                    {
                        smooth: true,
                        name: '入管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#5197f8',
                                lineStyle: {
                                    color: '#5197f8'
                                }
                            },
                            //鼠标高亮状态
                            emphasis: {
                                label: {
                                    color: '#5298f8',
                                    show: false,
                                }
                            }
                        },
                        data: data

                    },
                    /*出管温度*/
                    {
                        smooth: true,
                        name: '出管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ffc869',
                                lineStyle: {
                                    color: '#ffc869'
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                    color: '#5298f8'
                                }

                            }
                        },
                        data: data1

                    },
                    /*COT温度还不知道，随便编的*/
                    {
                        smooth: true,
                        name: 'COT温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ff696a',//折线点的颜色
                                lineStyle: {
                                    color: '#ff696a'//折线颜色
                                }
                            }
                        },
                        data: data

                    },

                ]
            },
            /*第二组数据图表*/
            {
                scale: true,
                title: {
                    text: '',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis', /*显示该点的所有数据*/
                    axisPointer: {
                        type: 'none'//坐标显示器设置为没有
                    }
                },
                legend: {
                    data: ['入管温度', '出管温度', 'COT温度']
                },
                toolbox: {
                    itemSize: 25,//工具栏 icon 的大小
                    itemGap: 15,//默认10，工具栏 icon
                    show: true,
                    feature: {
                        /*动态类型切换*/
                        magicType: {
                            show: true, title: {
                                line: '折线图切换',
                                bar: '柱形图切换',
                            }, type: ['line', 'bar'],
                        },
                        //restore，还原，复位原始图表
                        restore: {show: true},
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
                xAxis: [
                    { //设置轴线的属性
                        axisLine: {
                            show: true, // 控制x轴线是否显示
                            lineStyle: {
                                color: '#c4c4c4',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        splitLine: {show: false},//去除网格线
                        axisTick: {
                            show: false
                        },//去除x轴的刻度线
                        type: 'category',
                        boundaryGap: true,
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                fontSize: 16,
                                color: '#000'
                            }
                        },
                        data: ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
                    }
                ],
                yAxis: [
                    {//去除y轴刻度线
                        axisTick: {
                            show: false
                        },
                        //去除网格线
                        splitLine: {
                            show: true
                        },
                        // 控制y轴线是否显示
                        axisLine: {show: false},
                        boundaryGap: false,
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        },
                        interval: 600,
                        splitNumber: 4,
                        min: 700,
                        max: 1100
                    }
                ],
                series: [
                    /*入管温度*/
                    {
                        hoverAnimation: true,
                        smooth: true,//折线圆滑
                        name: '入管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        itemStyle: {
                            normal: {
                                color: '#5197f8',
                                lineStyle: {
                                    color: '#5197f8'
                                }
                            },
                            //鼠标高亮状态
                            emphasis: {
                                label: {
                                    color: '#5298f8',
                                    show: false,
                                }
                            }
                        },
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        data: data2

                    },
                    /*出管温度*/
                    {
                        smooth: true,
                        name: '出管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ffc869',
                                lineStyle: {
                                    color: '#ffc869'
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                    color: '#5298f8'
                                }

                            }
                        },
                        data: data3

                    },
                    /*COT温度*/
                    {
                        smooth: true,
                        name: 'COT温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        /*  data: [970, 920, 800, 890, 780, 798, 810, 788, 809, 709, 897, 978],*/
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ff696a',//折线点的颜色
                                lineStyle: {
                                    color: '#ff696a'//折线颜色
                                }
                            }
                        },
                        data: data2

                    },

                ]
            },
            /*第三组数据图表*/
            {
                scale: true,
                title: {
                    text: '',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis', /*显示该点的所有数据*/
                    axisPointer: {
                        type: 'none'//坐标显示器设置为没有
                    }
                },
                legend: {
                    data: ['入管温度', '出管温度', 'COT温度']
                },
                toolbox: {
                    itemSize: 25,//工具栏 icon 的大小
                    itemGap: 15,//默认10，工具栏 icon
                    show: true,
                    feature: {
                        /*动态类型切换*/
                        magicType: {
                            show: true, title: {
                                line: '折线图切换',
                                bar: '柱形图切换',
                            }, type: ['line', 'bar'],
                        },
                        //restore，还原，复位原始图表
                        restore: {show: true},
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
                xAxis: [
                    { //设置轴线的属性
                        axisLine: {
                            show: true, // 控制x轴线是否显示
                            lineStyle: {
                                color: '#c4c4c4',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        splitLine: {show: false},//去除网格线
                        //去除x轴的刻度线
                        axisTick: {
                            show: false
                        },
                        type: 'category',
                        boundaryGap: true,
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                fontSize: 16,
                                color: '#000'
                            }
                        },
                        data: ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
                    }
                ],
                yAxis: [
                    {//去除y轴刻度线
                        axisTick: {
                            show: false
                        },
                        //去除网格线
                        splitLine: {
                            show: true
                        },
                        // 控制y轴线是否显示
                        axisLine: {show: false},
                        boundaryGap: false,
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        },
                        interval: 600,
                        splitNumber: 4,
                        min: 700,
                        max: 1100
                    }
                ],
                series: [
                    /*入管温度*/
                    {
                        hoverAnimation: true,
                        smooth: true,//折线圆滑
                        name: '入管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        itemStyle: {
                            normal: {
                                color: '#5197f8',
                                lineStyle: {
                                    color: '#5197f8'
                                }
                            },
                            //鼠标高亮状态
                            emphasis: {
                                label: {
                                    color: '#5298f8',
                                    show: false,
                                }
                            }
                        },
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        data: data4
                    },
                    /*出管温度*/
                    {
                        smooth: true,
                        name: '出管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ffc869',
                                lineStyle: {
                                    color: '#ffc869'
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                    color: '#5298f8'
                                }

                            }
                        },
                        data: data5

                    },
                    /*COT温度*/
                    {
                        smooth: true,
                        name: 'COT温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ff696a',//折线点的颜色
                                lineStyle: {
                                    color: '#ff696a'//折线颜色
                                }
                            }
                        },
                        data: data4

                    },

                ]
            },
            /*第四组数据图表*/
            {
                scale: true,
                title: {
                    text: '',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis', /*显示该点的所有数据*/
                    axisPointer: {
                        type: 'none'//坐标显示器设置为没有
                    }
                },
                legend: {
                    data: ['入管温度', '出管温度', 'COT温度']
                },
                toolbox: {
                    itemSize: 25,//工具栏 icon 的大小
                    itemGap: 15,//默认10，工具栏 icon
                    show: true,
                    feature: {
                        /*动态类型切换*/
                        magicType: {
                            show: true, title: {
                                line: '折线图切换',
                                bar: '柱形图切换',
                            }, type: ['line', 'bar'],
                        },
                        //restore，还原，复位原始图表
                        restore: {show: true},
                        saveAsImage: {
                            show: true,
                        }
                    }
                },
                calculable: true,
                grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
                xAxis: [
                    { //设置轴线的属性
                        axisLine: {
                            show: true, // 控制x轴线是否显示
                            lineStyle: {
                                color: '#c4c4c4',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        splitLine: {show: false},//去除网格线
                        axisTick: {
                            show: false
                        },//去除x轴的刻度线
                        type: 'category',
                        boundaryGap: true,
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                fontSize: 16,
                                color: '#000'
                            }
                        },
                        data: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48']
                    }
                ],
                yAxis: [
                    {//去除y轴刻度线
                        axisTick: {
                            show: false
                        },
                        //去除网格线
                        splitLine: {
                            show: true
                        },
                        // 控制y轴线是否显示
                        axisLine: {show: false},
                        boundaryGap: false,
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        },
                        interval: 600,
                        splitNumber: 4,
                        min: 700,
                        max: 1100
                    }
                ],
                series: [
                    /*入管温度*/
                    {
                        hoverAnimation: true,
                        smooth: true,//折线圆滑
                        name: '入管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        itemStyle: {
                            normal: {
                                color: '#5197f8',
                                lineStyle: {
                                    color: '#5197f8'
                                }
                            },
                            //鼠标高亮状态
                            emphasis: {
                                /* background: '#000',*/
                                /*symbol: 'start',*/
                                label: {
                                    color: '#5298f8',
                                    show: false,
                                }
                            }
                        },
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        data: data6
                    },
                    /*出管温度*/
                    {
                        smooth: true,
                        name: '出管温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ffc869',
                                lineStyle: {
                                    color: '#ffc869'
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                    color: '#5298f8'
                                }

                            }
                        },
                        data: data7

                    },
                    /*COT温度*/
                    {
                        smooth: true,
                        name: 'COT温度',
                        type: 'line',
                        barCategoryGap: '50%',//柱形图之间距离
                        barGap: 5,//柱形图之间距离
                        symbolSize: 4, // 图表的点的大小
                        symbol: 'emptyCircle',//折线点的圆点为空心
                        itemStyle: {
                            normal: {
                                color: '#ff696a',//折线点的颜色
                                lineStyle: {
                                    color: '#ff696a'//折线颜色
                                }
                            }
                        },
                        data: data6

                    },

                ]
            }
        ];
        //当屏幕窗口改变时，图表也会发生改变，响应式
        //第一组数据
        window.onresize = myChart.resize;
        $("#main").resize(myChart.resize);
        myChart.setOption(option[0]);
        //第二组数据
        window.onresize = Chart1.resize,
            $("#group_two").resize(Chart1.resize);
        Chart1.setOption(option[1]),
            //第三组数据
            window.onresize = Chart2.resize;
        $("#group_three").resize(Chart2.resize)
        Chart2.setOption(option[2]);
        //第四组数据
        window.onresize = Chart3.resize;
        $("#group_four").resize(Chart3.resize)
        Chart3.setOption(option[3])

    }

//获取...排行数据
    function getMapData() {
        $.ajax({
            url: "http://47.92.49.44/schema/index.php/Home/User/get_temp_main?FN=5",
            dataType: 'jsonp',
            jsonp: 'callback',//返回数据形式为json
            success: function (objdata) {
                //第一组数据，第一根管到第十二根管
                for (var i = 0; i < 12; i++) {
                    var did = objdata.data.datas.table_in[i].temp;//入管温度
                    var oneData_in = [];
                    var oneData_in = [did];
                    data.push(oneData_in);
                }
                for (var i = 0; i < 12; i++) {
                    var out = objdata.data.datas.table_out[i].temp;//出管温度
                    var twoData_out = [];
                    var twoData_out = [out];
                    data1.push(twoData_out);
                }
                //第二组数据，第十二根管到第二十四根管
                for (var i = 12; i < 24; i++) {
                    var did1 = objdata.data.datas.table_in[i].temp;
                    var Data_two_in = [];
                    var Data_two_in = [did1];
                    data2.push(Data_two_in);
                }
                for (var i = 12; i < 24; i++) {
                    var two_out = objdata.data.datas.table_out[i].temp;
                    var Data_two_out = [];
                    var Data_two_out = [two_out];
                    data3.push(Data_two_out);
                }
                //第三组数据，第二十五根管到第三十七根管
                for (var i = 24; i < 37; i++) {
                    var did2 = objdata.data.datas.table_in[i].temp;
                    var Data_three_in = [];
                    var Data_three_in = [did2];
                    data4.push(Data_three_in);
                }
                for (var i = 24; i < 36; i++) {
                    var three_out = objdata.data.datas.table_out[i].temp;
                    var Data_three_out = [];
                    var Data_three_out = [three_out];
                    data5.push(Data_three_out);
                }
                //第四组数据，第三十七根管到第四十八根管
                for (var i = 36; i < 48; i++) {
                    var did3 = objdata.data.datas.table_in[i].temp;
                    var Data_four_in = [];
                    var Data_four_in = [did3];
                    data6.push(Data_four_in);
                }
                for (var i = 36; i < 48; i++) {
                    var four_out = objdata.data.datas.table_out[i].temp;
                    var Data_four_out = [];
                    var Data_four_out = [four_out];
                    data7.push(Data_four_out);
                }
                /*第一组数据*/
                setOption(data);//执行setOption函数,传参
                setOption(data1);
                /*第二组数据*/
                setOption(data2);
                setOption(data3);
                /*第三组数据*/
                setOption(data4);
                setOption(data5);
                /*第四组据*/
                setOption(data6);
                setOption(data7);
            }
        });
    }

    getMapData();
});