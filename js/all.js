// 翻牌動畫
const jsAn1 = document.querySelectorAll(".js-An1");
const jsAn2 = document.querySelectorAll(".js-An2");
console.log(jsAn1);
let num_A = 0;
let num_B = 0;
let interval_A, interval_B;

function aStart() {
  clearInterval(interval_A);
  num_A = 0;
  interval_A = setInterval(() => {
    if (num_A < jsAn1.length) {
      jsAn1.forEach((item, ind) => {
        if (num_A === ind) {
          setTimeout(() => {
            item.classList.add("card--activeAdd");
          }, 500);
        }
      });
      jsAn2.forEach((item, ind) => {
        if (num_A === ind) {
          setTimeout(() => {
            item.classList.remove("card--activeAdd");
          }, 500);
        }
      });
      num_A++;
    } else {
      clearInterval(interval_A);

      setTimeout(() => {
        num_A = 0;
        bStart();
      }, 2000);
    }
  }, 1000);
}

function bStart() {
  clearInterval(interval_B);
  num_B = 0;
  interval_B = setInterval(() => {
    if (num_B < jsAn1.length) {
      jsAn2.forEach((item, ind) => {
        if (num_B === ind) {
          setTimeout(() => {
            item.classList.add("card--activeAdd");
          }, 500);
        }
      });
      jsAn1.forEach((item, ind) => {
        if (num_B === ind) {
          setTimeout(() => {
            item.classList.remove("card--activeAdd");
          }, 500);
        }
      });
      
      num_B++;
    } else {
      clearInterval(interval_B);
      setTimeout(() => {
        num_B = 0;
        aStart();
      }, 2000);
    }
  }, 1000);
}
aStart();

// 導覽列
const menuBar = document.querySelector(".menuBar");
const SPshow = document.querySelector(".SPshow");
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("menuBar-active");
  menuBar.classList.toggle("menuBarSP--active");
  SPshow.classList.toggle("SPshow--active");
});
const listLink = document.querySelectorAll(".listLink");
listLink.forEach(item=>{
  item.addEventListener("click",()=>{
    menuBar.classList.toggle("menuBar-active");
    menuBar.classList.toggle("menuBarSP--active");
    SPshow.classList.toggle("SPshow--active");
  })
})
const bg04 = document.querySelector(".bg04");
const thing04_1 = document.querySelector(".thing04-1");
window.addEventListener('scroll',()=>{
    if(window.scrollY>=bg04.offsetTop-300){
        thing04_1.classList.add('scaleZoomIn')
    }
})


function scrollShow(scrollID,QAchangeID, addBtnID, removeBtnID) {
  const show = document.querySelector(scrollID);
  const QAchange = document.querySelector(QAchangeID);

  const addBtn = document.querySelector(addBtnID);
  const removeBtn = document.querySelector(removeBtnID);
  console.log(addBtn);
  console.log(removeBtn);
  show.classList.toggle("show");

    QAchange.classList.toggle("QA_show");
    
    addBtn.classList.toggle("Answer-close");
    removeBtn.classList.toggle("Answer-show");
  
}

function popShow(ShowID){
  const popShowID = document.querySelector(ShowID);
  console.log(popShowID)
  popShowID.classList.toggle('popBG--active')
  document.body.style.overflow = "hidden";
  popShowID.style.overflowY = "scroll";
}
function popClose(popID){
  const popClose = document.querySelector(popID);
  popClose.classList.toggle('popBG--active')
  document.body.style.overflow = "visible";
  popClose.style.overflowY = "hidden";
}