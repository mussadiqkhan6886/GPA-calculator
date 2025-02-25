const main =  document.querySelector('#main');
const footer = document.querySelector("#footer");
let course = 3;
let semester = 1;
let formId = 1;
function addCourse(numberForm){
    const form = document.querySelector(`#form-${numberForm}`);
    course += 1;
    const div = document.createElement('div');
    div.setAttribute('class', 'course-div');
    div.innerHTML = `
        <input type="text" autocomplete="off" placeholder="Course ${course}" id="course1" class="course">
        <select class="grade half">
            <option value="">Enter Grade</option>
            <option value="a">A</option>
            <option value="b+">B+</option>
            <option value="b">B</option>
            <option value="c+">C+</option>
            <option value="c">C</option>
            <option value="f">F</option>
        </select>
        <input type="number" autocomplete="off" placeholder="Credits" id="credit" class="credit half">
    `
    // const inputCourse = document.createElement('input');
    // const inputGrade = document.createElement('input');
    // const inputCredit = document.createElement('input');
    // inputCourse.autocomplete = 'off';
    // inputGrade.autocomplete = 'off';
    // inputCredit.autocomplete = 'off';
    // inputCourse.placeholder = `Course ${course}`;
    // inputGrade.placeholder = 'Grade';
    // inputCredit.placeholder = 'Credits';
    // inputCourse.setAttribute('class', 'course');
    // inputCredit.setAttribute('class', 'half');
    // inputCredit.classList.add('credit');
    // inputGrade.setAttribute('class', 'half');
    // inputGrade.classList.add('grade');
    // inputCredit.type = 'number';

    // div.appendChild(inputCourse);
    // div.appendChild(inputGrade);
    // div.appendChild(inputCredit);

    form.appendChild(div);
}

function clearAll(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    document.querySelector("#result").innerHTML = '0.00'
}

function Calculate() {
    const forms = document.querySelectorAll("form");  // Select all semester forms
    let overallTotalPoints = 0;
    let overallTotalCredits = 0;

    forms.forEach((form, index) => {
        let totalPoints = 0;
        let totalCredits = 0;
        const courses = form.querySelectorAll(".course-div"); // Get all courses in that semester

        courses.forEach(course => {
            let grade = course.children[1].value; // Get grade and convert to lowercase
            let credit = parseFloat(course.children[2].value);

            // Convert grades to GPA scale
            if (grade === 'a') grade = 4;
            else if (grade === 'b+') grade = 3.5;
            else if (grade === 'b') grade = 3;
            else if (grade === 'c+') grade = 2.5;
            else if (grade === 'c') grade = 2;
            else grade = 0; // Default for invalid grades

            totalPoints += grade * credit;
            totalCredits += credit;
        });

        // Calculate GPA for this semester
        let gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 'N/A';
        document.querySelectorAll("#result")[index].innerHTML = gpa; // Update corresponding result

        // Add to overall CGPA calculation
        overallTotalPoints += totalPoints;
        overallTotalCredits += totalCredits;
    });

    // Optionally, calculate CGPA across all semesters
    let cgpa = overallTotalCredits ? (overallTotalPoints / overallTotalCredits).toFixed(2) : 'N/A';
    console.log("CGPA:", cgpa); // You can display this in the UI
}

function addSem(){
    semester += 1;
    formId += 1;
    const container = document.createElement('section');
    container.innerHTML = `
        <div class="container">
            <h2>IQRA UNIVERSITY GPA Calculator</h2>
            <div class="main">
                <h3>Semester ${semester}</h3>
                <form id='form-${formId}'>
                        <div class="course-div">
                            <input type="text" autocomplete="off" placeholder="Course 1" id="course1" class="course">
                            <select class="grade half">
                                    <option value="">Enter Grade</option>
                                    <option value="a">A</option>
                                    <option value="b+">B+</option>
                                    <option value="b">B</option>
                                    <option value="c+">C+</option>
                                    <option value="c">C</option>
                                    <option value="f">F</option>
                                </select>
                            <input type="number" autocomplete="off" placeholder="Credits" id="credit" class="credit half">
                        </div>
                        <div class="course-div">
                            <input type="text" autocomplete="off" placeholder="Course 2" id="course1" class="course">
                            <select class="grade half">
                                    <option value="">Enter Grade</option>
                                    <option value="a">A</option>
                                    <option value="b+">B+</option>
                                    <option value="b">B</option>
                                    <option value="c+">C+</option>
                                    <option value="c">C</option>
                                    <option value="f">F</option>
                                </select>
                            <input type="number" autocomplete="off" placeholder="Credits" id="credit" class="credit half">
                        </div>
                        <div class="course-div">
                            <input type="text" autocomplete="off" placeholder="Course 3" id="course1" class="course">
                            <select class="grade half">
                                    <option value="">Enter Grade</option>
                                    <option value="a">A</option>
                                    <option value="b+">B+</option>
                                    <option value="b">B</option>
                                    <option value="c+">C+</option>
                                    <option value="c">C</option>
                                    <option value="f">F</option>
                                </select>
                            <input type="number" autocomplete="off" placeholder="Credits" id="credit" class="credit half">
                    </div>
                </form>
            </div>
            <div class="add-more-course-div">
                        <button id="add-course" onclick="addCourse(${formId})">Add Course</button>
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
// how to use calculator
// iqra uni grading sheet
// print out result as pdf
// add iqra uni logo
// fixed clear all , calculate and more 

