import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import classNames from 'classnames';

import s from './Settings.module.css';
import './Settings.module.css';
import {requestUsers, setCurrentPage, setSortById, setSortByName} from "../../redux/usersReducer";
import Paginator from "../common/Paginator/Paginator";


const Settings = () => {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()
   const {users, sortName, sortId, activeSort, totalPageCount, pageSize, currentPage} = useSelector(state => state.usersPage)
   const state = useSelector(state => state.usersPage)
    console.log(state)

    const sortById = (item) => {
        dispatch(setSortById(item, !sortId))
    }
    const sortByName = (item) => {
        dispatch(setSortByName(item, !sortName))
    }


    React.useEffect(()=> {
        dispatch(requestUsers(currentPage, pageSize))
    }, [])

    const onPageChanged = (pageNumber) => {
        setValue('')
        dispatch(setCurrentPage(pageNumber))
       dispatch(requestUsers(pageNumber, pageSize))
    }

    const onFilter= (e) => {
        setValue(e.target.value)
        dispatch(requestUsers(currentPage, pageSize, value))
    }

    return (
        <div>
            < Paginator totalPageCount={totalPageCount} pageSize={pageSize}
                        currentPage={currentPage} onPageChanged={onPageChanged}/>

          <table className={s.table}>
              <tr>
                  <th className={classNames(activeSort === 'id' ? s.active : s.title )} onClick={() => sortById('id')}>
                      {activeSort === 'id' &&
                      <svg
                          className={classNames(sortId ? s.rotate : '')}
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                              fill="#2C2C2C"
                          />
                      </svg>}
                      id
                  </th>
                  <th className={classNames(activeSort === 'name' ? s.active : s.title )} onClick={() => sortByName('name')}>
                      {activeSort === 'name' &&
                      <svg
                          className={classNames(sortName ? s.rotate : '')}
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                              fill="#2C2C2C"
                          />
                      </svg>}
                      name</th>
              </tr>
              <tr>
                  <td></td>
                  <td><input type={'text'} placeholder={'search...'} onChange={onFilter} value={value} /></td>
              </tr>
              {users.map(user=> <tr>
                  <td className={s.item} >{user.id}</td>
                  <td className={s.item}>{user.name}</td>
              </tr>)}
          </table>
        </div>
    )
}

export default Settings;