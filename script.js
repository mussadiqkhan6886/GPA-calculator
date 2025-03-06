const main = document.querySelector('#main');
const footer = document.querySelector("#footer");
const aside = document.querySelector('aside');
let course = 3;
let semester = 1;
let formId = 1;
let sectionCountForCgpa = 1;

function addCourse(numberForm) {
    const form = document.querySelector(`#form-${numberForm}`);
    course += 1;
    const div = document.createElement('div');
    div.setAttribute('class', 'course-div');
    div.innerHTML = `
        <input type="text" autocomplete="off" placeholder="Course ${course}" class="course">
        <select class="grade half">
            <option value="">Enter Grade</option>
            <option value="a">A</option>
            <option value="b+">B+</option>
            <option value="b">B</option>
            <option value="c+">C+</option>
            <option value="c">C</option>
            <option value="f">F</option>
        </select>
        <input type="number" autocomplete="off" placeholder="Credits" class="credit half">
        <i class="fa-solid fa-xmark courseDelete" ></i>
    `;
    form.appendChild(div);
    const mark = div.querySelector('.courseDelete');
    mark.addEventListener('click', (e) => {
        e.target.parentElement.classList.add('animationCourse');
        setTimeout(() => {
            e.target.parentElement.remove();   
        }, 1000)
    })
}

function clearAll(button) {
    const container = button.closest('.container');

    const inputs = container.querySelectorAll('input');
    const gradesInput = container.querySelectorAll('select');
    inputs.forEach(input => input.value = '');
    gradesInput.forEach(gradeInput => gradeInput.value = '');
    container.querySelector("#resultGpa").innerHTML = '';
}

function Calculate() {
    const forms = document.querySelectorAll("form");
    let overallTotalPoints = 0;
    let overallTotalCredits = 0;

    forms.forEach((form, index) => {
        let totalPoints = 0;
        let totalCredits = 0;
        const courses = form.querySelectorAll(".course-div");

        courses.forEach(course => {
            let grade = course.children[1].value;
            let credit = parseFloat(course.children[2].value);

            if (grade === 'a') grade = 4;
            else if (grade === 'b+') grade = 3.5;
            else if (grade === 'b') grade = 3;
            else if (grade === 'c+') grade = 2.5;
            else if (grade === 'c') grade = 2;
            else grade = 0;

            totalPoints += grade * credit;
            totalCredits += credit;
        });
        let gpa;
        // let gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 'N/A';
        if(totalCredits){
            gpa = (totalPoints / totalCredits).toFixed(2);
        }else{
            gpa = 'N/A';
            document.querySelector('.bar').classList.add('animationBegin');

            setTimeout(() => {
                document.querySelector('.bar').classList.remove('animationBegin');
            }, 3000);
        }
        document.querySelectorAll("#resultGpa")[index].innerHTML = gpa;

        overallTotalPoints += totalPoints;
        overallTotalCredits += totalCredits;
    });

    let cgpa = overallTotalCredits ? (overallTotalPoints / overallTotalCredits).toFixed(2) : 'N/A';
    document.querySelector('#resultCgpa').innerHTML = cgpa;

}

function addSem(){
    semester += 1;
    formId += 1;
    if(semester < 2){
        semester = 2;
    }
    const container = document.createElement('section');
    container.innerHTML = `
        <div class="container">
            <i class="fa-solid fa-xmark semDelete" ></i>
            <h2>IQRA UNIVERSITY GPA Calculator</h2>
            <div class="main">
                <h3>Semester ${semester}</h3>
                <form id='form-${formId}'>
                        <div class="course-div">
                            <input type="text" autocomplete="off" placeholder="Course 1" class="course">
                            <select class="grade half">
                                    <option value="">Enter Grade</option>
                                    <option value="a">A</option>
                                    <option value="b+">B+</option>
                                    <option value="b">B</option>
                                    <option value="c+">C+</option>
                                    <option value="c">C</option>
                                    <option value="f">F</option>
                                </select>
                            <input type="number" autocomplete="off" placeholder="Credits" class="credit half">
                        </div>
                        <div class="course-div">
                            <input type="text" autocomplete="off" placeholder="Course 2" class="course">
                            <select class="grade half">
                                    <option value="">Enter Grade</option>
                                    <option value="a">A</option>
                                    <option value="b+">B+</option>
                                    <option value="b">B</option>
                                    <option value="c+">C+</option>
                                    <option value="c">C</option>
                                    <option value="f">F</option>
                                </select>
                            <input type="number" autocomplete="off" placeholder="Credits" class="credit half">
                        </div>
                        <div class="course-div">
                            <input type="text" autocomplete="off" placeholder="Course 3" class="course">
                            <select class="grade half">
                                    <option value="">Enter Grade</option>
                                    <option value="a">A</option>
                                    <option value="b+">B+</option>
                                    <option value="b">B</option>
                                    <option value="c+">C+</option>
                                    <option value="c">C</option>
                                    <option value="f">F</option>
                                </select>
                            <input type="number" autocomplete="off" placeholder="Credits" class="credit half">
                    </div>
                </form>
            </div>
            <div class="add-more-course-div">
                        <button id="add-course" onclick="addCourse(${formId})">Add Course</button>
                        <button onclick="addSem()">Add Semester</button>
                        <button id="clear-course" onclick="clearAll(this)">Clear All</button>
                    </div>
            <div class="calculate-div">
                <button id="calculate" onclick="Calculate()">Calculate</button>
            </div>
        </div>
        <footer id="footer">
            <div class="result-div">
                <h4>Result</h4>
                <p>Semester ${semester} GPA <span class="result" id='resultGpa'>0.00</span></p>
            </div>
        </footer>
     `;
    main.appendChild(container);
    sectionCountForCgpa += 1;
    sectionCountForCgpa > 1 ? aside.classList.remove('hide-aside') : aside.classList.add('hide-aside');

    let markSem = document.querySelectorAll('.semDelete');
    markSem.forEach((mar) => {
        mar.addEventListener('click', (e) => {
            e.target.parentElement.classList.add('animationCourse');
            setTimeout(() => {
                e.target.parentElement.parentElement.remove();
                sectionCountForCgpa -= 1;
                semester -= 1;
                sectionCountForCgpa > 1 ? aside.classList.remove('hide-aside') : aside.classList.add('hide-aside');
                Calculate();
                document.querySelector('.bar').classList.remove('animationBegin');
            }, 1000)
            
        })
    })

}

// to be add
// how to use calculator
// iqra uni grading sheet
// print out result as pdf
// add iqra uni logo
// issue with courses
// onchange event handler