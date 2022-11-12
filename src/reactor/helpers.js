import { createHistory } from 'history';

let history = createHistory();
export const navigateTo = (path) => history.push(path);

// componentDidMount() {
//     //console.log(document.getElementById('user'));
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     // document.getElementById('user').innerHTML = 'prev name ' + prevState.name;
//     return null;
//   }
//   componentDidUpdate() {
//     console.log('updated');
//   }
