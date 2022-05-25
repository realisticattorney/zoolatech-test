import './index.css';
let node = require('./data.json');

export default function Tree({ name, children, dotsCount }) {
  let data = name ? { name, children, dotsCount } : node; //if name is not null, then it's a child node, else it's the root node
  let dotsCountAcc = dotsCount || 0; //dotsCountAcc is the number of dots that have been added to the current node
  return (
    <div className={`${name ? '' : 'tree'}`}>
      <ul>
        <li>
          {name
            ? name
                .substring(0, 1)
                .concat('.'.repeat(dotsCount))
                .concat(name.substring(1))
            : node.name}
          {data.children.length > 0 &&
            data.children.map(({ name, children }) => (
              <Tree
                key={name}
                name={name}
                children={children}
                dotsCount={dotsCountAcc + 1}
              />
            ))}
        </li>
      </ul>
    </div>
  );
}
