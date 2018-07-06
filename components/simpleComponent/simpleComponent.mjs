import getStyles from './styles.mjs';
import getTemplate from './templates.mjs';
import {attrChangedCB, getAttrNames, setUpProps} from '../../include/mjs/propHandler.mjs';

const attrs = [
  'test1',
  'test2',
  {
    default: 'default value',
    name: 'test3'
  }
];

class SimpleComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = getStyles() + getTemplate();
  }

  attributeChangedCallback(...args) {
    console.log('attribute changing');
    attrChangedCB(this, args);
  }

  connectedCallback() {
    setUpProps(this, attrs);
  }
}

SimpleComponent.observedAttributes = getAttrNames(attrs);

customElements.define('simple-component', SimpleComponent);
