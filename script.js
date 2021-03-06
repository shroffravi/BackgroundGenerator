var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ")";
}



function setGradient()
{
	body.style.background = "linear-gradient(to right, "
						+ color1.value
						+ ","
						+ color2.value
						+ ")";

	css.textContent = body.style.background + ";";
}

function get_rand_color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}


color1.setAttribute('value', get_rand_color());
color2.setAttribute('value', get_rand_color());


setGradient()

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
