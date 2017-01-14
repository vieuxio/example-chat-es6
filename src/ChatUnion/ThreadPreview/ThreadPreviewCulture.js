import {Culture} from 'politburo'
import ThreadPreviewRep from './ThreadPreviewRep'
import ThreadStereotype from '../ThreadStereotype'
import './thread-preview.css'


export default class ThreadPreviewCulture extends Culture {
    constructor(thread) {
        super();
        this.rep = new ThreadPreviewRep(thread);

        this.rep.on(this.rep.EventType.SET_ACTIVE_THREAD, () => this.setActiveThread());
        this.rep.on(this.rep.EventType.NEW_MESSAGE, () => this.update());
        this.rep.on(this.rep.EventType.SET_ACTIVE_CHAT_BOX, () => this.setUnread());
    }

    setActiveThread() {
        this.el.classList.toggle('active', this.rep.active);
        this.setUnread();
    }

    setUnread() {
        this.el.classList.toggle('unread', this.rep.thread.unread);
    }

    update() {
        this.setActiveThread();

        this.$('last-message').innerText = this.rep.lastMessage;
    }

    get thread() {
        return this.rep.thread;
    }

    template() {
        var active = this.rep.active ? 'active' : '';

        return `<thread-preview id="${this.id}" class="${active}">
                <img src="${this.rep.user.picture.thumbnail}"/>
                <span>
                    <strong>${this.rep.user.fullname}</strong><br/>
                    <last-message>${this.rep.lastMessage}</last-message>
                </span>
            </thread-preview>`;
    }
}
