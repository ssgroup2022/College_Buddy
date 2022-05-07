const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const { google } = require('googleapis');
const fs = require("fs");
const { NONAME, CONNREFUSED, LOADIPHLPAPI } = require("dns");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { connect } = require("http2");
const { Console, error, log } = require("console");
const help = require("nodemon/lib/help");
const upload = require("express-fileupload");
const { send } = require("process");
const { header } = require("express/lib/request");
const e = require("express");
const Connection = require("mysql/lib/Connection");
const { name } = require("ejs");
var http = require('http');
const protocol = http || authority.protocol || options.protocol || 'https:';
var server = protocol.createServer(app);
const io = require('socket.io')(server);
var port_number = process.env.PORT || 3000;
var staticpath = path.join(__dirname, "../public");
app.use(upload());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticpath));

var connection = mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  // password: "Sonu@1234",
  // database: "collegebuddy",
  password: "root",
  database: "ss_group",
  insecureAuth: true
});




connection.connect();



// ----------------------------------------------------------------------------------------------------------------------

const CLIENT_ID = '507797866991-c6qs52s7l6tl2mhnvfvmvnqknkbaro32.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04omJyrWB7FhHCgYIARAAGAQSNwF-L9Ir5SYEe95Nzv3-ZX-uP9qIiDiI-LbY0Fs6YD6NUjoDA39r7U5I5sBOs4MS5O3oZYSF-z4';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

// ------------------------------------------------------------------------------------------------------------





app.get("/", (req, res) => {
  res.render("index");
});

app.get("/teacher_login", (req, res) => {
  res.render("teacher_login");
});

app.post("/teacher_login", (req, res) => {
  console.log(req.body);
  const data = req.body;
  const login_id = data.login_ID;
  const password = data.Password;

  connection.query(
    `SELECT * from teacher_personal_information where login_id = "${login_id}" and password = "${password}" ;`,
    (error, results, fiels) => {
      if (error) {
        console.log("error in /teacher_login");
        res.send("error in /teacher_login");
      } else if (results.length == 0) {
        res.send("login or password is incorrect");
      } else {
        Teacher_Time_Table_Detail_and_Render(res, results);
      }
    }
  );
});

function Teacher_Time_Table_Detail_and_Render(res, Teacher_Deatils) {
  const Teacher_ID = Teacher_Deatils[0].teacher_id;
  const Teacher_Name = Teacher_Deatils[0].teacher_name;
  const Teacher_Image_Src = Teacher_Deatils[0].teacher_image_src;

  connection.query(
    `select B.day_number , B.slot_number ,A.class_name , B.subject_id from classes A,time_table B where B.teacher_id="${Teacher_ID}" and A.class_id = B.class_id order by B.day_number , B.slot_number;`,
    (error, results, fiels) => {
      if (error) console.log("error from Teacher_Time_Table_Detail_and_Render");
      else {
        connection.query(
          `select distinct(A.class_name), B.class_id from classes A,time_table B where B.teacher_id="${Teacher_ID}" and A.class_id = B.class_id order by class_id;`,
          (err, ress, fil) => {
            if (error) console.log("error from classes");
            else {
              const days = [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ];
              let index = 0;
              let day_number = 1;
              let slot_number = 1;
              let i = 0;

              res.render("teacher_info", {
                Teacher_Name: Teacher_Name,
                Teacher_Id: Teacher_ID,
                src: Teacher_Image_Src,
                results: results,
                days: days,
                index: index,
                day_number: day_number,
                slot_number: slot_number,
                classes: ress,
                i: i,
              });
            }
          }
        );
      }
    }
  );
}

app.post("/AllocatedClassSubject", (req, res) => {
  const data = req.body;
  const teacher_id = data.Teacher_Id;
  const class_name = data.class_name;
  connection.query(
    `select distinct(A.subject_id), A.subject_name from subject A, time_table B, classes C where C.class_name = "${class_name}" and B.teacher_id="${teacher_id}" and C.class_id=B.class_id and B.subject_id=A.subject_id;`,
    (errors, results, fiels) => {
      if (errors) {
        console.log("Error from alloted class subject");
      } else {
        res.send(results);
      }
    }
  );
});

app.post("/ClassStudent", (req, res) => {
  const data = req.body;
  const class_name = data.class_name;

  connection.query(
    `select student_id,name,email_id,phone_number from student_personal_information S, classes C where C.class_name = "${class_name}" AND C.class_id=S.class_id;`,
    (error, results, fiels) => {
      if (error) console.log("error from ClassStudent");
      else {
        res.send(results);
      }
    }
  );
});

