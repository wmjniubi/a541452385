import { Modal, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Pingguxijie from './pingguxijie';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '数据集名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '分词器',
    dataIndex: '任务描述',
    key: 'age',
  },
  {
    title: '词表',
    dataIndex: '资源规格',
    key: 'address',
  },
  {
    title: '参数',
    dataIndex: 'zongyuliaodaxiao',
    key: 'Address1',
  },
  {
    title: '代码',
    dataIndex: '已完成语料大小',
    key: 'Address2',
  },
  {
    title: '分数',
    dataIndex: 'fenshu',
    key: 'fenshu',
    render: (_, record) => {
      console.log('record', record);

      return (
        <>
          <>{record?.fenshu}</>
          <br />
          <Pingguxijie></Pingguxijie>
        </>
      );
    },
  },
];

const data: any[] = [
  {
    key: '1',
    name: '12342',
    fenshu: 0.367,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Pingguzhibiao: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a
        style={{
          color: '#1677ff',
        }}
        onClick={showModal}
      >
        评估指标
      </a>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
      >
        <Table columns={columns} dataSource={data} />
      </Modal>
    </>
  );
};

export default Pingguzhibiao;
