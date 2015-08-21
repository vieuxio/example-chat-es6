import db from '../db'


class ThreadUndertaker {
    getThreads(cb) {
        var dbCopy = JSON.parse(JSON.stringify(db.db));

        setTimeout(cb.bind(null, null, dbCopy), 300);
    }

    getUpdates(cb) {
        setTimeout(() => {
            var updatesCopy = JSON.parse(JSON.stringify(db.updates));

            cb(null, updatesCopy);
            db.updates.length = 0;
        }, 100);
    }

    getOwner(cb) {
        console.log(db.owner);
        var ownerCopy = JSON.parse(JSON.stringify(db.owner));

        cb(null, ownerCopy);
    }
}

export default new ThreadUndertaker();
