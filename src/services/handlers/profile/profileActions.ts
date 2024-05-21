import apiRequest from "@/services/apiRequest";
import useAuthStore from "@/services/authState";

export const fetchProfileData = async () => {
  const { user } = useAuthStore();
  try {
    const response = await apiRequest.get(`/users/${user?.id}`);
    const profileData = response.data;
    useAuthStore.getState().setProfileData(profileData);
  } catch (error) {
    console.error("Error al obtener los datos del perfil:", error);
    // Manejo de errores: podrías agregar notificaciones o actualizar el estado de error en el store
  }
};
