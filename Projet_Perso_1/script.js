function addNote() {
    const studentId = document.getElementById('studentId').value;
    const note = document.getElementById('note').value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `/addNote?studentId=${studentId}&note=${note}`, true);
    xhr.onload= function(){
        if(this.status==200){
            alert('Note added !');
        }
};
xhr.send();
}