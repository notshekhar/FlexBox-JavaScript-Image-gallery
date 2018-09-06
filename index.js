
let images = document.querySelectorAll(".image")
for(let i=0; i<5; i++){
  images[i].style.backgroundImage = `url(${i}.jpg)`
}
images.forEach(image=>{
  image.onmouseover = () =>{
    image.style.flex = 3
  }
  image.onmouseleave = () =>{
    image.style.flex = 1
  }
})
