import UseSWR from 'swr';

const baseURL = process.env.NODE_ENV === 'production' ?
'https://bamba-blog.netlify.app/' :
'http://localhost:3000/';

const response = (...args) =>
  fetch(...args, {
    headers: {
      'Access-Control-Allow-Origin': 'https://bamba-blog.netlify.app',
    },
  })
    .then(res => res.json());

export default function fetcher(endpoint) {
  const { data, error } = UseSWR(`${baseURL}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
