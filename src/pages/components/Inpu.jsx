import React from 'react'

const Inpu = ({placeholder}) => {
  return (
    <div>
        <input
        type="text"
        placeholder={placeholder}
        className="px-6 py-2 rounded-xl "
      />
    </div>
  )
}

export default Inpu