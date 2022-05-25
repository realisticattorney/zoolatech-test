import './index.css';
let node = require('./data.json');

export default function Tree({ name, children }) {
  let data = name ? { name, children } : node; //if name is not null, then it's a child node, else it's the root node
  return (
    <div className={`${name ? '' : 'tree'}`}>
      <ul>
        <li>
          {name ? name : node.name}
          {data.children.length > 0 &&
            data.children.map(({ name, children }) => (
              <Tree key={name} name={name} children={children} />
            ))}
        </li>
      </ul>
    </div>
  );
}
