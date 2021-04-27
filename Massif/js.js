let question_arr = ['1.	СУБД – це …', "2. Система управління базами даних", "3.Яка обов’язкова умова первинного ключа?", "4.На чому базується нормалізація БД?", "5.Що називають сукупністю атрибутів, які відповідають атрибутам батьківського відношення?"]
let a1_arr = ["Система управління базами даних", "формалізований опис за допомогою математики й економетрики і кількісне вираження економічних процесів і явищ, що абстрактно відображає реальну картину економічного життя.", 'Він складається тільки з одного атрибута',"На теорії функціонування залежностей", "Первинний ключ" ]

let a2_arr = ["Система управління базами динаміки", "модель даних, в якій текстова чи числова інформація, що зображується за допомогою таблиць.", 'Він має бути унікальним', "На основі реляційної алгебри", "Дочірній ключ"]
let a3_arr = ["Сукупність умовних баз даних","логічна модель даних, що є розширенням ієрархічного підходу, сувора математична теорія, що описує структурний аспект, аспект цілісності і аспект обробки даних в мережевих базах даних.", 'Він має містити тільки числові значення', "На мережевих системах", "Зовнішній ключ " ]
let answer_arr = ["Система управління базами даних", "модель даних, в якій текстова чи числова інформація, що зображується за допомогою таблиць.", "Він має бути унікальним", "На теорії функціонування залежностей", "Зовнішній ключ "]


let n_right_answer_arr=[1,2,2,1,3];
let n_answer = 4;
let right_answers = 0;


question.innerHTML = question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(n1.checked);
    console.log(n2.checked);
    console.log(n3.checked);
    if (n1.checked){ n_a = 1;}
    if (n2.checked){ n_a = 2;}
    if (n3.checked){ n_a = 3;}
     console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Вірно:  " +right_answers+"</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }

}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question);
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
     answer.innerHTML = answer_arr[n_question.value];
    n_right_answer = n_right_answer_arr[n_question.value];
}

