console.log('App.js is running');

const app = {
  title: 'WhatNow? - YetAnotherToDoApp',
  subtitle: 'Cause it\'s fun to learn',
  options: [
    'Dolce',
    'Salatto'
  ]
}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  render();
}
const onRemoveAll = (e) => {
  app.options = [];
  render();
}
const onWhatNow = (e) => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  console.log(option)
}

const appRoot = document.getElementById('app');
const render = () => {
  const template = 
  <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p>}  
      <p>{ app.options.length > 0 ? 'Here are your options' : 'No options'}</p>      
      <button disabled={app.options.length === 0} onClick={onWhatNow}>What Now?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
      {
      app.options.map((option)=> {
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
  </div>;  
  ReactDOM.render(template, appRoot);
}
render();