import { DagreLayout } from '@antv/layout';
import { Edge, Graph, Shape } from '@antv/x6';
import { register } from '@antv/x6-react-shape';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useEffect } from 'react';
import Pingguzhibiao from './components/pingguzhibiao';
import Shujuji from './components/shujuji';
import Xunlian from './components/xunlian';
import { data } from './data';
import Xunlianqingkuan from './components/xunlianqingkuan';
import Ziyuangailan from './components/ziyuangailan';
import Tongjizhibiao from './components/tongjizhibiao';

const NodeTest = () => {
  return (
    <Card
      actions={[
        <Xunlian key={'1'}></Xunlian>,
        <Shujuji key={'2'}></Shujuji>,
        <Pingguzhibiao key={'3'}></Pingguzhibiao>,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
        }
        title="Card title1"
        description="This is the description"
      />
    </Card>
  );
};

const NodeComponent = (props: any) => {
  const { width = 0, height = 0 } = props.node.data || {};

  return (
    <div
      className="react-node"
      style={{
        width: `${width}px`,
        height: `${height}px`,

        border: '1px solid #5F95FF',
      }}
    >
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#5F95FF',
        }}
      >
        第一阶段
      </h1>
    </div>
  );
};

// 定义边
class TreeEdge extends Shape.Edge {
  isHidden() {
    const node = this.getTargetNode() as any;
    return !node || !node.isVisible();
  }
}

TreeEdge.config({
  zIndex: 1,
  attrs: {
    line: {
      stroke: '#A2B1C3',
      strokeWidth: 1,
      targetMarker: null,
    },
  },
});

const WebShell = () => {
  const registerFn = () => {
    register({
      shape: 'custom-react-node',
      component: NodeComponent,
    });

    register({
      shape: 'custom-react-node-test',
      component: NodeTest,
    });
  };

  const init = () => {
    // 定义节点

    Edge.registry.register('tree-edge', TreeEdge, true);

    // 初始化画布
    const graph = new Graph({
      container: document.getElementById('container')!,
      connecting: {
        connector: 'smooth',
      },
      translating: {
        restrict(view) {
          const cell = view?.cell;
          if (cell?.isNode()) {
            const parent = cell.getParent();
            if (parent) {
              return parent.getBBox();
            }
          }

          return null;
        },
      },
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta'],
      },
      // grid: true, // 可选，开启网格对齐
      panning: {
        enabled: true, // 开启拖动画布
      },
    });
    console.log('data', data);
    const dagreLayout = new DagreLayout({
      type: 'dagre',
      rankdir: 'LR',
      align: 'DR',
      // 水平
      ranksep: 50,
      //  垂直
      nodesep: 50,
      nodeSize: [300, 145],
    });
    const node2 = {
      shape: 'custom-react-node-test',
      width: 300,
      height: 145,
      label: 'Node 2',
      id: '253495710934',
    };
    const model = dagreLayout.layout({
      nodes: [...data.nodes, node2],
      edges: [...data.edges],
      hiddenNodes: [node2],
    });
    console.log('model', graph.getCellById('253495710934'));

    graph.fromJSON(model);
    graph.zoomToFit({
      padding: 10, // 可选参数，设置图形与画布边界的间距，默认为 10
      maxScale: 1, // 可选参数，设置最大缩放级别，默认为 1.5
      minScale: 0.5, // 可选参数，设置最小缩放级别，默认为 0.2
    });
  };

  useEffect(() => {
    //注册节点
    registerFn();
    // 初始化
    init();
  }, []);

  return (
    <>
      <h1>模型图谱</h1>
      <div
        id="container"
        style={{
          width: '100%',
          height: '800px',
          border: '1px solid red',
        }}
      ></div>
      <h1>训练情况</h1>
      <Xunlianqingkuan></Xunlianqingkuan>
      <h1>统计指标</h1>
      <Tongjizhibiao></Tongjizhibiao>
      <h1>资源概览</h1>
      <Ziyuangailan/>
    </>
  );
};

export default WebShell;
