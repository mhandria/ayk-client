import axios from 'axios';

const URL = 'https://kitsu.io/api/edge';

const headers = {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
};

const KitsuURL = {
    getByPageURL: (page, offset) => 
        `${URL}/anime?page[limit]=${page}&page[offset]=${offset}`,
    
};

const Kitsu = {
    getByPage: (page, offset) => 
        axios.get(KitsuURL.getByPageURL(page, offset),  {headers: headers})
};

export default { Kitsu, KitsuURL }