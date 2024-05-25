import { AxiosError } from 'axios';

export const handleError = (error: unknown) => {
  if (error instanceof AxiosError) {
    // Manejar errores específicos de Axios
    if (error.response) {
      // La solicitud fue realizada y el servidor respondió con un código de estado fuera del rango 2xx
      console.error('Error en la respuesta:', error.response.data);
      console.error('Estado:', error.response.status);
      console.error('Encabezados:', error.response.headers);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error('Error en la solicitud:', error.request);
    } else {
      // Ocurrió un error al configurar la solicitud
      console.error('Error:', error.message);
    }
  } else {
    // Manejar otros tipos de errores
    console.error('Error desconocido:', error);
  }
};