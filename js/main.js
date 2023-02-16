

let saturate=document.getElementById('saturate')
let contrast=document.getElementById('contrast')
let brightness=document.getElementById('brightness')
let sepia=document.getElementById('sepia')
let grayscale=document.getElementById('grayscale')
let blure=document.getElementById('blur')
let hueRotate=document.getElementById('hue-rotate')
let invert=document.getElementById('invert')

let uploadImg=document.getElementById('upload')
let download=document.getElementById('download')
let reset=document.getElementById('reset')

let myImage=document.getElementById('img')
let imgBox=document.querySelector('.img-box')






const canvas=document.getElementById('canvas')
const context=canvas.getContext('2d') //Draw image in canavs so you can download it with filters


// During onload before uploading any images
window.onload=function(){

    download.style.display='none'
    reset.style.display='none'
    imgBox.style.display='none'

}


function returnValues()
{
    myImage.style.filter='none'
    context.filter='none'
    saturate.value='100'
    contrast.value='100'
    brightness.value='100'
    grayscale.value='0'
    hueRotate.value='0'
    blure.value='0'
    sepia.value='0'
    invert.value='0'
    context.drawImage(myImage,0,0,canvas.width,canvas.height)

}
reset.addEventListener('click',function(){
    returnValues()
})
uploadImg.onchange=function()
{
     returnValues()
    download.style.display='block'
    reset.style.display='block'
    imgBox.style.display='block'

    let file=new FileReader()
    file.readAsDataURL(uploadImg.files[0])
    file.onload=function(){

        myImage.src=file.result

    }

  
    myImage.onload=function()
    {
        canvas.width=myImage.width
        canvas.height=myImage.height

        context.drawImage(myImage,0,0,canvas.width,canvas.height)
        myImage.style.display='none'
    }
}


let filters=document.querySelectorAll('ul li input')
filters.forEach(filterNum=>{

    filterNum.addEventListener('input',function(){

       context.filter=
        `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        grayscale(${grayscale.value})
        hue-rotate(${hueRotate.value}deg)
        invert(${invert.value}%)
        blur(${blure.value}px)
        sepia(${sepia.value}%)


        `
        context.drawImage(myImage,0,0,canvas.width,canvas.height)

    })
})






download.onclick=function(){

    download.href=canvas.toDataURL()
}










