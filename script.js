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

  music.play().catch(() => {});

  home.style.display = "none";
  letter.style.display = "flex";

  typeWriter(pages[0]);

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

  },8000);

}
