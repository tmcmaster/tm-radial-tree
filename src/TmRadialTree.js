import {html, css, LitElement} from 'lit-element';

import '@polymer/paper-input/paper-input';

export default class TmRadialTree extends LitElement {

  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      heading: {type: String}
    }
  }

  constructor() {
    super();
    this.heading = 'Hello world!';
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          padding: 25px;
        }
        paper-input {
          width: 300px;
        }
      </style>
      <h2>${this.heading}</h2>
      <paper-input value="one"></paper-input>
      <paper-input value="two"></paper-input>
      <div>
        <slot></slot>
      </div>
    `;
  }
}
