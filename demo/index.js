import { html, render } from 'lit-html';
import '../src/tm-radial-tree.js';

const title = 'test';
render(html`
  <tm-radial-tree .heading=${title}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
    galley of type and scrambled it to make a type specimen book.
  </tm-radial-tree>
`, document.querySelector('#demo'));
