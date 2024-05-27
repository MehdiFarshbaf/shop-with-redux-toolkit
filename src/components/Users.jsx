import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../store/features/usersSlice";

const Users = () => {

    const dispatch = useDispatch()
    const {loading, users, error} = useSelector(state => state.users)

    console.log(users)

    useEffect(() => {
        dispatch(getUsers())
    }, []);
    return (
        <div>
            {loading ? <p>loading ...</p> :
                users.map(user => (
                    <p key={user.id}>{user.email}</p>
                ))
            }
        </div>
    )
}
export default Users