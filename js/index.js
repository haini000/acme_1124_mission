/*
1. back to top
2. 후기 슬라이드 (06-horizontal)
3. about page (Q&A accodion)
*/

const goTop = document.querySelector('#btt');

window.addEventListener('scroll', () => {
    let scrAmt = window.scrollY;

    if (scrAmt >= 300) {
        goTop.classList.add('active');
    } else {
        goTop.classList.remove('active');
    }

    goTop.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo( {
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    })
})