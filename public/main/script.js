var larrow  = document.getElementById("larrow");
var rarrow  = document.getElementById("rarrow");
rarrow.onclick = function() {onclick_rarrow()};
larrow.onclick=function() {onclick_larrow()};

var i = 1;

function onclick_rarrow() {
    i++;
    if(i > 3){
        i=1;
    }

    document.getElementById("carousel").style.backgroundImage = `url("../images/image-${i}.jpg")`;    
}


function onclick_larrow() {
    i--;
    if(i<1)
    {
        i=3;
    }

    document.getElementById("carousel").style.backgroundImage = `url("../images/image-${i}.jpg")`;    
}

setInterval(() => {
    i++;
    if(i > 3){
        i=1;
    }

    document.getElementById("carousel").style.backgroundImage = `url("../images/image-${i}.jpg")`; 
}, 3000);


var hr1 = document.getElementById("alumni1-hr");
var alumni1 = document.getElementById("alumni1"); 
var fa_a_1 = document.getElementById("alumni1-a");
var fa_b_1 = document.getElementById("alumni1-b");
var fa_c_1 = document.getElementById("alumni1-c");
var fa_d_1 = document.getElementById("alumni1-d");

alumni1.onmouseover = function(){
    hr1.style.backgroundColor='#F27C66';
    hr1.style.borderColor='#F27C66';
    fa_a_1.style.color='#F27C66';
    fa_b_1.style.color='#F27C66';
    fa_c_1.style.color='#F27C66';
    fa_d_1.style.color='#F27C66';
};
alumni1.onmouseout = function(){
    hr1.style.backgroundColor='white';
    hr1.style.borderColor='white';
    fa_a_1.style.color='white';
    fa_b_1.style.color='white';
    fa_c_1.style.color='white';
    fa_d_1.style.color='white';
};












var hr2 = document.getElementById("alumni2-hr");
var alumni2 = document.getElementById("alumni2"); 
var fa_a_2 = document.getElementById("alumni2-a");
var fa_b_2 = document.getElementById("alumni2-b");
var fa_c_2 = document.getElementById("alumni2-c");
var fa_d_2 = document.getElementById("alumni2-d");

alumni2.onmouseover = function(){
    hr2.style.backgroundColor='#F9CB8F';
    hr2.style.borderColor='#F9CB8F';
    fa_a_2.style.color='#F9CB8F';
    fa_b_2.style.color='#F9CB8F';
    fa_c_2.style.color='#F9CB8F';
    fa_d_2.style.color='#F9CB8F';
};
alumni2.onmouseout = function(){
    hr2.style.backgroundColor='white';
    hr2.style.borderColor='white';
    fa_a_2.style.color='white';
    fa_b_2.style.color='white';
    fa_c_2.style.color='white';
    fa_d_2.style.color='white';
};






var hr3 = document.getElementById("alumni3-hr");
var alumni3 = document.getElementById("alumni3"); 
var fa_a_3 = document.getElementById("alumni3-a");
var fa_b_3 = document.getElementById("alumni3-b");
var fa_c_3 = document.getElementById("alumni3-c");
var fa_d_3 = document.getElementById("alumni3-d");

alumni3.onmouseover = function(){
    hr3.style.backgroundColor='#18BB7C';
    hr3.style.borderColor='#18BB7C';
    fa_a_3.style.color='#18BB7C';
    fa_b_3.style.color='#18BB7C';
    fa_c_3.style.color='#18BB7C';
    fa_d_3.style.color='#18BB7C';
};
alumni3.onmouseout = function(){
    hr3.style.backgroundColor='white';
    hr3.style.borderColor='white';
    fa_a_3.style.color='white';
    fa_b_3.style.color='white';
    fa_c_3.style.color='white';
    fa_d_3.style.color='white';
};






var hr4 = document.getElementById("alumni4-hr");
var alumni4 = document.getElementById("alumni4"); 
var fa_a_4 = document.getElementById("alumni4-a");
var fa_b_4 = document.getElementById("alumni4-b");
var fa_c_4 = document.getElementById("alumni4-c");
var fa_d_4 = document.getElementById("alumni4-d");

alumni4.onmouseover = function(){
    hr4.style.backgroundColor='#5F5F5F';
    hr4.style.borderColor='#5F5F5F';
    fa_a_4.style.color='#5F5F5F';
    fa_b_4.style.color='#5F5F5F';
    fa_c_4.style.color='#5F5F5F';
    fa_d_4.style.color='#5F5F5F';
};
alumni4.onmouseout = function(){
    hr4.style.backgroundColor='white';
    hr4.style.borderColor='white';
    fa_a_4.style.color='white';
    fa_b_4.style.color='white';
    fa_c_4.style.color='white';
    fa_d_4.style.color='white';
};










var hr5 = document.getElementById("alumni5-hr");
var alumni5 = document.getElementById("alumni5"); 
var fa_a_5 = document.getElementById("alumni5-a");
var fa_b_5 = document.getElementById("alumni5-b");
var fa_c_5 = document.getElementById("alumni5-c");
var fa_d_5 = document.getElementById("alumni5-d");

alumni5.onmouseover = function(){
    hr5.style.backgroundColor='#e9e64d';
    hr5.style.borderColor='#e9e64d';
    fa_a_5.style.color='#e9e64d';
    fa_b_5.style.color='#e9e64d';
    fa_c_5.style.color='#e9e64d';
    fa_d_5.style.color='#e9e64d';
};
alumni5.onmouseout = function(){
    hr5.style.backgroundColor='white';
    hr5.style.borderColor='white';
    fa_a_5.style.color='white';
    fa_b_5.style.color='white';
    fa_c_5.style.color='white';
    fa_d_5.style.color='white';
};







var hr6 = document.getElementById("alumni6-hr");
var alumni6 = document.getElementById("alumni6"); 
var fa_a_6 = document.getElementById("alumni6-a");
var fa_b_6 = document.getElementById("alumni6-b");
var fa_c_6 = document.getElementById("alumni6-c");
var fa_d_6 = document.getElementById("alumni6-d");

alumni6.onmouseover = function(){
    hr6.style.backgroundColor='#4BBCD7';
    hr6.style.borderColor='#4BBCD7';
    fa_a_6.style.color='#4BBCD7';
    fa_b_6.style.color='#4BBCD7';
    fa_c_6.style.color='#4BBCD7';
    fa_d_6.style.color='#4BBCD7';
};
alumni6.onmouseout = function(){
    hr6.style.backgroundColor='white';
    hr6.style.borderColor='white';
    fa_a_6.style.color='white';
    fa_b_6.style.color='white';
    fa_c_6.style.color='white';
    fa_d_6.style.color='white';
};










