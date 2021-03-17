const drop_down_menu = () =>{
    const dropDown = document.querySelector('.drop-down')
    const theMenu = document.querySelector('.the_menu')
    dropDown.addEventListener('click',()=>{
        theMenu.classList.toggle('is-active')
    })
}

const responsiveNavBar = () =>{
    const burger = document.querySelector('.burger')
    const right_nav = document.querySelector('.right-header')
    const left_nav = document.querySelector('.left-header')
    burger.addEventListener('click',()=>{
        left_nav.classList.toggle('is-active')
        right_nav.classList.toggle('is-active')
    })
}
drop_down_menu()
responsiveNavBar()