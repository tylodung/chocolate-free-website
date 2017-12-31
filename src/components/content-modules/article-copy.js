import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class ArticleCopy extends Component {
  
  render () {
    <section className='content-module'>
      {this.props.data.copy}
    </section>
  }
}

ArticleCopy.propTypes = {
  data: PropTypes.object.isRequired
}
export default ArticleCopy
