// var path = require('path');

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


}




setTimeout(() => {

    if (hours > 8 && hours < 17 && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].innerHTML != "Lunch Time") {
        document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.backgroundColor = "#105652";
        document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].onclick = "";
        document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.cursor = "auto"

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
    }

    setInterval(() => {
        if (newhours > 8 && newhours < 17 && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "No Class" && document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].innerHTML != "Lunch Time") {
            document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8].style.backgroundColor = "#105652";
            document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].onclick = "";
            document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8].style.cursor = "auto"
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



function display_on(a) {

    document.getElementById(`${a}`).style.display = "block";

}

function display_off(a) {

    document.getElementById(`${a}`).style.display = "none";

}



const allocatedClass = document.getElementById("side-bar-li-allocatedClass");
allocatedClass.addEventListener("click", (event) => {
    display(document.getElementById('allocated-classes'));
});

function display_none() {

    document.getElementById("personal-info").style.display = "none";
    document.getElementById("my-time-table").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("class-home-page").style.display = "none";
    document.getElementById("students").style.display = "none";
    document.getElementById("pdf_viewer").style.display = "none";
    document.getElementById("assigment-view").style.display = "none";
    document.getElementById("assigment").style.display = "none";

}



function click_on_subject(subject_name, subject_id) {
    display_none();
    close_chat();

    document.getElementById("class-name-name").innerHTML = `${subject_name}`;
    document.getElementById("class-name-subject").innerHTML = `${subject_id}`;
    display_on("classes");
    display_on("class-home-page");

}



document.getElementById("class-assignments").onclick = function () {
    display_off("class-home-page");
    document.getElementById("upload-assignment").innerHTML = "";
    let subject_id = document.getElementById("class-name-subject").innerHTML;
    let class_name = document.getElementById("teacher_id").innerHTML;
    const student_id = document.getElementById("student_id").innerHTML;

    console.log(class_name);
    const xmr = new XMLHttpRequest();
    xmr.open("post", "/student_info_assignment");
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmr.onload = function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
        const length = data.length;

        for (let index = 0; index < length; index++) {
            console.log(data);
            const Title = data[index].title;
            const due = data[index].due_date_and_time;
            const submitted_date = data[index].submit_date_and_time
            const count = data[index].count;
            const submitted = data[index].sumbitted;
            const assigment_id = data[index].assigment_id;
            const today_date_assigment = new Date();
            const due_help = new Date(due);
            const due_date = due_help.toLocaleString('en-US', {
                day: 'numeric',
                year: 'numeric',
                month: 'short'
            });




            console.log(due_help);
            console.log(today_date_assigment);
            console.log(due_help < today_date_assigment)
            // console.log(submitted);
            console.log(submitted_date);
            console.log(count);


            if (!submitted) {
                if (due_help < today_date_assigment) {
                    document.getElementById("upload-assignment").innerHTML +=
                        `<div class = "upload-assigment-div" style="cursor: pointer;" onclick = "assigment_view('${assigment_id}')" >
                    <p class="upload-assigment-name">${Title}</p>
                    <p class="upload-assignment-dueDate after_due_date">Due: ${due_date}</p>
                    </div>`;

                }

                else {
                    document.getElementById("upload-assignment").innerHTML +=
                        `<div class = "upload-assigment-div" style="cursor: pointer;" onclick = "assigment_view('${assigment_id}')" >
                    <p class="upload-assigment-name">${Title}</p>
                    <p class="upload-assignment-dueDate">Due: ${due_date}</p>
                    </div>`;

                }







            }

            else {
                const sumbitted_date_help = new Date(submitted_date);
                const submit_date = sumbitted_date_help.toLocaleString('en-US', {
                    day: 'numeric',
                    year: 'numeric',
                    month: 'short'
                });

                if (sumbitted_date_help > due_help) {
                    if (count == 0) {
                        document.getElementById("upload-assignment").innerHTML +=
                            `<div class = "upload-assigment-div" style="cursor: pointer;" onclick = "assigment_view('${assigment_id}')" >
                            <p class="upload-assigment-name">${Title}</p>
                            <p class="upload-assignment-dueDate after_due_date">Submitted: ${submit_date}</p>
                            </div>`;

                    }

                    else {
                        document.getElementById("upload-assignment").innerHTML +=
                            `<div class = "upload-assigment-div" style="cursor: pointer;" onclick = "assigment_view('${assigment_id}')" >
                            <p class="upload-assigment-name">${Title}</p>
                            <p class="upload-assignment-dueDate after_due_date">Submitted: ${submit_date} <i class="fas fa-check fa-check-after_submit_Outer"></i></p>
                            </div>`;

                    }



                }

                else {
                    if (count == 0) {
                        document.getElementById("upload-assignment").innerHTML +=
                            `<div class = "upload-assigment-div" style="cursor: pointer;" onclick = "assigment_view('${assigment_id}')" >
                        <p class="upload-assigment-name">${Title}</p>
                        <p class="upload-assignment-dueDate">Submitted: ${submit_date} </p>
                        </div>`;

                    }

                    else {
                        document.getElementById("upload-assignment").innerHTML +=
                            `<div class = "upload-assigment-div" style="cursor: pointer;" onclick = "assigment_view('${assigment_id}')" >
                        <p class="upload-assigment-name">${Title}</p>
                        <p class="upload-assignment-dueDate">Submitted: ${submit_date} <i class="fas fa-check fa-check-after_submit_Outer"></i></p>
                        </div>`;
                    }





                }

            }

        }
        display_on("assigment");
        display_on("upload-assignment");
    }
    xmr.send(`subject_id=${subject_id}&class_name=${class_name}&student_id=${student_id}`);


}



