
import { useEffect ,useState} from "react";
import UrunEkle from "./UrunEkle";
import { Link } from "react-router-dom";

const UrunEklemeSayfasi =  () =>
{
    const token = localStorage.getItem("ourToken");
  
    const [girisYapildi, setGirisYapildi] = useState(false);





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






 return (
<div>
   {girisYapildi? <UrunEkle/> :
   
   
   
   
    <div style={{"margin":"200px","marginLeft":"650px","marginBottom":"430px"}} className="container"> <div className="col-3"> <div className="row"> <Link to="/GirisYap" className="btn btn-primary btn-lg btn-block" > Lütfen Ürün Ekleyebilmek İçin Giriş Yapınız. </Link></div></div></div>}
   </div>
 
 
 )





}
export default UrunEklemeSayfasi;