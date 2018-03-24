import React from 'react'
import ReactDOM from 'react-dom'
import { Spring, animated as a, template as t } from 'react-spring'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
  container: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'background' },
  shape: { width: 300, height: 300, willChange: 'transform' }
}

//TODO: Currently this is the demo code from the react-spring demo and needs to be modified for the use and need of 
// making a dynamic button with navigation sub-buttons, this code may entirely be changed, removed or just slightly modified

const Content = ({ toggle, backgroundColor, fill, rotate, scale, shape }) => (
  <a.div style={{ ...styles.container, backgroundColor }}>
    <a.svg style={{ ...styles.shape, fill, transform: t`rotate3d(0,1,0,${rotate}) scale(${scale})` }} version="1.1" viewBox="0 0 400 400">
      <g style={{ cursor: 'pointer' }} fillRule="evenodd" onClick={toggle}>
        <a.path id="path-1" d={shape} />
      </g>
    </a.svg>
  </a.div>
)

class Contacts extends React.Component {
  state = { toggle: true }
  toggle = () => this.setState(state => ({ toggle: !state.toggle }))
  render() {
    const toggle = this.state.toggle
    return (
      <Spring
        native
        from={{ fill: 'black' }}
        to={{
          fill: toggle ? '#247BA0' : '#70C1B3',
          backgroundColor: toggle ? '#B2DBBF' : '#F3FFBD',
          rotate: toggle ? '0deg' : '180deg',
          scale: toggle ? 0.6 : 1.5,
          shape: toggle ? TRIANGLE : RECTANGLE
        }}
        toggle={this.toggle}
        children={Content}
      />
    )
  }
}

export default Contacts
