import React from 'react'

function PrimaryBtn({
    style,
    btnText,
    btnIcon
}) {

  let icon;
  if (btnIcon) {
    console.log("has icon");
    icon = <span>{btnIcon}</span>;
  } else {
    icon = "";
  }
  return (
    <button className={`${style} py-3 px-4 bg-primary-2 rounded text-primary-4 flex gap-2 items-center`}>
        <span>{btnText}</span>
        {icon}
    </button>
  )
}

export default PrimaryBtn