import { protectedResources } from './authConfig';
import { msalInstance } from './index';

const getToken = async () => {
  const account = msalInstance.getActiveAccount();

  if (!account) {
    throw Error('No active account! Verify a user has been signed in and setActiveAccount has been called.');
  }

  const response = await msalInstance.acquireTokenSilent({
    account: account,
    ...protectedResources.apiTodoList.scopes,
  });

  // View JWT issued by AAD: https://jwt.ms
  console.log('accessToken:', response.accessToken);

  return response.accessToken;
};

// List
export const getTasks = async () => {
  const accessToken = await getToken();
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers,
  };

  return fetch(protectedResources.apiTodoList.todoListEndpoint, options)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .catch((error) => console.error(error));
};

export const getTask = async (id) => {
  const accessToken = await getToken();
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers,
  };

  return fetch(protectedResources.apiTodoList.todoListEndpoint + `/${id}`, options)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .catch((error) => console.error(error));
};

export const postTask = async (task) => {
  const accessToken = await getToken();
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);
  headers.append('Content-Type', 'application/json');

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(task),
  };

  return fetch(protectedResources.apiTodoList.todoListEndpoint, options)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .catch((error) => console.error(error));
};

export const deleteTask = async (id) => {
  const accessToken = await getToken();
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'DELETE',
    headers: headers,
  };

  return fetch(protectedResources.apiTodoList.todoListEndpoint + `/${id}`, options)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .catch((error) => console.error(error));
};

export const editTask = async (id, task) => {
  const accessToken = await getToken();
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);
  headers.append('Content-Type', 'application/json');

  const options = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(task),
  };

  return fetch(protectedResources.apiTodoList.todoListEndpoint + `/${id}`, options)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .catch((error) => console.error(error));
};

// Dashboard
export const getAllTasks = async () => {
  const accessToken = await getToken();
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers,
  };

  return fetch(protectedResources.apiTodoList.dashboardEndpoint, options)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .catch((error) => console.error(error));
};
