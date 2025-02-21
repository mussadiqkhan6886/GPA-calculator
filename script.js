const form = document.querySelector('form');

let course = 3;
function addCourse(){
    course += 1;
    const div = document.createElement('div');
    div.setAttribute('class', 'course-div');
    const inputCourse = document.createElement('input');
    const inputGrade = document.createElement('input');
    const inputCredit = document.createElement('input');
    inputCourse.autocomplete = 'off';
    inputGrade.autocomplete = 'off';
    inputCredit.autocomplete = 'off';
    inputCourse.placeholder = `Course ${course}`;
    inputGrade.placeholder = 'Grade';
    inputCredit.placeholder = 'Credits';
    inputCourse.setAttribute('class', 'course');
    inputCredit.setAttribute('class', 'half');
    inputCredit.classList.add('credit');
    inputGrade.setAttribute('class', 'half');
    inputGrade.classList.add('grade');

    div.appendChild(inputCourse);
    div.appendChild(inputGrade);
    div.appendChild(inputCredit);

    form.appendChild(div);
}

function clearAll(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}

function Calculate(){
    const courseInput = document.querySelectorAll('.course');
    const courseGrade = document.querySelectorAll('.grade');
    const courseCredit = document.querySelectorAll('.credit');
    console.log(courseInput);
    console.log(courseGrade);
    console.log(courseCredit);
}