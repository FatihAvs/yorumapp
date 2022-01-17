import {Link} from "react-router-dom";
import resimm from "./images/gray-1920x1080_c.jpg"

const Hakkinda = ()=>
{
    return (
      <div   style={{backgroundImage: `url(${resimm})`,height:"700px"}}  >
    <div style={{"marginTop":"0px","marginBottom":"350px","marginLeft":"50px"}}  id="about" class="container-fluid">
    <div class="row">
      <div class="col-sm-8">
        <h2 style={{"marginTop":"130px"}}>Hakkında</h2><br></br>
        <h4> Almak istediğin ürün hakkında bilgi bul veya kullandığın ürün hakkındaki tecrübeni paylaş.
        İnsanlar kullandıkları ürün hakkında tecrübelerini ve fikirlerini paylaşıyor.</h4><br></br>
        <p>İnsanların ürünler hakkında daha kolay bilgiye ulaşabilmesi ve ürün hakkındaki bilgilerini paylaşabilmeleri için kurulmuş bir uygulama.</p>
        <br></br><Link to="/Iletisim" class="btn btn-primary">İletisim</Link>
      </div>
      
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-signal logo"></span>
      </div>
   
   
    </div>
  </div></div>
  )
}
export default Hakkinda;