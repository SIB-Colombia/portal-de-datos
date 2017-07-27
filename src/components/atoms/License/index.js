import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'components'
import _ from 'lodash'

export default class License extends Component {
  static propTypes = {
    id: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.licenses = [
      { id: 'by', img: '/licenses/by.png', to: 'https://creativecommons.org/licenses/by/4.0' },
      { id: 'by-sa', img: '/licenses/by-sa.png', to: 'https://creativecommons.org/licenses/by-sa/4.0' },
      { id: 'by-nd', img: '/licenses/by-nd.png', to: 'https://creativecommons.org/licenses/by-nd/4.0' },
      { id: 'by-nc', img: '/licenses/by-nc/.png', to: 'https://creativecommons.org/licenses/by-nc/4.0' },
      { id: 'by-nc-sa', img: '/licenses/by-nc-sa.png', to: 'https://creativecommons.org/licenses/by-nc-sa/4.0' },
      { id: 'by-nc-nd', img: '/licenses/by-nc-nd.png', to: 'https://creativecommons.org/licenses/by-nc-nd/4.0' },
    ]
  }

  render() {
    const license = _.filter(this.licenses, { id: this.props.id })
    return (
      <a href={`${license[0].to}`} target="_blank" rel="noopener noreferrer">
        <img src={license[0].img} alt={license[0].id} />
      </a>
    )
  }
}
