import React from 'react';

const Shop = React.forwardRef((props, shopRef) => {
  return(
    <div className="shop"  ref={shopRef}>
      Shop
    </div>
  )
})

export default Shop;