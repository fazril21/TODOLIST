// let input = document.getElementById("input");
// let btnSubmit = document.getElementById('btnSubmit');


// btnSubmit.addEventListener('click', function (){
//     let list = document.querySelector('.list');
//     let hasil = list.innerHTML;

//     hasil += `<li class="listGroup">
//     <input type="checkbox" name="" id="checkbox" class="checkbox">
//     <span>${input.value}</span>
// </li>`

//     list.innerHTML = hasil;
//     input.value = '';
//     input.focus();

//     let checkbox = document.querySelectorAll('.checkbox');
//     for (let i = 0; i < checkbox.length; i++) {
       
//         const cek = checkbox[i];

//         cek.addEventListener('change', function() {
//             let inputSpan = cek.nextElementSibling;
//             inputSpan.classList.toggle ('text-decoration-line-through');
//         })
//     }
// })

const input = document.getElementById('input');
const btn = document.getElementById('btnSubmit')
let text = document.querySelector('.list')
let li =document.getElementsByTagName('li')



btn.addEventListener('click',function(){
    let textbaru = document.createTextNode(input.value)
    let component = document.createElement ('li')
    let check = document.createElement ('input')
    let p = document.createElement ('p')
    
    check.type="checkbox"
    check.id="checkbox"
    check.className ="checkbox"
    
    p.appendChild(textbaru)
    component.append(check,p)
    text.appendChild(component)

    input.value =""    
    let checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkbox.length; i++) {
        const cek = checkbox[i];
    
        cek.addEventListener('click', function() {
            let inputSpan = cek.nextElementSibling;
            inputSpan.classList.toggle ('text-decoration-line-through');
            console.info("aman")
        })
    }
})



