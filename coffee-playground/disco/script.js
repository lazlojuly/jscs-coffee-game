// Generated by CoffeeScript 1.8.0
(function() {
  var ctx, noise;

  ctx = document.getElementById("game").getContext("2d");

  ctx.fillStyle = "#000";

  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);


  /*
  Parameter	Description	- 0,0,width,height
  x	The x-coordinate of the upper-left corner of the rectangle
  y	The y-coordinate of the upper-left corner of the rectangle
  width	The width of the rectangle, in pixels
  height	The height of the rectangle, in pixels
   */

  noise = function() {
    var color, x, y, _i, _results;
    _results = [];
    for (x = _i = 0; _i <= 20; x = ++_i) {
      _results.push((function() {
        var _j, _results1;
        _results1 = [];
        for (y = _j = 0; _j <= 10; y = ++_j) {
          color = Math.floor(Math.random() * 360);
          ctx.fillStyle = "hsl(" + color + ", 60%, 50%)";
          _results1.push(ctx.fillRect(x * 15, y * 15, 15, 15));
        }
        return _results1;
      })());
    }
    return _results;
  };

  setInterval(noise, 100);


  /* NOTES
  
  -- Math.random() --
  The Math.random() function returns a floating-point,
  pseudo-random number in the range [0, 1) that is,
  from 0 (inclusive) up to but not including 1 (exclusive).
  
  -- HSL --
  HSL stands for hue, saturation, and lightness -
  and represents a cylindrical-coordinate representation of colors.
  http://i.stack.imgur.com/3zJuP.png
   */

}).call(this);
