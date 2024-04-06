import { useState } from 'react'
import './App.css'
import BookingFormPage from "./pages/BookingFormPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <BookingFormPage />
      </div>
    </>
  )
}

export default App
