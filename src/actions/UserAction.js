export const add_user = user => ({
    type : 'USER_DETAIL',
    payload: user
})

export const logout_user =  user => ({
    type:'REMOVE_USER',
    payload : user
})

