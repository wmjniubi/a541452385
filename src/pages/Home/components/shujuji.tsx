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
    title: '数据量',
    dataIndex: 'zongyuliaodaxiao',
    key: 'Address1',
  },
  {
    title: '标签',
    dataIndex: '已完成语料大小',
    key: 'Address2',
  },
  {
    title: '权重',
    dataIndex: '已训练时长',
    key: 'Address233',
  }
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

const Shujuji: React.FC = () => {
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
        数据集
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

export default Shujuji;
