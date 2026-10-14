import 'dotenv/config';
import express from 'express';
import webhookRoutes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Comprobar el estado de la API
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API WhatsApp Finanzas funcionando correctamente',
        timestamp: new Date().toISOString(),
    });
});

// Rutas del webhook
app.use('/api/v1/webhook', webhookRoutes);

// Rutas inexistentes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Ruta no encontrada',
    });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error('Error en la API:', err.message);

    res.status(500).json({
        success: false,
        message: 'Error interno del servidor',
    });
});

app.listen(PORT, () => {
    console.log(`API ejecutándose en http://localhost:${PORT}`);
});

export default app;