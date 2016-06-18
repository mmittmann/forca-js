var step2Module = (function(){
    var errors = 0;

    var renderArray = function (underArray) {
        var letters = document.getElementById('letters');
        letters.innerHTML = '';
        
        underArray.forEach((item) => {
                
                var div = document.createElement('div');
                div.classList.add('letterBlock');
                
                var span = document.createElement('span');
                span.innerText = item;
                span.classList.add('h2');

                div.appendChild(span);
                letters.appendChild(div);
            });
    };

    var testLetter = function (splitedWord, underArray, letter) {
        
        if(splitedWord.indexOf(letter.toLowerCase()) >= 0){
            splitedWord.forEach(function (l, index, arr) {
                if(l === letter) underArray[index] = l; 
            });
        }
        else{
            alert(`Erro numero ${++errors}`);
        }

        if(splitedWord.every((item, index) => underArray[index] == item))   {
            alert('AEEEE, boa filhão');
        }

        return underArray;
    }

    return {
        renderArray : renderArray,
        testLetter : testLetter
    };

})();

(function (stepModule) {
    
    var text = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Z',
        splitedWord = [],
    	underArray = [],
    	word = document.getElementById("word"),
    	hint = document.getElementById("hint"),
        btn = document.getElementById("btn"),
        divStep2 = document.getElementById('step2'),
        divStep1 = document.getElementById('step1'),
        step2Content = document.getElementById('step2content'),
        tip = document.getElementById('tip');

    var showStep2 = function(){
        if(!localStorage.word || !localStorage.hint)
            return;

        splitedWord = localStorage.word.split('');
        underArray = Array(splitedWord.length).fill('_');

        var p = document.createElement('p')
        p.textContent += 'Dica: ';
        p.textContent += localStorage.hint;
        p.classList = ['h2 alert alert-info'];

        tip.appendChild(p);

        divStep1.classList.add('hide');
        divStep2.classList.remove('hide');
    }
    showStep2();

    btn.addEventListener('click', function(e){
        if(typeof e.preventDefault === 'function')
            e.preventDefault();

        if(!/[a-z]+/.test(word.value))        {
            alert('não rolou!');
            return;    
        }

        localStorage.word = word.value; 
        localStorage.hint = hint.value;

        showStep2();

    });

    text.split(',').forEach(function(item){
        item = item.trim();
        var btn = document.createElement('button');
        btn.innerText = item;
        btn.classList = ['btn btn-primary marginl'];
        btn.addEventListener('click', function (e) {
            var tryedLetter = e.srcElement.innerText.toLowerCase();
            var newUnderArray = step2Module.testLetter(splitedWord, underArray, tryedLetter);
            stepModule.renderArray(newUnderArray);
        });

        step2Content.appendChild(btn);
    });
    stepModule.renderArray(underArray);

})(step2Module);


