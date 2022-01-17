import {  useState } from "react";
import { Link } from "react-router-dom";


const UyeOl = ()=>
{ 
    const [uyelikBilgileri, setUyelikBilgilieri] = useState({UserName:"",Email:"",Password:""})

    const onInputChange = event => setUyelikBilgilieri({...uyelikBilgileri, [event.target.name]:event.target.value});
  
    const onFormSubmit =(event)=>{
        event.preventDefault();
        fetch('https://localhost:44363/api/User', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(uyelikBilgileri),
}).then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});}
    
    
    return(
   
<div className="container" style={{marginTop:"100px",marginLeft:"300px",marginBottom:"250px"}}>
<div className="col-9">
   
    <div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
     
        <div class="field">
        <h2> KayıtOl</h2>
          <label>Kullanıcı Adı</label>
          <div class="ui left icon input">
            <input name="UserName" onChange={onInputChange} value={uyelikBilgileri.UserName} type="text" placeholder="Kullanıcı Adı"/>
            <i class="user icon"></i>
          </div>
          
        </div>
        <div class="field">
          <label>Email</label>
          <div class="ui left icon input">
            <input name="Email" onChange={onInputChange} value={uyelikBilgileri.Email} type="Email" placeholder="Email"/>
            <i class="user icon"></i>
          </div>
          
        </div>
        <div class="field">
          <label>Parola</label>
          <div class="ui left icon input">
            <input placeholder="Parola" name="Password" onChange={onInputChange} value={uyelikBilgileri.Password} type="password"/>
            <i class="lock icon"></i>
          </div>
        </div>
        <button onClick={onFormSubmit} class="ui blue submit button">Kayıt Ol</button>
      </div>
    </div>
    <div class="middle aligned column">
      <div class="ui big button">
        <i class="signup icon"></i>
     <Link to="/GirisYap">Giris Yap</Link>
      </div>
    </div>
  </div>
  <div class="ui vertical divider">
   Veya
  </div>
</div></div></div> )
}
export default UyeOl;