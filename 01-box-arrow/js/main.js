const box = document.querySelector('.box');
document.addEventListener('keydown', onPress);

let moveStepX = 0;
let moveStepY = 0;
function onPress(e) {
  const key = e.code;

  if (key === 'ArrowLeft') {
    moveStepX -= 10;
    box.style.marginLeft = `${moveStepX}px`;
  } else if (key === 'ArrowRight') {
    moveStepX += 10;
    box.style.marginLeft = `${moveStepX}px`;
  } else if (key === 'ArrowDown') {
    moveStepY += 10;
    box.style.marginTop = `${moveStepY}px`;
  } else if (key === 'ArrowUp') {
    moveStepY -= 10;
    box.style.marginTop = `${moveStepY}px`;
  }
}
