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

        // إرسال البيانات إلى الخادم باستخدام fetch (تستطيع تعديل الرابط لاحقًا)
        fetch('https://your-server-endpoint.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            // التحقق من نجاح الاستجابة من الخادم
            if (data.success) {
                console.log('تم تسجيل الدخول بنجاح');
                window.location.href = "dashboard.html";  // الانتقال إلى صفحة لوحة التحكم بعد التسجيل
            } else {
                alert('فشل في تسجيل الدخول، يرجى المحاولة مرة أخرى');
            }
        })
        .catch(error => {
            console.error('خطأ في إرسال البيانات:', error);
            alert('حدث خطأ أثناء إرسال البيانات');
        });
    }
});
