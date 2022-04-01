// var path = require('path');
const socket = io();
var x = screen.height;
x = x - 110;
document.getElementById("side-bar").style.height = `${x}px`;
document.getElementById("content").style.height = `${x}px`;

function display(a) {

    if (a.style.display == "none") {
        a.style.display = "block";
    }

    else {
        a.style.display = "none";
    }

}

const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekUse = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



var today = new Date();
var today_day = today.getDay();
var hours = today.getHours();
var min = today.getMinutes();
var second = today.getSeconds();
var after_sec = ((24 - hours) * 60 - min) * 60 - second;

for (let index = 0; index < 56; index++) {
    if (document.getElementsByClassName("checkclass")[index].innerHTML != "No Class") {
        document.getElementsByClassName("checkclass")[index].style.backgroundColor = "#9cadfd";
        document.getElementsByClassName("checkclass")[index].style.color = "black";
    }
}

for (let index = 0; index < 9; index++) {

    if (today_day != 0 && document.getElementsByClassName(`${weekday[today_day - 1]}`)[index].innerHTML != "No Class") {
        document.getElementsByClassName(`${weekday[today_day - 1]}`)[index].style.backgroundColor = "#105652";
        document.getElementsByClassName(`${weekday[today_day - 1]}`)[index].style.color = "white";
    }

    if (today_day == 0 && document.getElementsByClassName(`${weekday[6]}`)[index].innerHTML != "No Class") {
        document.getElementsByClassName(`${weekday[6]}`)[index].style.backgroundColor = "#105652";
        document.getElementsByClassName(`${weekday[6]}`)[index].style.color = "white";
    }
}

for (let index = 0; index < 7; index++) {
    document.getElementsByClassName("lunchTime")[index].style.backgroundColor = "#B7F6AF"
    document.getElementsByClassName("lunchTime")[index].style.color = "black"
}


setTimeout(() => {
    let today = new Date();
    let today_day = today.getDay();

    for (let index = 0; index < 7; index++) {

        document.getElementsByClassName("weekday")[index].style.backgroundColor = "#84DFFF"
        document.getElementsByClassName("weekday")[index].style.color = "black"

    }

    for (let index = 0; index < 56; index++) {
        if (document.getElementsByClassName("checkclass")[index].innerHTML != "No Class") {
            document.getElementsByClassName("checkclass")[index].style.backgroundColor = "#9cadfd";
            document.getElementsByClassName("checkclass")[index].style.color = "black";
        }
    }


    for (let index = 0; index < 9; index++) {

        if (today_day != 0 && document.getElementsByClassName(`${weekday[today_day - 1]}`)[index].innerHTML != "No Class") {
            document.getElementsByClassName(`${weekday[today_day - 1]}`)[index].style.backgroundColor = "#105652";
            document.getElementsByClassName(`${weekday[today_day - 1]}`)[index].style.color = "white";
        }

        if (today_day == 0 && document.getElementsByClassName(`${weekday[6]}`)[index].innerHTML != "No Class") {
            document.getElementsByClassName(`${weekday[6]}`)[index].style.backgroundColor = "#105652";
            document.getElementsByClassName(`${weekday[6]}`)[index].style.color = "white";
        }

    }

    for (let index = 0; index < 7; index++) {
        document.getElementsByClassName("lunchTime")[index].style.backgroundColor = "#B7F6AF"
        document.getElementsByClassName("lunchTime")[index].style.color = "black"
    }






}, after_sec * 1000);

if (hours > 8 && hours < 17 && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].innerHTML != "Lunch Time") {
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.backgroundColor = "#F6F631";
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.color = "black";
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.fontWeight = "900";
    document.getElementById("join-button").style.display = "block";
    let class_name = document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].innerHTML;
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.cursor = "pointer";
    document.getElementById("join-button").style.cursor = "pointer";
    document.getElementById("join-button").addEventListener("click", function () {
        take_attendance(`${class_name}`);
    });
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].addEventListener("click", function () {
        google_meet_create_and_redirect(`${class_name}`);
    });




}




