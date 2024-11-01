import { TweetRepository } from "../../repository/index.js";


const mockfindById = {
    findById: jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue({ id: 123, likes: [] })
    })
};

test("testing the tweet find function", async () => {
    const tweetrepo = new TweetRepository();
    tweetrepo.model = mockfindById; 

    const mockData = { id: 123, likes: [] };

   
    const tweet = await tweetrepo.find(123);

    
    expect(mockfindById.findById).toHaveBeenCalledWith(123);
    expect(tweet).toEqual(mockData); // Ensure the result matches the mocked data
});
