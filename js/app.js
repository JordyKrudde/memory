//Array's
let cards = ["fas fa-hamburger", "fas fa-hamburger", "fas fa-pepper-hot", "fas fa-pepper-hot", "fas fa-pizza-slice", "fas fa-pizza-slice", "fas fa-hotdog", "fas fa-hotdog", "fas fa-ice-cream", "fas fa-ice-cream", "fas fa-fish", "fas fa-fish", "fas fa-bread-slice", "fas fa-bread-slice", "fas fa-drumstick-bite", "fas fa-drumstick-bite",];
let tempArray = [];
let match = [];
let matchedCards = 0;
let moves = 0;
let stars = $(".fa-star");

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
    moves++;
    //console.log(moves);
    if(!$(this).hasClass("open") && !$(this).hasClass("match") && !$(this).hasClass("wrong") && (tempArray.length <= 1)){
        $(this).addClass("open");
        tempArray.push(this);
        let arrayLength = tempArray.length;
            if(arrayLength === 2){
                checkMatch()
            }
    };

    //timer
if(moves == 1){
    let sec = 0;
        function pad(val) {
             return val > 9 ? val : "0" + val;
            }
        setInterval( function(){
            $("#seconds").html(pad(++sec%60));
            $("#minutes").html(pad(parseInt(sec/60,10)));
        }, 1000);
    };

    if (moves > 10 && moves < 15){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.color = "grey";
            }
        }
    }
    else if (moves > 15){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.color = "grey";
            }
        }
    }

});


// in tempArray zetten en checken of matched.
function checkMatch() {
        if(tempArray[0].innerHTML === tempArray[1].innerHTML){
            matched();
        }
        else{
            wrong();
            setTimeout(closeCard, 1000);
        }
    }

// wat te doen als cards matchen
function matched() {
    $(".open").addClass("card match").removeClass("open");
    matchedCards += 2;
    finished();
    tempArray = [];
}

// wat als geen match
function wrong() {
    $(".open").addClass("wrong");
}

//card weer omdraaien
function closeCard() {
    $(".open").removeClass("open wrong");
    tempArray = [];
}

//wat als klaar
function finished() {
    if(matchedCards === 16){
        console.log("je hebt het spel uitgespeeld!!");
    }
}


