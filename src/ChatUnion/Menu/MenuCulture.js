import {Culture} from 'politburo'
import MenuRep from './MenuRep'
import Popover from '../ThreadsPopover/ThreadsPopoverCulture'
import './menu.css'


export default class MenuCulture extends Culture {
    constructor() {
        super();

        this.rep = new MenuRep();
        this.popover = new Popover();

        this.rep.on(this.rep.EventType.UPDATE, () => this.onUpdate());
    }

    onUpdate() {
        this.$('button').innerHTML = this.templates_button();
    }

    onClickButton() {
        this.popover.toggle();
    }

    template() {
        return `<menu id="${this.id}">
            <h1>Chat</h1>
            <button>${this.templates_button()}</button>
            ${this.popover}
            </menu>`;
    }

    templates_button() {
        var count = this.rep.unreadCount || '';

        if (count) count = '(' + count + ')';

        return `<span>Threads ${count}</span>`;
    }

    get events() {
        return {
            'click': {
                'button': this.onClickButton
            }
        };
    }
}
