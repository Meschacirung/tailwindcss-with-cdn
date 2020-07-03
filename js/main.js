var SMOOTH_SCROLL_DURATION = 700;
$('.smooth-scroll').on('click', 'a', function () {
  var elAttr = $(this).attr('href');

  if (typeof elAttr !== typeof undefined && elAttr.indexOf('#') === 0) {
    var offset = $(this).attr('data-offset') ? $(this).attr('data-offset') : 0;
    var setHash = $(this).parentsUntil('.smooth-scroll').last().parent().attr('data-allow-hashes');
    $('body,html').animate({
      scrollTop: $(elAttr).offset().top - offset
    }, SMOOTH_SCROLL_DURATION);

    if (typeof setHash !== typeof undefined && setHash !== false) {
      history.replaceState(null, null, elAttr);
    }

    return false;
  }
});

$('#navbar-open').on('click', function(){
  $('#links').removeClass('hidden');
  $('#navbar-open').addClass('hidden');
  $('#navbar-close').removeClass('hidden');
});

$('#navbar-close').on('click', function(){
  $('#links').addClass('hidden');
  $('#navbar-open').removeClass('hidden');
  $('#navbar-close').addClass('hidden');
});

$('#links').on('click', function(){
  $('#links').addClass('hidden');
  $('#navbar-open').removeClass('hidden');
  $('#navbar-close').addClass('hidden');
});