app.post("/upload_Assigment_Read", (req, res) => {
  const data = req.body;

  const teacher_id = data.teacher_id;
  const subject_name = data.subject_name;
  const class_name = data.class_name;

  connection.query(
    `select A.assigment_id, A.title ,A.due_date_and_time from assigment A , classes C ,subject S where C.class_name = "${class_name}" and S.subject_name = "${subject_name}" and A.teacher_id="${teacher_id}" and S.subject_id=A.subject_id and C.class_id=A.class_id;`,
    (errors, results, fiels) => {
      if (errors) {
        console.log("Error from upload_assignment_read");
      } else {
        res.send(results);
      }
    }
  );
});

let code = 1;
app.post("/Create_Assigment", (req, res) => {
  const data = req.body;
  const class_name = data.class_name;
  const subject_name = data.subject_name;
  const teacher_assignment_id = "ASST" + `${code}`;
  const teacher_id = data.teacher_id;
  const title = data.title;
  const instructions = data.instructions;
  let file_path = null;
  let file_name = null;
  const link = data.link;
  const due_date_and_time = data.due_date_and_time;
  const max_point = data.max_point;
  let file_id = "";
  if (req.files != null) {
    const add_file = req.files.uploaded_files;
    file_path = "../Assigment_Upload/" + `${teacher_assignment_id}` + "ss_group" + add_file.name;
    add_file.mv(file_path);
    file_name = `${teacher_assignment_id}` + "ss_group" + add_file.name;


    // ------------------------------------------------------------------------------------------------------------------------------
    const filePath = path.join(path.join(__dirname, '../Assigment_Upload'), file_name);
    console.log(filePath);

    async function uploadFile() {
      try {
        const response = await drive.files.create({
          requestBody: {
            name: file_name,
            mimeType: 'application/pdf',
          },
          media: {
            mimeType: 'application/pdf',
            body: fs.createReadStream(filePath),
          },
        });

        const id = response.data.id;
        console.log(id + " : 242");
        return id;

      } catch (error) {
        console.log(error.message);
      }
    }

    uploadFile().then((id) => {
      console.log(id);
      file_id = id;
      fs.unlink(file_path, (err) => {
        if (err)
          console.log(err + " : 257");
      });
      fill_assignment_data();
    });
    // -------------------------------------------------------------------------------------------------------------------------




  }
  function fill_assignment_data() {
    connection.query(`insert into assigment(class_id, subject_id, assigment_id, teacher_id, title, instructions, link, due_date_and_time, max_point,file_name,file_id) select C.class_id , S.subject_id ,"${teacher_assignment_id}" , "${teacher_id}" ,"${title}","${instructions}","${link}","${due_date_and_time}","${max_point}" ,"${file_name}","${file_id}"  from classes C ,subject S  where C.class_name = "${class_name}" and S.subject_name = "${subject_name}";`,
      (errors, results, fiels) => {
        if (errors) {
          console.log("Error from create_assigment");
          console.log(errors);
        } else {
          connection.query(
            `select title , due_date_and_time , assigment_id  from  assigment where assigment_id="${teacher_assignment_id}";`,
            (err, ress, fil) => {
              if (err) console.log("error from select assigment");
              else {
                code = code + 1;
                console.log(ress);
                res.send(ress);
              }
            }
          );
        }
      }
    );
  }

});

app.get("/student_login", (req, res) => {
  res.render("student_login");
});

app.post("/student_login", (req, res) => {
  const data = req.body;
  const login_id = data.login_ID;
  const password = data.Password;

  connection.query(
    `select S.student_id, S.student_src,S.name,C.class_name ,S.class_id from student_personal_information S, classes C where S.class_id=C.class_id and S.email_id = "${login_id}" and S.password = '${password}';`,
    (error, results, fiels) => {
      if (error) {
        console.log("error in /student_login");
        console.log(error);
        res.send("error in /student_login");
      } else if (results.length == 0) {
        res.send("login or password is incorrect");
      } else {
        student_Time_Table_Detail_and_Render(res, results);
      }
    }
  );
});

