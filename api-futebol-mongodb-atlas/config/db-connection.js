import mongoose from "mongoose";

// Usuário e senha do banco de dados
const dbUser = "phvenancio";
const dbPassword = "7HVmfCx9g76ThIdB";
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@futebol.bdyopj3.mongodb.net/?retryWrites=true&w=majority&appName=futebol`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });
};
connect();

export default mongoose;