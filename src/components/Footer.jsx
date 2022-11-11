import React from "react";
import { countryscape_logo, countryscape_name,facebook, linkin, twitter,instagram } from "../assets";

function Footer() {
    return (
        <div className="flex gap-32 h-full">
            <div className="basis-3/5 flex flex-col">
                <div className="flex items-center gap-x-2">
                    <img src={countryscape_logo} alt="" />
                    <img src={countryscape_name} alt="" />
                </div>
                <p className="mt-6 text-body-small text-[#D8DAD9] line-clamp-3	w-5/6">
                    We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam
					We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam
					We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam
                </p>
                <ul className="mt-16 flex w-full justify-between text-[#C5CCC9]">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privary policy</li>
                    <li>Sitemap</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            <div className="basis-2/5 flex flex-col">
				<h3 className="text-body-large text-primary-4">Newsletter</h3>
				<p className="mt-6 text-[#CECECE] text-body-small">Be the first one to know  about discounts, offers and events. Unsubscribe whenever you like.</p>
				<ul className="mt-6 flex gap-6 items-center place-content-end">
					<li><img src={facebook} alt="" /></li>
					<li><img src={linkin} alt="" /></li>
					<li><img src={twitter} alt="" /></li>
					<li><img src={instagram} alt="" /></li>
				</ul>
			</div>
        </div>
    );
}

export default Footer;
