import React from 'react'

const CommonButton = ({name,onClick,className}) => {

  return (
      <button
        onClick={onClick}
            className={`w-full bg-blue-600
               hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300 ${className}`}
          >
          {name}
          </button>
  )
}

export default CommonButton