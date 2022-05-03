  import React, { lazy, Suspense } from 'react'
import VideoProvider from "./apis/VideoContext"
import Child from './components/childcompo/Child'
import VideoMain from './components/videos/VideoMain'
// import Navbar from './pages/Navbar'
let Navbar = lazy(()=> import ("./pages/Navbar" ))

const App = () => {
  console.log("hello")
  return (
    <VideoProvider>
      <Suspense fallback>
        <Navbar />
      </Suspense>
      <VideoMain />
      {/* <Child/> */}
    </VideoProvider>
    // <p>hello world</p>
  );
}

export default App