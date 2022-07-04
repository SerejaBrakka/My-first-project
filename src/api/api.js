import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "4097f5c7-02bb-4627-9e74-cf8a6aff2546",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&current=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
