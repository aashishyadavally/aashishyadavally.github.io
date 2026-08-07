$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
  });
  $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
  });
  $('a').removeClass('waves-effect waves-light');

  // A URL fragment is not available to Jekyll at build time. Update the
  // active navbar item in the browser for links to sections on another tab.
  const $navItems = $('.navbar-nav .nav-item');
  $navItems.each(function() {
    $(this).data('server-active', $(this).hasClass('active'));
  });

  function updateFragmentNav() {
    $navItems.each(function() {
      $(this).toggleClass('active', $(this).data('server-active'));
    });

    if (!window.location.hash) return;

    $('.navbar-nav .nav-item[data-nav-fragment]').each(function() {
      const target = new URL($(this).children('a.nav-link').attr('href'), window.location.origin);
      if (target.pathname === window.location.pathname && target.hash === window.location.hash) {
        $navItems.removeClass('active');
        $(this).addClass('active');
      }
    });
  }

  updateFragmentNav();
  $(window).on('hashchange', updateFragmentNav);

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });
});
