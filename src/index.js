import Reactor from 'reactor/reactor';
import 'modules/user/routes';
import 'modules/categories/routes';
import 'shared/config';

const reactor = new Reactor();

reactor.react();
