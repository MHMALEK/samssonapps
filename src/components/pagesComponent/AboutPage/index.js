import React from 'react';
import { connect } from 'react-redux'


const _AboutPage = (props) => {
    console.log(props)
    return <p>salam</p>
}


const mapStateToProps = (state, ownProps) => {
    console.log(state.Users.isOpen)
    return {
        isOpen: state.Users.isOpen
    }
}
  
  const mapDispatchToProps = {
    // ... normally is an object full of action creators
  }
  

  // We normally do both in one step, like this:

  const AboutPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(_AboutPage)


export default AboutPage;


