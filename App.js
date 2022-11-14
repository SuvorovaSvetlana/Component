import { Component } from "./core/Component.js";

export class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 1,
    }
  }

  increaseCount(){
    this.setState((state) =>{
      return {
        count: state.count +1
      }
    })
  }

  decreaseCount(){
    this.setState((state) => {
      return {
        count: state.count -1
      }
    })
  }

  onClick(evt){
    if(evt.target.closest('.plus')){
      this.increaseCount();
    }
    if(evt.target.closest('.minus')){
      this.decreaseCount();
    }
  }
  
  componentDidMount(){
    this.addEventListener('click', this.onClick)
  }
  
  componentWillUnmount(){
    this.removeEventListener('click', this.onClick)
  }

  render(){
    return `
    <button type="button" class="btn btn-info plus mt-3 mx-3">+</button>
    <span class="mt-3">${this.state.count}</span>
    <button type="button" class="btn btn-info minus mt-3">-</button>
    `
  }
}
customElements.define('my-app', App);