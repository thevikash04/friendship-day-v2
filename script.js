const loading = document.getElementById("loading");
const home = document.getElementById("home");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const typing = document.getElementById("typing");
const photo = document.getElementById("photo");
const music = document.getElementById("bgMusic");
window.addEventListener("load", () => {
  setTimeout(() => {
    loading.style.display = "none";
    home.style.display = "flex";
  }, 2000);
});

const pages = [
`Dear Gulul 💛

Happy Friendship Day!

Thank you for always being such a wonderful friend.`,

`Every smile,
every laugh,
every random chat
means a lot to me. ✨`,

`No matter where life takes us...

Forever Best Friends ❤️

— Vikash`
];

let page = 0;

startBtn.onclick = () => {

    startBtn.classList.add("open");

    setTimeout(() => {

        music.currentTime = 0;

        music.play().then(() => {
            console.log("Music Started");
        }).catch(err => {
            console.log(err);
        });

        home.style.display = "none";
        letter.style.display = "flex";

        typeWriter(pages[0]);

    },700);

};

function typeWriter(text){
  typing.innerHTML = "";
  let i = 0;

  function write(){
    if(i < text.length){
      typing.innerHTML += text.charAt(i);
      i++;
      setTimeout(write,30);
    }
  }

  write();
}

nextBtn.onclick = () => {
  page++;

  if(page < pages.length){
    typeWriter(pages[page]);
  }else{
    letter.style.display = "none";
    gallery.style.display = "flex";
    startGallery();
  }
};

const photos = [
"1784279942741.jpg",
"IMG_20260715_223420.jpg"
];

let current = 0;

function startGallery(){

  photo.src = photos[0];

  const slider = setInterval(() => {

    current++;

    if(current >= photos.length){
      current = 0;
    }

    photo.src = photos[current];

  },2500);

  setTimeout(() => {

    clearInterval(slider);

    gallery.style.display = "none";
    finalPage.style.display = "flex";
    setInterval(firework,300);

  },8000);

}
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

window.onload = function () {
    setInterval(createHeart, 500);
};
function firework() {

    const colors = [
        "#ff0000",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#ff00ff",
        "#ffffff",
        "#ff8800"
    ];

    const fw = document.createElement("div");
    fw.className = "firework";

    fw.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    fw.style.left = Math.random()*window.innerWidth + "px";
    fw.style.top = Math.random()*window.innerHeight + "px";

    document.body.appendChild(fw);

    setTimeout(()=>{
        fw.remove();
    },1000);
}
function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*window.innerWidth + "px";

    petal.style.fontSize = (18 + Math.random()*18) + "px";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },8000);

}

setInterval(createPetal,600);
const giftBox = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");

if(giftBox){
    giftBox.onclick = () => {
        giftBox.classList.add("open");
        giftBox.innerHTML = "🎉";
        giftText.classList.add("show");
    };
}
