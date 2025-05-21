import { BrowserRouter,Routes,Route } from "react-router";



import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";



import Jewellery from "./pages/jewellery";
import Womenethntic from "./pages/Womenethentic";
import Watches from "./pages/watches";
import Electronic from "./pages/Electronic";
import Search from "./pages/Search";
import ProductDisplay from "./pages/ProductDisplay";






const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="mycart" element={<MyCart/>}/>  
          <Route path="home" element={<Home/>} />
          {/* <Route path="menwatches" element={<MenWatches/>}/> */}
          {/* <Route path="womenwatches" element={<WoMenWatches/>}/> */}
          <Route path="watches" element={<Watches  />}/>
          <Route path="jewellery" element={<Jewellery/>}/>
          <Route path="womenethnic" element={<Womenethntic/>}/>
          <Route path="Electronic" element={<Electronic/>}/>
          <Route path="search" element={<Search/>}/>
        <Route path= "prodisplay/:id" element={<ProductDisplay/>}/>
         
          
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
