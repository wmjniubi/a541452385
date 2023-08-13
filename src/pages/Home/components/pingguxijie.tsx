import { Col, Modal, Row } from 'antd';
import ReactECharts from 'echarts-for-react';
import React, { useState } from 'react';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const option = {
  title: {
    // text: '堆叠区域图',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告'],
  },
  toolbox: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      // boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五1', '周六', '周日'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '邮件营销',
      type: 'bar',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '联盟广告',
      type: 'bar',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '视频广告',
      type: 'bar',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
  ],
};

const Pingguxijie: React.FC = () => {
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
        查看评估细节
      </a>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <ReactECharts option={option} style={{ width: 752 }} />

        <h1>Comparison of understanding</h1>
        <Row>
          <Col span={6}>
            <ReactECharts option={option} />
          </Col>
          <Col span={6}><ReactECharts option={option} /></Col>
          <Col span={6}><ReactECharts option={option} /></Col>
          <Col span={6}><ReactECharts option={option} /></Col>
        </Row>
      </Modal>
    </>
  );
};

export default Pingguxijie;
