

import {     
    Nav,
    Hero,
    Room,
    Discover,
    Testimonial,
    Blog,
    Footer 
} from './components'

import { hero_background_image } from './assets'

function App() {
    return (
        <div className="App font-inter relative">
          
            <div className='p-[14px] bg-primary-1 text-primary-4 items-center absolute top-0 w-full z-10'>
                <div className="max-w-[1180px] mx-auto">
                    <Nav />
                </div>
            </div>
            <div className="bg-primary-3 h-screen relative">
                <div className="max-w-[1180px] mx-auto">
                    <Hero />
                </div>
                <div className='absolute right-0 w-[45%] bg-hero h-full bg-cover z-0'></div>

            </div>
            <div className="">
                Room
            </div>
            <div className="">
                Discovery
            </div>
            <div className="">
                Blog
            </div>
            <div className="">
                Testimonial
            </div>
            <div className="">
                Footer
            </div>
        </div>
    )
}

export default App
