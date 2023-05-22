const { log } = require("console");

/**
 * Créer une méthode permettant de récupérer le titre d’un post et le nombre de
commentaires. Cette méthode prendra en paramètre le postId et renverra un objet
 */
class BusinessUnitService {

    constructor(respository) {
        this.respository = respository;
    }

    getPostData(postId) {

        return this.respository.getPosts().then(posts => {

            // récupère le titre du post
            const postTitle = posts.find(post => post.id === postId).title;
            
            // récupère le nombre de commentaires sur le post
            return this.respository.getCommentsById(postId).then(comments => {
                return  {
                    title: postTitle,
                    commentsCount: comments.length 
                }
            });

        });


    }
}

module.exports = {
    BusinessUnitService
}