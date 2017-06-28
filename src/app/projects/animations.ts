import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
    state('default', style({
        border: '1px solid black',
        backgroundColor: 'transparent',
        padding: '20px',
        // transform: 'scale(1)',
    })),
    state('marked', style({
        border: '2px solid blue',
        backgroundColor: '#caeff9',
        padding: '19px',
        // transform: 'scale(1)',
    })),
    transition('default => marked', [
        style({
            border: '2px solid black', //this still gets the color animation but instantly changes the width
            padding: '19px',
            transform: 'scale(1)',
        }),
        animate('300ms ease-out', style({
             transform: 'scale(1.05)',
        })),
        animate(300)
    ]),
    transition('marked => default', [
        style({
            border: '1px solid blue', //this still gets the color animation but instantly changes the width
            padding: '20px',
        }),
        animate('500ms ease-out'),
    ]),
]);

export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        animate('800ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                offset: 0,
            }),
            style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.4,
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1,
            }),
        ]))
        // style({
        //     opacity: 0,
        //     transform: 'translateX(-100%)',
        // }),
        // animate('700ms ease-out', style({
        //     opacity: 1,
        //     transform: 'translateX(0)'
        // }))
    ]),
    transition(':leave', [
        // style({ //these styles are the default so you don't need to write them
        //     opacity: 1,
        //     transform: 'translateX(0)',
        // }),
        animate('500ms ease-in', keyframes([
            style({
                opacity: 1,
                transform: 'translateX(0)'
            }),
            style({
                opacity: 1,
                transform: 'translateX(-15%)'
            }),
            style({
                opacity: 0,
                transform: 'translateX(100%)'
            })
        ]))
    ]),
    transition('slidUp => slidDown', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('500ms ease-out', style({
            transform: 'translateY(0)'
        }))
    ]),
    transition('slidDown => slidUp', [
        style({
            transform: 'translateY(0)'
        }),
        animate('300ms ease-in', style({
            transform: 'translateY(-100%)'
        }))
    ]),
]);

export const slideStateTrigger = trigger('slideState', [
    transition(':enter', [
        animate('300ms ease-out', keyframes([
            style({
                transform: 'translateY(-100%)',
            }),
            // style({
            //     transform: 'translateY(15%)',
            // }),
            style({
                transform: 'translateY(0)', 
            }),
        ]))
    ]),
    transition(':leave', [
        animate('300ms ease-in', keyframes([
            style({
                transform: 'translateY(0)',
            }),
            // style({
            //     transform: 'translateY(15%)',
            // }),
            style({
                transform: 'translateY(-100%)',
            }),
        ]))
    ])
]);



