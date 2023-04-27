import EventEmitter from 'events';
class ExEvent extends EventEmitter {
    constructor() {
        super();
    }
    
}
export const EventManager = new ExEvent();