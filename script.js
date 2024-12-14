document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();  // منع إرسال النموذج حتى نتحقق من البيانات

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

        // إرسال البيانات إلى الخادم باستخدام fetch
        fetch('https://dark-c50.github.io/my-website', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
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
