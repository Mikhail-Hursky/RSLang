document.cancelFullScreen =
  document.cancelFullScreen ||
  document.webkitCancelFullScreen ||
  document.mozCancelFullScreen;
export function enterFullscreen(id) {
  const el = document.getElementById(id);

  if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else {
    el.mozRequestFullScreen();
  }
  document.querySelector("#fullscreenBtn").onclick = function () {
    exitFullscreen(id);
  };
}

export function exitFullscreen(id) {
  if (
    document.mozFullScreen ||
    document.fullScreen ||
    document.webkitFullScreen
  ) {
    document.cancelFullScreen();
    document.querySelector("#fullscreenBtn").onclick = function () {
      enterFullscreen(id);
    };
  }
}
