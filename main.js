window.addEventListener('scroll', function() {
    let scrollButton = document.getElementById('scroll-to-top');
    let mainBlock = document.querySelector('.main-block-left');
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > mainBlock.offsetHeight) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
  
  document.getElementById('scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  
  