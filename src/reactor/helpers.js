import { createHistory } from 'history';

let history = createHistory();
export const navigateTo = (path) => history.push(path);
