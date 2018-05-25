class CountDown {
    constructor(el,options) {
        this.el = el;
        this.countDownSeconds = 0,
        this.doubleDigit = true,
        this.secondsOnly = false,
        this.callback = () => {
            return false;
        }
        for (var option in options) {
            this[option] = options[option];
        }
    }

    init(){
        this._render(this.countDownSeconds);
        if(this.countDownSeconds == 0){
            this.callback();
        } else {
            --this.countDownSeconds;
            setTimeout(()=>{this.init()},1000);
        }
    }

    _render(remainSeconds){
        let seconds;
        if(this.secondsOnly){
            seconds = this._zero(remainSeconds);
        } else {
            seconds = this._zero(remainSeconds % 60);
        }
        let [minutes,hours,days] = [
            this._zero(Math.floor(remainSeconds / 60) % 60),
            this._zero(Math.floor(remainSeconds / 60 / 60) % 24),
            this._zero(Math.floor(remainSeconds / 60 / 60) / 24)
        ]
        this._display({days: days, seconds: seconds, minutes: minutes, hours: hours});
    }

    _zero(num){
        let n = parseInt(num,10);
        if(n>0 && this.doubleDigit){
            if (n <= 9) {
                n = "0" + n;
            }
            return String(n);
        } else if (n>=0 && !this.doubleDigit){
            return String(n);
        } else {
            return '00';
        }
    }

    _display(obj){
        let _temp;
        if(this.secondsOnly){
            _temp = obj.seconds;
        } else {
            _temp = obj.days + ':' + obj.hours + ':' + obj.minutes + ':' + obj.seconds;
        }
        this.el.innerHTML = _temp;
    }

}

export default CountDown