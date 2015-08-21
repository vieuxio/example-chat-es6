import {Regime} from 'politburo'
import ThreadUndertaker from './ThreadUndertaker'
import ThreadStereotype from './ThreadStereotype'


class ChatRegime extends Regime {
    constructor() {
        super();

        this.undertaker = ThreadUndertaker;
        this.threads = [];
        this.activeThread = null;

        this.chatBoxes = [];
        this.activeChatBox = null;

        this.owner = null;
    }

    init() {
        this.getThreads_();
        this.getOwner_();
    }

    getThreads_() {
        this.undertaker.getThreads((err, data) => this.onInitialData(err, data));
    }

    setupUpdates_() {
        setTimeout(() => this.undertaker.getUpdates((err, data) => this.onUpdate(err, data)), 1000);
    }

    onInitialData(err, data) {
        if (err) return;

        this.threads = data.threads.map(thread => new ThreadStereotype(thread));
        this.activeThread = this.threads[0];
        this.activeThread.active = true;

        this.emit(this.EventType.INITIAL_DATA);

        this.setupUpdates_();
    }

    getThreadById(id) {
        return this.threads.filter(thread => thread.id == id)[0];
    }

    onUpdate(err, data) {
        if (err || !data.length) return this.setupUpdates_();

        data = data.filter(data => {
            var correspondingThread = this.getThreadById(data.thread.id);

            if (!correspondingThread) return false;

            var newMessages = data.thread.messages.slice(correspondingThread.messages.length);

            if (!newMessages.length) return false;

            correspondingThread.messages.push(newMessages);

            correspondingThread.unread = data.thread.id != this.activeThread.id &&
                (this.activeChatBox ? this.activeChatBox.id != data.thread.id : true);

            correspondingThread.active = data.thread.id == this.activeThread.id;

            return true;
        });

        if (!data.length) return this.setupUpdates_();

        this.emit(this.EventType.NEW_MESSAGE, data);

        this.setupUpdates_();
    }

    setActiveChatBox(thread) {
        if (this.activeChatBox == thread) return;

        this.activeChatBox = thread;

        if (thread)
            this.activeChatBox.unread = false;

        this.emit(this.EventType.SET_ACTIVE_CHAT_BOX);
    }

    addChatBox(thread) {
        if (this.chatBoxes.indexOf(thread) == -1)
            this.chatBoxes.push(thread);

        this.setActiveChatBox(thread);

        this.emit(this.EventType.ADD_CHAT_BOX, thread);
    }


    removeChatBox(thread) {
        var i = this.chatBoxes.indexOf(thread);
        if (i == -1) return;

        this.chatBoxes.splice(i, 1, 0);
        this.setActiveChatBox(null);

        this.emit(this.EventType.REMOVE_CHAT_BOX, thread);
    }

    getUnreadCount() {
        return this.threads.filter(thread => thread.unread).length;
    }

    setActive(thread) {
        if (this.activeThread == thread) return;

        this.activeThread = thread;
        this.activeThread.unread = false;

        this.emit(this.EventType.SET_ACTIVE_THREAD);
    }

    getOwner_() {
        this.undertaker.getOwner((err, owner) => this.owner = owner);
    }

    get EventType() {
        return {
            INITIAL_DATA: 'initial data',
            SET_ACTIVE_THREAD: 'set active thread',
            SET_ACTIVE_CHAT_BOX: 'set active chat box',
            NEW_MESSAGE: 'new message',
            ADD_CHAT_BOX: 'add chat box',
            REMOVE_CHAT_BOX: 'remove chat box'
        };
    }
}

export default new ChatRegime();
