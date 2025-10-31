
let itensList = [...document.querySelectorAll(".list")] // itens list
let box_right = document.querySelector("#right")        // box right
let box_left = document.querySelector("#left")          // box left

// percorre todos os itens | chama uma função
itensList.forEach((el) => movimentacao(el)) 

function movimentacao(el){
    // estabelece que todos os itens quando movidos (dragstart) vão:
    el.addEventListener("dragstart", function pegandoElemt(elemt){
        // seleciona o item ativa o evento
        let elemt_drag = elemt.target
        // impede o comportamento padrão do navegador
        box_right.addEventListener("dragover", (e) => e.preventDefault())
        box_left.addEventListener("dragover", (e)=> e.preventDefault())
        // se soltar o item no box_right, ele será adicionado
        box_right.addEventListener("drop", () => {
            box_right.appendChild(elemt_drag);
            elemt_drag = null // limpa o elemt selecionado
        });
        // se soltar o item no box_left, ele será adicionado
        box_left.addEventListener("drop", () => {
            box_left.appendChild(elemt_drag);
            elemt_drag = null // limpa o elemt selecionado
        });
    })
}   

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// ou de uma forma mais eficiente 
//===============================

        // let itensList = [...document.querySelectorAll(".list")];
        // let box_right = document.querySelector("#right");
        // let box_left = document.querySelector("#left");

        // let draggedItem = null; // item sendo arrastado

        // // adiciona dragstart em cada item
        // itensList.forEach(el => {
        //     el.addEventListener("dragstart", (e) => {
        //         draggedItem = e.target;
        //     });
        // });

        // // permite soltar itens nos boxes
        // [box_right, box_left].forEach(box => {
        //     box.addEventListener("dragover", (e) => e.preventDefault());
        //     box.addEventListener("drop", () => {
        //         if (draggedItem) {
        //             box.appendChild(draggedItem);
        //             draggedItem = null;
        //         }
        //     });
        // });
