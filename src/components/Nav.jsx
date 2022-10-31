import React from 'react'
import { countryscape_logo, countryscape_name } from '../assets'

function Nav() {
	return (
		<div className="flex justify-between">
			<div className="flex items-center gap-x-2">
				<img src={countryscape_logo} alt="" />
				<img src={countryscape_name} alt="" />
			</div>
			<div className="flex items-center gap-x-8">
				<ul className='flex gap-x-8 text-body-normal'>
					<li>Home</li>
					<li>Room</li>
					<li>About</li>
					<li>Explore</li>
					<li>Blog</li>
				</ul>
				<button className='py-3 px-4 text-secondary-1 text-button bg-primary-4 rounded'>Book Now</button>
			</div>
		</div>
	)
}

export default Nav