import Hashtag from "../models/hashtag.js";
import HashtagRepository from "../repository/hashtag-repository.js";
import TweetRepository from "../repository/tweet-repository.js";

class TweetService{
    constructor(){
        this.tweetRepositroy=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }


    async createTweet(data){
        try {
           const content=data.content;
           const tag=content.match(/#[a-zA-Z0-9_\-]+/g);
        //    console.log(tag)
           const cleantag=tag.map((tg)=>(tg.substring(1)))
        //    console.log(cleantag);

        //    puting data into tweet model

           const tweet=await this.tweetRepositroy.create(data);
           console.log(tweet.id)


        const prevhastag=await this.hashtagRepository.getByName(cleantag);
        const textArray = [...new Set(prevhastag.map(doc => doc.text))];
        console.log(textArray)

        const resultArray = cleantag.filter(item => !textArray.includes(item));
        console.log(resultArray);


        let newArray=resultArray.map((ele)=>({
            text:ele,
            tweets:[tweet.id]
        }))


        console.log(newArray)

        // inset the resultinto hashtag model
        const response=await this.hashtagRepository.bulkInsert(newArray)
        console.log(response)

       


        } catch (error) {
            
        }
    }


   
}


export default TweetService;