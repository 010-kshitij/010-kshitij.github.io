$(document).ready(function(){
  var colors = ["#800080", "#460080", "#003680", "#007280", "#008030", "#802c00"];
  var currentColor = 0;
  function switchColor() {
    if (currentColor >= colors.length) currentColor = 0;

    $('.header').css('transition', 'background-color 2s ease');
    $('.header').css('background-color', colors[currentColor++]);

    setTimeout(switchColor, 5000);
  }
switchColor();
});
