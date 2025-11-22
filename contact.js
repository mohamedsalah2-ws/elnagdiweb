// Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // منع إعادة التحميل

    // جمع البيانات
    const formData = {
        name: this.name?.value || this.querySelector('input[type="text"]').value,
        email: this.email?.value || this.querySelector('input[type="email"]').value,
        phone: this.phone?.value || this.querySelector('input[type="tel"]').value,
        subject: this.subject?.value || "عام",
        message: this.message?.value || this.querySelector('textarea').value
    };

    console.log("Form Data:", formData);

    // عرض رسالة نجاح
    formMessage.textContent = "تم إرسال رسالتك بنجاح! سنعاود التواصل معك قريباً.";
    formMessage.style.color = "green";

    // إعادة تعيين النموذج
    contactForm.reset();

    // هنا يمكن إضافة كود الإرسال عبر API أو بريد إلكتروني
});
