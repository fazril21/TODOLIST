let input = document.getElementById("input");
let btnSubmit = document.getElementById('btnSubmit');


btnSubmit.addEventListener('click', function (){
    let list = document.querySelector('.list');
    let hasil = list.innerHTML;

    hasil += `<li class="listGroup">
    <input type="checkbox" name="" id="checkbox" class="checkbox">
    <span>${input.value}</span>
</li>`

    list.innerHTML = hasil;
    input.value = '';
    input.focus();

    let checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkbox.length; i++) {
       
        const cek = checkbox[i];

        cek.addEventListener('change', function() {
            let inputSpan = cek.nextElementSibling;
            inputSpan.classList.toggle ('text-decoration-line-through');
        })
    }
})

