const BurgerMenuBtn = document.querySelector("#Burger-menu-btn") 
const BurgerMenu = document.querySelector("#Burger-menu")
const BurgerMenuClose = document.querySelector("#Burger-menu-close")


BurgerMenuBtn.addEventListener("click", () => {
    BurgerMenu.style.left="0px"

})

BurgerMenuClose.addEventListener("click", () => {
    BurgerMenu.style.left="-400px"
})

