import apiRequest from "@/services/apiRequest";
import useAuthStore from "@/services/authState";

export const loginUser = async (data: { username: string; password: string }) => {
  try {
    const response = await apiRequest.post('/auth/login', data);
    const userData = response.data;
    useAuthStore.getState().login(userData);
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    // Manejo de errores: podrías agregar notificaciones o actualizar el estado de error en el store
  }
};

export const logoutUser = async () => {
  try {
    // Si tu backend requiere una llamada para cerrar sesión, descomenta la siguiente línea
    // await apiRequest.post('/auth/logout');
    useAuthStore.getState().logout();
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    // Manejo de errores: podrías agregar notificaciones o actualizar el estado de error en el store
  }
};