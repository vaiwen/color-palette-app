// const imageInput = document.querySelector('#myfile')

// let uploadedImage = ""

// imageInput.addEventListener('change', () => {
//     const reader = new FileReader()
//     reader.addEventListener('load', () => {
//         uploadedImage = reader.result
//         console.log(uploadedImage)
//         document.querySelector('#pixelImage').src = uploadedImage
//     })
//     reader.readAsDataURL(imageInput.files[0])
// })

let colors = JSON.parse(localStorage.getItem('colors'))

let text
let colorArray = []

colors.forEach(element => {
    text = []
    let counter = 0
    element.forEach(item => {
        // text.push(item*255) --> sondaki alpha:1 değerini almamak için aşağıdaki kod
        counter < 3 ? text.push(item*255) : '' // yuvarlamak gerekmez mi ?
        counter++
    })

    colorArray.push(text)
    // console.log(text)
});

sort(colorArray)


