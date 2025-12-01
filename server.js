// =============================
//  SERVIDOR PARA CORREIA ESCAPE ROOM
// =============================

const express = require("express");
const path = require("path");
const app = express();

// Porta padrão ou enviada pelo host (Render, Vercel, Railway etc.)
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta atual
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
