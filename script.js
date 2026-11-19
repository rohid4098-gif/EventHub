
// Block or unblock a user
function blockUser(button) {
    let row = button.parentElement.parentElement;
    let status = row.cells[3];

    if (status.innerHTML == "Active") {
        status.innerHTML = "Blocked";
        button.innerHTML = "Unblock";
    } else {
        status.innerHTML = "Active";
        button.innerHTML = "Block";
    }
}

// Delete a user
function deleteUser(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}

// Approve an event
function approveEvent(button) {
    let row = button.parentElement.parentElement;
    row.cells[3].innerHTML = "Approved";
    row.cells[4].innerHTML = "-";
}

// Reject an event
function rejectEvent(button) {
    let row = button.parentElement.parentElement;
    row.cells[3].innerHTML = "Rejected";
    row.cells[4].innerHTML = "-";
}

// Add a new category
function addCategory() {
    let name = document.getElementById("categoryName").value;

    if (name == "") {
        alert("Please enter a category name");
        return;
    }

    let table = document.getElementById("categoryTable");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = '<button onclick="deleteCategory(this)">Delete</button>';

    document.getElementById("categoryName").value = "";
}

// Delete a category
function deleteCategory(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
