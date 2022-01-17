import { useState } from "react";
import { useNavigate  } from "react-router-dom";
const GirisYap = ()=>
{
const navigate = useNavigate()
const [GirisBilgileri, setGirisBilgiler] = useState({Email:"",Password:""})
const onInputChange = event => setGirisBilgiler({...GirisBilgileri, [event.target.name]:event.target.value});
const onFormSubmit =(event)=>{
    event.preventDefault();
    fetch('https://localhost:44363/api/auth/createtoken', {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',

},
credentials:"include",
body: JSON.stringify(GirisBilgileri),
}).then(response=>response.json())
.then(data => {
  const response = data;
  if(response==null){
    console.log("başarısız giriş");}
  else if(response.statusCode===200){
    localStorage.setItem("ourToken",response.data.accessToken);
    navigate("/");
  }
    else{
      console.log("bilinmeyen..")
    }
    
 
 
})
.catch((error) => {
console.error('Error:', error);
});}

    return(
        <div style={{"marginTop":"100px","marginLeft":"500px","marginBottom":"250px"}} className="container">
<div className="col-6">
<div class="ui raised very padded text container segment">

<form class="ui form">
<h2>Giris Yap</h2>
  <div class="field">
    <label>Email</label>
    <input type="text" onChange={onInputChange} value={GirisBilgileri.Email} name="Email" placeholder="Email"/>
  </div>
  <div class="field">
    <label>Parola</label>
    <input type="password"  onChange={onInputChange} value={GirisBilgileri.Password} name="Password" placeholder="Sifre"/>
  </div>
  
  <button  onClick={onFormSubmit} class="ui button" type="submit">Giris Yap</button>
</form>  </div></div></div>)
}
export default GirisYap;