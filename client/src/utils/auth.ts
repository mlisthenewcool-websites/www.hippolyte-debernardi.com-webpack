// https://developer.mozilla.org/fr/docs/Web/Guide/Using_FormData_Objects
// https://www.alibabacloud.com/blog/how-to-implement-authentication-in-reactjs-using-jwt_595820
// https://medium.com/meilleursagents-engineering/react-authentication-best-practices-81db893010c9

const apiUrl = 'https://fastapi-ml.herokuapp.com/api';

const isAuthenticated = () => false;

const login = async (username: string, password: string) => {
  const ENDPOINT = '/token';
  const METHOD = 'post';
  const formData = new FormData();

  formData.append('username', username);
  formData.append('password', password);

  const request = new Request(`${apiUrl}${ENDPOINT}`, {
    method: METHOD,
    body: formData,
  });

  const response = await fetch(request);

  if (response.status === 500) {
    throw new Error('Internal server error');
  }

  const data = await response.json();

  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      throw data.detail;
    }
    throw data;
  }

  if ('access_token' in data) {
    // console.log('test ok')
    // console.log(data['access_token'])
    // const decodedToken = decodeJwt(data['access_token']);
    // localStorage.setItem('token', data['access_token']);
    // localStorage.setItem('permissions', decodedToken.permissions);
  }

  return data;
};

/*
const handleForm = async (form: FormData, method: string, endpoint: string) => {
  const formData = new FormData()

  for (let data in form) {
    if (form.hasOwnProperty(data)) {
      formData.append(data, form[data])
    }
  }

  const request = new Request(`${apiUrl}${endpoint}`, {
    method: method,
    body: formData
  })

  const response = await fetch(request)

  if (response.status === 500) {
    throw new Error('Internal server error')
  }

  const data = await response.json()

  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      throw data.detail
    }
    throw data
  }

  if ('access_token' in data) {
    // console.log('test ok')
    // console.log(data['access_token'])
    //const decodedToken = decodeJwt(data['access_token']);
    //localStorage.setItem('token', data['access_token']);
    //localStorage.setItem('permissions', decodedToken.permissions);
  }
}
*/

export { isAuthenticated, login };
