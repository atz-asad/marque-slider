
// Initialize marquees
// Helper to normalize returned instances (library returns single instance or array)
// function singleInstance(v) { return Array.isArray(v) ? v[0] : v; }

// Example 1: text marquee (pause on hover)
let m1 = window.gsapMarquee('#m1', {
  speed: 100,
  pauseOnHover: true,
  containerSelector: '.marqueeInner',
  itemsSelector: '.marquee-item'
});

const marqueeItems = document.querySelectorAll('.marquee-item');

marqueeItems.forEach(item => {
  const img = item.querySelector('.hover-img');
  let targetX = 0;
  let currentX = 0;

  function animate() {
    currentX += (targetX - currentX) * 0.15; // smooth easing
    img.style.left = currentX + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    targetX = mouseX - img.offsetWidth / 2; // center image
  });

  item.addEventListener('mouseleave', () => {
    targetX = 0; // smooth reset
  });
});