function assigment_view(a) {


    console.log(a);
    const student_id = document.getElementById("student_id").innerHTML;

    const xmr = new XMLHttpRequest();
    xmr.open("post", "/assigment_detail_by_id");
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmr.onload = function () {
        const data = JSON.parse(this.responseText)[0];
        const title = data.title;
        const instructions = data.instructions;
        const link = data.link;
        const max_point = data.max_point;
        const file_name = data.file_name;
        const file_name_by_student = data.file_name_by_student;
        const student_assigment_id = data.student_assigment_id;
        const count_check = data.count_check;
        const sum_of_marks = data.sum_of_marks;
        const due = new Date(data.due_date_and_time);
        const submitted_date = new Date(data.submitted_date);

        document.getElementById("submit_assigment_id").innerHTML = student_assigment_id;

        let due_date = due.toLocaleString('en-US', {
            day: 'numeric', // numeric, 2-digit
            year: 'numeric', // numeric, 2-digit
            month: 'short', // numeric, 2-digit, long, short, narrow
            hour: 'numeric', // numeric, 2-digit
            minute: 'numeric', // numeric, 2-digit
            second: 'numeric', // numeric, 2-digit

        });
        const new_date = new Date();


        document.getElementById("assigment-view-title").innerHTML = title;
        document.getElementById("assigment-view-Instruction").innerHTML = instructions;
        document.getElementById("assigment-view-due-date").innerHTML = "Due: " + due_date;
        if (due < new_date) {
            // document.getElementById("assigment-view-due-date").style.color="#C03D29";
            document.getElementById("assigment-view-due-date").style.fontWeight = "600";
            document.getElementById("assigment-view-due-date").style.backgroundColor = "red";
        }

        else {
            document.getElementById("assigment-view-due-date").style.fontWeight = "400";
            document.getElementById("assigment-view-due-date").style.backgroundColor = "";

        }


        document.getElementById("assigment-view-max-point").innerHTML = "Maximum Points: " + max_point;
        document.getElementById("assigment_id").innerHTML = a;

        if (link != "") {
            document.getElementById("view-link").innerHTML = `<a href="${link}" id="link_assigment-view" style="font-size: medium; color: white;">&nbsp; Link</a>`

        }

        else {
            document.getElementById("view-link").innerHTML = "&nbsp; No Link";

        }

        if (file_name != "null") {


            document.getElementById("view-file").innerHTML = `&nbsp; ${file_name}`;


        }

        else {
            document.getElementById("view-file").innerHTML = "&nbsp; No File"

        }


        if (file_name_by_student == "") {
            document.getElementById("add_file_click").innerHTML = "+ Add File";
            document.getElementById("add_file_submit").style.backgroundColor = "rgb(27,38,44)";
            document.getElementById("add_file_submit").innerHTML = "Submit";
            document.getElementById("add_file_submit").onclick = submit_student_assigment;
            document.getElementById("add_file_click").onclick = add_file_click_input;

        }

        else {
            if (count_check == 0) {
                document.getElementById("add_file_click").innerHTML = file_name_by_student;
                document.getElementById("add_file_submit").style.backgroundColor = "#077E8C";
                document.getElementById("add_file_submit").innerHTML = 'Unsubmit';
                document.getElementById("add_file_submit").onclick = unsubmit_submitted_file;
                document.getElementById("add_file_click").onclick = student_pdf_viewer;

            }

            else {
                document.getElementById("add_file_click").innerHTML = file_name_by_student;
                document.getElementById("add_file_submit").style.backgroundColor = "#00D100";
                document.getElementById("add_file_submit").innerHTML = `<i class="fas fa-check fa-check-after_submit"></i> Checked (${sum_of_marks}/${max_point})`;
                document.getElementById("add_file_submit").onclick = function () { };
                document.getElementById("add_file_click").onclick = student_pdf_viewer;

            }


        }

        console.log(submitted_date);
        if (submitted_date > due) {
            display_on("submitted_late");
        }
        else {
            display_off("submitted_late");
        }


        display_off("upload-assignment");
        display_on("assigment-view");




    }

    xmr.send(`assigment_id=${a}&student_id=${student_id}`);

}

