import React from "react"

const Inpu = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="sm:px-6 px-2 py-2 rounded-xl "
      />
    </div>
  )
}

export default Inpu
