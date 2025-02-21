const form = document.querySelector('form');
const main =  document.querySelector('#main');
const footer = document.querySelector("#footer");
let course = 3;
let semester = 1;
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
    inputCredit.type = 'number';

    div.appendChild(inputCourse);
    div.appendChild(inputGrade);
    div.appendChild(inputCredit);

    form.appendChild(div);
}

function clearAll(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    document.querySelector("#result").innerHTML = '0.00'
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
function addSem(){
    semester += 1;
    const container = document.createElement('div');
    container.innerHTML = `
        <div class="container">
            <h2>IQRA UNIVERSITY GPA Calculator</h2>
            <div class="main">
                <h3>Semester ${semester}</h3>
                <form>
                    <div class="course-div">
                        <input type="text" autocomplete="off" placeholder="Course 1" id="course1" class="course">
                        <input type="text" autocomplete="off" placeholder="Grade" id="grade" class="grade half">
                        <input type="number" autocomplete="off" placeholder="Credits" id="credit" class="credit half">
                    </div>
                    <div class="course-div">
                        <input type="text" autocomplete="off" placeholder="Course 2" id="course1" class="course">
                        <input type="text" autocomplete="off" placeholder="Grade" id="grade" class="grade half">
                        <input type="number" autocomplete="off" placeholder="Credits" id="credit" class="credit half">
                    </div>
                    <div class="course-div">
                        <input type="text" autocomplete="off" placeholder="Course 3" id="course1" class="course">
                        <input type="text" autocomplete="off" placeholder="Grade" id="grade" class="grade half">
                        <input type="number" autocomplete="off" placeholder="Credits" id="credit" class="credit half">
                    </div>
                </form>
            </div>
            <div class="add-more-course-div">
                <button id="add-course" onclick="addCourse()">Add Course</button>
                <button onclick="addSem()">Add Semester</button>
                <button id="clear-course" onclick="clearAll()">Clear All</button>
            </div>
            <div class="calculate-div">
                <button id="calculate" onclick="Calculate()">Calculate</button>
            </div>
        </div>
        <footer id="footer">
            <div class="result">
                <h4>Result</h4>
                <p>Semester ${semester} GPA <span id="result">0.00</span></p>
            </div>
        </footer>
    ` ;
    main.appendChild(container);
}
// to be add
// delete course
// cgpa
// add sem
// how to use calculator
// iqra uni grading sheet
// print out result as pdf
// add iqra uni logo