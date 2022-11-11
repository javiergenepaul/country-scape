import React from 'react'

function PrimaryBtn({
    style,
    btnText,
    btnIcon
}) {
  return (
    <button className={`${style} py-3 px-4 bg-primary-2 rounded text-primary-4 flex gap-2 items-center`}>
        <span>{btnText}</span>
        <span>{btnIcon}</span>
    </button>
  )
}

export default PrimaryBtn