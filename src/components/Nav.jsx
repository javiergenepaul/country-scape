import React from 'react'
import { countryscape_logo, countryscape_name } from '../assets'
import SecondaryBtn from './UI/SecondaryBtn'
import { Icon } from '@iconify/react';

function Nav() {
	return (
		<div className="flex justify-between w-full px-4">
			<div className="flex items-center gap-x-2">
				<img src={countryscape_logo} className="h-[16px]" alt="countryscape_logo.png" />
				<img src={countryscape_name} className="h-[16px]" alt="countryscape_name.png" />
			</div>
			<div className="flex items-center gap-x-8">
				<ul className='sm:flex gap-x-8 text-body-normal hidden'>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Home</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Room</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>About</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Explore</li>
					<li className='cursor-pointer hover:underline hover:underline-offset-4'>Blog</li>
				</ul>
				<SecondaryBtn style={'sm:block hidden'} btnText={'Book Now'} btnIcon=""/>
				<button className='sm:hidden block'>
					<Icon Icon icon="charm:menu-hamburger" className='hover:text-secondary-2'/>
				</button>
			</div>
		</div>
	)
}

export default Nav