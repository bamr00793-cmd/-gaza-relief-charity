// كود JavaScript بسيط لتلبية المتطلبات
    

// 1. DOM Manipulation - تغيير النص عند الضغط على زر
document.addEventListener('DOMContentLoaded', function() {
    // تغيير نص في الهيدر عند الضغط على زر
    const changeTextBtn = document.createElement('button');
    changeTextBtn.className = 'btn btn-warning btn-sm m-2';
    changeTextBtn.textContent = 'تغيير الترحيب';
    document.querySelector('.hero-section .container').prepend(changeTextBtn);
    
    changeTextBtn.addEventListener('click', function() {
        const heroTitle = document.querySelector('.hero-section h1');
        heroTitle.textContent = 'شكراً لدعمكم لغزة!';
        heroTitle.style.color = '#ffc107';
    });

    // 2. Event - Form Validation (سيتم في صفحة الاتصال)
    
    // 3. Loop لعرض بيانات
    const services = [
        { name: 'مشاريع إسكان', count: 120 },
        { name: 'أسر مستفيدة', count: '10,000+' },
        { name: 'مساعدات غذائية', count: '50,000+' },
        { name: 'مستفيدين طبياً', count: '5,000+' }
    ];
    
    // عرض البيانات في console
    console.log('إحصائيات المؤسسة:');
    for (let i = 0; i < services.length; i++) {
        console.log(`${services[i].name}: ${services[i].count}`);
    }
    
    // 4. jQuery Animation
    $(document).ready(function() {
        // تأثير Fade In للكروت
        $('.card').hide().fadeIn(1000);
        
        // Smooth scroll للروابط
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            const target = $(this.getAttribute('href'));
            if(target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            }
        });
        
        // تأثير عند hover على الخدمات
        $('.services .card').hover(
            function() {
                $(this).animate({marginTop: '-10px'}, 200);
            },
            function() {
                $(this).animate({marginTop: '0px'}, 200);
            }
        );
    });
    
    // 5. Simple Counter Animation
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 20);
    }
});