setTimeout(() => {

    if (hours > 8 && hours < 17 && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].innerHTML != "Lunch Time") {
        document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.backgroundColor = "#105652";
        document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.color = "white";
        document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.fontWeight = "400";
        document.getElementById("join-button").style.display = "none";



    }

    let newhours = new Date().getHours();
    let newtoday_day = new Date().getDay();

    if (newhours > 8 && newhours < 17 && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "Lunch Time") {
        document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.backgroundColor = "#F6F631";
        document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.color = "black";
        document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.fontWeight = "900";
        document.getElementById("join-button").style.display = "block";
        document.getElementsByClassName(`${weekUse[newtoday_day]}`)[hours - 8].style.cursor = "pointer"
        document.getElementById("join-button").style.cursor = "pointer";
        let class_name = document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML;
        document.getElementById("join-button").addEventListener("click", function () {
            take_attendance(`${class_name}`);
        });
        document.getElementsByClassName(`${weekUse[newtoday_day]}`)[hours - 8].addEventListener("click", function () {
            google_meet_create_and_redirect(`${class_name}`);
        });
    }

    setInterval(() => {
        if (newhours > 8 && newhours < 17 && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "Lunch Time") {
            document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.backgroundColor = "#105652";
            document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.color = "white";
            document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.fontWeight = "400";
            document.getElementById("join-button").style.display = "none";
        }

        newhours = new Date().getHours();
        newtoday_day = new Date().getDay();
        if (newhours > 8 && newhours < 17 && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "Lunch Time") {
            document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.backgroundColor = "#F6F631";
            document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.color = "black";
            document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.fontWeight = "900";
            document.getElementById("join-button").style.display = "block";
            document.getElementsByClassName(`${weekUse[newtoday_day]}`)[hours - 8].style.cursor = "pointer"
            document.getElementById("join-button").style.cursor = "pointer";
            let class_name = document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML;
            document.getElementById("join-button").addEventListener("click", function () {
                take_attendance(`${class_name}`);
            });
            document.getElementsByClassName(`${weekUse[newtoday_day]}`)[hours - 8].addEventListener("click", function () {
                google_meet_create_and_redirect(`${class_name}`);
            });
        }
    }, 3600000);

}, (60 - min) * 60000);





if (min < 50) {
    setTimeout(() => {

        let newtoday_day1 = new Date().getDay();
        let newhours1 = new Date().getHours();
        let newmin1 = new Date().getMinutes();

        if (newhours1 > 8 && newhours1 < 16 && newmin1 >= 50 && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "Lunch Time") {
            document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].style.backgroundColor = "#F8485E";
        }
        setInterval(() => {
            newtoday_day1 = new Date().getDay();
            newhours1 = new Date().getHours();
            newmin1 = new Date().getMinutes();

            if (newhours1 > 8 && newhours1 < 16 && newmin1 >= 50 && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "Lunch Time") {
                document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].style.backgroundColor = "#F8485E";
            }

        }, 3600000);
    }, (50 - min) * 60000);

}

else {

    if (hours > 8 && hours < 16 && min >= 50 && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 7].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 7].innerHTML != "Lunch Time") {
        document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 7].style.backgroundColor = "#F8485E";
    }


    setTimeout(() => {

        let newtoday_day1 = new Date().getDay();
        let newhours1 = new Date().getHours();
        let newmin1 = new Date().getMinutes();

        if (newhours1 > 8 && newhours1 < 16 && newmin1 >= 50 && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "Lunch Time") {
            document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].style.backgroundColor = "#F8485E";
        }
        setInterval(() => {
            newtoday_day1 = new Date().getDay();
            newhours1 = new Date().getHours();
            newmin1 = new Date().getMinutes();

            if (newhours1 > 8 && newhours1 < 16 && newmin1 >= 50 && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].innerHTML != "Lunch Time") {
                document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[newhours1 - 7].style.backgroundColor = "#F8485E";
            }

        }, 3600000);
    }, (60 - min + 50) * 60000);

}







function create_assignment_click() {
    document.getElementById("create-assignment").style.display = "none";
    document.getElementById("create-assignment-form").style.display = "block";
    document.getElementById("assignment-form").style.display = "block";
    document.getElementById("upload-assignment").style.display = "none";
}


function displayNone() {

    document.getElementById("personal-info").style.display = "none";
    document.getElementById("my-time-table").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("class-home-page").style.display = "none";
    document.getElementById("students").style.display = "none";
    document.getElementById("assigment").style.display = "none";
    document.getElementById("subject_of_class").style.display = "none";
    document.getElementById("attendance").style.display = "none";
    // document.getElementById("pdf_viewer").style.display="none";
    document.getElementById("attendance_report").style.display="none";

}


function displayNone_ForClasses() {

    document.getElementById("personal-info").style.display = "none";
    document.getElementById("my-time-table").style.display = "none";
    // document.getElementById("classes").style.display="none";
    document.getElementById("class-home-page").style.display = "none";
    document.getElementById("students").style.display = "none";
    document.getElementById("assigment").style.display = "none";
    document.getElementById("subject_of_class").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";

}

function displayOn(a) {

    displayNone();
    a.style.display = "block";

}

const allocatedClass = document.getElementById("side-bar-li-allocatedClass");
allocatedClass.addEventListener("click", (event) => {
    display(document.getElementById('allocated-classes'));
});


