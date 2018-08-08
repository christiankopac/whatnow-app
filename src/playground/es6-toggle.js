let appData = {
  title: 'Visibility Toggle',
  subtitle: 'This message is hidden',
  visibility: false,
}
const toggleVisibility = () => {
  appData.visibility = !appData.visibility;
  render();
}

const render = () => {
  const app = (
    <div>
      <h1>{appData.title}</h1>
      <button onClick={toggleVisibility}>
        { !appData.visibility ? 'Show Details' : 'Hide Details' }
      </button>
      <br/>
      <br/>
      <em>{ appData.visibility ? appData.subtitle : '' }</em>
    </div>
  )
  ReactDOM.render(app, document.getElementById('app'))
}

render();