app.post("/check_marks", (req, res) => {
  const data = req.body;
  const student_assigment_id = data.student_assigment_id;
  const page_number = data.page_number;
  console.log(page_number, student_assigment_id);

  connection.query(
    `select marks, note from assigment_marks where page_number = ${page_number} and student_assigment_id = "${student_assigment_id}";`,
    (error, results, fiels) => {
      if (error) {
        console.log(error);
      } else if (results.length == 0) {
        console.log("269");
        res.send();
      } else {
        console.log("272");
        console.log(results);
        res.send(results);
      }
    }
  );
});

function student_Time_Table_Detail_and_Render(res, data) {
  data = data[0];
  const student_id = data.student_id;
  const student_name = data.name;
  const class_id = data.class_id;
  const class_name = data.class_name;
  const src = data.student_src;

  connection.query(
    `select T.day_number,T.slot_number,T.subject_id, P.teacher_name from time_table T , teacher_personal_information P where class_id = "${class_id}" and  T.teacher_id=P.teacher_id order by T.day_number , T.slot_number;`,
    (errors, results, fiels) => {
      if (errors) {
        console.log("Error from student_Time_Table_Detail");
        console.log(errors);
      } else {
        connection.query(
          `select distinct(T.subject_id) , S.subject_name from time_table T ,subject S where class_id = "${class_id}" and S.subject_id = T.subject_id; `,
          (error, result, fiel) => {
            if (error) {
              console.log(
                "Error from student_Time_Table_Detail for finding subject id"
              );
            } else {
              const days = [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ];
              let index = 0;

              res.render("student_info", {
                student_name: student_name,
                class_name: class_name,
                src: src,
                student_id: student_id,
                subjects: result,
                results: results, //here results sends the data of time table
                days: days,
                index: index,
              });
            }
          }
        );
      }
    }
  );
}

app.post("/student_info_assignment", async (req, res) => {
  const data = req.body;
  const subject_id = data.subject_id;
  const class_name = data.class_name;
  const student_id = data.student_id;
  console.log(data);

  connection.query(
    `select A.title, A.assigment_id, A.due_date_and_time from assigment A, classes C where A.subject_id = "${subject_id}" and C.class_name = "${class_name}" and A.class_id = C.class_id;`,
    async (errors, results, fiels) => {
      if (errors) {
        console.log("Error from student_info_assignment");
      } else {
        const length = results.length;
        const array = [];
        for (let index = 0; index < length; index++) {
          const assigment_id = results[index].assigment_id;
          connection.query(
            `select  student_submitted_assigment_id ,submit_date_and_time from student_submitted_assigment where assigment_id="${assigment_id}" and student_id="${student_id}";`,
            (e, r, f) => {
              if (e) {
                console.log(e);
              } else if (r.length == 0) {
                results[index].sumbitted = false;
                results[index].submit_date_and_time = "";
                results[index].count = 0;
                if (index == length - 1) {
                  res.send(results);
                }
              } else {
                const student_assigment_id =
                  r[0].student_submitted_assigment_id;
                connection.query(
                  `select count(marks) as count  from assigment_marks where student_assigment_id="${student_assigment_id}";`,
                  (ee, rr, ff) => {
                    if (ee) console.log(ee);
                    else {
                      results[index].sumbitted = true;
                      results[index].submit_date_and_time =
                        r[0].submit_date_and_time;
                      results[index].count = rr[0].count;
                      if (index == length - 1) {
                        res.send(results);
                      }
                    }
                  }
                );
              }
            }
          );
        }
      }
    }
  );
});

app.post("/assigment_detail_by_id", function (req, res) {
  const data = req.body;
  const assigment_id = data.assigment_id;
  const student_id = data.student_id;

  connection.query(
    `select title,instructions,file_name,link,due_date_and_time,max_point from assigment where assigment_id="${assigment_id}";`,
    (error, results, fiels) => {
      if (error) console.log("error from assigment details by id");
      else {
        connection.query(
          `select file_name , student_submitted_assigment_id, submit_date_and_time from student_submitted_assigment  where student_id="${student_id}" and assigment_id="${assigment_id}" ;`,
          (err, ress, fiels) => {
            if (err) {
              console.log(err);
            } else {
              if (ress.length == 0) {
                results[0].file_name_by_student = "";
                results[0].count_check = 0;
                results[0].sum_of_marks = 0;
                results[0].submitted_date = "";
                results[0].student_assigment_id = "";
                res.send(results);
              } else {
                const file_name = ress[0].file_name;
                results[0].submitted_date = ress[0].submit_date_and_time;
                const student_assigment_id =
                  ress[0].student_submitted_assigment_id;
                results[0].file_name_by_student = file_name;
                results[0].student_assigment_id = student_assigment_id;

                connection.query(
                  `select count(marks) as count ,sum(marks) as sum from assigment_marks where student_assigment_id="${student_assigment_id}";`,
                  (e, r, f) => {
                    if (e) console.log(e);
                    else if (r.length == 0) {
                      const count_check = 0;
                      const sum_of_marks = 0;

                      results[0].count_check = count_check;
                      results[0].sum_of_marks = sum_of_marks;
                      res.send(results);
                    } else {
                      const count_check = r[0].count;
                      const sum_of_marks = r[0].sum;

                      results[0].count_check = count_check;
                      results[0].sum_of_marks = sum_of_marks;
                      res.send(results);
                    }
                  }
                );
              }
            }
          }
        );
      }
    }
  );
});

