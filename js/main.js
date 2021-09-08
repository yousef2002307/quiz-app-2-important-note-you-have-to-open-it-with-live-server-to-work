let h5 = document.querySelector(".quiz .body h5");
let quiz = document.querySelector(".quiz");
let quizbody = document.querySelector(".quiz .body");
let answers = document.querySelector(".quiz .answers");
let span = document.querySelector(".quiz span");
let button = document.querySelector('.quiz button');


/// api request 
let currentindex = 0;
let rightanswers = 0;
function apirequest(){
    let xhml = new XMLHttpRequest();
    xhml.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
        let data = JSON.parse(this.responseText);
       
        creatingtext(data,data.length,currentindex);
      
        let p = document.querySelectorAll(".answers p");
        let arrayofp = Array.from(p);
        clickingp(arrayofp,data,data.length,currentindex);

        ///clicking button
        button.onclick = function() {
            answers.textContent = '';
            h5.textContent = '';
            span.textContent = '';
            answers.classList.remove("pointers");
            button.style.display = 'none';
            currentindex++;
         
            
            creatingtext(data,data.length,currentindex);
            let p = document.querySelectorAll(".answers p");
            let arrayofp = Array.from(p);
            clickingp(arrayofp,data,data.length,currentindex);
        }
        }
    }
    xhml.open("GET","jo.json")
    xhml.send();
}
apirequest();
/////creating text
function creatingtext(data,length,currentindex){
    if(currentindex < length){
//creat h5
h5.textContent = data[currentindex].title;
//create p
for(let i =1; i <= 4;i++){
    let p = document.createElement("p");
    let ptext = document.createTextNode(data[currentindex][`answer_${i}`]);
    p.appendChild(ptext);
    answers.appendChild(p);

}
///create span
span.textContent = `Question ${currentindex + 1} of ${length}`;
///////
}else{
    document.querySelector(".quizresults").textContent = `you answered ${rightanswers} of ${length}`;
  }
    }

///clicking on p and circumstances
function clickingp(p,data,length,currentindex) {
  
p.forEach(ele => {
ele.onclick = function (e) {
    
    this.parentElement.classList.add("pointers");
    button.style.display = 'block'; 
    if(e.target.textContent == data[currentindex].right_answer){
        rightanswers++;
        e.target.classList.add("right");

    }else{
        e.target.classList.add("wrong");
      eletextcontent(p,data,currentindex);
      
    }
}
});
}


function eletextcontent(p,data,currentindex){
    p.forEach(ele => {
       if(ele.textContent == data[currentindex].right_answer){
           ele.classList.add("right");
       }
    });
}