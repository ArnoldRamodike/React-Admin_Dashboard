import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = ({isDashboard = false}) => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <ResponsivePie
        data={data}
        theme={{
            axis: {
                domain: {
                  line: {
                    stroke: colors.grey[100]
                  }
            },
            legend: {
                text: {
                    fill: colors.grey[100]
                }
            },
            ticks: {
                line:{
                    stroke: colors.grey[100],
                    strokeWidth:1
                },
                text: {
                    fill: colors.grey[100]
                }
            }
        },
        legends:{
            text:{
                fill: colors.grey[100]
            },
        },
    }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.35}
        padAngle={1}
        cornerRadius={2}
        activeOuterRadiusOffset={10}
        colors={{ scheme: 'dark2' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.4'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={9}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.9'
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
);
};

export default PieChart;