import {Representative} from 'politburo'
import ThreadStereotype from '../ThreadStereotype'
import ChatRegime from '../ChatRegime'


export default class ThreadsPopoverRep extends Representative {
    constructor() {
        super();

        this.visible = false;
    }

    toggle() {
        this.visible = !this.visible;
    }

    addChatBox(thread) {
        ChatRegime.addChatBox(thread);
    }

    get EventType() {
        return {
            INITIAL_DATA: 'initial data',
            UPDATE: 'update'
        };
    }
}
