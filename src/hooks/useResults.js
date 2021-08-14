import yelp from '../API/yelp';
import React, {useState, useEffect} from 'react';

export default () => {

    const [results, setResults] = useState ([]);
    const [errorMessage, setErrorMessage] = useState ('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search',
             {
                 params : {
                  limit: 50,
                  offset: 200,
                  term: searchTerm,
                  location: 'san jose'   
                           }
             });

        setResults (response.data.businesses);
    
        
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };



//Call searchApi when component is first rendered. BAD CODE!
// searchApi ('pasta');

useEffect(() => {
    searchApi('pasta');

}, []);

return [searchApi, results, errorMessage];

};