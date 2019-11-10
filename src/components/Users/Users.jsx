import React from 'react'
import style from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985',
                followed: false,
                fullName: 'Andro',
                status: 'suka suka',
                location: {city: 'Gomel', country: 'Belaurs'}
            },
                {
                    id: 2,
                    photoUrl: 'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985',
                    followed: true,
                    fullName: 'Natalia',
                    status: 'go fucks',
                    location: {city: 'Los - Angeles', country: 'USA'}
                },
                {
                    id: 3,
                    photoUrl: 'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985',
                    followed: false,
                    fulName: 'Julia',
                    status: 'aaaa seks',
                    location: {city: 'Genoa', country: 'Italy'}
                },
                {
                    id: 4,
                    photoUrl: 'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985',
                    followed: true,
                    fullName: 'Sergio',
                    status: 'lova lova',
                    location: {city: 'Sevilla', country: 'Spain'}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                          <img src={u.photoUrl} className={style.userPhoto}/>
                    </div>
                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
                 </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;