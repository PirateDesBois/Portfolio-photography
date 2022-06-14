let eye_ref1 = document.querySelectorAll('.eye1');
let eye_ref2 = document.querySelectorAll('.eye2');

let background = document.querySelector('.background');
let events = ['mousemove', 'touchmove'];

function isTouchDevice() {
        try{
                document.createEvent("TouchEvent");
                return true;
        }
        catch(e){
                return false;
        }
}

events.forEach((eventType)=>{
        document.body.addEventListener(eventType,(event) => {
                eye_ref1.forEach((eye)=>{
                        let eyeX = eye.getBoundingClientRect().right + eye.clientWidth / 0.5;
                        let eyeY = eye.getBoundingClientRect().bottom + eye.clientHeight / 0.5;
                        console.log(eyeX,eyeY);
                var x = !isTouchDevice() ? event.clientX :
                event.touches[0].clientX;
                var y = !isTouchDevice() ? event.clientY :
                event.touches[0].clientY;
                
                let radian = Math.atan2(y - eyeY, x - eyeX);
        let rotationDegrees = radian * (180 / Math.PI) - 180;
        eye.style.transform = "rotate(" + rotationDegrees +"deg)";
                });
        });
        document.body.addEventListener(eventType,(event) => {
                eye_ref2.forEach((eye)=>{
                        let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 0.5;
                        let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 0.5;
                        console.log(eyeX,eyeY);
                var x = !isTouchDevice() ? event.clientX :
                event.touches[0].clientX;
                var y = !isTouchDevice() ? event.clientY :
                event.touches[0].clientY;
                
                let radian = Math.atan2(y - eyeY, x - eyeX);
        let rotationDegrees = radian * (180 / Math.PI) - 180;
        eye.style.transform = "rotate(" + rotationDegrees +"deg)";
                });
        });
});