document.getElementById("view-file").onclick = assignment_file_viewer;

var myState = {
    pdf: null,
    currentPage: 1,
    zoom: 1,
    assigment_id: null
}

function assignment_file_viewer() {
    console.log("sonu");
    const file = document.getElementById("view-file").innerHTML;
    const file_name = file.toString().substring(7);

    const assigment_id = document.getElementById("assigment_id").innerHTML;

    myState.pdf = null;
    myState.currentPage = 1;
    myState.zoom = 1;
    myState.assigment_id = null;




    pdfjsLib.getDocument(`/pdf/${file_name}/${assigment_id}`).then((pdf1) => {

        myState.pdf = pdf1;
        console.log("pinky");
        console.log(pdf1);

        render();

    });


}



function render() {
    const total_page = myState.pdf._pdfInfo.numPages;
    let current_page = myState.currentPage;


    if (current_page > 0 && current_page <= total_page) {

        const assigment_id = myState.assigment_id;
        if (assigment_id != null) {

            const xmr = new XMLHttpRequest();
            xmr.open("POST", "/check_marks");
            xmr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xmr.onload = function () {
                if (this.responseText != "") {
                    const response = JSON.parse(this.responseText)[0];
                    const marks = response.marks;
                    const note = response.note;
                    console.log(marks, note, response);
                    display_on("check_mark");
                    document.getElementById("marks_of_page").innerHTML = marks;
                    document.getElementById("note_paragraph").innerHTML = note;
                }
                else {
                    document.getElementById("marks_of_page").innerHTML = "&nbsp;  ";
                    document.getElementById("note_paragraph").innerHTML = " &nbsp;&nbsp;&nbsp;&nbsp; ";
                    display_off("check_mark");
                }
                document.getElementById("assigment_note").style.display = "block";
            }
            xmr.send(`student_assigment_id=${assigment_id}&page_number=${current_page}`);
        }
        else {
            document.getElementById("assigment_note").style.display = "none";
            display_off("check_mark");
        }



        myState.pdf.getPage(myState.currentPage).then((page) => {

            var canvas = document.getElementById("inside_canvas");
            var ctx = canvas.getContext('2d');

            var viewport = page.getViewport(myState.zoom);


            canvas.width = viewport.width;
            canvas.height = viewport.height;

            document.getElementById("current_page").innerHTML = `${myState.currentPage}/${total_page}`


            page.render({
                canvasContext: ctx,
                viewport: viewport
            });

            display_none();
            document.getElementById("content-div").style.paddingLeft = "0";
            document.getElementById("pdf_viewer").style.display = "flex";
            document.getElementById("content-div").style.width = "88%";
        });

    }
    else {
        if (current_page > total_page) {

            myState.currentPage = current_page - 1;
        }

        else {
            myState.currentPage = current_page + 1;
        }
    }
}

