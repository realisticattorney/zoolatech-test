import './index.css';
import React, { useCallback, useState } from 'react';
import { useTreeContext } from '../App.js';

// --- Final Thoughts ---
//I didn't make it on time to finish the last part, persistence. Only the lvl 0 objects are fetched and writen to the server. The rest is not.
//I never use recursion for components, and I avoid recursion in general. So this was a little bit of a challenge.
//But if I had more control over the code/stack, I'd have used graphql to query and mutate the data. Replacing the whole tree for each little change it's so bad that React exists to avoid it. And because I couldn't come up with anything better, I was about to write a crappy version of the diffing algorithm to replace just the part that changed.

export default function Tree(props) {
  const [inputState, setInputState] = useState(''); //input text field state
  const [data, setData] = useState(props);

  const addNode = (input) => {
    //add sibling node from parent
    let newNode = { name: input, children: [] };
    setData((prevState) => {
      return { ...prevState, children: [...prevState.children, newNode] };
    });
  };

  const handleSubmit = async (e) => {
    //add sibling node from parent. sets local input state to empty string
    e.preventDefault();
    await data.addNodeToParent(inputState);
    setInputState('');
  };

  const deleteNodeFromParent = useCallback((name) => {
    //delete node from parent based on name, which should be unique
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
                key={name} //key should be unique and invariable. I didn't block for repeated entries on the same lvl nor use a dependency to make them really unique
                name={name}
                id={data.id + '.' + (index + 1)} //e.g. 1.2.1.1 //was not used
                children={children}
                index={data.children.length - 1 === index ? true : null}
                addNodeToParent={addNode} //addNodeToParent is a function that is passed down to the children
                deleteNodeFromParent={deleteNodeFromParent} //same as above
              />
            ))}
        </li>
      </ul>
      {data.index && (
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
