const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(totalDuration){
        duration = totalDuration
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete(){
        let timeLeft = 1
        const inter = setInterval(function(){
            if(timeLeft >= 0){
                circle.setAttribute('stroke-dashoffset', (0-perimeter) - (perimeter - timeLeft / 1 *perimeter))
                timeLeft = timeLeft - 0.01
            }else{
                circle.setAttribute('stroke-dashoffset', (0-perimeter) - (perimeter - timeLeft / 1 *perimeter))
                timeLeft = timeLeft - 0.01
                clearInterval(inter);
            }
        },10)
    }
});