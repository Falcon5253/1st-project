const amount_doc = document.getElementById('amount')
const max_amount_doc = document.getElementById('max_amount')
const cards_panel = document.getElementById('cards_panel')
const progress = document.getElementById('progress')
const title_doc = document.getElementById('title_input')
const link_doc = document.getElementById('link_input')
const alert_doc = document.getElementById('alert_div')

cards_arr = []
amount = 0
max_amount = 0
k=0


class card{
    constructor(title, link, id='card-'+String(k)){
        self.title = title
        self.link = link
        self.id = id
        this.draw_card()
        k++
    }
    draw_card(){
        cards_panel.insertAdjacentHTML('beforeend','<div  id=${id} class="col-12 col-sm-6 col-lg-4 border border-white border-5 bg-dark text-white my-1"><img src="${link}" class="card-img-top mt-3 card-img" alt="..."><div class="card-body"><h2>${card title}</h2><a href="#" onclick="delete_card(\'${id}\')" class="mt-3 btn btn-danger">Удалить карточку</a></div></div>'.replace('${link}', link).replace('${id}', id).replace('${id}', id).replace('${card title}',title))
        
    }
}

function update_progress(){
    progress_var = String(amount/max_amount*100)+'%'
    if(String(progress_var)=='NaN%'){
        progress.setAttribute('style', 'width: 0%')
    }
    else{
        progress.setAttribute('style', 'width: ${progress}'.replace('${progress}', progress_var))
    }
}
function max_cards_control(){
    max_amount_doc.setAttribute('value',max_amount)
    update_progress()
}
max_amount_doc.addEventListener('change', (event) => {
    max_amount = max_amount_doc.value
    update_progress()
});

function delete_card(id){
    document.getElementById(id).remove()
    amount--
    amount_doc.textContent = amount 
    update_progress()
}



cards_arr[amount]= new card('Заголовок','https://cdn.pixabay.com/photo/2021/08/03/12/34/sparrow-6519384_960_720.jpg')

amount++

max_amount++
amount_doc.textContent = amount


function add_card(){
    if(max_amount <= amount){
        alert('Превышен лимит карточек')
    }
    else if (title_doc.value == ''){
        alert('Введите название')
    }
    else if (link_doc.value == ''){
        alert('Введите ссылку')
    }
    else{
        cards_arr[amount] = new card(title_doc.value, link_doc.value)
        alert_doc.innerHTML = `<div class="alert alert-success" role="alert">Изображение добавлено</div>`
        progress_var = String(amount/max_amount*100)+'%'    
        amount++
        amount_doc.textContent = amount
        update_progress()
        title_doc.value = ''
        link_doc.value = ''
    }
    
}

max_amount_doc.setAttribute('value', max_amount)
update_progress()
max_cards_control()


// <div class="card row my-1">
//     <img src="${link}" class="card-img-top mt-3" alt="...">
//     <div class="card-body">

//         <h2 class="card-title">Card title</h2>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>

