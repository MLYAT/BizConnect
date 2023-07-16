window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scroll-to-top');
    var mainBlock = document.querySelector('.main-block-left');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
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
  
  
  