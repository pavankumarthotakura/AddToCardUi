import {url} from '../App';
import axios from 'axios';

export const Catalog_Data = 'Catalog_Data';

let catalogAction = (payload) => {
      return {
        type: Catalog_Data,
        payload: payload
      }
  }

export const getCatalogData = () => {
    return (dispath) => {
        axios.get(`${url}/data`).then(response => {
            console.log(response.data);
            dispath(catalogAction(response.data));
          });
    };
}

