import './index.css';

export default function Tree() {
  return (
    <div className="tree">
      <ul>
        <li>
          1.root
          <ul>
            <li>1.1 ant</li>
            <li>
              1.2 bear
              <ul>
                <li>1.2.1 cat</li>
                <li>
                  1.2.2 dog
                  <ul>
                    <li>1.2.2.1 elephant</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>1.3 frog</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
