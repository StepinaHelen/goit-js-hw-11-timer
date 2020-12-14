// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
refs = {
  days: document.querySelector("span[data-value='days']"),
  hours:document.querySelector("span[data-value='hours']"),
   mins:document.querySelector("span[data-value='mins']"),
  secs:document.querySelector("span[data-value='secs']")
}

const timer = {
  start() {
    const date = new Date('December 31, 2020 23:59:59');
//  console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
    const futureTime = `${date.getTime()}`
    setInterval(() => {
      currentTime = Date.now();
      deltaTime =futureTime - currentTime
      updateTime(deltaTime)
    }, 1000)
  }

}
timer.start()

function updateTime(time ) {

  const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs =pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = `${days}`
  refs.hours.textContent = `${hours}`
  refs.mins.textContent = `${mins}`
   refs.secs.textContent =`${secs}`
}

function pad(value) {
  return String(value).padStart(2, "0")
}

function padDays(value) {
  return String(value).padStart(3, " ")
}