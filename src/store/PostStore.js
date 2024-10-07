// 1. Базова Ініціалізація:
// Налаштуйте Pinia як стор.
// 2. Створення Store:
// Створіть свій перший store з базовим станом і декількома діями або мутаціями.
// 3. Доступ до Store:
// Виведіть дані зі свого store у компоненті Vue.
// 4. Зміна стану:
// Зміна стану в вашому store повинна відбуватися через дії (actions).
// 5. Дії:
// Створіть дії для виконання зміни стану та обробки асинхронних операцій.

// 7. Селектори (Getters):
// Створіть селектори для вирахування похідних даних на основі стану.
// 8. Модулі Store:
// Розбийте ваш store на модулі для кращої організації коду.
// 9. Асинхронні Дії:
// Створіть асинхронні дії для взаємодії з API або іншими асинхронними джерелами даних.
// 10. Пагінація:
// Реалізуйте пагінацію зі стороннього API, використовуючи Pinia store.


import { defineStore } from "pinia";
import axiosInstance from "../../services/axios";
import { useCommentStore } from "../store/CommentStore.js";

export const usePostStore = defineStore('post', {
    state: () => ({
        postsState: [],
        commentsState: [],
    }),
    getters: {
        posts: (state) => state.postsState,
        comments: (state) => state.commentsState,
        postsWithEvenId: (state) => {
            return state.postsState.filter(post => post.id % 2 === 0);
        }
    },
    actions: {
        async getPosts() {
            try {
                const response = await axiosInstance.get('/posts');
                this.postsState = response.data;
            } catch (error) {
                this.error = error.message || "Помилка при отриманні постів";
                console.error(error);
            }
        },
        // 6. Комбінація Stores:
        // Створіть кілька stores та спробуйте їх комбінувати, доступаючись до одного store з іншого.
        async getCommentsForPost(postId) {
            const commentStore = useCommentStore();
            await commentStore.getCommentsForPost(postId)

            this.commentsState = commentStore.comments
        }
    }
})