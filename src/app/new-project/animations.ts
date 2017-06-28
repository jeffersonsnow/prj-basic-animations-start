import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
   state('valid', style({
       backgroundColor: 'green',
       borderColor: 'darkgreen'
   })),
   state('invalid', style({
        backgroundColor: '#d9534f',
        borderColor: '#d43f3a'
   })),
   transition('invalid => valid', [
       group([
           animate(100, style({
               transform: 'scale(1.1)'
           })),
           animate(200, style({
               backgroundColor: 'green',
               borderColor: 'darkgreen'
           })),
       ]),
       animate(200, style({
           transform: 'scale(1)'
       }))
   ]),
   transition('valid => invalid', [
       group([
           animate(100, style({
               transform: 'scale(1.1)'
           })),
           animate(200, style({
               backgroundColor: '#d9534f',
               borderColor: '#d43f3a'
           })),
       ]),
       animate(200, style({
           transform: 'scale(1)'
       }))
   ]),
])