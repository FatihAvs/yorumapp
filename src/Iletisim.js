const Iletisim = ()=>
{
    return <div style={{margin:"100px",marginLeft:"400px"}} className="container">
    <div className="col-5">
    <div class="ui raised very padded text container segment">
    <h2>İletişim Formu</h2>
    <form class="ui form">
    <div class="field">
      <label>Adınız </label>
      <input type="text" name="first-name" placeholder="Adınız"/>
    </div>
    <div class="field">
      <label>E-Mail Adresiniz</label>
      <input type="text" name="last-name" placeholder="E-Mail Adresiniz"/>
      <div class="field">
    <label>Mesajınız</label>
    <textarea placeholder="Mesajınız"></textarea>
  </div>
 
    
    </div>
   
    <button class="ui button" type="submit">Gönder</button>
  </form></div></div></div>
}
export default Iletisim;