import axiosClient from "./axiosClient.setup";
const { get, post } = axiosClient

export const UserService = {
    NewUser: ServiceGeneratorDM_Filter()
};

function ServiceGeneratorDM_Filter() {
    return {
        Set: (data) => {
            return post('Signup', data)
        }
    }
}