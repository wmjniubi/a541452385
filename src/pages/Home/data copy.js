export const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
    {
      id: 'node1-1',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
    {
      id: 'node1-2',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
    {
      id: 'node2',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
    {
      id: 'node3',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex:3
    },
    {
      id: 'node4',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      zIndex: 2
    },
    {
      source: 'node1-1',
      target: 'node2',
      zIndex: 2
    },
    {
      source: 'node2',
      target: 'node3',
      zIndex: 2
    },
    {
      source: 'node2',
      target: 'node4',
      zIndex: 2
    },
  ],
}
 



export const model2 = {
  nodes: [
    {
      id: '1',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
    {
      id: '2',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
    {
      id: '3',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex:3
    },
    {
      id: '4',
      shape: 'custom-react-node-test',
      height: 250,
      zIndex: 3
    },
  ],
  edges: [
    {
      source: '1',
      target: '2',
      zIndex: 2
    },
    {
      source: '2',
      target: '3',
      zIndex: 2
    },
    {
      source: '2',
      target: '4',
      zIndex: 2
    },
  ],
}
 