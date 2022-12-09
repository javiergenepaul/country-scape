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
            <div className='bg-primary-1 text-primary-4 items-center absolute top-0 left-0 w-full z-10'>
                <div className="xl:max-w-[1180px] mx-auto py-4">
                    <Nav />
                </div>
            </div>
            <div className="bg-primary-3 h-screen relative bg-hero sm:bg-contain bg-cover bg-right bg-no-repeat">
                <div className="absolute top-0 left-0 h-full w-full bg-shade z-0 sm:hidden block"></div>
                <div className="max-w-[1180px] mx-auto z-10 relative">
                    <Hero />
                </div>
            </div>
            <div className="h-screen max-w-[1180px] mx-auto py-24">
                <Room />
            </div>
            <div className="h-screen bg-discovery bg-cover relative">
                <div className="h-full w-full bg-shade">
                    <div className="max-w-[1180px] mx-auto w-full h-full">
                        <Discover />
                    </div>
                </div>
            </div>
            <div className="max-w-[1180px] mx-auto w-full py-24">
                <Blog />
            </div>
            <div className="max-w-[1180px] mx-auto w-full py-24">
                <Testimonial />
            </div>
            <div className="py-10 bg-primary-1">
                <div className="max-w-[1180px] mx-auto w-full h-full">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App
