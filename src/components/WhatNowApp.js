import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

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

export default class WhatNowApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid option.'
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'I\'m already considering that option...'
    } 
    this.setState((prevState)=> ({ options: prevState.options.concat(option) }))
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option )}))
  };
  handleDeleteOptions = () => {
    // short notation for returning an object
    this.setState(() => ({ options: [] }))
  };
  whatNow = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber]
    this.setState(() => ({ selectedOption: option }))
  };
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
  };
  componentDidUpdate(prevProps, prevState) {
    // fires on component state change (?)
    // if the length is the same, there's no need to resave  (!)
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  };
  render() {
    const title = "WhatNow?"; 
    const supercomputerName = supercomputers[random].name;
    const supercomputerUrl = supercomputers[random].url;

    return (
      <div>
        <Header
          title={title}
          supercomputerName={supercomputerName}
          supercomputerUrl={supercomputerUrl}
        />
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          whatNow={this.whatNow}
        />
        <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption 
            handleAddOption={this.handleAddOption}
          />
          </div>
        </div>
        <div className="footer">
          <p>built with ❤ in Berlin</p>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  };
}