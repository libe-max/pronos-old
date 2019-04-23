import React, { Component } from 'react'
import InterTitle from 'libe-components/lib/text-levels/InterTitle'
import Hat from 'libe-components/lib/text-levels/Hat'

export default class Pronos extends Component {
  constructor () {
    super()
    this.c = 'pronos'
  }

  componentDidMount () {
    const { format, title, dev_data_url, prod_data_url } = this.props
    const url = process.env.NODE_ENV === 'production'
      ? `${prod_data_url}/${format}/${title}/load`
      : `${dev_data_url}/${format}/${title}/load`
    window.fetch(url)
  }

  render () {
    const { c } = this
    
    /* Assign classes */
    const classes = [c]

    /* DOM */
    return <div className={classes.join(' ')}>
      <InterTitle>Mondial 2019 :<br />Qui sera champion du monde ?</InterTitle>
      <Hat>Lorem ipsum dolor sit amet consectutor napam</Hat>
    </div>
  }
}
