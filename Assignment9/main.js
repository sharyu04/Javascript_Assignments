// 1.
document.querySelectorAll("p").forEach(p=>{
  p.innerHTML = "Hows the josh"
})

// 2.
const newButton = document.createElement('button');
newButton.textContent = '10x speed';
newButton.addEventListener('click', () => {
  document.getElementsByClassName('html5-main-video')[0].playbackRate = 10 
});
document.getElementsByClassName("ytp-chrome-controls")[0].appendChild(newButton)
