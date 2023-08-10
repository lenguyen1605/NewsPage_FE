import axiosClient from "./axiosClient.setup";
const { get, post } = axiosClient

export const UserService = {
    NewUser: ServiceGeneratorDM_Filter(),
    Posts: ServiceGeneratorDM_Post()
};

function ServiceGeneratorDM_Filter() {
    return {
        Set: (data) => {
            return post('Signup', data)
        }
    }
}

function ServiceGeneratorDM_Post() {
    return {
        GetAllPosts: (data) => {
            return get('getAllPost',data)
        },
        GetPostByID: (id) => {
            return get('getPostbyID' + "?id=" + id)
        },
        SetPost: (data) => {
            return post('setPost', data)
        },
        GetPostByCategory: (category) => {
            return get('getPostByCategory' + "?category=" + category)
        }
    }
}