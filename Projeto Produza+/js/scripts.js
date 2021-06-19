$(document).ready(function () {

  // Parallax

  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function () {
    $('#data-area').parallax({ imageSrc: 'public/imgs/cidadeparallax.png' });
    $('#apply-area').parallax({ imageSrc: 'public/imgs/pattern.png' });
  }, 200);

  // Filtro portfólio

  $('.filter-btn').on('click', function () {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if (type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if (type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if (type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if (type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let contactSection = $('#contact-area');
  let loginSection = $('#login-area');

  let scrollTo = '';

  $(navBtn).click(function () {

    let btnId = $(this).attr('id');

    if (btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if (btnId == 'services-menu') {
      scrollTo = servicesSection;
    }
    else if (btnId == 'login-menu') {
      scrollTo = loginSection;
    }
    else if (btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });


  const validateEmail = (event) => {
    const input = event.currentTarget;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(input.value);

    if (!emailTest) {
      submitButton.setAttribute("disabled", "disabled");
      input.nextElementSibling.classList.add('error');
    } else {
      submitButton.removeAttribute("disabled");
      input.nextElementSibling.classList.remove('error');
    }
  }

  const validatePassowrd = (event) => {
    const input = event.currentTarget;

    if (input.value.length < 8) {
      submitButton.setAttribute("disabled", "disabled");
      input.nextElementSibling.classList.add('error');
    } else {
      submitButton.removeAttribute("disabled");
      input.nextElementSibling.classList.remove('error');
    }
  }

  const inputEmail = document.querySelector('input[type="email"]');
  const inputPassword = document.querySelector('input[type="password"]');
  const submitButton = document.querySelector('.main-btn');

  inputEmail.addEventListener('input', validateEmail);
  inputPassword.addEventListener('input', validatePassowrd);

  const errorHandler = () => {
    submitButton.classList.remove('loading');
    submitButton.classList.remove('success');
    submitButton.classList.add('error');
    submitButton.textContent = "Incorreto";
  }

  const successHandler = () => {
    submitButton.classList.remove('loading');
    submitButton.classList.remove('error');
    submitButton.classList.add('success');
    submitButton.textContent = "Correto!";
    window.location.href = "testePage.html";
  }
  //email: "eve.holt@reqres.in",
  //senha: "cityslicka",
  if (submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      submitButton.textContent = "Carregando...";

      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputEmail.value,
          password: inputPassword.value,
        })
      }).then((response) => {
        if (response.status !== 200) {
          return errorHandler();
        }

        successHandler();

      }).catch(() => {
        errorHandler();
      })
    })
  }  

});