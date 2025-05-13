import './App.css'
import { Signin } from './components/signin'
import { Signup } from './components/signup'

function App() {

  return (
    <>
    <Signup onSubmit={(data) => console.log('Form submitted:', data)} />
    </>
  )
}

export default App
