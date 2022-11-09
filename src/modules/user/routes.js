import Login from './components/Login';
import router from 'reactor/router';
import Users from './components/Users';

router.add('/login', <Login />);
router.add('/users', <Users />);
