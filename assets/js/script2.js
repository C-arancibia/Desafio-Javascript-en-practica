document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('button[id^="btn-"]');
    const mainBox = document.getElementById('caja');

    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const color = this.style.backgroundColor;
            mainBox.style.backgroundColor = color;
        });
    });
});
