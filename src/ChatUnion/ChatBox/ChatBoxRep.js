import {Representative} from 'politburo'
import ChatRegime from '../ChatRegime'
import ThreadStereotype from '../ThreadStereotype'

export default class ChatBoxRep extends Representative {
    constructor(thread) {
        super();

        this.thread = thread;
        this.user = this.thread.user;
        this.minimized = false;

        ChatRegime.on(ChatRegime.EventType.NEW_MESSAGE, () => this.onUpdate());
        ChatRegime.on(ChatRegime.EventType.SET_ACTIVE_CHAT_BOX, () => this.onUpdate());
    }

    onUpdate() {
        this.emit(this.EventType.UPDATE);
    }

    get active() {
        return this.thread == ChatRegime.activeChatBox;
    }

    activate() {
        ChatRegime.setActiveChatBox(this.thread);
    }

    close() {
        ChatRegime.removeChatBox(this.thread);
    }

    minimize() {
        this.minimized = !this.minimized;

        ChatRegime.setActiveChatBox(this.minimized ? null : this.thread);
    }

    get EventType() {
        return {
            UPDATE: 'update'
        }
    }

    dispose() {
        ChatRegime.off(ChatRegime.EventType.NEW_MESSAGE, this.onUpdate);
        ChatRegime.off(ChatRegime.EventType.SET_ACTIVE_CHAT_BOX, this.onUpdate);

        super.dispose();
    }
}
