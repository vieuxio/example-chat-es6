import {Culture} from 'politburo'
import ChatPaneRep from './ChatPaneRep'
import './chat-pane.css'


export default class ChatPaneCulture extends Culture {
    constructor(thread) {
        super();
        this.rep = new ChatPaneRep(thread);

        this.rep.on(this.rep.EventType.NEW_MESSAGE, () => this.onNewMessage());
    }

    onNewMessage() {
        this.$('messages').innerHTML = this.templates_messages();

        this.resetScroll_();
    }

    resetScroll_() {
        var messages = this.$('messages');
        var thread = this.$('thread');

        messages.scrollTop = messages.scrollHeight;
        thread.scrollTop = thread.scrollHeight;
    }

    template() {
        return `<chat-pane id="${this.id}">
            ${this.templates_inner()}
            </chat-pane>`;
    }

    templates_inner() {
        var user = this.rep.thread.user;

        return `<thread>
                <img src="${user.picture.thumbnail}"/>
                <username><strong>${user.fullname}</strong></username>
                <messages>
                    ${this.templates_messages()}
                </messages>
            </thread>
            <entry>
                <img src="${this.rep.owner.picture.thumbnail}"/>
                <input type="text" placeholder="This demo is for demonstrating unread threads synchronisation, so we left message typing out for the sake of brevity."/>
            </entry>`;
    }

    templates_messages() {
        return this.rep.thread.messages.map(this.templates_message).join('');
    }

    templates_message(message) {
        return `<message>${message}</message>`;
    }

    render(...args) {
        super.render(...args);

        this.resetScroll_();
        this.$('input').focus();
    }

    dispose() {
        this.rep.dispose();

        super.dispose();
    }
}
