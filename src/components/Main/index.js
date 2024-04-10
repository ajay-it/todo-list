import styles from "./styles.module.css";
import Header from '../Header';
import ToDoForm from '../ToDoForm';
import Todos from '../Todos';
import { Link, useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <Header />
            <ToDoForm />
            <Todos />
        </div>
    );
};

export default Main;