document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج حتى نتحقق من البيانات

    // الحصول على القيم المدخلة
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // مسح رسائل الخطأ أو النجاح القديمة
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("formSuccess").style.display = "none";

    // التحقق من صحة البريد الإلكتروني باستخدام تعبير عادي (regular expression)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var isEmailValid = emailPattern.test(email);

    // التحقق إذا كان الحقل فارغًا أو البريد الإلكتروني غير صحيح
    if (username === "") {
        document.getElementById("usernameError").style.display = "block";
    } else if (!isEmailValid) {
        document.getElementById("emailError").style.display = "block";
    } else if (password === "") {
        document.getElementById("passwordError").style.display = "block";
    } else {
        document.getElementById("formSuccess").style.display = "block";

        // تخزين حالة تسجيل الدخول في الـ LocalStorage
        localStorage.setItem('loggedIn', true);

        // التوجيه إلى لوحة التحكم مباشرة (تجاوز الخادم مؤقتًا)
        setTimeout(() => {
            window.location.href = "dashboard.html"; // الانتقال إلى صفحة لوحة التحكم بعد التحقق
        }, 1000); // تأخير صغير لعرض رسالة النجاح أولًا
    }
});
