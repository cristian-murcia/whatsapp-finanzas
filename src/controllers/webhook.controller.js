export const getStatus = (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Webhook disponible',
    });
};

export const receiveMessage = (req, res) => {
    console.log('Evento recibido en el webhook:', {
        timestamp: new Date().toISOString(),
        body: req.body,
    });

    return res.status(200).json({
        success: true,
        message: 'Solicitud recibida correctamente',
    });
};