// робимо типізацію для кожного поста окремо, так як ця типізація можливо буде перевикористана, проаичуємо інтерфейс в окремому файлі
export interface IPost {
    id: string,
    title: string,
    body: string,
    createdAt: string,
    author: string
}