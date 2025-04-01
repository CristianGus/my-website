(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');
            answer.classList.toggle('questions__show--open');

            if (answer.classList.contains('questions__show--open')) {
                answer.style.height = '40px !important';
            } else {
                answer.style.height = '0px';
            }
        });
    });
})();