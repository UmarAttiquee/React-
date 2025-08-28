import Cod from "./Cod"
import Com from "./components/com"
import Counter from "./counter"



function App() {

  let a = [1,2,3,4,5,6]
  return (
    <>
      {/* <h1>Hello World</h1> */}
    {/* <Cod /> */}
     <Counter /> 

    <Com arr={a} username="hamza"/>
    </>
  )
}

export default App
