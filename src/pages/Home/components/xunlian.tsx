import { Modal, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '任务名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '任务描述',
    dataIndex: '任务描述',
    key: 'age',
  },
  {
    title: '资源规格',
    dataIndex: '资源规格',
    key: 'address',
  },
  {
    title: '总语料大小',
    dataIndex: 'zongyuliaodaxiao',
    key: 'Address1',
  },
  {
    title: '已完成语料大小',
    dataIndex: '已完成语料大小',
    key: 'Address2',
  },
  {
    title: '已训练时长',
    dataIndex: '已训练时长',
    key: 'Address233',
  },
  {
    title: '预计剩余训练时长',
    dataIndex: '预计剩余训练时长',
    key: 'Address23333',
  },
  {
    title: '创建信息',
    dataIndex: '创建信息',
    key: 'Address233332',
  },
];

const data: any[] = [
  {
    key: '1',
    name: 'John Brown',
    zongyuliaodaxiao: 1000000,
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

const Xunlian: React.FC = () => {
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
        训练任务
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

export default Xunlian;
