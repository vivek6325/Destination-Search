// Write your code here

import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-img"
            alt="search icon"
          />
        </div>

        <ul className="card-items">
          {filteredResults.map(each => (
            <DestinationItem key={each.id} destinationDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
