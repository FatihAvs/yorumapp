import { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import resimGriArkaplan from "./images/80fd75b31c.jpg"
const Urunler =()=>{
 
  const [categories, setCategories] = useState([]);
 
 
  

const [urunler,setUrunler] = useState([]);
const [arananIsim,setArananIsim] = useState("");

const handleOnChange = (event)=> setCategoryFilter(event.target.value);
const onSearchChange = (event) =>setArananIsim(event.target.value)


useEffect(() => {
  fetch("https://localhost:44363/api/Category/KategorileriGetir")
  .then(response=>response.json())
  .then(response=>setCategories(response.data))
  .then(response=>console.log(response))
 
 
}, [])
 
var listimm=[];

categories.map((categori)=>{
  listimm.push(categori.kategoriIsmi)});
   console.log(listimm);

   const [categoryFilter , setCategoryFilter] = useState(listimm);
   

useEffect(()=>{fetch("https://localhost:44363/api/urun/UrunleriGetir")
.then(response=>response.json())
.then(response=>{setUrunler(response.data);
console.log(urunler)})
.catch(error=>console.error(error));},[])

return (
 <div>
 <div style={{"marginTop":"50px","marginBottom":"400px",backgroundImage: `url(${resimGriArkaplan})`}} className="container">
 <div className="row">

 <div style={{"marginTop":"50px"}} className="col-3">


<Link to="/UrunEklemeSayfasi" className="btn btn-primary">Ürün Ekle </Link>








<h3 style={{"marginTop":"20px"}}>Ürünleri Filtrele</h3>  <div class="ui form">
  <div class="grouped fields">
  
 {categories.map((urun)=>{
 return(
 

    <div class="field">
      <div class="ui radio checkbox">
        <input onChange={handleOnChange}  value={urun.kategoriIsmi} type="radio" name="category"  /><label >{urun.kategoriIsmi}</label>
        
      </div>
    </div>
    
    
  
 
  
 )


 })}  </div>
</div>



   
 </div>
 
 
 <div className="col-8">
 <div className="container">
 <div className="row">

   {categoryFilter? "": <p style={{"marginTop":"50px"}} class="alert alert-success" role="alert">
 Lütfen Listelemek İstediğiniz Kategoriyi Seçiniz.
</p>}

     
<div style={{"marginTop":"50px","marginBottom":"20px"}} className="container">
<div className="row"><div className="col-8"><h3 style={{"fontFamily":"Tahoma"}} class="lead"><strong>Ürünler</strong></h3></div>

<div style={{"marginLeft":"250px"}} className="col-4 "><span  class="input-group-text" id="basic-addon1">
                <svg style={{"marginRight":"20px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
</svg> <input name="arananIsim" value={arananIsim} onChange={onSearchChange}  class="form-control mr-sm-2" type="search" placeholder="İsme Göre Ürün Ara" aria-label="İsme Göre Ürün Ara"></input>
              </span> </div></div>


</div>

      <hr></hr>
      <br></br>

    {urunler.filter(urun=>urun.categoryIsmi.includes(categoryFilter)).filter((urun)=>urun.urunismi.toLowerCase().includes(arananIsim.toLowerCase())).map((urun)=>{
    return(
     
      <div className="col-4"> 
    
      <div   class="card" style={{width:"18rem","marginTop":"20px","height":"18rem"}}>

<div class="card-body">
  <h4 class="card-title">{urun.urunismi}</h4>
  <h6 class="card-title">{urun.categoryIsmi}</h6>
  <p class="card-text">{urun.urunAciklamasi}</p>
  <Link style={{"marginBottom":"0.25rem"}} to={`/UrunDetay/${urun.id}`} className="btn btn-primary">Ürünü Görüntüle</Link>
</div>
</div></div>
     );} )}
     </div></div><br></br><br></br><hr></hr>
     </div>
     </div> </div>
 
 </div>
);
}
export default Urunler;