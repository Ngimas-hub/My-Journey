
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
window.onload = function () {
  document.getElementById("introBox").classList.add("show");
};
