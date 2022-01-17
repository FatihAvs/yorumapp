import {Link} from "react-router-dom";
import resimm from "./images/gray-1920x1080_c.jpg"
import customer from "./images/customerr.jpg"





const Anasayfa = () =>
{
  



    return <div >
    <div style={{backgroundImage: `url(${resimm})`}}  class="ui inverted vertical masthead center aligned segment">



<div  class="ui text container">

  <h1 style={{marginTop:100,color:"black",fontFamily:"'Rubik',sans-serif"}}class="ui inverted header">
 
  </h1>
<h2 style={{color:"black",fontFamily:"Arial"}} > Bir Ürün Hakkındaki Düşüncelerini Paylaş.<br></br> Diğer İnsanların Tecrübelerini Oku.</h2>
<Link to="/Urunler"> <div class="ui medium primary button">Ürünlere Göz At<i class="right arrow icon"></i></div></Link>
</div>

</div>
 
    
     <div  class="ui vertical stripe segment">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
        <br/>
          <h1 class="ui header">
          </h1>
          <h3>Sosyal Medya Hesapları</h3>
         
          <div class="ui compact menu">
        <a href="https://www.linkedin.com/" class="item"><i class="linkedin icon"></i></a>
        <a href="https://www.instagram.com/" class="item"><i class="instagram icon"></i></a>
  

          
</div>
          
          
      <h2 class="ui header">Kullanıcı Deneyimleri Bir Tık Uzağınızda.</h2>
          <p>Beğendiğin Bir Ürünü Sitemize Ekleyibilir. Ürün Hakkındaki Düşüncelerini Diğer Kullanıcılarla Paylaşabilirsin.Diğer Kullanıcılarda Ürün Hakkındaki Düşüncelerini Yorum Olarak Belirtebilir.</p>
        </div>
        <div class="six wide right floated column">
          
        </div>
      </div>
      <div class="row">
        <div class="center aligned column">
          <Link to="/Iletisim" class="ui huge button">İletişim</Link>
        </div>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe quote segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="column">
          <h3>"Birçok Ürün"</h3>
          <p>Ürünler Hakkında Yorumlar</p>
        </div>
        <div class="column">
          <h3>Bilgi Bulmak İstediğin Ürün Hakkında Yorumları Bulabilirsin.</h3>
          <p>
          
          </p>
        </div>
      </div>
    </div>
  </div>
  <div  style={{backgroundImage: `url(${customer})`}}            class="ui vertical stripe segment">
    <div class="ui text container">
      <h3 style={{marginLeft:"200px"}} class="ui header">Uygulama Nasıl Çalışır</h3>
      <p style={{"backgroundColor":"white",padding:"20px"}}> Ürünler sekmesinden istediğin kategoride ürünleri görünteleyebilir. Hakkındaki yorumları okuyabilirsin. eğer ürün eklemek veya yorum eklemek istersen üye olup bu işlemleri de gerçekleştirebilirsin.</p>
      
      <h4 class="ui horizontal header divider">
     
      </h4>
     
    </div>
  </div>
      </div>
}
export default Anasayfa;