
// Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
// git add, commit, push


for (let i= 0; i < 16; i++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log(i);
  }
  console.log ("end of task #1");

  console.log("Initiating countdown:");
  for(var i = 15; i >= 0; i--){
      console.log(i);
  }
  console.log("end of task #2")


  for(var laps = 0; laps < 100; laps++){
    console.log("Thats another lap! # " + laps);
}
console.log("end of task #4")

let age = 18

for( var i=0; i <= 100; i++){

  if (age == i)
    console.log ( "Match found")

  else
    console.log("age doesn't match")

  
}
console.log("end of task #6")

for ( i=2 ; i<701 ; i+=2 ) {
    console.log(i); }
console.log("end of task #7")

for ( i=1 ; i<701 ; i+=2 ) {
    console.log(i); }
console.log("end of task 8")

for(var timeLine = 1900; timeLine <= 1949; timeLine++){

  
    if (timeLine === 1900){
      console.log("It is  " + timeLine + " the zeppelin is invented");}
    else if (timeLine === 1902){
      console.log("It is  " + timeLine + " the teddy bear is invented");}
    else if (timeLine === 1910){
      console.log("It is  " + timeLine + " the talking motion picture is invented");}
    else if (timeLine === 1913){
      console.log("It is  " + timeLine + " the bra is invented");}
    else if (timeLine === 1918){
      console.log("It is  " + timeLine + " the fortune cookie is invented");}
    else if (timeLine === 1923){
      console.log("It is  " + timeLine + " the traffic signal is invented");}
    else if (timeLine === 1935){
      console.log("It is  " + timeLine + " the radar is invented");}
    else if (timeLine === 1938){
      console.log("It is  " + timeLine + " the ballpoint pen is invented");}
    else if (timeLine === 1943){
      console.log("It is  " + timeLine + " the slinky is invented");}
  
    else {
      console.log("It is " + timeLine + " nothing has been invented...." );}
  
    
  }

  console.log("end of tasks")