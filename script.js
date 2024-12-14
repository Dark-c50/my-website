document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault(); // منع إرسال النموذج حتى نتحقق من البيانات

    // الحصول على القيم المدخلة
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // مسح رسائل الخطأ أو النجاح القديمة
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("formSuccess").style.display = "none";

    // التحقق إذا كان الحقل فارغًا
    if(username === "") {
        document.getElementById("usernameError").style.display = "block";
    } else if(password === "") {
        document.getElementById("passwordError").style.display = "block";
    } else {
        document.getElementById("formSuccess").style.display = "block";
        console.log("اسم المستخدم: " + username);
        console.log("كلمة المرور: " + password);

        // بعد إرسال البيانات بنجاح، نقوم بتحويل المستخدم إلى صفحة جوجل
        window.location.href = "https://www.google.com";
    }
});
