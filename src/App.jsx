

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
            <div className="bg-primary-3 h-screen relative bg-hero bg-contain bg-right bg-no-repeat">
                <div className="max-w-[1180px] mx-auto">
                    <Hero />
                </div>
            </div>
            <div className="h-screen max-w-[1180px] mx-auto py-24">
                <Room />
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
