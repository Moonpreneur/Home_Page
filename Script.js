document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        item.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });

    const grades = document.querySelectorAll('.grade');

    grades.forEach(grade => {
        grade.addEventListener('click', function() {
            const gradeNumber = this.getAttribute('data-grade');
            window.location.href = `topics_grade${gradeNumber}.html`;
        });
    });
});

document.querySelector('.social-media a[href="signin.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'signin.html';
});



