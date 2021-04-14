export function soundSuccess() {
  const sound = new Audio('../../success.mp3');
  sound.play();
}

export function soundFail() {
 const sound = new Audio('../../fail.mp3');
 sound.play();
}
export function soundWord(path:string) {
 const sound = new Audio(path);
 sound.play();
}