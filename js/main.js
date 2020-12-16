function pageLoad(){ //csináljunk egy tömböt és a tömbön belül egy objektumot amibe az első kulcs legyen az h tag és az értéke legyen h1 a második kulcs neve legyen content értéke saját nevünk harmadik keressünk egy tetsző háttérszínt az interneten ne legyen css alap szín és 

  let myObjects = [
    {
      tag: "Frontend Developer",
      content: "Prekuta Máté"

    },
    /*{
      tag: "p",
      content: "Lorem ipsum"
    }
    */
  ];
  /*
  for (let index = 0; index < myObjects.length; index++) {
    
  }
  */

 let kiad = document.getElementById("root");
 for (myObject of myObjects) {
   console.log(myObject.tag); 
   kiad.insertAdjacentHTML("beforeend",`
    <div id="root"><h1>${myObject.tag}</h1></div>
    <div id="root"><p>${myObject.content}</p></div>
   `)

 }

 kiad.addEventListener('click',function(){
  kiad.classList.toggle('clicked');
 });
 

}
window.addEventListener("load",pageLoad);