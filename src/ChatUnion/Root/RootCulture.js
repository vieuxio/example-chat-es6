import {Culture} from 'politburo'
import RootRep from './RootRep'
import MenuCulture from '../Menu/MenuCulture'
import MotherPaneCulture from '../MotherPane/MotherPaneCulture'
import ChatBoxCulture from '../ChatBox/ChatBoxCulture'
import './root.css'


export default class RootCulture extends Culture {
    constructor() {
        super();

        this.rep = new RootRep();

        this.menu = new MenuCulture();
        this.motherPane = new MotherPaneCulture();
        this.chatBoxes = [];

        this.rep.on(this.rep.EventType.ADD_CHAT_BOX, thread => this.onAddChatBox(thread));
        this.rep.on(this.rep.EventType.REMOVE_CHAT_BOX, thread => this.onRemoveChatBox(thread));
    }

    onAddChatBox(thread) {
        var existingChatBox = this.chatBoxes.filter(chatBox => chatBox.thread.id == thread.id)[0];

        if (existingChatBox) return existingChatBox.focus();

        var chatBox = new ChatBoxCulture(thread);
        this.chatBoxes.push(chatBox);

        chatBox.render(this.$('chat-boxes'));
    }

    onRemoveChatBox(thread) {
        this.chatBoxes.some((chatBox, i) => {
            if (chatBox.thread.id == thread.id) {
                chatBox.dispose();

                this.chatBoxes.splice(i, 1);
            }
        });
    }

    onClick(e) {
        var target = e.target;

        var inChatBox = false;

        do {
            if (target.matches('chat-box') || target.matches('threads-popover')) {
                inChatBox = true;
                break;
            }
        } while ((target = target.parentNode) && (target != document.body));

        if (!inChatBox && this.rep.active)
            this.rep.deactivateChatBox();
    }

    render(opt_base, opt_index) {
        super.render(opt_base, opt_index);

        this.menu.render();
        this.chatBoxes.forEach(chatBox => chatBox.render());
    }

    template() {
        return `<root id="${this.id}">
            ${this.menu}
            ${this.motherPane}
            <chat-boxes></chat-boxes>
            </root>`;
    }

    get events() {
        return {
            'click': {
                'root': this.onClick
            }
        }
    }

    dispose() {
        this.menu.dispose();
        this.chatBoxes.forEach(chatBox => chatBox.dispose());

        super.dispose();
    }
}
