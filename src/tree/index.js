import './index.css';
import React, { useCallback, useState } from 'react';

export default function Tree(props) {
  const [inputState, setInputState] = useState('');
  const [data, setData] = useState(props);

  const addNode = (input) => {
    let newNode = { name: input, children: [] };
    setData((prevState) => {
      return { ...prevState, children: [...prevState.children, newNode] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.addNodeToParent(inputState);
    setInputState('');
  };

  const deleteNodeFromParent = useCallback((name) => {
    setData((prevState) => {
      let newChildren = prevState.children.filter(
        (child) => child.name !== name
      );
      return { ...prevState, children: newChildren };
    });
  }, []);

  return (
    <>
      {data.name}
      <button onClick={() => data.deleteNodeFromParent(data.name)}>X</button>
      <ul>
        <li>
          {data.children.length > 0 &&
            data.children.map(({ name, children }, index) => (
              <Tree
                key={name}
                name={name}
                children={children}
                index={data.children.length - 1 === index ? true : null}
                addNodeToParent={addNode}
                deleteNodeFromParent={deleteNodeFromParent}
              />
            ))}
        </li>
      </ul>
      {props.index && (
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            className="inputField"
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
          />
        </form>
      )}
    </>
  );
}
