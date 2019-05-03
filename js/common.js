

$(".header__btn").click(function() {
  $('html, body').animate({
      scrollTop: $("#footer").offset().top
  }, 1000);
});


$(document).ready(function() {
  $('#footer__form').submit(function(e) {
    e.preventDefault();
    var input_name = $('#input-name').val();
    var input_phone = $('#input-phone').val();
    var input_email = $('#input-email').val();
    var input_textarea = $('#input-textarea').val();
 
    $(".error").remove();
 
    if (input_name.length < 1) {
      $('#input-name').after('<span class="error">Введите имя</span>');
    }
    if (input_phone.length < 1) {
      $('#input-phone').after('<span class="error">Введите телефон</span>');
    }
    if (input_email.length < 1) {
      $('#input-email').after('<span class="error">Введите email</span>');
    }
    if (input_textarea.length < 1) {
      $('#input-textarea').after('<span class="error">Введите текст</span>');
    } else {
      var regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      var regMail = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
      var validEmail = regMail.test(input_email);
      var validPhone = regPhone.test(input_phone);
      if (!validEmail) {
        $('#input-email').after('<span class="error">Введите правильно email</span>');
      }
      if (!validPhone) {
        $('#input-phone').after('<span class="error">Введите правильно телефон</span>');
      }
    }
  });
});