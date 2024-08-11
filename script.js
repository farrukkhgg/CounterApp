document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById("heading");
    const increment = document.getElementById("plus");
    const decrement = document.getElementById("minus");
    const reset = document.getElementById("reset");

    let count = parseInt(localStorage.getItem('counterValue')) || 0;
    console.log('count:', count);

    function updateCount() {
        counter.innerHTML = count;
        localStorage.setItem('counterValue', count);
        console.log('MyCount:', count);
    }

    increment.addEventListener('click', () => {
        count++;
        updateCount();
    });

    decrement.addEventListener('click', () => {
        if (count > 0) {
            count--;
        }
        updateCount();
    });

    reset.addEventListener('click', () => {
        count = 0;
        updateCount();
    });

    updateCount(); // Initialize the display
});
