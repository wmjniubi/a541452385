import { StatisticCard } from '@ant-design/pro-components';
// import RcResizeObserver from 'rc-resize-observer';
import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

const { Statistic, Divider } = StatisticCard;

const Xunliancharts = () => {
  const [responsive, setResponsive] = useState(false);

  const [resourceUtilization, setResourceUtilization] = useState(65.8);
  const [completeSpeed, setCompleteSpeed] = useState(1000);

  const option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (params: any) {
        // 获取原始Tooltip内容
        const originalContent =
          params[0].marker + params[0].seriesName + ' : ' + params[0].value;
        // 修改标题
        const modifiedTitle = '开始训练' + params[0].axisValue;
        // 返回自定义的Tooltip内容
        return modifiedTitle + '<br/>' + originalContent;
      },
    },
    legend: {
      data: ['资源利用率', '处理速度'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        boundaryGap: false,
        type: 'category',
        data: ['12h', '24h', '36h', '48h', '60h'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '资源利用率',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '处理速度',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  };

  return (
    //RcResizeObserver
    <StatisticCard.Group direction={'row'}>
      <StatisticCard style={{ width: 200 }} colSpan={4}>
        <Statistic
          title="平均资源利用率"
          value={`${resourceUtilization}%`}
          layout="vertical"
        />
        <br></br>
        <Statistic
          title="平均处理速度"
          value={`${completeSpeed} / min`}
          layout="vertical"
        />
      </StatisticCard>
      <Divider type={'vertical'} />
      <StatisticCard
        colSpan={20}
        chart={
          <div>
            <ReactECharts
              option={option}
              style={{ height: 200, width: '100%' }}
            />
          </div>
        }
      />
    </StatisticCard.Group>
  );
};

export default Xunliancharts;