document.getElementById("next").onclick = function () {
    myState.currentPage += 1;
    render();

}

document.getElementById("previous").onclick = function () {
    myState.currentPage -= 1;
    render();

}

document.getElementById("file_submit").onchange = function () {
    let file_path = document.getElementById("file_submit").value;
    let file_name = file_path.replace(/^.*[\\\/]/, '');
    if (file_path != "") {
        document.getElementById("add_file_click").innerHTML = file_name;
    }

    else {
        document.getElementById("add_file_click").innerHTML = "+ Add File";
    }

}

document.getElementById("add_file_submit").onclick = submit_student_assigment;
function submit_student_assigment(e) {
    e.preventDefault();
    if (document.getElementById("file_submit").value != "") {
        let form_data = new FormData();
        const assigment_id = document.getElementById("assigment_id").innerHTML;
        const student_id = document.getElementById("student_id").innerHTML;
        const files = document.querySelector('[name=student_file_submit]').files;
        form_data.append("assigment_id", assigment_id);
        form_data.append("student_id", student_id);
        form_data.append("student_submitted_files", files[0]);

        const xmr = new XMLHttpRequest();
        xmr.open("post", "/student_submitted_files");

        xmr.onload = function () {
            console.log(this.responseText);
            const file_name = JSON.parse(this.responseText)[0].file_name;
            const student_assigment_id = JSON.parse(this.responseText).student_submitted_assigment_id;
            document.getElementById("submit_assigment_id").innerHTML = student_assigment_id;
            console.log(file_name);
            document.getElementById("add_file_click").innerHTML = file_name;
            document.getElementById("add_file_submit").style.backgroundColor = "#077E8C";
            document.getElementById("add_file_submit").innerHTML = "Unsubmit";
            document.getElementById("add_file_submit").onclick = unsubmit_submitted_file;
            document.getElementById("add_file_click").onclick = student_pdf_viewer;
            const due_date = new Date(document.getElementById("assigment-view-due-date").innerHTML.substring(5));
            const today = new Date();

            if (today < due_date) {
                document.getElementById("submitted_late").style.display = "none";

            }
            else {
                document.getElementById("submitted_late").style.display = "block";
            }

        }



        xmr.send(form_data);


    }
    else {
        alert("Please select a file then submit.");
    }
}

function student_pdf_viewer() {

    myState.pdf = null;
    myState.currentPage = 1;
    myState.zoom = 1;
    myState.assigment_id = null;


    const file_name = document.getElementById("add_file_click").innerHTML;
    const student_assigment_id = document.getElementById("submit_assigment_id").innerHTML;
    const checked = document.getElementById("add_file_submit").innerHTML;
    if (checked != "Submit" || checked != "Unsubmit") {
        myState.assigment_id = student_assigment_id;

    }






    pdfjsLib.getDocument(`/pdf/${file_name}/${student_assigment_id}`).then((pdf1) => {

        myState.pdf = pdf1;
        console.log(pdf1);

        render();

    });



}

