function currentTime(){
    //creating date object from date function
    let date = new Date();

    //obtaining time
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();
    let day =  'AM'

    //obtaining date
    let pday = date.getDay();
    let pdate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    //array of months
    let arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    

    //choose month based on current month
    for(let i = 0; i < arr.length; i++){
        if(i == month){
             month=arr[i];
             break;
        }
    }
    for(let i = 1; i < days.length; i++){
        if(i == pday){
             pday=days[i-1]
             break;
        }
    }

    
  //setting AM or PM
   day = (h >= 12)?'PM' : 'AM';
   h = (h == 0) ? 12 : ((h >12)?(h-12):h)

  //adding 0 infront of time if time is <10 for better understanding
   h = updateTime(h);
   m = updateTime(m);
   s = updateTime(s);
   ms = updateTime(ms);
   
   //update the dom
   pDate = document.getElementById('date').innerText = pday+','+ ' ' + pdate +' '+ '-'+ ' ' + month +' '+ '-'+' ' + year
   time = document.getElementById('time').innerText = h + ':' + m + ':' + s +' '+ day;

    //calling the function for each 1 millisecond duration
    setTimeout(currentTime,1)
}

function updateTime(k){
    if(k < 10){
        return '0'+k
    }else{
        return k
    }
}


//function calling for start time
currentTime()






