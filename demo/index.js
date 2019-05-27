import { html, render } from 'lit-html';

import '../src/tm-radial-tree.js';
import '../src/tm-hand-drawn-outline.js';

let title = 'TESTING';
render(html`
    <style>
    * {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }

    body {
      background-color: #ededed;
    }

    tm-radial-tree {
      width: 98vw;
      height: 98vh;
    }

    .relative {
      display:inline-block;
      position: relative;
      width: 80vw;
      height: 50vh;
    }

    .stretch {
      display:inline-block;
      position: relative;
      width: 150px;
    }
    span {
      display: inline-block;
      width: 100px;
      height: 50px;
      box-sizing: border-box;
      border: solid green 1px;
    }
  </style>
  
  <h3>Testing Hand drawn outline divs</h3>
  <tm-hand-drawn-outline class="stretch">
    <span>sdfsfds</span><span>${title}</span><span>sdfsfds</span><span>sdfsfds</span>
  </tm-hand-drawn-outline>
  <tm-hand-drawn-outline class="relative">
    <span>sdfsfds</span><span>sdfsfds</span><span>sdfsfds</span><span>sdfsfds</span>
  </tm-hand-drawn-outline>

`, document.querySelector('body'));
