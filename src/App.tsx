import './App.css'
import conf from './conf/conf'
function App() {
 

  return (
    <>
      <h2 className='bg-green-400 text-black p-4 mb-4 rounded-xl'>Telwind added successfully</h2>
      <h2 className='bg-green-400 text-black p-4 mb-4 rounded-xl'>react-redux added successfully</h2>
      <h2 className='bg-green-400 text-black p-4 mb-4 rounded-xl'>react-router-dom added successfully</h2>

      <p>API URL: {conf.API_URL}</p>
      <p>Environment: {conf.ENVIRONMENT}</p>

    </>
  )
}

export default App
