// 11. Router:
// Використайте store для отримання данних про користувача у файлах Roter, наприклад для переадресаціі неавторизованних користувачів
// Для проверки логина можно написать имя Bret
import { defineStore } from "pinia";
import axiosInstance from "../../services/axios";

export const useUserStore = defineStore('user', {
    state: () => ({
        usersState: [],
    }),
    getters: {
        users: (state) => state.usersState
    },
    actions: {
        async getUsers() {
            try {
                const response = await axiosInstance.get(`/users`);
                this.usersState = response.data;
            } catch (error) {
                this.error = error.message || "Помилка при отриманні користувачів";
                console.error(error);
            } 
        }
    }
})