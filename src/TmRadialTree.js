import {html, LitElement} from 'lit-element';

import '@polymer/paper-input/paper-input';
import * as d3 from 'd3';

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

    this.addEventListener('resize', () => {
      console.log('-------- resize event');
      //this._resizeSVG();
    }, true);
  }

  firstUpdated(changedProperties) {
    this._generateSVG();
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          //border: solid red 1px;
          box-sizing: border-box;
          padding: 25px;
        }
        paper-input {
          width: 300px;
        }
        #a {
          width: 100%;
          height: 100%;
          display: inline-block;
          //border: solid green 1px;
        }
        svg {
          width: 100%;
          height: 100%;
          border: solid blue 1px;
        }
      </style>
      <h2>${this.heading}</h2>
      <div id="a">
          
      </div>
<!--      <paper-input value="one"></paper-input>-->
<!--      <paper-input value="two"></paper-input>-->
<!--      <div>-->
<!--        <slot></slot>-->
<!--      </div>-->
    `;
  }

  _resizeSVG() {
    d3.select(this.shadowRoot).select('#a').select('svg').delete();
    this._generateSVG();
  }

  _generateSVG() {
    const div = d3.select(this.shadowRoot).select('#a');
    const size = div.node().getBoundingClientRect();
    const width = 1000;//size.width;
    const height = 1000;//size.height;
    console.log('Size', width, height);
    const svg = div.append('svg')
      //.attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width} ${height}`);
    svg.append('g').append('circle')
      .attr('cx',width/2).attr('cy', height/2).attr('r', width/2)
      .attr('vector-effect', "non-scaling-stroke")
      .attr('fill', 'orange').attr('stroke-width', 2).attr('stroke', 'blue');
  }
}
