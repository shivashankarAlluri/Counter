import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log('Increment')
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been Clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="paragraph">Click the Button to increase the count!</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
