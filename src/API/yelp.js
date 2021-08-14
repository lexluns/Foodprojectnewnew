import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jduvRhh-neWcKVn9R7aBZq2HNTu3PyqT8ggmRJKGwiks4cV041Lgg7KmbigNZt04qiQu4kjjXLtQ_-Y7pvUNBupgbLY5W_4b546flRyrKoZxZAxRPuB7zBs2q9cFYXYx'

    }
});