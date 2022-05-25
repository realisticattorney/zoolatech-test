import './index.css';
import React, { useEffect, useState } from 'react';
export default function Tree() {
  useEffect(() => {
    let el = document.querySelector('.fourFixedSpaces');
    let compStyles = window.getComputedStyle(el);
    console.log('.fourFixedSpaces', compStyles.width);

    let el2 = document.querySelector('.newMarkupSpace');
    let compStyles2 = window.getComputedStyle(el2);
    console.log('newMarkupSpace', compStyles2['padding-inline-start']);

    if (compStyles.width !== compStyles2['padding-inline-start']) {
      console.log('different');
    } else {
      console.log('same');
    }
  }, []);

  return (
    <>
      <div className="tree">
        <ul>
          <ul className="newMarkupSpace">
            <li></li>
          </ul>
        </ul>
        <p className="fourFixedSpaces">&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div className="tree">
        <p>root</p>
        <p className="fourFixedSpaces">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>
      </div>

      <div className="tree">
        <ul>
          <li>
            root
            <ul className="newMarkupSpace">
              <li>ant</li>
              <li>
                bear
                <ul>
                  <li>cat</li>
                  <li>
                    dog
                    <ul>
                      <li>elephant</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>frog</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
