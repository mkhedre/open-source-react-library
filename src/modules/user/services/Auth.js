import endpoint from 'reactor/endpoint';

export default function login(data) {
  endpoint.post('/login', data);
}
