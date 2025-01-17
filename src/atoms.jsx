import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';

export const atomSelectorFamily = atomFamily({
    key: 'selectorFamily',
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async({get}) => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo
        }
    })
})