import { Suspense } from 'react'
import './App.css'
import PricingOptions from './components/main/PricingOptions'
import NavBar from './components/NavBar'
import Rating from './components/main/rating';

const pricingPromise = fetch('pricing.json').then(res=>res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<div className='text-center p-40'><span className="loading loading-ring w-9"></span></div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        <Rating></Rating>
        </Suspense>
      </main>
    </>
  )
}

export default App
