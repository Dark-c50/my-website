document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    console.log("اسم المستخدم: " + username);
});
