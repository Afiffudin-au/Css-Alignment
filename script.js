$(document).ready(function(){
    //  Vannila Js In Action
    const AllButton = document.querySelectorAll('button');
    //  for(let i = 0; i<AllButton.length; i++){
    //    AllButton[i].addEventListener('click',function (e) {
    //     e.target.classList.add('fade');
    //     setTimeout(function () {
    //       e.target.classList.remove('fade');
    //     },100);
    //    });
    //  }
    AllButton.forEach(function(element) {
      element.addEventListener('click',function (e) {
        console.log(e.target);
        e.target.classList.add('fade');
        setTimeout(function () {
          e.target.classList.remove('fade');
        },100);
      });
    });
    // Jquery In Action
    $('.justify-start').click(function () {
      $('.container').css({
        'justify-content' : 'start'
      });
    });
    
    $('.justify-end').click(function () {
      $('.container').css({
        'justify-content' : 'end'
      });
    });

    $('.justify-center').click(function (){
      $('.container').css({
        'justify-content' : 'center'
      });
    });

    $('.justify-strech').click(function () {
      $('.container').css({
        'justify-content' : 'strech'
      });
    });

    $('.justify-space-evenly').click(function () {
      $('.container').css({
        'justify-content' : 'space-evenly'
      });
    });

    $('.justify-space-between').click(function () {
      $('.container').css({
        'justify-content' : 'space-between'
      });
    });
    $('.justify-space-around').click(function () {
      $('.container').css({
        'justify-content' : 'space-around'
      });
    });



    
    // Align Content In Action
    $('.align-start').click(function () {
      $('.container').css({
        'align-content' : 'start'
      });
    });
    
    $('.align-end').click(function () {
      $('.container').css({
        'align-content' : 'end'
      });
    });

    $('.align-center').click(function (){
      $('.container').css({
        'align-content' : 'center'
      });
    });

    $('.align-strech').click(function () {
      $('.container').css({
        'align-content' : 'strech'
      });
    });

    $('.align-space-evenly').click(function () {
      $('.container').css({
        'align-content' : 'space-evenly'
      });
    });

    $('.align-space-between').click(function () {
      $('.container').css({
        'align-content' : 'space-between'
      });
    });
    $('.align-space-around').click(function () {
      $('.container').css({
        'align-content' : 'space-around'
      });
    });
    $('.align-content').click(function () {
        $('.container').css({
          'align-content' : 'center'
        });
    });
});