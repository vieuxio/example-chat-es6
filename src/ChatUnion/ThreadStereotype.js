import UserStereotype from './UserStereotype'


export default class ThreadStereotype {
    constructor(thread) {
        this.id = thread.id;
        this.user = new UserStereotype(thread.user);
        this.messages = thread.messages;
        this.active = false;
        this.unread = false;
    }
}
