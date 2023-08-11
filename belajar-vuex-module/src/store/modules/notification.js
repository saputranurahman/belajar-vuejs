const notification = {
    namespaced: true,
    state:{
        notification:null,
    },
    mutations:{
        SET_NOTIFICATON(state,{message,type}){
            state.notification = { message,type}
        },
    },
    actions:{
        setNotification({commit}, {message, type}){
            commit("SET_NOTIFICATION", {message,type});
            setTimeout(() => {
                commit("SET_NOTIFICATION", null);
            }, 3000);
        },
    },
};

export default notification;