app.get("/pdf/:file_name/:assigment_id", (req, res) => {
  console.log("sonu");
  const file_name = req.params.file_name;
  const assigment_id = req.params.assigment_id;
  console.log(assigment_id.substring(3, 4));

  if (assigment_id.substring(3, 4) == "T") {
    res.sendFile(`Assigment_Upload/${assigment_id}ss_group${file_name}`, {
      root: "D:/node js use",
    });
  } else if (assigment_id.substring(3, 4) == "S") {
    res.sendFile(
      `Student_Assignment_Upload/${assigment_id}ss_group${file_name}`,
      { root: "D:/node js use" }
    );
  }
});

let student_assigment_code = 1;
app.post("/student_submitted_files", (req, res) => {
  const data = req.body;
  const student_id = data.student_id;
  const assigment_id = data.assigment_id;
  let student_assigment_id = "ASSS" + `${student_assigment_code}`;

  const file = req.files.student_submitted_files;
  let file_path =
    "../Student_Assignment_Upload/" +
    `${student_assigment_id}` +
    "ss_group" +
    file.name;
  file.mv(file_path);
  const file_name = `${student_assigment_id}` + "ss_group" + file.name;
  let file_id = "";

  // ------------------------------------------------------------------------------------------------------------------------------
  const filePath = path.join(path.join(__dirname, '../Student_Assignment_Upload'), file_name);
  console.log(filePath);

  async function uploadFile() {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: file_name,
          mimeType: 'application/pdf',
        },
        media: {
          mimeType: 'application/pdf',
          body: fs.createReadStream(filePath),
        },
      });

      const id = response.data.id;
      return id;

    } catch (error) {
      console.log(error.message);
    }
  }

  uploadFile().then((id) => {

    file_id = id;

    fs.unlink(file_path, (err) => {
      if (err) {
        console.log(err);
      }

    });

    fill_submit_assignment_data();
  });
  // -------------------------------------------------------------------------------------------------------------------------



  const date = new Date();
  const submit_date_and_time = date.toString().substring(0, 24);
  function fill_submit_assignment_data() {
    connection.query(
      `insert into student_submitted_assigment values('${student_assigment_id}', '${assigment_id}', '${student_id}', '${file_name}', '${submit_date_and_time}','${file_id}');`,
      (error, results, fiels) => {
        if (error) {
          console.log(error);
        } else {
          connection.query(
            `select file_name ,student_submitted_assigment_id from student_submitted_assigment where student_submitted_assigment_id='${student_assigment_id}';`,
            (err, ress, fil) => {
              if (err) console.log(err);
              else {
                student_assigment_code += 1;
                res.send(ress);
              }
            }
          );
        }
      }
    );
  }
});

app.post("/unsubmit_submitted_file", (req, res) => {
  const data = req.body;
  const student_id = data.student_id;
  const assigment_id = data.assigment_id;
  connection.query(
    `select file_path from student_submitted_assigment where student_id = "${student_id}" and assigment_id = "${assigment_id}";`,
    (error, results, fiels) => {
      if (error) {
        console.log("Error from unsubmit_submitted_file");
        console.log(error);
      } else {
        console.log(results);
        const file_path = results[0].file_path;
        fs.unlink(file_path, (er) => {
          if (er) {
            console.log("Error from unsubmit_submitted_file1");
            console.log(er);
          } else {
            connection.query(
              `delete from student_submitted_assigment where student_id = "${student_id}" and assigment_id = "${assigment_id}";`,
              (err) => {
                if (err) {
                  console.log("Error from unsubmit_submitted_file2");
                  console.log(err);
                } else {
                  res.send();
                }
              }
            );
          }
        });
      }
    }
  );
});

