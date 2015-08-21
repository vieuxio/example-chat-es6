import {Representative} from 'politburo'
import ChatRegime from '../ChatRegime'


/**
 *
 * @constructor
 * @extends {Representative}
 */
export default class MenuRep extends Representative {
    constructor() {
        super();

        this.unreadCount = ChatRegime.getUnreadCount();

        ChatRegime.on(ChatRegime.EventType.NEW_MESSAGE, () => this.onUpdate());
        ChatRegime.on(ChatRegime.EventType.SET_ACTIVE_THREAD, () => this.onUpdate());
        ChatRegime.on(ChatRegime.EventType.SET_ACTIVE_CHAT_BOX, () => this.onUpdate());
    }

    onUpdate() {
        this.unreadCount = ChatRegime.getUnreadCount();

        this.emit(this.EventType.UPDATE);
    }

    get EventType() {
        return {
            UPDATE: 'update'
        };
    }
}
