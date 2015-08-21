import {Representative} from 'politburo'
import ChatRegime from '../ChatRegime'


export default class RootRep extends Representative {
    constructor() {
        super();
        ChatRegime.on(this.EventType.ADD_CHAT_BOX, thread => this.emit(this.EventType.ADD_CHAT_BOX, thread));
        ChatRegime.on(this.EventType.REMOVE_CHAT_BOX, thread => this.emit(this.EventType.REMOVE_CHAT_BOX, thread));
    }

    get active() {
        return !!ChatRegime.activeChatBox;
    }

    deactivateChatBox() {
        ChatRegime.setActiveChatBox(null);
    }

    get EventType() {
        return {
            ADD_CHAT_BOX: 'add chat box',
            REMOVE_CHAT_BOX: 'remove chat box',
            SET_ACTIVE_CHAT_BOX: 'set active chat box'
        };
    }
}
