const pq = document.querySelectorAll('.question');

console.log(pq);

for (let q of pq) {
  q.addEventListener('click', () => {
    collapseAll();
    q.classList.add('active');
  })
}

function collapseAll(){
  for(let q of pq){      
    q.classList.remove('active');
  }
}