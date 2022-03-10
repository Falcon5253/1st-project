function absValue(x){
    if(x>0){
        return x;
    }
    else{
        return (0-x);
    }
}

function isPolindrom(text){
    var text1 = ''
    for(var i = text.length-1; i>=0; i--){
        text1 += text[i]
    }
    return text==text1
}

function matrixAddition(A, B){
    {   
        var m = A.length
        var n = A[0].length
        //Проверка на возможность их сложить..............
        if (A.length!=B.length){
            return 'Невозможно сложить матрицы' //У матрицы должно быть одинаковое количество строк
        }
        else{
            var l = A[0].length
            for (var i = 0; i < m; i++){
                if (A[i].length!=B[i].length || l!=A[i].length){
                    return 'Невозможно сложить матрицы' //У матрицы должно быть одинаковое 
                }                                       //количество столбцов и их количество
            }                                           //должно совпадать в каждой строке
        }
        //...............................................
        var C = []
        //Алгоритм сложения
        for (var i = 0; i < m; i++){
            C[i] = []
            for (var j = 0; j < n; j++){
                C[i][j] = A[i][j]+B[i][j];
           }
        }
        var text = ''
        C.forEach(element => { element.forEach( element => { text += (element + ' ')}); text += '\n' }); //Алгоритм вывода построчно
        console.log(text)
        return 'Матрицы успешно сложены';
    }
}

let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
}
arr = []
text3 = ''
Object.keys(student).forEach(element => text3+=element+ ', ')
if (text3[text3.length-2] == ',') text3 = text3.substring(0, text3.length-2)
console.log('Список свойств: ' + text3)
console.log('Студент ' + student.first_name + ' ' + student.last_name + ' учится в ' + student.group + ' группе')

var n = 0
draw_slide(n)

b_next = document.getElementById('next_button')
b_prev = document.getElementById('previous_button')

b_next.setAttribute('onlick', 'next_slide()')

function next_slide(){
    if(n<2){
        n+=1
        draw_slide(n)
    }
    else{
        n=0
        draw_slide(n)
    }
}
function previous_slide(){
    if(n>0){
        n-=1
        draw_slide(n)
    }
    else{
        n=2
        draw_slide(n)
    }
}

function draw_slide(n){
    if(n==0){
        document.getElementById('slider').innerHTML = 
        `
        <div class='fashion__content'>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/13.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/11.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/10.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/12.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
        </div>
        `
        document.getElementById('position').innerHTML = 
        `
        <div class='position position_current'><p>1</p></div><div class='position'><p>2</p></div><div class='position'><p>3</p></div>
        `
    }
    else if(n==1){
        document.getElementById('slider').innerHTML =
        `
        <div class='fashion__content'>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide1.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide2.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide3.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide4.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
        </div>
        `
        document.getElementById('position').innerHTML = 
        `
        <div class='position'><p>1</p></div><div class='position position_current'><p>2</p></div><div class='position'><p>3</p></div>
        `
    }
    else if(n==2){
        document.getElementById('slider').innerHTML =
        `
        <div class='fashion__content'>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide5.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide6.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide7.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
            <div class='product-card'>
                <div class='product-card__img'>
                    <a href='#' ><img src='img/slide8.jpg'  alt=''></a>
                </div>
                <div class='product-card__description'>
                    <span class='brand-name'>IGURE</span>
                    <p class='product-name'>GREEN MUSCLE FIT POLO SHIRT</p>
                </div>
                <div class='product-card__price'>
                    <span class='old-price' data-currency='$'>223.00</span>
                    <span class='new-price' data-currency='$'>129.00</span>
                </div>
            </div>
        </div>
        `
        document.getElementById('position').innerHTML = 
        `
        <div class='position'><p>1</p></div><div class='position'><p>2</p></div><div class='position position_current'><p>3</p></div>
        `
    }
}
