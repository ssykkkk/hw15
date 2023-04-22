function clock() {
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");
  
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const hourRotation = hours * 30 + (minutes / 2); // одна година - 30 градусів
    const minuteRotation = minutes * 6; // одна хвилина - 6 градусів
    const secondRotation = seconds * 6; // одна секунда - 6 градусів
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(clock, 1000); // оновлює годинник кожну секунду
  