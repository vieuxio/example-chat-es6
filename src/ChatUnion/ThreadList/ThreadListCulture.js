import {Culture} from 'politburo'
import ThreadListRep from './ThreadListRep'
import ThreadPreviewCulture from '../ThreadPreview/ThreadPreviewCulture'
import './thread-list.css'


export default class ThreadListCulture extends Culture {
    constructor() {
        super();

        this.rep = new ThreadListRep();
        this.threadPreviewsById = {};

        this.rep.on(this.rep.EventType.INITIAL_DATA, () => this.onInit());
        this.rep.on(this.rep.EventType.NEW_MESSAGE, data => this.onNewMessage(data));
    }

    onInit() {
        this.threadPreviewsById = {};
        this.threadPreviews = this.rep.threads.map(thread => {
            var culture = new ThreadPreviewCulture(thread);
            this.threadPreviewsById[thread.id] = culture;

            return culture;
        });

        this.el.innerHTML = this.threadPreviews.join('');
    }

    onNewMessage(data) {
        var list = this.el;

        data.forEach(item => {
            var correspondingThreadPreview = this.threadPreviewsById[item.thread.id];
            if (!correspondingThreadPreview) return;

            list.insertBefore(correspondingThreadPreview.el, list.children[0]);
        });
    }

    templates_base() {
        return `<thread-list id="${this.id}"></thread-list>`;
    }

    dispose() {
        this.threadPreviews.forEach(threadPreview => threadPreview.dispose());

        super.dispose();
    }

;
}
