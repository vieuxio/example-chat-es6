import {Culture, CultureMinistry} from 'politburo'
import MotherPaneRep from './MotherPaneRep'
import ThreadListCulture from '../ThreadList/ThreadListCulture'
import ChatPaneCulture from '../ChatPane/ChatPaneCulture'
import './mother-pane.css'


export default class MotherPaneCulture extends Culture {
    constructor() {
        super();

        this.rep = new MotherPaneRep();
        this.threadList = new ThreadListCulture();

        this.rep.on(this.rep.EventType.UPDATE, () => this.onUpdate());
    }

    onUpdate() {
        this.chatPane && this.chatPane.dispose();

        this.chatPane = new ChatPaneCulture(this.rep.activeThread);
        this.chatPane.render(this.el);
    }

    onClickThreadPreview(e) {
        var threadPreview = CultureMinistry.getCulture(e.lastTarget.id);

        this.rep.setActive(threadPreview.thread);
    }

    templates_base() {
        return `<mother-pane id="${this.id}">
                ${this.threadList}
            </mother-pane>`;
    }

    get events() {
        return {
            'click': {
                'thread-preview': this.onClickThreadPreview
            }
        };
    }

    dispose() {
        this.chatPane.dispose();
        this.threadList.dispose();

        super.dispose();
    }
}