function unsubmit_submitted_file(e) {
    e.preventDefault();
    let form_data = new FormData();
    display_off("submitted_late");
    const assigment_id = document.getElementById("assigment_id").innerHTML;
    document.getElementById("file_submit").value = "";
    const student_id = document.getElementById("student_id").innerHTML;
    form_data.append("assigment_id", assigment_id);
    form_data.append("student_id", student_id);
    const xmr = new XMLHttpRequest();
    xmr.open("post", "/unsubmit_submitted_file");

    xmr.onload = function () {
        document.getElementById("add_file_click").innerHTML = "+ Add File";
        document.getElementById("add_file_submit").style.backgroundColor = "rgb(27,38,44)";
        document.getElementById("add_file_submit").innerHTML = "Submit";
        document.getElementById("add_file_submit").onclick = submit_student_assigment;
        document.getElementById("add_file_click").onclick = add_file_click_input;

    }



    xmr.send(form_data);
}


function add_file_click_input() {
    document.getElementById("file_submit").click();
}
var class_name = document.getElementById("teacher_id").innerHTML;
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const socket = io();
socket.emit('join_room', `${class_name}`);

socket.on("add_class", (link, SN, DN) => {
    SN = SN + 8;
    document.getElementById("join-button").onclick = open_link;
    console.log(`${days[DN - 1]}_${SN}`);
    console.log(document.getElementById(`${days[DN - 1]}_${SN}`).innerHTML);
    document.getElementById(`${days[DN - 1]}_${SN}`).onclick = open_link;

    function open_link() {

        window.open(`${link}`);

    }


    let temp = document.getElementById(`${days[DN - 1]}_${SN}`).innerHTML;
    document.getElementById(`${days[DN - 1]}_${SN}`).style.cursor = "pointer";
    window.alert(`Your class of ${temp} Start. Please Join fast`);



});


function check_link() {
    const class_name = document.getElementById("teacher_id").innerHTML;
    const dateandtime = new Date();
    const day_number = dateandtime.getDay();
    const slot_number = dateandtime.getHours() - 8;
    const date = dateandtime.toISOString().slice(0, 10);


    var xmr = new XMLHttpRequest();
    xmr.open("post", "/check_link_for_class");
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmr.onload = function () {
        let d = JSON.parse(this.responseText);
        console.log("hello from onload");
        if (d.length != 0) {
            const data = d[0];
            console.log(data);
            let link = data.google_meet_link;
            let update_date = data.update_link_date;
            const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];

            if (date == update_date) {
                let subject = document.getElementById(`${days[day_number - 1]}_${slot_number + 8}`).innerHTML;
                window.alert(`Your class of ${subject} is started. Please Join fast`);
                document.getElementById(`${days[day_number - 1]}_${slot_number + 8}`).style.cursor = "pointer";
                document.getElementById(`${days[day_number - 1]}_${slot_number + 8}`).onclick = function () {
                    window.open(`${link}`);

                }
                document.getElementById("join-button").onclick = function () {
                    window.open(link);
                }

            }

        }

    }

    xmr.send(`class_name=${class_name}&slot_number=${slot_number}&day_number=${day_number}`);

}

check_link();
document.getElementById("join-button").style.cursor = "pointer";



//chat box

document.getElementById("chat_box").onclick = open_chat_box;

function open_chat_box() {
    document.getElementById("message_container").innerHTML = "";
    const subject_name = document.getElementById("class-name-name").innerHTML;
    const class_name = document.getElementById("teacher_id").innerHTML;
    const room = class_name.concat(`(${subject_name})`);
    const room_name = "chat".concat(room);
    const name = document.getElementById("teacher_name").innerHTML;
    socket.emit('join_chat_room', `${room_name}`);

    insert_old_message(room_name, name);
    document.getElementById("chats").style.display = "block";
    document.getElementById("chat_box_dev").style.bottom = "90%";
    document.getElementById("close_chat").style.display = "block";
    document.getElementById("chat_box_dev").classList.remove("chat_box_dev_dev");

}

