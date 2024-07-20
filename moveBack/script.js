document.addEventListener('mousemove', function(e) {
    const moveFactor = 20; // Factor de movimiento, ajusta según necesidad
    let x = (e.clientX - window.innerWidth / 2) / moveFactor;
    let y = (e.clientY - window.innerHeight / 2) / moveFactor;

    document.querySelector('.background').style.transform = `translate(${x}px, ${y}px)`;
});
