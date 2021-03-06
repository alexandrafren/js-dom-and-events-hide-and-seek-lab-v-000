function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
    const list = document.querySelectorAll('main ul.ranked-list li');
    for (let i = 0; i < list.length; i++){
        list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
}

function deepestChild() {
	const grandNodeElements = document.querySelectorAll('div#grand-node div');
	return grandNodeElements[grandNodeElements.length - 1];
}
