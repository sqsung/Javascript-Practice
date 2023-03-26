import React from 'react';
import axios from 'axios';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

const URL = 'https://jsonplaceholder.typicode.com/posts';
const queryKey = ['posts'];

const App = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
  });

  const { mutate: removePost } = useMutation({
    mutationFn: id => axios.delete(`${URL}/${id}`),

    onMutate: async id => {
      await queryClient.cancelQueries({ queryKey });

      const prevPosts = queryClient.getQueryData({ queryKey });

      queryClient.setQueryData(queryKey, posts => posts.filter(post => post.id !== id));

      return { prevPosts };
    },

    onError: (err, posts, context) => {
      queryClient.setQueryData(context.prevPosts);
    },
  });

  if (isLoading) return 'Loading in process...';
  if (error) return 'Something is wrong';

  // prettier-ignore
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <a href="#">{title}</a>
            <button onClick={() => { removePost(id) }}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
