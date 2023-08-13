import { ProCard, ProTable } from '@ant-design/pro-components';
import ReactECharts from 'echarts-for-react';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: '124',
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: any = [
  {
    title: '应用名称',
    width: 80,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建者',
    width: 80,
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
];

const Ziyuangailan = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['已分配GPU卡数', 'GPU卡数'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '2012-02-03',
          '2022-02-05',
          '2022-02-06',
          '2022-02-06',
          '2022-02-07',
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '已分配GPU卡数',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'GPU卡数',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  };

  const numeracyOption = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['算力利用率'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '2012-02-03',
          '2022-02-05',
          '2022-02-06',
          '2022-02-06',
          '2022-02-07',
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '算力利用率',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
    ],
  };

  const resourcesOptin = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      type: 'plain',
      orient: 'vertical',
      right: 0,
      top: '30%',
      formatter: function (name: string) {
        // 自定义图例项的显示内容
        return name + '|' + '52%' + '104GPU';
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '60%'],
        data: [
          { value: 335, name: 'SFT训练' },
          { value: 310, name: 'RM训练' },
          { value: 234, name: 'RLHF训练' },
        ],
        label: {
          position: 'center',
          formatter: function () {
            return '{a|GPU数}\n\n{b|200}';
          },
          rich: {
            a: {
              fontSize: 14,
              color: '#333',
            },
            b: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          },
        },
      },
    ],
  };
  return (
    <>
      <ReactECharts option={option} style={{ height: 300, width: '100%' }} />
      <br />
      <ReactECharts
        option={numeracyOption}
        style={{ height: 300, width: '100%' }}
      />
      <br></br>
      <ProCard style={{ marginBlockStart: 8 }}>
        <ProCard colSpan={10} title="资源消耗类别占比" headerBordered>
          <ReactECharts
            option={resourcesOptin}
            style={{ minWidth: '100%', marginLeft: '-200px' }}
          />
        </ProCard>
        <ProCard colSpan={12} title="资源消耗TOP5" headerBordered>
          <ProTable
            rowKey="key"
            pagination={{
              showQuickJumper: true,
            }}
            columns={columns}
            search={false}
            dateFormatter="string"
            tooltip={false}
            dataSource={tableListDataSource}
            // headerTitle="表格标题"
          />
        </ProCard>
      </ProCard>
    </>
  );
};

export default Ziyuangailan;
