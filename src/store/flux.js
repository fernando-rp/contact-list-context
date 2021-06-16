const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: null,
            error: null,
            user: null
        },
        actions: {
            handleChange: e => {
                const { user } = getStore();
                user[e.target.name] = e.target.value;
                setStore({
                    user: user
                })
            },
            getUsers: url => {
                fetch(url, {})
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        setStore({
                            users: data
                        })
                    })
                    .catch(() => {

                    })
            },
            getUserById: (url, id) => {
                fetch(`${url}/${id}`, {})
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        setStore({
                            user: data
                        })
                    })
                    .catch(() => {

                    })
            },
            updateUser: (url, id) => {
                const { user } = getStore()
                fetch(`${url}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        getActions().getUsers("http://localhost:3001/users")
                        /* setStore({
                            user: data
                        }) */
                    })
                    .catch(() => {

                    })
            }
        }
    }
}

export default getState;