document.getElementById("close_chat").onclick = close_chat;

function close_chat() {
    console.log("hello");
    document.getElementById("chats").style.display = "none";
    document.getElementById("chat_box_dev").style.bottom = "0";
    document.getElementById("close_chat").style.display = "none";
    document.getElementById("chat_box_dev").classList.add("chat_box_dev_dev");
}

function out(message, date_time) {
    console.log("from out");

    document.getElementById("message_container").innerHTML += `<div id="out"><div id="out_message">${message}</div><p id="message_out_date_time">${date_time}</p></div>`;

    const messageBody = document.getElementById("message_container");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

}

function inn(message, name, date_time) {
    console.log("from inn");
    document.getElementById("message_container").innerHTML += `<div id="in">
    <p id="name_of_sender">${name}</p>
    <div id="in_messeage">${message}</div>
    <p id="message_in_date_time">${date_time}</p>
    </div>`;
    const messageBody = document.getElementById("message_container");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

document.getElementById("input_message").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const m = e.target.value;
        const message = m.substr(0, m.length - 1);

        e.target.value = "";
        const d = new Date();
        const date = d.toLocaleString('en-US', {
            day: 'numeric',
            year: 'numeric',
            month: 'short',
            hour: "2-digit",
            minute: "2-digit"
        });

        out(message, date);
        const name = document.getElementById("teacher_name").innerHTML;
        const subject_name = document.getElementById("class-name-name").innerHTML;
        const class_name = document.getElementById("teacher_id").innerHTML;
        const room = class_name.concat(`(${subject_name})`);
        const room_name = "chat".concat(room);
        socket.emit("message_handel", `${message}`, `${date}`, `${name}`, `${room_name}`);


    }

});

socket.on("in_message", (message, date, name) => {

    console.log(message);
    console.log(`hello from ${message} ${name} ${date}`);
    inn(message, name, date);

});


socket.on("alert_to_message", (room) => {
    var room_name = room.split("(")[1].split(")")[0];
    window.alert(`You have new message in ${room_name}`);

});



const claas_name = document.getElementById("teacher_id").innerHTML;
socket.emit("join_all_room_of_this_class", `${class_name}`);
const student_id = document.getElementById("student_id").innerHTML;
socket.emit("join_room", `${student_id}`);



function insert_old_message(room_name, name) {

    console.log("hello");
    const xmri = new XMLHttpRequest();
    xmri.open("POST", "/insert_message", true);
    xmri.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmri.onload = function () {


        const data = JSON.parse(this.responseText);
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const sender_name = data[index].sender_name;
            const date = data[index].date;
            const message = data[index].message;

            if (sender_name == name) {
                out(message, date);

            }
            else {
                inn(message, sender_name, date);
            }

        }

    }



    xmri.send(`room_name=${room_name}`);


}


// attendance

socket.on("comming_attendance", (attendance, claas_name) => {

    console.log("hello");
    console.log(attendance);
    if (attendance == "P")
        window.alert(`You Mark Pressent in Today class of ${claas_name}`);

    else
        window.alert(`You Mark Absent in Today class of  ${claas_name}`);
});


// check attendance

document.getElementById("class-attendance").onclick = attendence_report;

