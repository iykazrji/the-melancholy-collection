import axios from "axios";

/**
 * This function returns a list of photos from a url and a given number
 * @param {object} obj - the param object
 * @param {string} obj.url - the url we are requesting
 * @param {number} obj.numOfPhotos - the number of photos to return
 */
export const getListOfPhotos = obj => {
  const url = obj.url || "";
  let numOfPhotos = obj.numOfPhotos || 1;
  return axios
    .get(url, { params: { per_page: numOfPhotos, page: obj.page } })
    .then(photos => {
      return photos.data.map(data => {
        return { url: data.urls.regular, id: data.id };
      });
    });
};
