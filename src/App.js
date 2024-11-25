
import './App.css';

import React, { useEffect, useState } from 'react';
import { cachePage, loadCachedPage } from './utils/cache';

function App() {
    const [pageContent, setPageContent] = useState('');
    const url = 'https://porttainobay.com/es/home'; // Reemplaza con la URL deseada
    const fileName = 'cachedPage.html';

    useEffect(() => {
        const fetchData = async () => {
            const isOnline = navigator.onLine;

            if (isOnline) {
                await cachePage(url, fileName);
                setPageContent(`Página cargada en línea desde ${url}`);
            } else {
                const cachedContent = await loadCachedPage(fileName);
                if (cachedContent) {
                    setPageContent('Página cargada desde el caché');
                } else {
                    setPageContent('No hay conexión ni contenido almacenado');
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>{pageContent}</p>
            </header>
        </div>
    );
}

export default App;

