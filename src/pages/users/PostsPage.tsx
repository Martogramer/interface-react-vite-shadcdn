import React from 'react'
import PostList from '../../components/lists/PostList';
import useAuthStore from '@/services/authState';
import NotPass from '@/components/errorPage/NotPass';

const PostsPage = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <NotPass/>;
  }
  return (
    <div>
      <PostList />
    </div>
  )
}

export default PostsPage
