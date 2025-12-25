<template>
    <div class=" w-full">
        <div class="flex w-full  justify-evenly">
            <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">已上架产品数量
                    <span class=" text-xs mr-2">(单位：件)</span>
                </div>
                <div class="notibody">89</div>
            </div>
            <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">注册用户数量
                    <span class=" text-xs mr-2">(单位：人)</span>
                </div>
                <div class="notibody">999</div>
            </div>
            <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">今日成交额
                    <span class=" text-xs mr-2">(单位：元)</span>
                </div>
                <div class="notibody">752</div>
            </div>
            <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">成交订单数量
                    <span class=" text-xs mr-2">(单位：件)</span>
                </div>
                <div class="notibody">75</div>
            </div>
        </div>
        <!-- 设置底部柱状图 -->
        <div class="container-fluid my-8">
            <div class="column_pannel" id="column_show"></div>
        </div>
        <div class="flex my-8">
            <div class="gragh_pannel w-2/3" id="curve_show"></div>
            <div class="gragh_pannel w-1/3" id="pie_show"></div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts'



onMounted(() => {
    const mk = () => {
        const myChart = echarts.init(document.getElementById('curve_show'))
        const option = {
            title: {
                text: '月新增订单数',
                left: 'center',
                top: '15'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['食物', '服装', '生活用品', '电子产品']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2022-05-05', '2022-05-06', '2022-05-07', '2022-05-08', '2022-05-08', '2022-05-09', '2022-05-10']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '食物',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '服装',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '生活用品',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '电子产品',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        }
        option && myChart.setOption(option)
    }
    mk()
    const ah = () => {
        const myChart = echarts.init(document.getElementById('pie_show'))
        const option = {
            title: [
                {
                    top: 10,
                    text: '分类数量比',
                    x: 'center'
                }
            ],
            polar: {
                radius: [30, '80%']
            },
            angleAxis: {
                max: 4,
                startAngle: 75
            },
            radiusAxis: {
                type: 'category',
                data: ['食物', '服装', '生活用品', '电子产品']
            },
            tooltip: {},
            series: {
                type: 'bar',
                data: [2, 1.2, 2.4, 3.6],
                coordinateSystem: 'polar',
                label: {
                    show: true,
                    position: 'middle',
                    formatter: '{b}: {c}'
                }
            }
        }
        myChart.setOption(option)
    }
    ah()
    const columnChartFn = () => {
        const oColumn = echarts.init(document.getElementById('column_show'))
        const oColumnopt = {
            title: {
                text: '商品访问量',
                left: 'center',
                top: '10'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['食物', '服装', '生活用品', '电子产品'],
                top: '40'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月']
                }
            ],
            yAxis: [
                {
                    name: '访问量',
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '食物',
                    type: 'bar',
                    barWidth: 20,
                    areaStyle: { type: 'default' },
                    itemStyle: {
                        color: '#fd956a'
                    },
                    data: [800, 708, 920, 1090, 1200]
                },
                {
                    name: '服装',
                    type: 'bar',
                    barWidth: 20,
                    areaStyle: { type: 'default' },
                    itemStyle: {
                        color: '#2bb6db'
                    },
                    data: [400, 468, 520, 690, 800]
                },
                {
                    name: '生活用品',
                    type: 'bar',
                    barWidth: 20,
                    areaStyle: { type: 'default' },
                    itemStyle: {
                        color: '#13cfd5'
                    },
                    data: [500, 668, 520, 790, 900]
                },
                {
                    name: '电子产品',
                    type: 'bar',
                    barWidth: 20,
                    areaStyle: { type: 'default' },
                    itemStyle: {
                        color: '#00ce68'
                    },
                    data: [600, 508, 720, 890, 1000]
                }
            ],
            grid: {
                show: true,
                x: 50,
                x2: 30,
                y: 80,
                height: 260
            },
            dataZoom: [
                {
                    start: 0,
                    end: 100 - 1000 / 31,
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    handleSize: 0,
                    height: 8,
                    left: 45,
                    right: 50,
                    bottom: 26,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: '#cacaca',
                        borderWidth: '1',
                        shadowBlur: 2,
                        background: '#ddd',
                        shadowColor: '#ddd'
                    }
                }
            ]
        }
        oColumn.setOption(oColumnopt)
    }
    columnChartFn()
})


</script>
<style scoped >
.gragh_pannel {
    height: 350px;
    border: 1px solid #e7e7e9;
    background-color: #fff !important;
    margin-bottom: 20px;
}

.column_pannel {
    margin-bottom: 20px;
    height: 400px;
    border: 1px solid #e7e7e9;
    background-color: #fff !important;
}

.notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    width: 20rem;
    height: 8rem;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff
}

.notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #eaeaed;
    z-index: 2
}

.notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
}

.notification:hover:after {
    transform: translateX(0.15rem)
}

.notititle {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 300ms ease;
    z-index: 5;
    display: flex;
    justify-content: space-between;
}

.notification:hover .notititle {
    transform: translateX(0.15rem)
}

.notibody {
    color: #760e26;
    padding: 53px 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
    font-size: 20px;
}

.notification:hover .notibody {
    transform: translateX(0.25rem)
}

.notiglow,
.notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side at center, white, transparent);
    opacity: 0;
    transition: opacity 300ms ease;
}

.notiglow {
    z-index: 3;
}

.notiborderglow {
    z-index: 1;
}

.notification:hover .notiglow {
    opacity: 0.1
}

.notification:hover .notiborderglow {
    opacity: 0.1
}

.note {
    color: var(--color);
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0.9rem;
    width: 75%;
}
</style>