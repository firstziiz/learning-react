# LEARNING REACT By KS!
> I create a todo-list of react for becomimg a react developer :) I think >that it so good for newbie developer for start to learn react.
> 
> have funn !

---

## Todolist
  * [X] ~~**Start Using React to Build Web Applications**~~
  * [ ] Getting Started with Redux
  * [ ] Building React Applications with Idiomatic Redux
  * [ ] Learn ES6 (ECMAScript 2015)
  * [ ] How to Write an Open Source JavaScript Library
  * [ ] How to Contribute to an Open Source Project on GitHub
  * [ ] Understand the Basics of HTTP
  * [ ] How to Use npm Scripts as Your Build Tool
  * [ ] Record Badass Screencasts for egghead.io
  
---

### [1] Start Using React to Build Web Applications
**Introduction** of React
  * npm i create-react-app -g
  * create-react-app [name] -> for a create react starter app
  * file structure
    * [public] for static file
    * [src] for javascript
  * `import React from 'react'` for use react in your app.
  * `class App extends React.Component {...}` create React Component
  * warpping jsx !
    ```
    render(){
      return (_jsx_);
    }
    ```
  - `export default App` for make mudule file
  - `const App = () => ...jsx...` for make Stateless Components

**Props** ! Same a attribute.
  - `{this.props._prop_name_}` for access a props;
  - use Prop Types
  ```
  App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired,
    whatever: React.PropTypes._propTypes_,
  }
  ```
  - use defaultProps
  ```
  App.defaultProps = {
    txt : "this is the default txt",
    whatever: _somethings_,
  }
  ```

**State** ! Collection of value statement .
  - how set state !
    ```
    constructor(){
      super();
      this.state = {
        txt : 'this is the state text',
        cat : 0
      }
    }
    ```
  - how use !
    `{this.state._statename_}`
  - how set state !
    `this.setState({txt: _e.target.value_});`
     and 
    `onChange={this.update.bind(this)} for bind that element!`

**Use Another Component !**
  - if use create new Component
    `const Widget = (props) => <input type="text" onChange={props.update} />`
  - and use new Component
    `<Widget update={this.update.bind(this)}>`  
  - in that case. you can push your function on the props for a new component
  - {props.children} is a body of your component
    ex. `<Box>A<Box>` -> `const Box = (props) => <div>{props.children}<div>` so that return `A`
  - Custom Props Validate

**Normalize Event**
  * onKeyPress
  * onCopy
  * onPaste
  * onFucus
  * onBlur
  * onDoubleClick
  * onTouchStart
  * onTouchMove
  * onTouchEnd

**React** Refs
  - In normally. this is how to use refs.
    `ref="_somthings_"`
    `this.refs._somthings_.value` 
  - In node.
    `ref={ node => this._somthings_ = node}`
    `this._somthings_.value`
  - In Component
    `ref={ component => this._somthings_ = component}`
    `ReactDOM.findDOMNode(_somthings_).value`

- Component Lifecycle Method
  - `componentWillMount()` -> if component will mount
  - `render()` -> if state has change
  - `componentDidMount()` -> if component has mount
  - `componentWillUnMount()` -> if component will unmount

- Update when new props are received !
  - create increasing state.
  - use update()
  - componentWillReceiveProps
    ```
    componentWillReceiveProps(nextProps){
      ...
    }
    ```
  - shouldComponentUpdate 
    ```
    shouldComponentUpdate(nextProps, nextState){
      return ...
    }
    ```
  
**Create React Component from Arras of Data**
  - `this.state = { items: [] }`
  - 
  ```
  fetch('_url_')
    .then( response => response.json())
    .then(({result: items}) => this.setState({items}))
  ```
  - render with map function for foreach every item.
  - use `key` for every component becuase component should unique

Compose React Component **Higher Order Component**
  - **HOC** is ..
    ```
    const HOC = (InnerComponent) => class extends React.Component {
      return(){
        return (
          <InnerComponent>
        )
      }
    }
    ```
  - For Higher Performance 
  - Learning By use-case is a best way.

**JSX live Compiler**
  - defaultValue for textarea
  ```
  this.setState({
    window.Babel.transform(_code_, { presets: ['es2015', 'react']}).code;
  })
  ```
  - **in chapter 16 in this course**

**React.Children**
  - Children can use `React.Children.map(this.props.children, child => child)`
  - and can use `React.Children.toArray(this.props.children)`

**Use** `react-create-app` for kickstart your project.
  - it make you easy create & test a simple app

  