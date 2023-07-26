const inputbox=document.getElementById('input');
const list=document.getElementById('list');
const button=document.getElementById('btn');
function task(){
    if(inputbox.value===''){
        alert('Please write your input')
    }
    else {
        let t=document.createElement("li");
        t.innerHTML=inputbox.value;
        list.appendChild(t);
        let span=document.createElement("span");
        span.innerHTML=" ";
        t.appendChild(span);
        }
    inputbox.value='';
    data();
}
list.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('click');
        data();
    }
  else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
  }},false);

function data(){
    localStorage.setItem('data', list.innerHTML);

}
function show(){
    let data=localStorage.getItem('data');
    list.innerHTML=data;
}


