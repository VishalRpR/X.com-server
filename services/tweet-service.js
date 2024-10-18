import HashtagRepository from "../repository/hashtag-repository.js";
import TweetRepository from "../repository/tweet-repository.js";

class TweetService {
    constructor() {
        this.tweetRepositroy = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }


    async createTweet(data) {
        try {
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9_\-]+/g).map((tg) => (tg.substring(1).toLowerCase()));
            //    console.log(tag)

            //    puting data into tweet model

            const tweet = await this.tweetRepositroy.create(data);



            const prevhastag = await this.hashtagRepository.getByName(tags);
            const textofPresent = prevhastag.map((tag) => (tag.text));


            let newtags = tags.filter((tag) => !textofPresent.includes(tag));


            newtags = newtags.map((tag) => (
                {
                    text: tag,
                    tweets: [tweet.id]
                }
            ))

            console.log(newtags)


            // // inset the resultinto hashtag model
            const newhashtag = await this.hashtagRepository.bulkInsert(newtags)


            prevhastag.forEach((tag) => {

                tag.tweets.push(tweet.id);
                tag.save();


            });




            return {
                tweet,
                newhashtag
            };



        } catch (error) {

        }
    }



}


export default TweetService;