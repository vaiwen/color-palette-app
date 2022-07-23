const sort = (array) => {
    const validate = array.length
    const allColors = []
    while (array.length > 0) {
        const sameColors = []
        for (let index = 0; index < array.length - 1; index++) {
            let validation = 0
            for (let counter = 0; counter < 3; counter++) {
                array[0][counter] === array[index + 1][counter] ? validation++ : counter = 2
            }

            if (sameColors.length === 0) {
                sameColors.push({ "array": array[0], "index": 0 })
            }

            if (validation === 3) {
                sameColors.push({ "array": array[index + 1], "index": index + 1 })
                // console.log(`1. dizi ile ${index + 2}. dizi eşit`)
                // console.log(`${array[0]} --- ${array[index + 1]}`)
            }
            else {
                // console.log(`1. dizi ile ${index + 2}. dizi eşit değil`)
                // console.log(`${array[0]} --- ${array[index + 1]}`)
            }
        }

        if(array.length === 1) {
            sameColors.push({ "array": array[0], "index": 0 }) // dehşet
        }

        let senkron = 0
        sameColors.forEach(element => {
            array.splice(element.index - senkron, 1)
            senkron++
        })

        allColors.push(sameColors)

    }

    console.log(allColors.length)

    allColors.forEach(element => {
        console.log(element[0].array)
        console.log(`${element.length} / ${validate}`)

        // const colorBox = document.createElement('div')
        // colorBox.className = 'color-box'
        // document.querySelector('.colors').appendChild(colorBox)

        let rgb = ''
        const colorCircle = document.createElement('div')
        colorCircle.className = 'color-circle'
        colorCircle.textContent = element[0].array
        element[0].array.forEach(item => {
            rgb += `${item},`
        })
        rgb = rgb.slice(0,rgb.length - 1)
        colorCircle.style.backgroundColor = `rgb(${rgb})`
        document.querySelector('.colors').appendChild(colorCircle)
    })
}
