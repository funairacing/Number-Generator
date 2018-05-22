var canvas, ctx , textbox;

window.onload = function () {
  canvas = document.getElementById("canvas");
  textbox = document.getElementById("textbox");
  ctx = canvas.getContext('2d');
  ctx.font = '100px electricboots';
  ctx.lineJoin = 'round';
};

function saveImage() {
  canvas = document.getElementById("canvas_save");
  textbox = document.getElementById("textbox");
  ctx = canvas_save.getContext('2d');
  ctx.font = '1760px electricboots';
  ctx.lineJoin = 'round';
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, canvas_save.width, canvas_save.height);
  ctx.setTransform(1,0,-0.1,1,0,0);
  var posx = 320;
  var posy = 1500;
  var text = textbox.value;
  ctx.strokeStyle = "#000";
  ctx.lineWidth =0;
  ctx.fillText(text, posx + 4, posy + 4);

  var a = document.createElement("a");
  a.href = canvas_save.toDataURL("image/png");
  a.setAttribute("download", "number.png");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function redraw() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(1,0,-0.18,1,0,0);
  var posx = 70;
  var posy = 100;
  var text = textbox.value;

  ctx.strokeStyle = "#000";
  ctx.lineWidth =0;
  ctx.fillText(text, posx + 4, posy + 4);
}
