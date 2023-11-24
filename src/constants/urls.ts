const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'

const urls = {
    users,
    posts: {
        byUserId: (id: number|string): string => `${users}/${id}/posts`
    }
}

export {
    urls,
    baseURL
}