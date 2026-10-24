import {useSelector} from "react-redux";
import {selectAllUsers} from "./usersSlice";
import {Link} from "react-router-dom";

function UsersList() {
    const users = useSelector(selectAllUsers);
    const usersList = users.map(user => (
        <li key={user.id}>
            <Link to={`/users/${user.id}`}
                  dideo-checked="true">
                {user.firstName + " " + user.lastName}
            </Link>
        </li>
    ));

    return (
        <section>
            <h2>Users</h2>
            <ul>
                {usersList}
            </ul>
        </section>
    );
}

export default UsersList;