import React from 'react';

const Home = React.forwardRef((props, homeRef) => {
  return(
    <div className="home"  ref={homeRef}>
      Home
    </div>
  )
})

export default Home;