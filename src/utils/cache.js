import { Http } from '@capacitor-community/http';
import { Filesystem, Directory } from '@capacitor/filesystem';

export const cachePage = async (url, fileName) => {
    try {
        const response = await Http.request({ method: 'GET', url });
        await Filesystem.writeFile({
            path: fileName,
            data: response.data,
            directory: Directory.Data,
        });
        console.log(`Página ${url} guardada como ${fileName}`);
    } catch (error) {
        console.error('Error al guardar la página:', error);
    }
};

export const loadCachedPage = async fileName => {
    try {
        const result = await Filesystem.readFile({
            path: fileName,
            directory: Directory.Data,
        });
        return result.data;
    } catch (error) {
        console.error('Error al cargar la página almacenada:', error);
        return null;
    }
};