app.post("/get_student_email_for_gmeet", (req, res) => {
  const data = req.body;
  const teacher_id = data.teacher_id;
  const subject_id = data.subject_id;
  const class_name = data.class_name;

  connection.query(`select email_id from student_personal_information S, classes C where C.class_name = "${class_name}" and C.class_id = S.class_id;`, (error, results, fiels) => {
    if (error) {
      console.log("error from get_student_email_for_gmeet 1");
    }
    else {
      connection.query(`select teacher_Email from teacher_personal_information where teacher_id = "${teacher_id}";`, (err, re, fiel) => {
        if (err) {
          console.log("error from get_student_email_for_gmeet 2");
        }
        else {

          // results[1].teacher_email=re[0].teacher_email;

          connection.query(`select subject_name from subject where subject_id = "${subject_id}";`, (e, r, f) => {
            if (e) {
              console.log("error from get_student_email_for_gmeet 3");
            }
            else {


              console.log(results)
              console.log(re);
              console.log(r);
              results.push(re[0]);
              results.push(r[0]);
              console.log(results);

              res.send(results);
            }
          });
        }
      });
    }
  });
});
app.post("/set_google_meet_link", (req, res) => {
  const data = req.body;
  const slot_number = data.slot_number;
  const day_number = data.day_number;
  const teacher_id = data.teacher_id;
  const subject_id = data.subject_id;
  const class_name = data.class_name;
  const google_meet_link = data.google_meet_link;
  console.log(google_meet_link);
  let date_time = new Date();
  let date = date_time.toISOString().slice(0, 10);


  connection.query(`UPDATE time_table SET google_meet_link ="${google_meet_link}" , update_link_date="${date}" WHERE teacher_id="${teacher_id}" and slot_number="${slot_number}" and day_number="${day_number}";`, (error, results, fiel) => {

    if (error)
      console.log(error);

    else {
      res.send("Done")
    }
  });

});

app.post("/get_gmeet_updateted", (req, res) => {

  const data = req.body;
  const slot_number = data.slot_number;
  const day_number = data.day_number;
  const teacher_id = data.teacher_id;

  connection.query(`select update_link_date , google_meet_link from time_table where teacher_id ="${teacher_id}" and slot_number="${slot_number}" and day_number="${day_number}";`, (error, results, fiels) => {

    if (error)
      console.log(error);

    else {
      console.log(results);
      res.send(results);
    }
  });

});

app.post("/insert_message", (req, res) => {

  const data = req.body;
  const room_name = data.room_name;
  connection.query(`select * from chat where room_name="${room_name}";`, (error, results, fiels) => {
    if (error) {
      console.log(error);
    }

    else {
      console.log(results);
      res.send(results);
    }
  });
});



//soket code


io.on('connection', (socket) => {
  console.log('Connected...')

  socket.on("join_room", (room_name) => {
    socket.join(`${room_name}`);
    console.log(`join room ${room_name}`);
  });

  socket.on("Join_class", (link, room_name, SN, DN) => {
    console.log("hello");
    console.log(`hello from ${link} ${room_name} ${SN} ${DN}`);
    io.sockets.in(`${room_name}`).emit("add_class", `${link}`, SN, DN);
  });

  socket.on("join_chat_room", (room_name) => {

    var room = io.sockets.adapter.rooms;
    for (const [key, value] of room.entries()) {
      // console.log(key, value);

      if (key.substring(0, 4) == "chat") {
        socket.leave(key);
      }
    }

    socket.join(`${room_name}`);


  });


  socket.on("join_all_room_of_this_class", (class_name) => {
    connection.query(`select distinct(subject_name) from subject s , time_table t  ,classes c where c.class_name = "${class_name}" and c.class_id=t.class_id and t.subject_id = s.subject_id;`, (error, results, fiels) => {

      if (error) {
        console.log(error);
      }
      else {
        for (let index = 0; index < results.length; index++) {
          const subject_name = results[index].subject_name;
          const room_name = class_name.concat(`(${subject_name})`);
          socket.join(`${room_name}`);

        }
      }
    });

  });



  socket.on("join_all_room_of_this_teacher", (teacher_id) => {
    connection.query(`select distinct(s.subject_name) , c.class_name from subject s , time_table t  ,classes c where t.teacher_id = "${teacher_id}" and t.class_id= c.class_id and t.subject_id = s.subject_id;`, (error, results, fiels) => {

      if (error) {
        console.log(error);
      }
      else {
        for (let index = 0; index < results.length; index++) {
          const subject_name = results[index].subject_name;
          const class_name = results[index].class_name;
          const room_name = class_name.concat(`(${subject_name})`);
          socket.join(`${room_name}`);

        }
      }
    });

  });


  socket.on("message_handel", (message, date, name, room_name) => {

    var room_for_alert = room_name.substring(4);
    console.log(room_for_alert);

    socket.broadcast.in(`${room_name}`).emit("in_message", `${message}`, `${date}`, `${name}`);
    socket.broadcast.in(`${room_for_alert}`).emit("alert_to_message", `${room_for_alert}`);
    connection.query(`insert into chat VALUES("${room_name}","${name}","${date}","${message}");`, (error, results, fiels) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log(results);
      }
    });

  });



  socket.on("attendance", (student_id, attendance, class_name) => {

    socket.in(`${student_id}`).emit("comming_attendance", `${attendance}`, `${class_name}`);
  });


});



