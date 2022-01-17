import { useParams,Link } from "react-router-dom";
import React, {  useState,useEffect } from "react";
import axios from "axios";
import Yorum from "./Yorum";
import resimGriArkaplan from "./images/80fd75b31c.jpg"

const UrunDetay = ()=>{
    const {id} = useParams();
    const [urun,setUrun] = useState({});
    const token = localStorage.getItem("ourToken");
    const [yorumlar, setYorumlar] = useState([]);
    const [girisYapildimi, setGirisYapildimi] = useState();
    const [userName,setUserName] = useState();
    const [yorum,setYorum] = useState("");

    const handleOnChange = event => setYorum(event.target.value);
   
    const config ={
        headers : {Authorization:`Bearer ${token}`}
    };
    

    useEffect(() => {
        axios
        .get(`https://localhost:44363/api/yorum/YorumlariGetir`)
        .then(data=>{
            setYorumlar( data.data.data);
            
            
             
        }).catch(error=>console.log(error));
       
       
        
    },[yorumlar]);
    
    useEffect(() => {
        onFormSubmit()
       
    }, [])
    
    const onFormSubmit =(event)=>{
        
        fetch('https://localhost:44363/api/yorum/AddYorum', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
     "Authorization": `Bearer ${token}`
    },
    credentials:"include",
    withCredentials:true,
    body: JSON.stringify({urunId:urun.id,yazanNick:userName,yorumunKendisi:yorum}),
    }).then(response=>response.json())
    .then(data => {
    console.log(data);
   }
    )
    .catch((error) => {
    console.error('Error:', error);
    });}



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
            setGirisYapildimi(true);
            setUserName(cevap.data.userName)
               
        }
        else{
            setGirisYapildimi(false);
          
        }
      })
    },[])


 useEffect(() => {
        axios
        .get(`https://localhost:44363/api/urun/UrunuGetir?id=${id}`)
        .then(data=>{
            setUrun(data.data.data);
             
        }).catch(error=>console.log(error));
       
       
        
    },[]);
   
    console.log(urun)
return (
       
  
     

<div style={{"marginTop":"20px","marginBottom":"110px",backgroundImage: `url(${resimGriArkaplan})`}} className="ui raised very padded text container segment">
  <h2  className="ui header">{urun.urunismi}</h2>
  <p><strong>Hakkında:</strong>  {urun.urunAciklamasi}</p>
  <p><strong>Kategorisi:</strong> {urun.categoryIsmi}</p>
  <Yorum id={urun.id} yorumlar={yorumlar}></Yorum>
  {girisYapildimi?
    
    <div class="ui form">
  <div class="field">
    <label>Yorum Yaz</label>
    
    <textarea   onChange={handleOnChange}
       placeholder="Yorumunuz" name="yorumunKendisi"  value={yorum.yorumunKendisi}  >  </textarea>
  </div>
  <button onClick={onFormSubmit} className="ui blue button" type="submit">Yorumu Gönder</button>
  
</div>

  :
  
 
  <Link to="/GirisYap" className="ui blue button">Yorum Yapabilmek İçin Giriş Yapmalısınız.</Link>}

 


</div>
)
}
export default UrunDetay;