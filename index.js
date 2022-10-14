// Your code here

const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    const leftNumber=dodger.style.left.replace('px','');
    const left=parseInt(leftNumber,10);
    if(left>0){
    
        dodger.style.left = `${left -1}px`;
    }
}


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

});
function moveDodgerRight() {

    const leftNumber = dodger.style.left.replace('px','');
    const left= parseInt(leftNumber,10);
    dodger.style.width='40px';
    const wid= dodger.style.width.replace('px','');
    const widchange=parseInt(wid,10);
    if (widchange===40 && left<360 ) {

        dodger.style.left = `${left +1}px`;
        console.log(widchange)


    }


}

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {
    moveDodgerRight();
    
  }
});

