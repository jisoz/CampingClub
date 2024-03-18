// make the slider for video landing page
let bullet=document.querySelectorAll('.bullet');
let videos=document.querySelectorAll('video');
let contents=document.querySelectorAll('.contos .content')


function manualnav(manual){

    bullet.forEach(bullet=>{

        bullet.classList.remove('active');
    })
    videos.forEach(video=>{

        video.classList.remove('active');
    })
    contents.forEach(content=>{

        content.classList.remove('action');
    })

    bullet[manual].classList.add('active');
    videos[manual].classList.add('active');
    contents[manual].classList.add('action');

}
bullet.forEach((bullet,i)=>{

    bullet.addEventListener('click',()=>{

         manualnav(i);

        
    })
})

let guestsfield=document.getElementById('guests');

guestsfield.onclick=function(){
document.querySelector('.box-guest').classList.toggle('active');
document.querySelector(' .fa-chevron-up').classList.toggle('active');
document.querySelector('.fa-chevron-down').classList.toggle('active')



}
let pluses=document.querySelectorAll('.box-guest .contex .plus');
let spans=document.querySelectorAll('.box-guest .contex span#zero');
let minuss=document.querySelectorAll('.box-guest .contex .minus');
let input=document.querySelector('#guests input')
 
pluses.forEach((plus,i)=>{
   

plus.addEventListener('click',(e)=>{
    
   
     
spans[i].innerHTML=parseInt(spans[i].innerHTML)+1;
addguest()



})

})
function addguest(){
   
 input.value=parseInt(spans[0].innerHTML)+parseInt(spans[1].innerHTML)+` guest`+`,`+parseInt(spans[2].innerHTML)+`pet` ;

    if(parseInt(spans[0].innerHTML)+parseInt(spans[1].innerHTML)+parseInt(spans[2].innerHTML)===0){

        
       input.value='Add Guests';
       
    }
 }


minuss.forEach((minus,i)=>{

    
    minus.addEventListener('click',()=>{
        
  
         
    spans[i].innerHTML=parseInt(spans[i].innerHTML)-1;
   
    if(spans[i].innerHTML<0){
        spans[i].innerHTML=parseInt(0);
    }
    
   addguest() 
    
    })
  
   
})
let boxsearch=document.querySelector('.box-location')
let whereinput=document.getElementById('where');
let locationdiv=document.querySelectorAll('.box-location .location');
let inputserch=document.getElementById('serchinput')
let spanloc=document.querySelectorAll('.box-location .location  span');


whereinput.onclick=function(){
          boxsearch.classList.toggle('active');
}

locationdiv.forEach((loc,i)=>{

    loc.addEventListener('click',()=>{

      inputserch.value=spanloc[i].innerHTML

    })
})

// search engine
//let api=`https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1IjoiamFkaXNzYSIsImEiOiJja3YxMWZkdmkwbmF3MzFscHo4ZzZyNHowIn0.q_TnK6tq9tYXPgoKEjHcSg`
let api=`https://countriesnow.space/api/v0.1/countries/population/cities`
whereinput.addEventListener('input' ,(e)=>{
    
   

    fetch(api).then((response)=>response.json()).then((result)=>{
       console.log(result);
      
        let userdata=e.target.value;
        let locarray=[];
        if(userdata){
        
            locarray=result.data.filter((date)=>{
            
                return date.city.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase())
            })
             locarray=locarray.map(date=>{

                 return `${date.city},${date.country}`
             })
            
                
             let locdiv=document.createElement('div');
             locdiv.classList.add('location');
             let icondiv=document.createElement('div');
             icondiv.classList.add('icon');
             icondiv.innerHTML=`<i class="fas fa-map-marker-alt"></i>`;
             let spandiv=document.createElement('span');
             spandiv.innerHTML=`${locarray[0]}`;
             locdiv.appendChild(icondiv)
             locdiv.appendChild(spandiv)
             let boxloc=document.querySelector('.box-location')
             boxloc.appendChild(locdiv);

            

             

          
        }else if(userdata==''){
             console.log('null')
        }
       
      
      
     
             

        
    })
})
//dealing with form using php
let form=document.querySelector('form.form');
form.addEventListener('submit',(e)=>{
   
let xhr=new XMLHttpRequest();
xhr.open('post',"message.php",true);
xhr.onload=()=>{
if(xhr.readyState==4&&xhr.status==200){
    let response=xhr.response;
    console.log(response)
}

}
let formdata=new FormData();
xhr.send(formdata)
e.preventDefault()
})















 











