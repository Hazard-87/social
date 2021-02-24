import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_MORE_USERS = 'SET_MORE_USERS',
    SET_СURRENT_PAGE = 'SET_СURRENT_PAGE',
    SET_SORT_BY_NAME = 'SET_SORT_BY_NAME',
    SET_SORT_BY_ID = 'SET_SORT_BY_ID',
    SET_FILTER = 'SET_FILTER',
    SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    activeSort: '',
    sortName: false,
    sortId: false,
    pageSize: 30,
    totalPageCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_MORE_USERS: {
            let users = state.users.concat(action.users)
            return {...state, users: users}
        }
        case SET_СURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_PAGE_COUNT: {
            return {...state, totalPageCount: action.totalPageCount}
        }
        case SET_FILTER: {
            const users = state.users.filter(user=> {
                return user.name.toLowerCase().indexOf(action.value.toLowerCase()) > -1
            })
            return {...state, users: users}
        }
        case SET_SORT_BY_NAME: {
            return {
                ...state, activeSort: action.item, sortName: action.bool, sortId: false, users: [...state.users].sort((prev, next) => {
                    if (state.sortName) {
                        if (prev[action.item] > next[action.item]) {
                            return -1
                        } else {
                            return 1
                        }
                    } else {
                        if (prev[action.item] < next[action.item]) {
                            return -1
                        } else {
                            return 1
                        }
                    }
                    }
                )
            }
        }
        case SET_SORT_BY_ID: {
            return {
                ...state, activeSort: action.item, sortId: action.bool, sortName: false, users: [...state.users].sort((prev, next) => {
                        if (state.sortId) {
                            if (prev[action.item] > next[action.item]) {
                                return -1
                            } else {
                                return 1
                            }
                        } else {
                            if (prev[action.item] < next[action.item]) {
                                return -1
                            } else {
                                return 1
                            }
                        }
                    }
                )
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const requestUsers = (currentPage, pageSize, value) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        if (value) {
        dispatch(setFilter(value))
        }
        dispatch(setTotalPageCount(data.totalCount))
    }
}

export const requestMoreUsers = (nextPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(nextPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setMoreUsers(data.items))
        dispatch(setTotalPageCount(data.totalCount))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await usersAPI.getFollow(userId)
        if (data.resultCode == 0) {
            dispatch(followAccept(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
       let data = await usersAPI.getUnfollow(userId)
            if (data.resultCode == 0) {
                dispatch(unfollowAccept(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
    }
}

export const followAccept = (userId) => ({type: 'FOLLOW', userId})
export const unfollowAccept = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users) => ({type: 'SET_USERS', users})
export const setMoreUsers = (users) => ({type: 'SET_MORE_USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET_СURRENT_PAGE', currentPage})
export const setTotalPageCount = (totalPageCount) => ({type: 'SET_TOTAL_PAGE_COUNT', totalPageCount})
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const setSortByName = (item, bool, sort) => ({type: 'SET_SORT_BY_NAME', item, bool, sort})
export const setFilter = (value) => ({type: 'SET_FILTER', value})
export const setSortById = (item, bool, sort) => ({type: 'SET_SORT_BY_ID', item, bool, sort})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
})
export default usersReducer;

