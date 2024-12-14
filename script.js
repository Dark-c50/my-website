document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // الحصول على القيم المدخلة
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // التحقق من صحة المدخلات
    if (username === "" || password === "") {
        alert("الرجاء إدخال جميع البيانات!");
    } else {
        // إخفاء نموذج تسجيل الدخول
        document.getElementById("loginFormContainer").style.display = "none";

        // إظهار لوحة التحكم (الداشبورد)
        document.getElementById("dashboardContainer").style.display = "block";
    }
});

document.getElementById("chargeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // الحصول على القيم المدخلة في الداشبورد
    var playerID = document.getElementById("playerID").value;
    var gemsAmount = document.getElementById("gemsAmount").value;

    // عرض رسالة تأكيد الشحن
    document.getElementById("confirmationMessage").style.display = "block";
    alert("تم شحن " + gemsAmount + " جوهرة إلى ID اللاعب " + playerID);
});

