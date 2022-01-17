import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Anasayfa from "./Anasayfa";
import GirisYap from "./GirisYap";
import Hakkinda from "./Hakkinda";
import Iletisim from "./Iletisim";
import Urunler from "./Urunler";
import UyeOl from "./UyeOl";
import { useState } from "react";
import UrunDetay from "./UrunDetay";
import UrunEklemeSayfasi from "./UrunEklemeSayfası"

function App() {


  const [girisYapildi, setGirisYapildi] = useState();


  const token = localStorage.getItem("ourToken");
  





  useEffect(()=>{ fetch("https://localhost:44363/api/user/",{
    method: "Get",
    withCredentials:true,
    credentials:"include",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
  }})
  .then(response=>response.json())
  .then(response=>{
    const cevap = response;
    if(cevap.statusCode===200){
            setGirisYapildi(true);
           
    }
    else{
      setGirisYapildi(false);
      
    }
  })
},[])
 

 







 
  

  

  

  
  
  
  
  
  
  return(
  <Router>
    <div className="App">
     
      <nav> 
      
      <div className="ui attached stackable menu">
      
  <div style={{marginLeft:"60px"}} className="ui container">
    <h4 style={{"marginTop":"5px","textAlign":"center","fontFamily":"Rubik"}} >Yorumum.com</h4>
    
    
    <Link style={{"marginLeft":"20px"}} to="/"className="item">
      <i className="home icon"></i> Anasayfa
    </Link>
    <Link to="/Hakkinda"className="item">
      <i className="grid layout icon"></i> Hakkinda
    </Link>
     <Link to="/Urunler"className="item">
      <i className="grid layout icon"></i> Ürünler
    </Link>
  
    {girisYapildi? ""
    :<Link to="/KayitOl" className="item">
      <i className="mail icon"></i> KayıtOl
    </Link>}
      
    <Link to="/Iletisim" className="item">
      <i className="mail icon"></i> İletişim
    </Link>
    
   
    
    
   
  </div>
</div>

      </nav>
      <main>
      <Routes>
      
      <Route path="/" element={<Anasayfa/>}></Route>
      <Route path="/Hakkinda" element={<Hakkinda/>}></Route>
      <Route path="/Iletisim" element={<Iletisim/>}></Route>
      <Route path="/Urunler" element={<Urunler/>}></Route>
      <Route path="/KayitOl" element={<UyeOl/>}></Route>
      <Route path="/GirisYap" element={<GirisYap/>}></Route>
      <Route path="/UrunDetay/:id"  exact  element={<UrunDetay/>}></Route>
      <Route path="/UrunEklemeSayfasi"   element={<UrunEklemeSayfasi/>}></Route>
      
  </Routes>

       
       </main>
       <div style={{position:"relative",bottom:0   }} class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <Link to="/" className="item">Anasayfa</Link>
           
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Services</h4>
          <div class="ui inverted link list">
            <Link to="/Iletisim" className="item">İletişim</Link>
          
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">Site Hakkinda</h4>
          <p>Yorumum.com</p>
        </div>
      </div>
    </div>
  </div>

   
      
</div>
         </Router> )   
 
}

export default App;
