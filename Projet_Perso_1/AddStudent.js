function addStudent() {
    if (Event.AT_TARGET.id === 'add-student-btn'){
        const studentFirstName =  document.getElementById('student-firstname').value;
        const studentName = document.getElementById('studentName').value;
        const studentAge = document.getElementById("age").value;
        const gender = document.getElementById("Gender").value;
        const classe = document.getElementById('classSelection').value;
        const email = document.getElementById('email').value;
        
        const xhr = new  XMLHttpRequest();
        xhr.open('POST', '/addStudent', true);
        xhr.onload = function() {
            if (this.status == 200) {
                alert('Student added');
    }
};
xhr.send('studentName=' + studentName + '&studentFirstName=' + studentFirstName + '&age=' + age + '&gender=' + gender + '&classe' + classe + '&email=' + email);
}
}

document.getElementById('add-student-btn').addEventListener('click', function(){
    addStudent();
});


// function addNote() {
//     const studentId = document.getElementById('studentId').value;
//     const note = document.getElementById('note').value;
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", `/addNote?studentId=${studentId}&note=${note}`, true);
//     xhr.onload= function(){
//         if(this.status==200){
//             alert('Note added !');
//         }
// };
// xhr.send();
// }
