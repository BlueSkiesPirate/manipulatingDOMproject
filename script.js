const addP = document.getElementById('p-button')
const addImg = document.getElementById('img-button')

const pContain = document.getElementById("p-div")
const imgContain = document.getElementById("img-div")


addP.onmousedown = () => {
    pContain.style.display = "block"
    imgContain.style.display = "none"
   let  p = document.createElement("p")
    p.style.backgroundColor = "red"
    p.innerText = "hello"
    pContain.appendChild(p)
}



addImg.onmousedown = () => {
    pContain.style.display = "none"
    imgContain.style.display = "block"
    let img = document.createElement("img")
    img.src = "yoda.png"
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.border = '1px'
    imgContain.appendChild(img)
    // console.log(imgContain.children)
}
