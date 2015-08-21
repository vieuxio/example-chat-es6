import {Representative} from 'politburo'
import ChatRegime from '../ChatRegime'
import ThreadStereotype from '../ThreadStereotype'


export default class ThreadPreviewRep extends Representative {
    constructor(thread) {
        super();

        this.thread = thread;
        this.user = thread.user;
        this.lastMessage = thread.messages.slice(-1);

        ChatRegime.on(ChatRegime.EventType.SET_ACTIVE_THREAD, () => this.emit(this.EventType.SET_ACTIVE_THREAD));
        ChatRegime.on(ChatRegime.EventType.NEW_MESSAGE, data => this.onUpdate(data));
        ChatRegime.on(ChatRegime.EventType.SET_ACTIVE_CHAT_BOX, () => this.emit(this.EventType.SET_ACTIVE_CHAT_BOX));
    }

    get active() {
        return this.thread == ChatRegime.activeThread;
    }

    onUpdate(data) {
        data.some(item => {
            if (item.thread.id != this.thread.id) return;

            this.lastMessage = this.thread.messages.slice(-1);

            this.emit(this.EventType.NEW_MESSAGE);

            return true;
        });
    }

    get EventType() {
        return {
            SET_ACTIVE_THREAD: 'set active thread',
            NEW_MESSAGE: 'new message',
            SET_ACTIVE_CHAT_BOX: 'set active chat box'
        };
    }
}
