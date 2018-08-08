let appData = {
  title: 'Visibility Toggle',
  subtitle: 'This message is hidden',
}  

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState)=>{
      visibility = !prevState.visibility;
    })
  }
  render () {
    <div>
      <h1>{appData.title}</h1>
      <button onClick={handleToggleVisibility}>
        { !this.state.visibility ? 'Show Details' : 'Hide Details' }
      </button>
      <br/>
      <br/>
      <em>{ this.state.visibility ? appData.subtitle : '' }</em>
    </div>
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))