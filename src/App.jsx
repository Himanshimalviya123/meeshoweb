import { BrowserRouter,Routes,Route } from "react-router";



import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";



import Jewellery from "./pages/jewellery";
import Womenethntic from "./pages/Womenethentic";

import Watches from "./pages/watches";

import Electronic from "./pages/Electronic";
import ProductDisplay from "./pages/ProductDisplay";
import Search from "./pages/Search";
import Kitchen from "./pages/kitchen";
import Bags from "./pages/bags";
import Beauty from "./pages/beauty";
import Womenwestern from "./pages/womenwestern";






const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="mycart" element={<MyCart/>}/>  
          <Route path="home" element={<Home/>} />
          <Route path="watches" element={<Watches  />}/>
          <Route path="jewellery" element={<Jewellery/>}/>
          <Route path="womenethnic" element={<Womenethntic/>}/>
        <Route path="kitchen" element={<Kitchen/>}/>
        <Route path="beauty" element={<Beauty/>}/>
          <Route path="Electronic" element={<Electronic/>}/>
          <Route path="womenwestern" element={<Womenwestern/>}/>
         <Route path="search" element={<Search/>}/>
        <Route path= "prodisplay/:id" element={<ProductDisplay/>}/>
         
          <Route path="bags" element={<Bags/>}/>
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
