import React from 'react'

const Helmet = (props) => {
    document.title='iShop - '+props.title;
    return (
    <div>
        {props.children}
    </div>
  )
}

export default Helmet