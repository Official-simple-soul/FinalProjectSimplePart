

let value = ''
let add = document.querySelectorAll('#change')
let count = document.querySelectorAll('#count')


for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function() {
        value = count[i].innerHTML
        value++
        count[i].innerHTML = value

        if(value > 10) {
        add[i].style.color = 'black'
        add[i].style.transform = 'scale(1.2)'

    }
})

}