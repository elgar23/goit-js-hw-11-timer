const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
    timer: document.getElementById("timer-1"),
};




class CountdownTimer {

    constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
        this.selector = selector;
       
    }


    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const time = this.targetDate-currentTime;
        this.component(time);
        this.timeFinish(time)
        
    }, 1000);
        

    component(time) {
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
    }

    timeFinish(time) {
    if (time < 0) {
      clearInterval(this.intervalId);
      refs.timer.textContent = "The End";
    }
  }
}
 
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});