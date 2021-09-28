'use strict';
import axios from 'axios';
import q from 'qs';

class MediaDao {

    constructor() {
        this.axios = axios;
        // axios.defaults.timeout = 2000;
    }

    //get post images
    async getPostMedia() {
        const options = { 
            method: "GET",
            responseType:"json"
        };

        try {
            const response = await this.axios.request("profile/post/media", options);
            console.log("nombre de post: "+response);
            console.log(response.data.data[0]);
            return response.data.data;
        } catch (error) {
            if (error.response) {
                return error.response.data;
            } else {
                throw error;
            }
        }
    }

    //delete
    async deleteImage(id) {
        const options = {
            method: "delete",
            params:{
                id:id
            }
        };

        try {
            const response = await this.axios.request("albumPicture/delete", options);
            return response;
        } catch (error) {
            if (error.response) {
                return error.response.data;
            } else {
                throw error;
            }
        }
    }

//make Cover Picture
async makeCoverPicture(id) {
    const options = {
        method: "post",
        params:{
            id:id
        }
    };

    try {
        const response = await this.axios.request("makeCover/picture", options);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}



//make Profile
async makeProfile(id) {
    const options = {
        method: "post",
        params:{
            id:id
        }
    };

    try {
        const response = await this.axios.request("makeProfile/picture", options);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}


//create album
async createAlbum(name) {
    const options = {
        method: "post",
        data : q.stringify({name:name})
    };

    try {
        const response = await this.axios.request("album/create", options);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}


}

export default MediaDao;