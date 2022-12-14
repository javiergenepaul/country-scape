import React from 'react'

function PrimaryBtn({
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
    <button className={`${style} py-3 px-4 bg-primary-2 rounded text-primary-4 flex gap-2 items-center hover:bg-[#1D905E] active:bg-primary-1`}>
      <span>{btnText}</span>
      {icon}
    </button>
  )
}

export default PrimaryBtn