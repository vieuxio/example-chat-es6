import {Culture, CultureMinistry} from 'politburo'
import ThreadsPopoverRep from './ThreadsPopoverRep'
import ThreadListCulture from '../ThreadList/ThreadListCulture'
import './threads-popover.css'


export default class ThreadsPopoverCulture extends Culture {
    constructor() {
        super();

        this.rep = new ThreadsPopoverRep();

        this.threadList = new ThreadListCulture();
    }

    toggle() {
        this.rep.toggle();
        this.el.classList.toggle('visible', this.rep.visible);
    }

    onClickThreadPreview(e, culture) {
        this.rep.addChatBox(culture.thread);

        return false;
    }

    templates_base() {
        var visible = this.rep.visible ? 'visible' : '';

        return `<threads-popover id="${this.id}" class="${visible}">
                ${this.threadList}
            </threads-popover>`;
    }

    get events() {
        return {
            'click': {
                'thread-preview': this.onClickThreadPreview
            }
        };
    }
}
