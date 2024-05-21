import apiRequest from '@/services/apiRequest';

export const createPost = async (postData: any) => {
  try {
    const response = await apiRequest.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el post:', error);
  }
};

export const getPosts = async (query: any = {}) => {
  try {
    const response = await apiRequest.get('/posts', { params: query });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await apiRequest.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el post:', error);
  }
};

export const updatePost = async (id: string, postData: any) => {
  try {
    const response = await apiRequest.put(`/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el post:', error);
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await apiRequest.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el post:', error);
  }
};
