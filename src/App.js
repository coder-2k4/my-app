import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  let pageSize = 5;
  const [progress , setprogress] = useState(0)
    return (
      <div>
        <Router>
           <NavBar/>
           <LoadingBar
        color='#f11946' progress={progress}/>
        <Routes>
          <Route exact path="/" element={<News setProgress = {setprogress} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/sports" element={<News setProgress = {setprogress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/business" element={<News setProgress = {setprogress} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/science" element={<News setProgress = {setprogress} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/health" element={<News setProgress = {setprogress} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/entertainment" element={<News setProgress = {setprogress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/politics" element={<News setProgress = {setprogress} key="politics" pageSize={pageSize} country="in" category="politics"/>}/>
          <Route exact path="/technology" element={<News setProgress = {setprogress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
       </Router> 
      </div> 
    )
  }
export default App;