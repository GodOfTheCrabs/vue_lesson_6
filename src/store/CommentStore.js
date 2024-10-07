import { defineStore } from "pinia";
import axiosInstance from "../../services/axios";

export const useCommentStore = defineStore('comment', {
    state: () => ({
        commentsState: [],
    }),
    getters: {
        comments: (state) => state.commentsState
    },
    actions: {
        async getCommentsForPost(postId) {
            try {
                const response = await axiosInstance.get(`/comments?postId=${postId}`);
                this.commentsState = response.data;
            } catch (error) {
                this.error = error.message || "Помилка при отриманні коментів";
                console.error(error);
            } 
        }
    }
})