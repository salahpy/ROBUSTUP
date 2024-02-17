import React from 'react'

const Form = ({placeholder}) => {
  return (
    <div>
        <div className="w-[400px]">
            <input
              type="text"
              placeholder={placeholder}
              className="px-6 py-2 rounded-xl border-[#c0c0c0] border-[1px] w-full my-8"
            />
          </div>
    </div>
  )
}

export default Form