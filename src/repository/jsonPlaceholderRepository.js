const axios = require("axios");

/**
 * Créer une classe Repository permettant d'interagir avec une l’api
https://jsonplaceholder.typicode.com/
- Créer une méthode permettant de récupérer tous les posts
- Créer une méthode permettant de récupérer les commentaires par postId
 */

class JsonPlaceholderRepository {

    getPosts() {

        let res = {};
        return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // handle success
            return response.data
            //console.log(response);
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        });
    }

    getCommentsById(id) {

        const res = {};
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {
            // handle success
            return response.data
            //console.log(response);
        })
        .catch((error) => {
            //handle error
            console.log(error);
        })
    }
}

module.exports = {
    JsonPlaceholderRepository
};