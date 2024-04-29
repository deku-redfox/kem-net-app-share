export default class App {
    static tableName = 'AppModel';

    static keyId = 'objectId';
    static keyAppName = 'appName';
    static keyThumbnail = 'thumbnail';
    static keyDescription = 'description';
    static keyDownloadTime = 'downloadTime';
    static keyCategory = 'category';
    static keyCreator = 'creator';
    static keyFile = 'file';

    constructor({id, appName = '', thumbnail, description, downloadTime, category, creator, file}) {
        this.id = id
        this.appName = appName
        this.thumbnail = thumbnail
        this.description = description
        this.downloadTime = downloadTime
        this.category = category
        this.creator = creator
        this.file = file
    }

    static fromJSON({id, attributes}) {
        const {appName, thumbnail, description, downloadTime, creator, category, file} = attributes
        return new App({id, appName, thumbnail, description, downloadTime, creator, category, file})
    }

    toMap() {
        return {
            [App.keyId]: this.id,
            [App.keyAppName]: this.appName,
            [App.keyThumbnail]: this.thumbnail,
            [App.keyDescription]: this.description,
            [App.keyDownloadTime]: this.downloadTime,
            [App.keyCategory]: this.category,
            [App.keyCreator]: this.creator,
            [App.keyFile]: this.file
        }
    }
}