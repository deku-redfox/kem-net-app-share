export default class User {
    static tableName = '_User';

    static keyId = 'objectId';
    static keyUsername = 'username';
    static keyPassword = 'password';

    constructor({id, username, password}) {
        this.id = id
        this.username = username
        this.password = password
    }

    static fromJSON({id, username, password}) {
        return new App({id, username, password})
    }

    toMap() {
        return {
            [User.keyId]: this.id,
            [User.keyUsername]: this.username,
            [User.keyPassword]: this.password
        }
    }
}