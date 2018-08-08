console.log('App.js is running');

// app javascript object (obviamente)
const app = {
  title: 'WhatNow? - YetAnotherToDoApp',
  subtitle: 'Cause it\'s fun to learn',
  options: [
    'Dolce',
    'Salatto'
  ]
}
// user javascript object (obvio)
const user = {
  age: 19,
  name: 'Christian Kopac',
  location: 'Ner'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

// arrow function - shorthand syntax
//const getFirstName = (fullName) => fullName.split(' ')[0];

// arrow function - normal syntax
const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}
const minusOne = () => {
  count--;
  renderCounterApp();
}
const reset = () => {
  count=0;
  renderCounterApp();
}

const appRoot = document.getElementById('app');


// template jsx object
const renderCounterApp = () => {
  const template = 
  <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p>}  
      <p>{ app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <h2>{ user.name ? user.name : 'Anon'}</h2> 
      <h3>Name: { user.name ? getFirstName(user.name) : 'No Name'}</h3>
      {( user.age && user.age >= 18 ) && <p>Age: {user.age}</p> }
      {getLocation(user.location)}
      <div>
        <h4>Count: {count}</h4>
        <button onClick={addOne} className="button">+1</button>
        <button onClick={minusOne} className="button">-1</button>
        <button onClick={reset} className="button">reset</button>
        </div>
  </div>;
  
  ReactDOM.render(template, appRoot);
};

renderCounterApp();