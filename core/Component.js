export class Component extends HTMLElement {
  constructor(){
    super();
    this.props = {};
    this.state = {};
  }
  setState(callback){
    this.state = callback(this.state);
    this.innerHTML = this.render();
  }
  connectedCallback(){
    this.innerHTML = this.render();
    this.componentDidMount();
  }

  dasconnectedCallback(){
    this.componentWillUnmount();
  }

  attributeChangedCallback(name, oldValue, newValue){
    this.componentWillUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((name)=> {
      this.props[name] = this.getAttribute(name);
    })
  }


  render(){}
  componentDidMount(){}
  componentWillUnmount(){}
  componentWillUpdate(){}
}