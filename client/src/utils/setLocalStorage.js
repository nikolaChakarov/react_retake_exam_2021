export const setLocalStorage = (data) => {

    localStorage.setItem('token', data.token || null);
    localStorage.setItem('username', data.username || null);
    localStorage.setItem('userId', data.id || null);

}