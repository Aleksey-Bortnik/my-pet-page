
//* Some people, when faced with a problem, think, "Oh, I'll use regular expressions.
//* Now they have two problems.
//? (c) Jamie Zawinski, regex.info


const form = (function () {

  //Masks:
  $('#phone').mask('+375(99)999-99-99');
  $('#card').mask('9999 9999 9999 9999');

  // Methods:
  function validateEmail(email) {
    const wildExpression = /^(?=.{1,100}@)([\w-%+]+(?:\.[\w-%+]+)*)@(?=.{1,58}\.([a-z]{2,10})$)((?:[a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)\.([a-z]{2,10})$/;
    return wildExpression.test(email);
  }

  function validatePassword(password) {
    const passExpression = /^((?=.*\d)(?=.[a-z])(?=.*[A-Z]).{8,15})$/;
    return passExpression.test(password);
  }

  function postalCode(input) {
    let iValue = input.val();
    let zipCharacters = iValue.replace(/[^0-9\-/]/g, "");
    input.val(zipCharacters);
  }
  function city(input) {
    let iValue = input.val();
    let cityCharacters = iValue.replace(/[^a-zA-Z\-/]/g, "");
    input.val(cityCharacters);
  }

  // Listeners:
  $('#email').on('focusout', (e) => {
    const isEmail = validateEmail($('#email').val());
    if ($('#email').val() && !isEmail) {
      $('#email').addClass('input-error');
      $('#email').val('😑 Really?');
    } else {
      $('#email').removeClass('input-error');
      $('#email').val();
    }
  });

  $('#password').on('focusout', (e) => {
    let userVal = $('#password').val()
    const isPass = validatePassword(userVal);
    if ($('#password').val() && !isPass) {
      $('#password').addClass('input-error');
      $('#password').val('😑 Really?');
    } else {
      $('#password').removeClass('input-error');
    }
  });

  $('#zipcode').on('input', (e) => {
    postalCode($('#zipcode'));
  });

  $('#city').on('input', (e) => {
    city($('#city'));
  });

})()
