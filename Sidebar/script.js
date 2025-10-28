const btn = document.querySelector("#btn");
const navbar = document.querySelector("#barNavegation");
const ocults = [...document.querySelectorAll(".ocult")];
const elent_nav = [...document.querySelectorAll("#z_itens a")]

btn.addEventListener("click", (el) => {
    btn.classList.toggle("rotate");
    navbar.classList.toggle("open"); 
    ocults.forEach(el => el.classList.toggle("ocult"));
});

elent_nav.forEach((el) =>{
    el.addEventListener("click", () => {
        elent_nav.forEach(item => item.classList.remove("ativo"))
        el.classList.add("ativo")
    })
})
