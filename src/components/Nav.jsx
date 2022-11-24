import React from 'react'
import { countryscape_logo, countryscape_name } from '../assets'
import SecondaryBtn from './UI/SecondaryBtn'

function Nav() {
	return (
		<div className="flex justify-between">
			<div className="flex items-center gap-x-2">
				<img src={countryscape_logo} alt="" />
				<img src={countryscape_name} alt="" />
			</div>
			<div className="flex items-center gap-x-8">
				<ul className='flex gap-x-8 text-body-normal'>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Home</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Room</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>About</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Explore</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Blog</li>
				</ul>
				<SecondaryBtn btnText={'Book Now'} btnIcon=""/>
				{/* <button className='secondary-btn'>Book Now</button> */}
			</div>
		</div>
	)
}

export default Nav