function displayonclass(class_name) {
    displayNone();
    // loder();
    document.getElementById("class-name-subject").innerHTML = "";
    document.getElementById("subject_of_class").innerHTML = "";
    document.getElementById("class-name-name").innerHTML = `${class_name}`;

    const xmr = new XMLHttpRequest();

    xmr.open("POST", "/AllocatedClassSubject", true);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmr.onload = function () {
        
        console.log(this.responseText);
        let arrayOfSubject = JSON.parse(this.responseText);
        let letOfSubjectArray = arrayOfSubject.length;

        for (let index = 0; index < letOfSubjectArray; index++) {
            document.getElementById("subject_of_class").innerHTML += `<div class = "upload-assigment-div temp" onclick="clickOnSubject('${arrayOfSubject[index].subject_name}','${class_name}')">
           <p class="upload-assigment-name" maxlength="50" >${arrayOfSubject[index].subject_name}  (${arrayOfSubject[index].subject_id})</p>
           </div>`;
        }

        // document.getElementById("loder").style.display="none";
        console.log("hello from classes");
        Open("classes");
        Open("subject_of_class");



    }



    xmr.send(`Teacher_Id=${document.getElementById("teacher_id").innerHTML}&class_name=${class_name}`);


}


function Open(a) {
    document.getElementById(`${a}`).style.display = "block";
}

function clickOnSubject(subject_name, class_name) {
    displayNone_ForClasses();

    close_chat();
    document.getElementById("class-name-name").innerHTML = `${class_name}`;
    document.getElementById("class-name-subject").innerHTML = `(${subject_name})`;

    // Open("classes");
    Open("class-home-page");

}


document.getElementById("class-students").onclick = function () {

    const class_name = document.getElementById("class-name-name").innerHTML;
    console.log(class_name);
    student_details(class_name);
};


function student_details(class_name) {
    displayNone_ForClasses();
    loder();
    const temp = document.getElementById("student-table-heading").innerHTML;
    document.getElementById("student-table").innerHTML = "";
    document.getElementById("student-table").innerHTML += `<tr id="student-table-heading">${temp}</tr>`;

    const xmr = new XMLHttpRequest();
    xmr.open("POST", "/ClassStudent", true);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmr.onload = function () {

        let student_data = JSON.parse(this.responseText);
        let number_of_student = student_data.length;

        for (let index = 0; index < number_of_student; index++) {
            document.getElementById("student-table").innerHTML +=
                `<tr class = "student-tr">
            <td class = "student-td SEnroll_NO" >${student_data[index].student_id}</td>
            <td class = "student-td SName">${student_data[index].name}</td>
            <td class = "student-td" SEmail><a class="student-table-href" href="mailto:${student_data[index].email_id}">${student_data[index].email_id}</a></td>
            <td class = "student-td" SPhone><a class="student-table-href" href="tel: +91${student_data[index].phone_number}">${student_data[index].phone_number}</a></td>
            <td class = "student-td SMore_NO" > <a href="" id = "${student_data[index].student_id}">...</a></td>
            </tr>`;



        }

        // Open("classes");
        document.getElementById("loder").style.display="none";
        Open("students");




    }


    xmr.send(`class_name=${class_name}`);




}


document.getElementById("class-assignments").onclick = function () {
    displayNone_ForClasses();

    document.getElementById("upload-assignment").innerHTML = "";

    const xmr = new XMLHttpRequest();
    xmr.open("post", "/upload_Assigment_Read");
    const Teacher_Id = document.getElementById("teacher_id").innerHTML;
    const class_name = document.getElementById("class-name-name").innerHTML;
    const s = document.getElementById("class-name-subject").innerHTML;
    const subject = s.substring(1, s.length - 1);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmr.onload = function () {
        const data = JSON.parse(this.responseText);
        const length = data.length;

        for (let index = 0; index < length; index++) {
            const Title = data[index].title;
            const due = new Date(data[index].due_date_and_time);
            const assigment_id = data[index].assigment_id;

            let due_date = due.toLocaleString('en-US', {
                day: 'numeric', // numeric, 2-digit
                year: 'numeric', // numeric, 2-digit
                month: 'short', // numeric, 2-digit, long, short, narrow

            });

            document.getElementById("upload-assignment").innerHTML +=
                `<div class = "upload-assigment-div" style="cursor: pointer;" onclick = "assigment_view('${assigment_id}')" >
            <p class="upload-assigment-name">${Title}</p>
            <p class="upload-assignment-dueDate">Due: ${due_date}</p>
            </div>`;




        }

        // document.getElementById("classes").style.display="block";
        // document.getElementById("assigment").style.display="block";
        document.getElementById("assignment-form").style.display = "none";
        Open("create-assignment");
        Open("upload-assignment");
        Open("assigment");

        // document.getElementById("create-assignment").style.display="block";
        // document.

    };

    xmr.send(`teacher_id=${Teacher_Id}&class_name=${class_name}&subject_name=${subject}`);



}


