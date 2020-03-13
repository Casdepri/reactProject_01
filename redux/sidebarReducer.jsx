let initState = {
        links: [
            { id: 1, name: "Profile", path: "/profile" },
            { id: 2, name: "Message", path: "/dialogs" },
            { id: 3, name: "News", path: "/news" },
            { id: 4, name: "Music", path: "/music" },
            { id: 5, name: "Settings", path: "/settings" },
            { id: 5, name: "Users", path: "/users" },
            { id: 6, name: "Friends", path: "/friends" }]
}

const sidebarReducer = (state = initState, action) => {
    return state;
}

export default sidebarReducer;