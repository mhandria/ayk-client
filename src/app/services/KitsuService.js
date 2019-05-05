import React from 'react';

import axios from 'axios';
import { from } from 'rxjs';

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
        from(axios.get(KitsuURL.getByPageURL(page, offset),  {headers: headers}))
};

export default { Kitsu, KitsuURL }