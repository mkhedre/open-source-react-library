import Login from './components/Login';
import { router } from 'reactor';
// eslint-disable-next-line import/no-anonymous-default-export
export default function (reactor) {
  // reactor is object with some functions
  router.add('/login', Login);

  console.log(reactor.sum(2, 3));
  console.log('from user');
}
