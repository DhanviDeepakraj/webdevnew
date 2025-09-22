const toggleBtn = document.getElementById("toggleTextBtn");
const toggleText = document.getElementById("toggleText");
toggleBtn.addEventListener("click", function () {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
  } else {
    toggleText.style.display = "none";
  }
});

document.getElementById("infoBtn").addEventListener("click", function(){
  alert("Name: Your Name\nRegistration Number: 123456\nPhone Number: 9123456789");
});
