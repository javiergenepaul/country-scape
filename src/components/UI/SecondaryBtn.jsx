import React from 'react'

function SecondaryBtn({
  style,
  btnText,
  btnIcon
}) {

  let icon;
  if (btnIcon) {
    icon = <span>{btnIcon}</span>;
  } else {
    icon = "";
  }
  return (
    <button className={`${style} py-3 px-4 text-secondary-1 text-button bg-primary-4 rounded hover:outline-white hover:text-primary-2 active:bg-primary-3`}>
      <span>{btnText}</span>
      {icon}
    </button>
  )
}

export default SecondaryBtn