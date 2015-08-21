import {Representative} from 'politburo'
import ChatRegime from '../ChatRegime'


export default class ThreadListRep extends Representative {
    constructor() {
        super();

        ChatRegime.on(ChatRegime.EventType.INITIAL_DATA, () => this.emit(this.EventType.INITIAL_DATA));
        ChatRegime.on(ChatRegime.EventType.NEW_MESSAGE, data => this.emit(this.EventType.NEW_MESSAGE, data));
    }

    get threads() {
        return ChatRegime.threads;
    }

    get EventType() {
        return {
            INITIAL_DATA: 'initial data',
            NEW_MESSAGE: 'new message'
        };
    }

}
