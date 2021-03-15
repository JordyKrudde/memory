//Array's
let cards = ["fas fa-hamburger", "fas fa-hamburger", "fas fa-pepper-hot", "fas fa-pepper-hot", "fas fa-pizza-slice", "fas fa-pizza-slice", "fas fa-hotdog", "fas fa-hotdog", "fas fa-ice-cream", "fas fa-ice-cream", "fas fa-fish", "fas fa-fish", "fas fa-bread-slice", "fas fa-bread-slice", "fas fa-drumstick-bite", "fas fa-drumstick-bite",];
let tempArray = [""];
let matched = [""];

cards = cards.sort(() => Math.random() - 0.5)

let html = "";
cards.forEach(function (item){
    html += `<li class="card"><i class="${item} fa-2x"></i></li>`;
});

$("#field").on("click", "li", function(){
    if(!$(this).hasClass("open") && !$(this).hasClass("match") && !$(this).hasClass("wrong")){
        $(this).addClass("open");
    };
    
});


$("#field").append(html);