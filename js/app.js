//Array's
let cards = ["fas fa-hamburger", "fas fa-hamburger", "fas fa-pepper-hot", "fas fa-pepper-hot", "fas fa-pizza-slice", "fas fa-pizza-slice", "fas fa-hotdog", "fas fa-hotdog", "fas fa-ice-cream", "fas fa-ice-cream", "fas fa-fish", "fas fa-fish", "fas fa-bread-slice", "fas fa-bread-slice", "fas fa-drumstick-bite", "fas fa-drumstick-bite",];
let tempArray = [];
let match = [];

//shuffle cards
cards = cards.sort(() => Math.random() - 0.5)

//append cards
let html = "";
cards.forEach(function (item){
    html += `<li class="card"><i class="${item} fa-2x"></i></li>`;
});

$("#field").append(html);


//klikbaar en omdraaien van kaarten
$("#field").on("click", "li", function(){
    if(!$(this).hasClass("open") && !$(this).hasClass("match") && !$(this).hasClass("wrong")){
        $(this).addClass("open");
    };
});


// in tempArray zetten en checken of matched.
function checkMatch() {
    tempArray.puch(this);
    let arrayLength = tempArray.length;
    if(arrayLength === 2){
        //moveCounter();
        if(tempArray[0].type === tempArray[1]){
            //matched();
        }
        else{
            //wrong();
        }
    }
};


// wat te doen als cards matchen
function match(){
    tempArray[0].addClass("match");
    tempArray[1].addClass("match");
    tempArray[0].removeClass("open");
    tempArray[1].removeClass("open");
    tempArray = [];
}
