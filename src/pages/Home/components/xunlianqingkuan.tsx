import { ProTable } from '@ant-design/pro-components';
import { DatePicker } from 'antd';
import { TimeRangePickerProps } from 'antd/lib/time-picker';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Xunliancharts from './xunliancharts';
const { RangePicker } = DatePicker;

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  status: string;
  creator: string;
  createdAt: number;
};
const rangePresets: TimeRangePickerProps['presets'] = [
  { label: '最近7天', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '最近1个月', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: '最近半年', value: [dayjs().add(-180, 'd'), dayjs()] },
];

const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: '2',
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  });
}
const expandedRowRender = () => {
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return (
    <ProTable
      columns={[
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },

        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',
          render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
    />
  );
};

const columns: any = [
  { title: '训练阶段', dataIndex: 'date', key: 'date' },
  { title: '任务名称', dataIndex: 'name', key: 'name' },

  { title: '任务描述', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: '基础模型', dataIndex: 'jichumoxing', key: 'jichumoxing' },
  { title: '资源规格', dataIndex: 'ziyuanguige', key: 'ziyuanguige' },
  { title: '总物料大小', dataIndex: 'ziyuanguige', key: 'ziyuanguige' },
  { title: '已完成物料大小', dataIndex: 'ziyuanguige', key: 'ziyuanguige' },
  { title: '已训练时长', dataIndex: 'ziyuanguige', key: 'ziyuanguige' },
  { title: '预计剩余训练时长', dataIndex: 'ziyuanguige', key: 'ziyuanguige' },
  { title: '创建信息', dataIndex: 'ziyuanguige', key: 'ziyuanguige' },
];

const Xunlianqingkuan = () => {
  const [activeKey, setActiveKey] = useState<React.Key>('tab1');

  return (
    <>
      <ProTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        toolbar={{
          menu: {
            type: 'tab',
            activeKey: activeKey,
            items: [
              {
                key: 'tab1',
                label: <span>进行中任务</span>,
              },
              {
                key: 'tab2',
                label: <span>已完成任务</span>,
              },
              {
                key: 'tab3',
                label: <span>异常的任务</span>,
              },
            ],
            onChange: (key) => {
              console.log('key=>', key);

              setActiveKey(key as string);
            },
          },
          actions: [
            <RangePicker
              key={'13245'}
              presets={[...rangePresets]}
              // showTime
              format="YYYY/MM/DD"
              onChange={(value) => {
                console.log('value', value);
                const timestamps = value?.map((dateString) =>
                  dayjs(dateString).unix(),
                );
                console.log(timestamps);
              }}
            />,
          ],
        }}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        search={false}
        dateFormatter="string"
        options={{
          setting: {
            draggable: true,
            checkable: true,
            checkedReset: false,
            extra: [<a key="confirm">确认</a>],
          },
        }}
        expandable={{ expandedRowRender }}
      />
      <Xunliancharts></Xunliancharts>
    </>
  );
};

export default Xunlianqingkuan;
