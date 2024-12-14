document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

    // الحصول على القيم المدخلة
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // مسح رسائل الخطأ أو النجاح القديمة
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("formSuccess").style.display = "none";

    // التحقق من المدخلات
    if(username === "") {
        document.getElementById("usernameError").style.display = "block"; // إظهار رسالة خطأ
    } else if(password === "") {
        document.getElementById("passwordError").style.display = "block"; // إظهار رسالة خطأ
    } else {
        document.getElementById("formSuccess").style.display = "block"; // إظهار رسالة نجاح
        console.log("اسم المستخدم: " + username);
        console.log("كلمة المرور: " + password);

        // إعادة التوجيه إلى صفحة الداشبورد بعد نجاح التحقق
        setTimeout(function() {
            window.location.href = "dashboard.html"; // توجه إلى صفحة الداشبورد بعد التحقق
        }, 1000); // تأخير 1 ثانية لتظهر رسالة النجاح
    }
});
