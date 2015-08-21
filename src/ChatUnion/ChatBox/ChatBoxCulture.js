import {Culture} from 'politburo'
import ChatBoxRep from './ChatBoxRep'
import ChatPaneCulture from '../ChatPane/ChatPaneCulture'
import ThreadStereotype from '../ThreadStereotype'
import './chat-box.css'


export default class ChatBoxCulture extends Culture {
    constructor(thread) {
        super();
        this.rep = new ChatBoxRep(thread);

        this.chatPane = new ChatPaneCulture(thread);
        this.rep.on(this.rep.EventType.UPDATE, () => this.onUpdate());
    }

    onUpdate() {
        this.el.classList.toggle('active', this.rep.active);
        this.el.classList.toggle('unread', this.rep.thread.unread);
    }

    get thread() {
        return this.rep.thread;
    }

    focus() {
        if (this.rep.minimized) this.toggle();

        if (!this.rep.active)
            this.$('input').focus();

        this.rep.activate();
        this.onUpdate();
    }

    close() {
        this.rep.close();
    }

    render(...args) {
        super.render(...args);
        this.chatPane.render(this.$('content'));
    }

    toggle() {
        this.rep.minimize();

        this.el.classList.toggle('minimized');

        return false;
    }

    get events() {
        return {
            'click': {
                'chat-box': this.focus,
                'close': this.close,
                'minimize': this.toggle
            }
        }
    }

    templates_base() {
        return `<chat-box id="${this.id}">
                <header>
                    <img src="${this.rep.user.picture.thumbnail}"/>
                    <strong>
                        ${this.rep.user.fullname}
                    </strong>
                    <close>&#10006</close>
                    <minimize></minimize>
                </header>
                <content></content>
            </chat-box>`;
    }

    dispose() {
        this.chatPane.dispose();
        this.chatPane = null;

        this.rep.dispose();
        this.rep = null;

        super.dispose();
    }
}
