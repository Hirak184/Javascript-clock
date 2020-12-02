let a;
    let date;
    let time;
    const options = {  year: 'numeric',weekday: 'long', month: 'long', day: 'numeric' };
    setInterval(()=>{
     a=new Date();
      date=a.toLocaleDateString(undefined,options);
      time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    document.getElementById('time').innerHTML="Time is "+time+"   "+"<br>On "+date;
},1000);