class Tweet {
    constructor(user, content) {
        this.content = content;
        this.user = user;
        this.timestamp = new Date();
        this.likeCount = 0;
        this.retweetCount = 0;
        this.media;
    }
}