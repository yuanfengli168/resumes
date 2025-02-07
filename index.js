// get what you clicked in .language
var languageBox = document.querySelector('.language');
var ch = languageBox.querySelector('.ch');
var en = languageBox.querySelector('.en');
var jp = languageBox.querySelector('.jp');

/**
 * add eventListener to the dom clicked, and change class name to in-front.
 * @param {object} dom Selected language dom
 */
function clickHandler(dom) {
    // what's the status for current dom
    dom.addEventListener('click', function () {
        var clickables = document.getElementsByClassName('clickable');
        for (var i = 0; i < clickables.length; i++) {
            if (dom !== clickables[i]) {
                clickables[i].classList.remove("selected");
            }
            dom.classList.add("selected");
        }

        var status = findStatus(dom);
        // console.log(status);
        if (status === 'in-front') {
            return;
        }
        swap('in-front', status);
    })
}

/**
 * 
 * @param {*} strFront 
 * @param {*} status 
 */
function swap(strFront, status) {
    var front = document.getElementsByClassName(strFront)[0];
    var cur = document.getElementsByClassName(status)[0];

    front.classList.remove(strFront);
    front.style.animation = "";
    front.classList.add(status);

    cur.classList.remove(status);
    cur.style.animation = "flyToFront 0.3s ease-out"
    cur.classList.add(strFront);
}

/**
 * get in-front, in-middle, in-back with language.
 * @param {object} dom, language dom in the language box 
 */
function findStatus(dom) {
    if (dom.classList[0] == "ch") {  // hardcoded, can use loop.
        var classList = document.querySelector('.chinese-version').classList;
        return document.querySelector('.chinese-version').classList[classList.length - 1];
    }
    else if (dom.classList[0] == 'en') {
        var classList = document.querySelector('.english-version').classList;
        return document.querySelector('.english-version').classList[classList.length - 1];
    }
    else {
        var classList = document.querySelector('.japanese-version').classList;
        return document.querySelector('.japanese-version').classList[classList.length - 1];

    }
}


clickHandler(ch);
clickHandler(en);
clickHandler(jp);




// TODO:
// start Feb7
// due: Feb11.
/**
 * 1. based on the open ip's location and language, automatically put the more closer language in front!!
 *   1.2: Goal: aiming to not blink!!/flashing!!
 * 2. better UI with more comfortable color combo. 
 * 3. Update the Language context
 * 4. using Github pages to put it online!!
 */