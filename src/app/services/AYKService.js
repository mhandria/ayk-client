import axios from 'axios';

const URL = 'https://localhost:5001';

const headers = {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
};


const AnimeURL = {
    getByPageURL: (page, offset) => 
        `${URL}/api/anime?page=${page}&offset=${offset}`,
    
};

const AnimeService = {
    getByPage: (page, offset) => 
        axios.get(AnimeURL.getByPageURL(page, offset),  {headers: headers}),
    // betByShowType: (showType, order) => 
};

export default { AnimeService }