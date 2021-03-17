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
    
    if(!$(this).hasClass("open") && !$(this).hasClass("match") && !$(this).hasClass("wrong") && (tempArray.length <= 1)){
        $(this).addClass("open");
        tempArray.push(this);
        let arrayLength = tempArray.length;
            if(arrayLength === 2){
                checkMatch()
            }
    };
});


// in tempArray zetten en checken of matched.
function checkMatch() {
        if(tempArray[0] === tempArray[1]){
            matched();
            console.log("goed");
        }
        else{
            wrong();
            console.log("fout");
            setTimeout(closeCard, 2000);
        }
    }



// wat te doen als cards matchen
function matched(){
    $(".open").addClass("card open match");
    tempArray = [];
}

// wat als geen match
function wrong(){
   // $(".open").toggleClass().delay(10).addClass("card open wrong");
    $(".open").addClass("wrong");
  
}

function closeCard(){
    $(".open").removeClass("open wrong");
    tempArray = [];
}