document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault(); // منع إرسال النموذج حتى نتحقق من البيانات

    // الحصول على القيمة المدخلة في الحقل
    var username = document.getElementById("username").value;

    // التحقق إذا كان الحقل فارغًا
    if(username === "") {
        // إذا كان فارغًا، نعرض رسالة خطأ للمستخدم
        alert("الرجاء إدخال اسم المستخدم!");
    } else {
        // إذا كانت البيانات صحيحة، نعرضها في الكونسول
        console.log("اسم المستخدم: " + username);

        // إذا كنت ترغب في إظهار رسالة للمستخدم بعد إرسال البيانات
        alert("تم إرسال البيانات بنجاح!");
    }
});
