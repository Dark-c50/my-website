document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault(); // منع إرسال النموذج حتى نتحقق من البيانات

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // مسح رسائل الخطأ أو النجاح القديمة
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("formSuccess").style.display = "none";

    if(username === "") {
        document.getElementById("usernameError").style.display = "block";
    } else if(password === "") {
        document.getElementById("passwordError").style.display = "block";
    } else {
        document.getElementById("formSuccess").style.display = "block";
        console.log("اسم المستخدم: " + username);
        console.log("كلمة المرور: " + password);

        // هنا يمكن توجيه المستخدم إلى الصفحة التالية بعد التحقق
        window.location.href = "dashboard.html"; // إعادة توجيه للصفحة التالية
    }
});
