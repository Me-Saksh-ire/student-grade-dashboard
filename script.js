// create a line divider in between student name, roll number and students subject marks
var canvas = document.getElementById("createLine");
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(100, 0);
ctx.lineWidth = 2;
ctx.stroke();


// create a variables using appropriate id's to display data in web page
const studentDetails = document.getElementById('studentDetails');
const tableDisplay = document.getElementById('tableDisplay');
const resetButton = document.getElementById('button');
const form = document.getElementById('form')


// create event that reset or empty the input field after submitting data
resetButton.addEventListener('click', () => {
  document.getElementById("num").value = "";
  document.getElementById("name").value = "";
  document.getElementById("eng").value = "";
  document.getElementById("hind").value = "";
  document.getElementById("mar").value = "";
  document.getElementById("sci").value = "";
  document.getElementById("socs").value = "";
  document.getElementById("math").value = "";
});


// create an empty array where inserted student data will be store
let students = [];


// addStudent() method allow user to input the data and make operation on the inputed data such as checks whether the input field is empty or not and according to it, addition, calculating percentage , grade 

// it accept marks in whole and float numbers or not then it will consider 0 
function addStudent() {
  let rollno = document.getElementById("num").value;
  let name = document.getElementById("name").value;
  let eng = parseFloat(document.getElementById("eng").value) || 0;
  let hind = parseFloat(document.getElementById("hind").value) || 0;
  let mar = parseFloat(document.getElementById("mar").value) || 0;
  let sci = parseFloat(document.getElementById("sci").value) || 0;
  let socs = parseFloat(document.getElementById("socs").value) || 0;
  let maths = parseFloat(document.getElementById("math").value) || 0;


// checks whether the input field is empty or not and is empty then it alert 'Roll Number and Name are required!' this message
   if(!rollno || !name){
    alert("Roll Number and Name are required!");
    return;
  }
  
// addition, calculating percentage , grading takes place
  let maxTotalMarks = 100;
  let totalSubject = 6;
  let totalMarks = eng + hind + mar + sci + socs + maths;
  let percentage = (totalMarks / (totalSubject * maxTotalMarks)) * 100;


  const grade= percentage >= 91 ? "A" : percentage >= 81 ? "B" : percentage >= 71 ? "C" : percentage >= 61 ? "D" : percentage >= 51 ? "E" : percentage >= 41 ? "F" : percentage >= 31 ? "G" : percentage >= 21 ? "H" : percentage >= 11 ? "I" : "Fail";



// Insert the inputed student data into table format
  let table = document.getElementById("studentDetails");
  let row = table.insertRow();
  row.insertCell(0).textContent = rollno;
  row.insertCell(1).textContent = name;
  row.insertCell(2).textContent = eng;
  row.insertCell(3).textContent = hind;
  row.insertCell(4).textContent = mar;
  row.insertCell(5).textContent = sci;
  row.insertCell(6).textContent = socs;
  row.insertCell(7).textContent = maths;

  //Calculated Field
  row.insertCell(8).textContent = totalMarks;
  row.insertCell(9).textContent = percentage.toFixed(2) + " %";
  row.insertCell(10).textContent = grade;


// delete the specific row which is no longer required
  const butn = document.createElement('Button');
  butn.id = 'deleteBtn'
  butn.innerText = 'Delete';

  butn.addEventListener('click', () => {
    row.remove();

  });
  row.insertCell(11).appendChild(butn);
  

  // push or insert the students details into student[] array
  students.push({rollno, name, eng, hind, mar, sci, socs, maths, totalMarks, percentage, grade,
});



// create a functionality to calculate class average
let totalClassMarks = 0;

students.forEach(student => {
  totalClassMarks += student.percentage;
  totalClassMarks
});
let classAverage = totalClassMarks / students.length;

document.getElementById('classAverage').textContent = classAverage.toFixed(2) + ' %';



}






