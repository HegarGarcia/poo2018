class User {
    constructor(name, desc, tweets) {
        this.name = name;
        this.description = desc;
        this.id = `@${name}`;
        this.profilePhoto;
        this.followerCount = 0;
        this.followingCount = 0;
        this.following = [];
        this.followers = [];
        this.tweets = new Set();
    }

    follow(user){
        user.followerCount++;
        user.followers.push(this.name);
        this.followingCount++;
        this.following.push(user.name);
    }

    like(tweet){
        tweet.likeCount++;
    }

    tweet(content) {
        this.tweets.add(new Tweet(this.id, content));
    }
}