import { BrowserRouter,Routes,Route } from "react-router";



import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import MenWatches from "./pages/MenWatches";
import WoMenWatches from "./pages/WoMenWatches";


import KidsWatches from "./pages/KidsWatches";

import Jewellery from "./pages/jewellery";
import Womenethntic from "./pages/Womenethentic";





const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="mycart" element={<MyCart/>}/>  
          <Route path="home" element={<Home/>} />
          <Route path="menwatches" element={<MenWatches/>}/>
          <Route path="womenwatches" element={<WoMenWatches/>}/>
          <Route path="kidswatches" element={<KidsWatches/>}/>
          <Route path="jewellery" element={<Jewellery/>}/>
          <Route path="womenethnic" element={<Womenethntic/>}/>
         
          
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
