import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {apple: 0, banana: 0}

  onClickApple = () => {
    this.setState(prevState => ({apple: prevState.apple + 1}))
  }

  onClickBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {apple, banana} = this.state
    return (
      <div className="mainHead">
        <div className="card">
          <h1>
            Bob ate <span>{apple}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="fruits">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="btn" onClick={this.onClickApple} type="submit">
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button
                className="btn"
                onClick={this.onClickBanana}
                type="submit"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
