const model2 = {
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

export default model2