function attendence_report() {
    display_none();
    document.getElementById("classes").style.display = "block";
    // document.getElementById("attendance_report").style.display = "block";
    const class_name = document.getElementById("teacher_id").innerHTML;
    const subject_id = document.getElementById("class-name-subject").innerHTML;
    const student_id = document.getElementById("student_id").innerHTML;
    const xmr = new XMLHttpRequest();

    xmr.open("POST", "/attendance_report_student", true);
    xmr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmr.onload = function () {

        let total_classes = 0;
        const data = JSON.parse(this.responseText);
        const attendance = data[0];
        const student_attendane = data[1];



        if (attendance.length == 0) {
            window.alert("No class is Taken");
            document.getElementById("class-home-page").style.display = "block";

        }

        else {
            document.getElementById("student_attendance_report").innerHTML = "";
            let total_pressent = 0;


            for (let index = 0; index < attendance.length; index++) {
                const date = attendance[index].date;
                const p_or_a = attendance[index].attendance;
                if (p_or_a == "P")
                    total_pressent++;
                total_classes = index + 1;

                const presentage = Math.round((total_pressent * 100.0) / total_classes * 100) / 100;

                document.getElementById("student_attendance_report").innerHTML += `<div class = "upload-assigment-div attence_main_div attendance_main_div" id="attence_report_${index + 1}"  >
                   <p id="attence_report__en_${date}" class="attendance_class attendance_report_class_${p_or_a} attendance_class_student_id">${date}</p>
                   <p id="attence_report__na_${date}" class="attendance_class attendance_report_class_${p_or_a} ">${p_or_a}</p>
                   <p id="attence_report__p_${date}" class="attendance_class attendance_report_class_${p_or_a}">${total_classes}</p>
                   <p id="attence_report__total_${date}" class="attendance_class attendance_report_class_${p_or_a}">${total_pressent}</p>
                   <p id="attence_report__presentage_${date}" class="attendance_class attendance_report_class_${p_or_a}">${presentage}</p>
                   </div>`

                if (index == attendance.length - 1 && presentage < 75 && presentage > 50) {
                    document.getElementById(`attence_report_${index + 1}`).style.backgroundColor = "#F27C66";

                }
                else if (index == attendance.length - 1 && presentage < 50) {
                    document.getElementById(`attence_report_${index + 1}`).style.backgroundColor = "red";

                }



            }



            const e = document.getElementsByClassName(`attendance_report_class_A`)
            for (let index = 0; index < e.length; index++) {
                e[index].style.color = "red";

            }

            let average_persantage = 0;
            let more_low = 0;
            let low = 0;
            let average = 0;
            let good = 0;
            let total_student = 0;
            console.log(student_attendane);

            for (let index = 0; index < student_attendane.length; index++) {
                const total_p = student_attendane[index].total_p;
                total_student = index + 1;
                let presentage = total_p * 100 / total_classes;
                console.log(presentage);
                average_persantage = average_persantage + presentage;
                console.log(average_persantage);


                if (presentage < 50) {
                    more_low++;
                    console.log(more_low);

                }
                else if (presentage >= 50 & presentage < 75) {
                    low++;
                }
                else if (presentage >= 75 & presentage < 90) {
                    average++;
                }
                else {
                    good++;
                }


            }
            console.log(total_student);
            average_persantage = average_persantage / total_student;
            average_persantage = Math.round(average_persantage * 100) / 100;
    
            console.log(average_persantage);
           

            document.getElementById("average-attendance").innerHTML = `<h3>Average Attendance % of Class: ${average_persantage}</h3>`;
            const arr = [["Task", "Attendance"], ["less than 50%", more_low], ["more than 50% but less than 75%", low], ["more than 75% but less than 90%", average], ["more than 90%", good]];
            console.log(arr);
            pie_chart(arr, "Attendance Report", "piechart_attendance_report")
            document.getElementById("attendance_report").style.display = "block";

        }



       

    }





    xmr.send(`class_name=${class_name}&subject_id=${subject_id}&student_id=${student_id}`);

}


// attendence_report_pie_chart

function pie_chart(arr, title, id) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(arr);
        var options = { 'title': `${title}`, 'width': 550, 'height': 400, slices: { 0: { color: '#DC3912' }, 1: { color: '#FF9900' }, 2: { color: '#3366CC' }, 3: { color: '#109618' } } };
        var chart = new google.visualization.PieChart(document.getElementById(`${id}`));
        chart.draw(data, options);
    }

}