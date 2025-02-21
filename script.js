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
    const courses = document.querySelectorAll("form div");
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach(course => {
        let grades = course.children[1].value;
        let credit = parseFloat(course.children[2].value);
        if(grades === 'a'){
            grades = 4;
        }else if(grades === 'b+'){
            grades = 3.5;
        }else if(grades === 'b'){
            grades = 3;
        }else if(grades === 'c+'){
            grades = 2.5;
        }else if(grades === 'c'){
            grades = 2;
        }else{
            grades = 0;
        }

        totalPoints += grades * credit;
        totalCredits += credit;
    });
    let gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 'N/A';
    document.querySelector("#result").innerHTML = gpa;
}