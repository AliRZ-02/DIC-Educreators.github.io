function SubjectPage() {
    location.href = "../Subject Page/subjectPage.html";
}

function TasksPage() {
    location.href = "../Daily Tasks/tasks.html";
}

function NewM() {
    var newMessages = false;
    var messages = "You have New Messages";
    if (newMessages) {
        document.getElementById("New").innerHTML = messages;
    } else {
        document.getElementById("New").innerHTML = "Hooray! No New Messages!";
    }
}

function NewA(){
    var newMessages = true;
    var messages = "You have a New Assignment in English: Complete Independent Reading (Holes)";
    if (newMessages) {
        document.getElementById("NewAssignments").innerHTML = messages;
    } else {
        document.getElementById("NewAssignments").innerHTML = "Hooray! No New Assignments!";
    }
}

function HomePage() {
    location.href = "homePage.html"
}

