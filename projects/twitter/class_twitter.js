class Twitter {
    constructor() {
        this.apikeys = {
            consumer_key: '...',
            consumer_secret: '...',
            access_token: '...',
            access_token_secret: '...',
            timeout_ms: '...',
        };
        this.ids = new Set();
        this.users = new Map();
    }

    createUser(name, desc) {
        let user = new User(name, desc);
        if (this.ids.has(user.id)) throw new Error('Usuario ya existe');
        this.ids.add(user.id);
        this.users.set(user.id, user);
        return user;
    }

    getUser(id) {
        return this.ids.has(id) ? this.users.get(id) : null;
    }

    queryTweets({user, content} = {user: undefined, content: undefined}) {
        let tweets = [];
        this.users.forEach(user => tweets.push(...Array.from(user.tweets)));
        return tweets.filter((tweet) => {
            if (user === undefined && content === undefined)
                return tweet;
            else if (user !== undefined && tweet.user === user) {
                return tweet;
            } else if ((content !== undefined && tweet.content.includes(content))) {
                return tweet;
            }

            return false;
        });
    }
}