let b1=document.getElementById('p1Button');
let p1disp=document.getElementById('p1Display');
let clsdisp=document.getElementById('playto');
 let count1=0;
 let count2=0;
b1.addEventListener('click',function()
{
    let winscore=parseInt(clsdisp.value);
    if(count1<winscore && count2<winscore)
    {
        count1++;
        p1disp.innerText=count1;
        checkWinner();
        
    }

});
let b2=document.getElementById('p2Button');
let p2disp=document.getElementById('p2Display');
let clsdisp1=document.getElementById('playto');
b2.addEventListener('click',function()
{
    let winscore=parseInt(clsdisp.value);
    if(count1<winscore && count2<winscore)
    {
        count2++
        p2disp.innerText=count2;
        checkWinner();
    }

});
let reset=document.getElementById("reset");
reset.addEventListener('click',function()
{
    p1disp.innerText=0;
    p2disp.innerText=0;
    p1disp.style.color="black";
    p2disp.style.color="black";
    count1=0;
    count2=0;
});
function checkWinner()
{
    if(count1===parseInt(clsdisp.value))
    {
        p1disp.style.color="green";
        p2disp.style.color="red";
    }
    else if(count2===parseInt(clsdisp.value)){
        p1disp.style.color="red";
        p2disp.style.color="green";
    }
    else{
            p1disp.style.color="black";
            p2disp.style.color="black";
    }
}