let dateobj= new Date();
let date=  ("0" + dateobj.getDate())
let month=("0"+dateobj.getMonth())
let year=(dateobj.getFullYear())



/////print date month year ////
console.log(date+"-"+month+"-"+year)




let hour=(dateobj.getHours())
let minutes= dateobj.getMinutes()
let secound=dateobj.getSeconds()
let millisecond=dateobj.getMilliseconds()
console.log(hour+":"+minutes+":" +secound+":"+millisecond)