import {Representative} from 'politburo'
import ChatRegime from '../ChatRegime'

export default class MotherPaneRep extends Representative {
    constructor() {
        super();

        ChatRegime.on(ChatRegime.EventType.INITIAL_DATA, () => this.emit(this.EventType.UPDATE));
        ChatRegime.on(ChatRegime.EventType.SET_ACTIVE_THREAD, () => this.emit(this.EventType.UPDATE));
    }

    get activeThread() {
        return ChatRegime.activeThread;
    }

    setActive(thread) {
        ChatRegime.setActive(thread);
    }

    get EventType() {
        return {
            UPDATE: 'update'
        };
    }
}