window.addEventListener('click', function (e) {

    let div = document.getElementById("Title-div");
    if (div.contains(e.target)) {
        div.style.padding = "5px 25px 15px 5px";
        div.style.cursor = "pointer";
        document.getElementById("Title").style.border = "none";
        div.style.height = "70px";
        div.style.overflow = "hidden";
        document.getElementById("Title-heading").style.fontSize = "18.72px";

    } else {

        div.style.padding = "15px 15px 15px 15px";
        div.style.cursor = "text";
        div.style.height = "60px"
        document.getElementById("Title").style.border = "none";
        document.getElementById("Title-heading").style.fontSize = "18.72px";

    }
});


window.addEventListener('click', function (e) {

    let div = document.getElementById("Instructions-div");
    if (div.contains(e.target)) {
        div.style.padding = "5px 25px 15px 5px";
        div.style.cursor = "pointer";
        document.getElementById("Instructions").style.border = "none";
        div.style.height = "150px";
        div.style.overflow = "hidden";
        document.getElementById("Instructions-heading").style.fontSize = "18.72px";

    } else {

        div.style.padding = "15px 15px 15px 15px";
        div.style.cursor = "text";
        div.style.height = "140px"
        document.getElementById("Instructions").style.border = "none";
        document.getElementById("Instructions-heading").style.fontSize = "24px";

    }
});


document.getElementById("input-file").onchange = function () {

    let file = document.getElementById("input-file").value;
    var filename = file.replace(/^.*[\\\/]/, '');
    document.getElementById("file-name").innerHTML = filename;

}








window.addEventListener('click', function (e) {

    let div = document.getElementById("link-div");
    if (div.contains(e.target)) {
        div.style.padding = "0px 5px 5px 0px";
        div.style.cursor = "pointer";
        div.style.height = "45px";
        document.getElementById("Instructions").style.border = "none";
        document.getElementById("Instructions-heading").style.fontSize = "0.83em";

    } else {

        div.style.padding = "5px 5px 5px 5px";
        div.style.cursor = "text";
        div.style.height = "40px";
        document.getElementById("Instructions").style.border = "none";
        document.getElementById("Instructions-heading").style.fontSize = "1em";

    }
});


document.getElementById("link-input").onchange = function () {
    if (document.getElementById("link-input").value != "") {
        let element = document.getElementById("link-add");
        element.style.color = "gray";
        element.style.cursor = "pointer";
        document.getElementById("link-add").onclick = addclick();

    }

    else {
        let element = document.getElementById("link-add");
        element.style.color = "rgba(128, 128, 128, 0.5)";
        element.style.cursor = "context-menu";

    }

}


document.getElementById("link-cancel").onclick = function () {
    document.getElementById("link-input").value = "";
    document.getElementById("add-link").innerHTML = "";
    document.getElementById("add-link-div").style.display = "none";
    let element = document.getElementById("link-add");
    element.style.color = "rgba(128, 128, 128, 0.5)";
    element.style.cursor = "context-menu";

}

function addclick() {

    let link = document.getElementById("link-input").value;
    document.getElementById("add-link-div").style.display = "none";
    document.getElementById("add-link").innerHTML = `<a href="${link}" id="added-link"">Link</a>`;

}

document.getElementById("cancell-assigment-form").onclick = function () {
    document.getElementById("assignment-form").style.display = "none";
    document.getElementById("assigment").style.display = "block";
    document.getElementById("create-assignment").style.display = "block";
    document.getElementById("upload-assignment").style.display = "block";


}

const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


let assigment_form = document.getElementById("create-assignment-form");

