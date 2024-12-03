
document.addEventListener('DOMContentLoaded', function () {
    const sectiune = document.getElementById('monitorizare-resurse');
    const imagini = Array.from(sectiune.querySelectorAll('img'));
    let indexCurent = 0;
    let interval;

   
    function schimbaImagine() {
        imagini[indexCurent].classList.remove('active');
        indexCurent = (indexCurent + 1) % imagini.length; 
        imagini[indexCurent].classList.add('active');
    }

   
    sectiune.addEventListener('dblclick', function () {
       
        if (interval) clearInterval(interval);

      
        imagini.forEach((img, index) => {
            img.classList.toggle('active', index === 0);
        });
        indexCurent = 0;
        interval = setInterval(schimbaImagine, 3000); 
    });
});