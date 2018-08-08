import React from 'react';
import ReactDOM from 'react-dom';
import './utils.js'

const supercomputers = [
  { name: 'HAL 9000', url: 'https://en.wikipedia.org/wiki/HAL_9000' },
  { name: 'Vulcan', url: 'https://computation.llnl.gov/computers/vulcan' },
  { name: 'JUQUEEN', url: 'https://en.wikipedia.org/wiki/JUGENE' },
  { name: 'Stampede', url: 'https://en.wikipedia.org/wiki/Texas_Advanced_Computing_Center#Supercomputer_Clusters' },
  { name: 'Shaheen II', url: 'https://en.wikipedia.org/wiki/Shaheen_%28supercomputer%29'},
  { name: 'Mira', url: 'https://en.wikipedia.org/wiki/IBM_Mira' },
  { name: 'Tianhe-2', url: 'https://simple.wikipedia.org/wiki/Tianhe-2' },
  { name: 'Titan', url: 'https://en.wikipedia.org/wiki/Titan_%28supercomputer%29'},
  { name: 'Piz Daint', url: 'https://en.wikipedia.org/wiki/Swiss_National_Supercomputing_Centre' },
  { name: 'Sequoia', url: 'https://en.wikipedia.org/wiki/IBM_Sequoia' },
  { name: 'K Computer', url: 'https://en.wikipedia.org/wiki/K_computer' },
  { name: 'Cori', url: 'https://en.wikipedia.org/wiki/Cray_XC40' },
  { name: 'M5', url: 'https://en.wikipedia.org/wiki/The_Ultimate_Computer'},
  { name: 'WOPR', url: 'https://en.wikipedia.org/wiki/WarGames'},
  { name: 'Skynet', url: 'https://en.wikipedia.org/wiki/Skynet_(Terminator)' },
]
const random = Math.floor(Math.random() * supercomputers.length);

class WhatNowApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.whatNow = this.whatNow.bind(this)
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    try {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if (options) {
      this.setState(() => ({ options }))    
    }
  } catch(e) {
    // do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // fires on component state change (?)
    // if the length is the same, there's no need to resave  (!)
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }
  handleDeleteOptions() {
    // short notation for returning an object
    this.setState(()=> ({ options: [] }))
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState)=> ({ options: prevState.options.filter((option) => optionToRemove !== option )}))
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid option.'
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'I\'m already considering that option...'
    } 
    this.setState((prevState)=> ({ 
      options: prevState.options.concat(option)
    }))
  }
  whatNow() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber]
  }
  render() {
    const title = "WhatNow? - YetAnotherToDoApp";
    const supercomputerName = supercomputers[random].name;
    const supercomputerUrl = supercomputers[random].url;

    return (
      <div>
        <Header
          title={title}
          supercomputerName={supercomputerName}
          supercomputerUrl={supercomputerUrl}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          whatNow={this.whatNow}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Let <a href={props.supercomputerUrl} target="_blank">{props.supercomputerName}</a> decide...</h2>
      </div>
  )

}

Header.defaultProps = {
  title: 'WhatNow?',
  subtitle: 'YATDA'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.whatNow}
        disabled={!props.hasOptions}
      >
      What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    { props.options.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption} 
        />)
      )
    }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
    {props.optionText}
    <button onClick={(e)=>{
      props.handleDeleteOption(props.optionText)
    }}
    >
    del
    </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)

    this.setState(()=>({ error }))

    if(!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      </div>
    )
  }
}

ReactDOM.render(<WhatNowApp />, document.getElementById('app'))