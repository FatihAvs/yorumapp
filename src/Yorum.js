import React from "react";

const Yorum =(props)=>
{

   

    return(
<React.Fragment> 
<div class="ui comments">
              
              <hr></hr>
               <h2>Yorumlar</h2>
              
             
        
        
        {props.yorumlar.filter(yorum=>yorum.urunId===props.id).map((yorum)=>{

              return (

            
                <div class="comment">
                  <div class="content">
                  <p class="author">  {yorum.yazanNick}</p>
                 <div class="metadata">
                      <div class="date">2 days ago</div>
                    </div>
                    <div class="text">
                   {yorum.yorumunKendisi}
                    </div>
                   </div>    </div>
               
              )


        }




        )}
      
    
         

         </div>  
         
  
         
          </React.Fragment>  )    
}
export default Yorum;