assigment_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form_data = new FormData();
    var xmr = new XMLHttpRequest();
    const Teacher_Id = document.getElementById("teacher_id").innerHTML;
    const class_name = document.getElementById("class-name-name").innerHTML;
    const s = document.getElementById("class-name-subject").innerHTML;
    const subject_name = s.substring(1, s.length - 1);
    const Title = document.getElementById("Title").value;
    const Instructions = document.getElementById("Instructions").value;
    const files = document.querySelector('[name=file]').files;
    const Due_Date = document.getElementById("Due-Date-input").value;
    const link = document.getElementById("link-input").value;
    const Max_Point = document.getElementById("Max-points-input").value;
    form_data.append('teacher_id', Teacher_Id);
    form_data.append('class_name', class_name);
    form_data.append('subject_name', subject_name);
    form_data.append('title', Title);
    form_data.append('instructions', Instructions);
    form_data.append('uploaded_files', files[0]);
    form_data.append('due_date_and_time', Due_Date);
    form_data.append('link', link);
    form_data.append('max_point', Max_Point);

    console.log("sonu");
    console.log(Teacher_Id);
    console.log(class_name);
    console.log(subject_name);





    xmr.open("post", "/Create_Assigment");

    xmr.onload = function () {
        console.log("true");
        const data = JSON.parse(this.responseText)[0];
        const Due_Date = new Date(data.due_date_and_time);
        const Title = data.title;
        console.log(data);
        console.log(Title);
        console.log(Due_Date)
        let due_date = Due_Date.toLocaleString('en-US', {
            day: 'numeric', // numeric, 2-digit
            year: 'numeric', // numeric, 2-digit
            month: 'short', // numeric, 2-digit, long, short, narrow

        });


        const main_div = document.getElementById("upload-assignment");
        const temp_div = main_div.innerHTML;
        main_div.innerHTML = "";

        main_div.innerHTML +=
            `<div class = "upload-assigment-div"  style="cursor: pointer;" onclick = "assigment_view()"  >
         <p class="upload-assigment-name">${Title}</p>
         <p class="upload-assignment-dueDate">Due: ${due_date}</p>
         </div>`;
        main_div.innerHTML += temp_div;
        document.getElementById("assignment-form").style.display = "none";
        document.getElementById("assigment").style.display = "block";
        document.getElementById("create-assignment").style.display = "block";
        document.getElementById("upload-assignment").style.display = "block";
        document.getElementById("reset").click();

    }

    xmr.send(form_data);

});








function assigment_view(assigment_id) {
    console.log("sonu");
    console.log(assigment_id);
    var xmr = new XMLHttpRequest();
    xmr.open("post", "/full-assigment-data");
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    xmr.onload = function () {
        const data = JSON.parse(this.responseText);
        const Title = data[0].Title;
        const Instructions = data[0].Instructions;
        const file_path = data[0].file_path;
        const link = data[0].link;
        const Due_Date = data[0].Due_Date;
        let d = Due_Date.toString();
        let year = d.substr(0, 4);
        let month = Month[parseInt(d.substr(5, 7)) - 1];
        let date = d.substr(8, 10);
        let due_date = date.substr(0, 2) + " " + month + " " + year;
        const Max_Point = data[0].Max_Point;
        document.getElementById("assigment-view-title").innerHTML = `${Title}`;
        document.getElementById("assigment-view-Instruction").innerHTML = `${Instructions}`;
        document.getElementById("assigment-view-due-date").innerHTML += `${due_date}`;
        document.getElementById("assigment-view-max-point").innerHTML += `${Max_Point}`;
        console.log(file_path.toString());
        document.getElementById("view-link").src = `${link}`;

        student_assigment_info(assigment_id);

        displayNone();
        document.getElementById("create-assignment").style.display = "none";
        document.getElementById("upload-assignment").style.display = "none";
        document.getElementById("classes").style.display = "block";
        document.getElementById("assigment").style.display = "block";
        document.getElementById("assigment-view").style.display = "block";

    }




    xmr.send(`assigment_id=${assigment_id}`);


}


function student_assigment_info(assigment_id) {
    const xmr = new XMLHttpRequest();
    xmr.open("post", "/student_assigment_infomation");
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmr.onload = function () {

    }


    xmr.send(`assigment_id=${assigment_id}`);







}


console.log(document.getElementById("Monday_9").innerHTML);
console.log("hello");







