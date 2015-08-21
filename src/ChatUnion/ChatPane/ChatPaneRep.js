import {Representative} from 'politburo'
import ChatRegime from '../ChatRegime'


export default class ChatPaneRep extends Representative {
    constructor(thread) {
        super();

        this.thread = thread;
        this.user = this.thread.user;
        this.owner = ChatRegime.owner;

        ChatRegime.on(ChatRegime.EventType.NEW_MESSAGE, data => this.onNewMessage(data));
    }

    onNewMessage(data) {
        data.some(item => {
            if (this.thread.id != item.thread.id) return;
            this.emit(ChatRegime.EventType.NEW_MESSAGE, data);

            return true;
        });
    }

    get EventType() {
        return {
            NEW_MESSAGE: 'new message'
        };
    }

    dispose() {
        ChatRegime.off(ChatRegime.EventType.NEW_MESSAGE, this.onNewMessage);

        super.dispose();
    }
}
