let students = [];

function addStudent() {
  const nameInput = document.getElementById('student-name');
  const name = nameInput.value.trim();
  if (name) {
    students.push(name);
    updateStudentList();
    updateStudentSelect();
    nameInput.value = '';
  }
}

function updateStudentList() {
  const list = document.getElementById('student-list');
  list.innerHTML = '';
  students.forEach((student, index) => {
    const li = document.createElement('li');
    li.textContent = student;
    list.appendChild(li);
  });
}

function updateStudentSelect() {
  const select = document.getElementById('student-select');
  select.innerHTML = '';
  students.forEach((student) => {
    const option = document.createElement('option');
    option.value = student;
    option.textContent = student;
    select.appendChild(option);
  });
}

function populatePassTime() {
  const passTimeSelect = document.getElementById('pass-time');
  for (let i = 3; i <= 45; i += 3) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${i} min`;
    passTimeSelect.appendChild(option);
  }
}

function submitPass() {
  const student = document.getElementById('student-select').value;
  const attendanceCode = document.getElementById('attendance-code').value;
  const passTime = document.getElementById('pass-time').value;
  const roomNumber = document.getElementById('room-number').value.trim();
  const teacherName = document.getElementById('teacher-name').value.trim();

  const passDisplay = document.getElementById('pass-display');
  passDisplay.innerHTML = `
    <h3>Inferno Schools</h3>
    <p><strong>Student Name:</strong> ${student}</p>
    <p><strong>Attendance Code:</strong> ${attendanceCode}</p>
    <p><strong>Pass Time:</strong> ${passTime} min</p>
    <p><strong>Room Number:</strong> ${roomNumber}</p>
    <p><strong>Teacher:</strong> ${teacherName}</p>
    <p><em>Issued by: ${teacherName}</em></p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  populatePassTime();
});
