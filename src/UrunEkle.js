
import { useState,useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const UrunEkle= ()=>{
  const navigate = useNavigate()

const token = localStorage.getItem("ourToken");
const [urunBilgileri, setUrunBilgileri] = useState({CategoryIsmi:"",UrunIsmi:"",UrunAciklamasi:""})
const [categories ,setCategories] = useState([])
useEffect(() => {
    fetch("https://localhost:44363/api/Category/KategorileriGetir")
    .then(response=>response.json())
    .then(response=>setCategories(response.data))
    .then(response=>console.log(response))
   
   
}, [])

console.log(urunBilgileri)

const onInputChange = event => setUrunBilgileri({...urunBilgileri, [event.target.name]:event.target.value});






const onFormSubmit =(event)=>{
    
    fetch('https://localhost:44363/api/urun/AddUrun', {
method: 'POST', 
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${token}`
},
credentials:"include",
body: JSON.stringify(urunBilgileri),
}).then(response=>{response.json();navigate("/Urunler");})

.catch((error) => {
console.error('Error:', error);
});}

return(


    <div style={{"marginTop":"100px","marginLeft":"500px","marginBottom":"140px"}} className="container">
    <div className="col-6">
    <div class="ui raised very padded text container segment">
<div class="ui form">


  <div class="field">
    <label>Ürün İsmi</label>
    <input placeholder="Ürün İsmi" type="text" onChange={onInputChange} name="UrunIsmi" value={urunBilgileri.UrunIsmi}/>
  </div>
  <select name="CategoryIsmi" onChange={onInputChange} class="form-select" aria-label="Default select example"> <option defaultValue="categoires" selected>Ürün Kategorisi</option>
  {categories.map(category =>
   <React.Fragment>
  
  <option value={category.kategoriIsmi}>{category.kategoriIsmi}</option>
  
</React.Fragment>

  
  
   )}

</select>
  <div class="field">
    <label>Ürün Açıklaması</label>
    <textarea placeholder="Ürün Açıklamasını Giriniz" type="text" onChange={onInputChange} name="UrunAciklamasi" value={urunBilgileri.UrunAciklamasi} ></textarea>
  </div>
  <button onClick={onFormSubmit} className="btn btn-primary"> Ürünü Ekle</button>
  </div>
  </div>
  </div>
  </div>

)

    
}
export default UrunEkle;