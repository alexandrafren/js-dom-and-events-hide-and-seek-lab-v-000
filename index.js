function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length, i++){
    list[i].innerHTML = parseInt(i, n);
  }
}