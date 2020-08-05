// $(function() {
//     let h1Height = $('.sticky').height(); // get height of h1 tag
//     $('li a').click(function (e) {
//         e.preventDefault();
//         let target = $(this.hash);
//         $('html, body').animate({
//             scrollTop: target.offset().top - h1Height // scroll to h3 minus height of h1
//         }, 1000);
//         return false;
//     });
//   });

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  
  alert('Full document height, with scrolled out part: ' + scrollHeight);