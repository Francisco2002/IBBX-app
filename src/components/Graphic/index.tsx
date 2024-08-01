import moment from "moment";
import { GraphicContainer } from "./styles";
import * as echarts from 'echarts';
import { useEffect } from "react";
import { theme } from "../../theme";

type GraphicProps = {
    data: any[];
    title: string;
}

const Graphic: React.FC<GraphicProps> = ({ data, title }) => {

    function renderGraphic() {
        let chartDom = document.getElementById('main');
        let myChart = echarts.init(chartDom);
        let option;

        let dataFilter: any = {};

        data.map(item => {
            const label = moment(item.date, "YYYY-MM-DD").format("DD/MM/YYYY");

            if(!Object.keys(dataFilter).includes(label)) {
                dataFilter[label] = 0;
            }

            dataFilter[label] += item.value;
        })

        option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt: any[]) {
                return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: title
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: Object.keys(dataFilter).reverse()
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100
                },
                {
                    start: 0,
                    end: 10
                }
            ],
            series: [
                {
                    name: 'Leitura',
                    type: 'line',
                    symbol: 'none',
                    sampling: 'lttb',
                    itemStyle: {
                        color: theme.colors.primary
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: theme.colors.primaryVariant
                        },
                        {
                            offset: 1,
                            color: theme.colors.primary
                        }
                        ])
                    },
                    data: Object.values(dataFilter).reverse()
                }
            ]
        };

        option && myChart.setOption(option);
    }

    useEffect(() => {
        renderGraphic();
    }, [data]);

    return (
        <GraphicContainer id="main" />
    );
};

export default Graphic;