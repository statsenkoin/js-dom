const box = document.querySelector('.box');
document.addEventListener('keydown', onPress);

let moveStepX = 0;
let moveStepY = 0;
function onPress(e) {
  const key = e.code;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const marginLeft = parseInt(box.style.marginLeft);
  const marginTop = parseInt(box.style.marginTop);

  if (key === 'ArrowLeft' && marginLeft > 0) {
    moveStepX -= 10;
  } else if (key === 'ArrowRight' && windowWidth - 140 > marginLeft) {
    moveStepX += 10;
  } else if (key === 'ArrowDown' && windowHeight - 200 > marginTop) {
    moveStepY += 10;
  } else if (key === 'ArrowUp' && marginTop > 0) {
    moveStepY -= 10;
  }
  box.style.marginLeft = `${moveStepX}px`;
  box.style.marginTop = `${moveStepY}px`;
}
