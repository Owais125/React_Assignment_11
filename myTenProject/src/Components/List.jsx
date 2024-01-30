import React from 'react'

const List = (props) => {
  return (
    <div>
      <ul className='list-group '>
        {props.data}
      </ul>
    </div>
  )
}

export { List }