app.post("/check_link_for_class", (req, res) => {

  const data = req.body;
  const class_name = data.class_name;
  const slot_number = data.slot_number;
  const day_number = data.day_number;

  console.log(slot_number);
  console.log(day_number);
  console.log(class_name);
  connection.query(`select google_meet_link ,update_link_date from time_table T , classes C where C.class_name = "${class_name}" and C.class_id=T.class_id and T.slot_number = ${slot_number} and T.day_number=${day_number};`, (error, results, fiels) => {

    if (error) {
      console.log("error from check_link_for_classes");
    }

    else {
      console.log(results);
      res.send(results);

    }

  });



});



app.post("/ClassStudent_attendance", (req, res) => {
  console.log("hello");
  const data = JSON.parse(req.body.attendance);
  const class_name = data[0].class_name;
  connection.query(`select class_id from classes where class_name ="${class_name}";`, (error, results, fiels) => {

    if (error)
      console.log(error);
    else {
      const class_id = results[0].class_id;

      let string = "INSERT INTO attendance values"
      for (let index = 0; index < data.length; index++) {
        if (index != data.length - 1) {
          string = string + `(${data[index].enrollnment_number},"${class_id}","${data[index].subject_id}","${data[index].attendance}","${data[index].date}"),`;

        }
        else {
          string = string + `(${data[index].enrollnment_number},"${class_id}","${data[index].subject_id}","${data[index].attendance}","${data[index].date}");`

        }
      }

      connection.query(string, (erro, result, fiel) => {
        if (erro)
          console.log(erro);

        else {
          res.send();
        }
      });
    }
  });

});


app.post("/attendance_report", (req, res) => {
  console.log(req.body);
  const data = req.body;
  const class_name = data.class_name;
  const subject_name = data.subject_name;
  connection.query(`SELECT enrollnment_number en , count(*) total , name , (select count(*) from attendance  where enrollnment_number = en and attendance="P" )total_pressent  FROM attendance a , classes c , subject s ,student_personal_information t  where  c.class_name ="${class_name}" and s.subject_name = "${subject_name}" and c.class_id=a.claas_id and s.subject_id=a.subject_id and  a.enrollnment_number=t.student_id group by(enrollnment_number);`, (error, results, fiels) => {

    if (error)
      console.log(error);
    else {
      res.send(results);
    }

  });

});



app.post("/attendance_report_student", (req, res) => {
  console.log(req.body);
  const data = req.body;
  const class_name = data.class_name;
  const subject_id = data.subject_id;
  const student_id = data.student_id;
  connection.query(`SELECT date , attendance FROM attendance a , classes c where c.class_name="${class_name}" and enrollnment_number="${student_id}" and a.claas_id=c.class_id and subject_id="${subject_id}";`, (error, results, fiels) => {

    if (error)
      console.log(error);
    else {
      connection.query(`SELECT distinct(enrollnment_number)en , ((select count(attendance) from attendance where attendance ="P" and enrollnment_number=en) )total_p from attendance a, classes c where class_name = "${class_name}" and subject_id="${subject_id}" and a.claas_id=c.class_id;`, (err, resu, fiel) => {
        if (err)
          console.log(err);
        else {
          const array = [];

          array.push(results);
          array.push(resu);
          res.send(array);
        }
      })

    }

  });

});





































server.listen(port_number, function () {
  console.log("Server running at port ", port_number);
});
