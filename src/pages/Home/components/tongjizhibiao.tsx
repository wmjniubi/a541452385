import { InfoCircleOutlined } from '@ant-design/icons';
import { ProCard, Statistic } from '@ant-design/pro-components';
import { Col, Row, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';

const Tongjizhibiao: React.FC = () => {
  const [targetList, setTargetList] = useState<any>([]);
  useEffect(() => {
    setTargetList([
      {
        title: '卡数',
        total: '89',
        sameWeekRatio: 7.6,
        dayOnMonthRatio: '1.50',
      },
      {
        title: '已使用卡数',
        total: '89',
        sameWeekRatio: 7.6,
        dayOnMonthRatio: '1.50',
      },
      {
        title: '累计训练任务',
        total: '89',
        sameWeekRatio: 7.6,
        dayOnMonthRatio: '1.50',
      },
      {
        title: '训练中任务',
        total: '89',
        sameWeekRatio: 7.6,
        dayOnMonthRatio: '1.50',
      },
      {
        title: '发布模型版本数',
        total: '89',
        sameWeekRatio: 7.6,
        dayOnMonthRatio: '1.50',
      },
      {
        title: '在线推理QPS',
        total: '89',
        sameWeekRatio: 7.6,
        dayOnMonthRatio: '1.50',
      },
    ]);
  }, []);
  return (
    <>
      <Row gutter={16}>
        {targetList.map((item) => {
          return (
            <Col span={4} key={item.title}>
              <ProCard
                title={item.title}
                extra={
                  <Tooltip title="prompt text">
                    {/* <span>Tooltip will show on mouse enter.</span> */}
                    <InfoCircleOutlined />
                  </Tooltip>
                }
                bordered
              >
                <h1>{item.totel}</h1>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <Statistic
                    title="同周比"
                    value={item.sameWeekRatio + '%'}
                    trend="up"
                    layout="inline"
                  ></Statistic>
                  <Statistic title="日环比" value="7.60%" trend="down" />
                </div>
              </ProCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Tongjizhibiao;
