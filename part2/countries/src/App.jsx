import { useState } from 'react'

function App() {

  const countryFilterString = useState('')

  return (
    <>
      <div className='m-2'>
        find countries: <input id='countryFilter'/>
      </div>
    </>
  )
}

export default App