function google_meet_create_and_redirect(class_name) {
    let my_class_name = class_name.split('(', 1)[0];
    let subject_id = class_name.split('(', 2)[1].split(')', 1)[0];
    let teacher_id = document.getElementById("teacher_id").innerHTML;
    let new_date = new Date();
    let day_number = new_date.getDay();
    let slot_number = new_date.getHours() - 8;
    displayNone();
    loder();

    
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    var XMI = new XMLHttpRequest();
    XMI.open("post", "/get_gmeet_updateted");
    XMI.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    XMI.onload = function () {
        const data = JSON.parse(this.responseText);
        const last_updated_date = data[0].update_link_date;
        const google_meet_link_new = data[0].google_meet_link;
        let new_date = new Date().toISOString().slice(0, 10);
        

        if (new_date == last_updated_date) {

            window.open(`${google_meet_link_new}`);
        }

        else {
            var xmr = new XMLHttpRequest();
            xmr.open("post", "/get_student_email_for_gmeet");
            xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xmr.onload = function () {
                const data = JSON.parse(this.responseText);
                const length = data.length;
                const number_of_student_email = length - 2;
                const teacher_email = data[length - 2].teacher_Email;
                const subject_name = data[length - 1].subject_name;
                let start_time_date = new Date();
                let start = start_time_date.toISOString();



                

                start_time_date.setHours(start_time_date.getHours() + 1);
                let end = start_time_date.toISOString();

                const arr = [];
                console.log(data);
                for (let index = 0; index < number_of_student_email; index++) {

                    arr.push({ "email": `${data[index].email_id}` });
                   
                    
                }
                // const array = JSON.stringify(arr);
                // console.log(array);


                function authenticate() {
                    return gapi.auth2.getAuthInstance()
                        .signIn({ scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events" })
                        .then(function () { console.log("Sign-in successful"); },
                            function (err) { console.error("Error signing in", err); });
                }
                function loadClient() {
                    gapi.client.setApiKey("AIzaSyDDtYtbtPD2Lrg5AowRcN8FW6f4ogSi0CA");
                    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
                        .then(function () { console.log("GAPI client loaded for API"); },
                            function (err) { console.error("Error loading GAPI client for API", err); });
                }
                function execute() {
                    return gapi.client.calendar.events.insert({
                        "calendarId": `${teacher_email}`,
                        // "calendarId": "singlasonu.net@gmail.com",
                        "conferenceDataVersion": 1,
                        "maxAttendees": 5,
                        "sendNotifications": true,
                        "sendUpdates": "all",
                        "supportsAttachments": true,
                        "resource": {
                            "end": {
                                "dateTime": `${end}`
                            },
                            "start": {
                                "dateTime": `${start}`
                            },
                            "summary": `Invitation for class of ${subject_name}`,
                            "attendees": arr,
                            "conferenceData": {
                                "createRequest": {
                                    "requestId": "ss_group_17111998",
                                    "conferenceSolutionKey": {
                                        "type": "hangoutsMeet"
                                    }
                                }
                            }
                        }
                    })

                        .then(function (response) {
                            // Handle the results here (response.result has the parsed body).
                            let google_meet_link = response.result.hangoutLink;
                            console.log(google_meet_link);
                            var xml = new XMLHttpRequest();
                            xml.open("post", "/set_google_meet_link");
                            xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                            xml.onload = function () {
                                document.getElementById("loder").style.display="none";
                                socket.emit('Join_class', `${google_meet_link}`,`${my_class_name}`,slot_number,day_number);
                                window.open(`${google_meet_link}`);



                            }


                            xml.send(`google_meet_link=${google_meet_link}&slot_number=${slot_number}&teacher_id=${teacher_id}&day_number=${day_number}`);


                           

                        },
                            function (err) { console.error("Execute error", err); });
                }
                gapi.load("client:auth2", function () {
                    gapi.auth2.init({ client_id: "507797866991-1duabb2a8sh2hdnof5dcu1og2fcdofm0.apps.googleusercontent.com" });
                });

                setTimeout(() => {
                    
                    authenticate().then(loadClient).then(execute);
                }, 3000);


            }


            xmr.send(`subject_id=${subject_id}&class_name=${my_class_name}&teacher_id=${teacher_id}`);

        }

    }


    XMI.send(`slot_number=${slot_number}&teacher_id=${teacher_id}&day_number=${day_number}`);





}







// //soket code




//chat box

document.getElementById("chat_box").onclick = open_chat_box;

function open_chat_box()
{
    document.getElementById("message_container").innerHTML ="";
    const subject_name = document.getElementById("class-name-subject").innerHTML;
    const class_name = document.getElementById("class-name-name").innerHTML;
    const room = class_name.concat(subject_name);
    const room_name = "chat".concat(room);
    const name = document.getElementById("teacher_name").innerHTML;
    socket.emit('join_chat_room', `${room_name}`);
 
    insert_old_message(room_name,name);
    document.getElementById("chats").style.display = "block"; 
    document.getElementById("chat_box_dev").style.bottom = "90%";
    document.getElementById("close_chat").style.display="block";
    document.getElementById("chat_box_dev").classList.remove("chat_box_dev_dev");
  


}

document.getElementById("close_chat").onclick = close_chat;

function close_chat() {
    console.log("hello");
    document.getElementById("chats").style.display = "none"; 
    document.getElementById("chat_box_dev").style.bottom = "0";
    document.getElementById("close_chat").style.display="none";
    document.getElementById("chat_box_dev").classList.add("chat_box_dev_dev");
}

function out(message , date_time){
    console.log("from out");
 
    document.getElementById("message_container").innerHTML+= `<div id="out"><div id="out_message">${message}</div><p id="message_out_date_time">${date_time}</p></div>`;

    const messageBody = document.getElementById("message_container");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

function inn(message,name,date_time)
{
    console.log("from inn");
    document.getElementById("message_container").innerHTML+= `<div id="in">
    <p id="name_of_sender">${name}</p>
    <div id="in_messeage">${message}</div>
    <p id="message_in_date_time">${date_time}</p>
    </div>`;

    const messageBody = document.getElementById("message_container");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

}

document.getElementById("input_message").addEventListener("keyup",(e)=>{
    if(e.key==="Enter")
    {
        const m = e.target.value;
        const message = m.substr(0,m.length-1);
        
        e.target.value="";
        const d = new Date();
        const date = d.toLocaleString('en-US', {
            day: 'numeric',
            year: 'numeric', 
            month: 'short',
            hour: "2-digit",
            minute :"2-digit"    
        });

         out(message,date);
         const name = document.getElementById("teacher_name").innerHTML;
         const subject_name = document.getElementById("class-name-subject").innerHTML;
         const class_name = document.getElementById("class-name-name").innerHTML;
         const room = class_name.concat(subject_name);
         const room_name = "chat".concat(room);
         socket.emit("message_handel" , `${message}` , `${date}` ,`${name}` ,`${room_name}`);


    }

});

socket.on("in_message",(message,date,name)=>{

    console.log(message);
    console.log(`hello from ${message} ${name} ${date}`);
    inn(message,name,date);
});


socket.on("alert_to_message",(room)=>{

    window.alert(`You have new message in ${room}`);
});
// inn("sonu singla" , "shubham" , "Mar 23, 2022, 11:00 PM");


const teacher_id = document.getElementById("teacher_id").innerHTML;
socket.emit("join_all_room_of_this_teacher" , `${teacher_id}`);



function insert_old_message(room_name, name ){

    const xmr = new XMLHttpRequest();
    xmr.open("POST", "/insert_message", true);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmr.onload = function () {
        const data = JSON.parse(this.responseText);
        for (let index = 0; index < data.length; index++) {
            const sender_name = data[index].sender_name;
            const date = data[index].date;
            const message = data[index].message;

            if(sender_name==name)
            {
                out(message,date);

            }
            else
            {
                inn(message,sender_name,date);
            }
            
        }
    }



    xmr.send(`room_name=${room_name}`);


}



//attendane

function take_attendance(class_name_temp)
{
    displayNone();
    const d = new Date();
    const date = d.toLocaleString('en-US', {
            day: 'numeric',
            year: 'numeric', 
            month: 'short',
   
    });
    document.getElementsByClassName("attendane_date")[0].innerHTML=date;
    document.getElementsByClassName("class_name_in_attendance")[0].innerHTML=`${class_name_temp}`


    const class_name= class_name_temp.split("(" , 1)[0];
    const subject_id= class_name_temp.split("(" , 2)[1].split(")",1)[0];
    const xmr = new XMLHttpRequest();
    xmr.open("POST", "/ClassStudent", true);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmr.onload = function()
    {
        
        const data = JSON.parse(this.responseText);
        
        for (let index = 0; index < data.length; index++) {
            const student_id = data[index].student_id;
            const name = data[index].name;
           document.getElementById("attendance_div").innerHTML+=`<div class = "upload-assigment-div attence_main_div attendance_main_div" id="attence_${student_id}"  >
           <p id="attendance_en_${student_id}" class="attendance_class attendance_class_student_id">${student_id}</p>
           <p id="attendance_na_${student_id}" class="attendance_class">${name}</p>
           <p id="attendance_p_${student_id}" class="attendance_class"><input type="radio" name="attendance_${student_id}" id="pressent_${student_id}" class="pressent"> <input type="radio" name="attendance_${student_id}" id="absent_${student_id}" class="absent"></p>
           </div>`
            
        }

        help_attendance();
        document.getElementById("attendance").style.display="block";
    }

    xmr.send(`class_name=${class_name}`);
   

}


document.getElementById("submit_attendance").onclick = submit_attendance;

function help_attendance() {
    const temp = document.getElementsByClassName("class_name_in_attendance")[0].innerHTML;
    const elements = document.getElementsByClassName("attendance_class_student_id");
    for (let index = 0; index < elements.length; index++) {
        const student_id = elements[index].innerHTML;
        
        const radioButtons = document.getElementsByName(`attendance_${student_id}`);
       
        for(const radioButton of radioButtons){
            radioButton.addEventListener('change', showSelected);
        }        
        
        function showSelected(e) {
            if(document.getElementById(`pressent_${student_id}`).checked)
            socket.emit("attendance" , `${student_id}`,"P",`${temp}`);
             

            else
            socket.emit("attendance" , `${student_id}`,"A",`${temp}`);
            
        }
        
    }
   
}
    

function submit_attendance()
{
    const temp = document.getElementsByClassName("class_name_in_attendance")[0].innerHTML;
    const class_name = temp.split("(",1)[0];
    const subject_id = temp.split("(",2)[1].split(")",1)[0];
    const date = document.getElementsByClassName("attendane_date")[0].innerHTML;

    const arr =[];
    const element = document.getElementsByClassName("attendance_class_student_id");
    for (let index = 0; index < element.length; index++) {
        
        const student_id = element[index].innerHTML;
        
        let attendance = "P";
      

        if(document.getElementById(`absent_${student_id}`).checked)
        {
            attendance = "A";

        }

        const object = {
            enrollnment_number: `${student_id}`,
            attendance:`${attendance}`,
            class_name: `${class_name}`,
            subject_id: `${subject_id}`,
            date:`${date}`
        }
        
        arr.push(object);
       
    }

 

    const xmr = new XMLHttpRequest();
    xmr.open("POST", "/ClassStudent_attendance", true);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    xmr.onload = function() {
        
       displayNone();
       document.getElementById("my-time-table").style.display="block";
    document.getElementById("join-button").style.display="none";
       window.alert(`You can sumbit Attendance of ${temp} succefully!  `)

    }


    const array = JSON.stringify(arr)
    xmr.send(`attendance=${array}`);


}

// check attendance

document.getElementById("class-attendance").onclick = attendence_report;

function attendence_report()
{
    displayNone_ForClasses();
    const class_name = document.getElementById("class-name-name").innerHTML;
    const subject_name_temp = document.getElementById("class-name-subject").innerHTML;
    const subject_name= subject_name_temp.split("(" , 2)[1].split(")",1)[0];
    const xmr = new XMLHttpRequest();
    xmr.open("POST", "/attendance_report", true);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmr.onload = function()
    {

        
        const data = JSON.parse(this.responseText);
        console.log(data);

        if(data.length==0)
        {
            window.alert("No class is Taken");
            document.getElementById("class-home-page").style.display = "block";

        }

        else
        {
            document.getElementById("student_attendance_report").innerHTML="";
            let more_low=0;
            let low =0;
            let average = 0;
            let good =0;
            let average_persantage = 0;
            for (let index = 0; index < data.length; index++) {
                    const student_id = data[index].en;
                    const name = data[index].name;
                    const total_classes = data[index].total;
                    const total_pressent = data[index].total_pressent;

                    const presentage = Math.round((total_pressent*100.0)/total_classes * 100) / 100;

                   document.getElementById("student_attendance_report").innerHTML+=`<div class = "upload-assigment-div attence_main_div attendance_main_div" id="attence_report_${student_id}"  >
                   <p id="attence_report__en_${student_id}" class="attendance_class attendance_report_class_${student_id} attendance_class_student_id">${student_id}</p>
                   <p id="attence_report__na_${student_id}" class="attendance_class attendance_report_class_${student_id} ">${name}</p>
                   <p id="attence_report__p_${student_id}" class="attendance_class attendance_report_class_${student_id}">${total_classes}</p>
                   <p id="attence_report__total_${student_id}" class="attendance_class attendance_report_class_${student_id}">${total_pressent}</p>
                   <p id="attence_report__presentage_${student_id}" class="attendance_class attendance_report_class_${student_id}">${presentage}</p>
                   </div>`

                   if(presentage<75)
                   {
                   
                      if(presentage<50)
                      {
                          more_low++;
                      }
                      else
                      {
                          low++;
                      }
                    for (let index = 0; index < 5; index++) {
                        document.getElementsByClassName(`attendance_report_class_${student_id}`)[index].style.color="red";
                        
                    }
                   }
                   else
                   {
                       if(presentage<90)
                       {
                           average++;
                       }
                       else
                       {
                           good++;
                       }
                   }

                   average_persantage=average_persantage+presentage;
                    
            }

            average_persantage = average_persantage/data.length;
            average_persantage = Math.round(average_persantage*100)/100;

            console.log(average_persantage);
            document.getElementById("average-attendance").innerHTML = `<h3>Average Attendance : ${average_persantage}</h3>`;
            const arr = [["Task","Attendance"],["less than 50%", more_low] ,["more than 50% but less than 75%", low],["more than 75% but less than 90%", average],["more than 90%", good ]];
            pie_chart(arr,"Attendance Report","piechart_attendance_report")
            document.getElementById("attendance_report").style.display = "block";

        }
    

       
    }

    xmr.send(`class_name=${class_name}&subject_name=${subject_name}`);
   
}


// attendence_report_pie_chart

function pie_chart(arr,title,id)
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(arr);
        var options = {'title':`${title}`, 'width':550, 'height':400, slices: {0: {color: '#DC3912'}, 1:{color: '#FF9900'}, 2:{color: '#3366CC'}, 3: {color: '#109618'}}};
        var chart = new google.visualization.PieChart(document.getElementById(`${id}`));
        chart.draw(data, options);
    }

}
