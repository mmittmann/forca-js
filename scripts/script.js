var splitedWord = [];
var underArray = [];

var word = document.getElementById("word");
var hint = document.getElementById("hint");

var btn = document.getElementById("btn");

btn.addEventListener('click', function(e){
    if(typeof e.preventDefault === 'function')
        e.preventDefault();

     var typedWord = word.value;
     var typedHint = hint.value; 

     splitedWord = typedWord.split('');
     underArray = Array(splitedWord.length).fill('_');

});


(function(){
    var text = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Z';

    text.split(',').forEach(function(item){
        item = item.trim();
        var btn = document.createElement('button');
        btn.innerText = item;
        btn.classList = ['btn btn-primary']

        document.body.appendChild(btn);

});

})();
