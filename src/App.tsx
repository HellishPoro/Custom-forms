import './App.css'
import { Signup } from './components/Signup'

function App() {

  return (
    <>
    <Signup onSubmit={(data) => console.log('Form submitted:', data)} />
    </>
  )
}

export default App
