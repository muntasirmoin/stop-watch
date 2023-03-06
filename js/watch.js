let second = 0;
let  min = 0;
let hour = 0;

let lap;
let h;
let m;
let s;
function watch(){
 
    
     lap = 0;

    const displayTimer = document.getElementById('timer');
    
    
    let num ;
   
  const setIntervalID = setInterval(()=>{


    if(second == 60){
            second = 0;
            min++;
            if(min == 60){
                min = 0;
                hour++;

            }

    }

     h = hour < 10 ? "0" + hour : hour;
     m = min < 10 ? "0" + min : min;
     s = second < 10 ? "0" + second : second;
        
        // a.innerText = second;
        displayTimer.innerHTML = `${h}:${m}:${s}`;

         num = second;

        second++;
        
        
    }, 1000);

    

   const sectionContainer = document.getElementById('section-container');
   const h1 = document.createElement('h1');

    document.getElementById('btn-stop').addEventListener('click', function(){
       
        lap++;
        // document.getElementById('lap').innerText = num;
        h = hour < 10 ? "0" + hour : hour;
     m = min < 10 ? "0" + min : min;
     s = second < 10 ? "0" + second : second;
        
     
        // a.innerText = second;
        h1.innerHTML = `lap-${lap}:${h}:${m}:${num}`;
        
        // h1.innerHTML= `Lap: ${num}`;
        second = num;
        clearInterval(setIntervalID);
        
    });

    sectionContainer.appendChild(h1);


    
    

}

function watchReset(){
    second = 0;
    lap = 0;
    
    document.getElementById('timer').innerText = `00:00:00`;

    document.getElementById('section-container').innerHTML = ``;
    
}


document.getElementById('btn-start').addEventListener('click', watch);

document.getElementById('btn-reset').addEventListener('click', watchReset);



