const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const pool = new Pool({
  user: "postgres",     
  host: "localhost",
  database: "miweb", 
  password: "1234",     
  port: 5432
});

// Clave secreta para los tokens
const SECRET = "miclavesupersecreta";

// 👉 Mostrar index.html por defecto
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Registro de usuario
app.post("/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar en la BD
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING id, nombre, email",
      [nombre, email, hashedPassword]
    );

    res.json({ user: result.rows[0] });
 } catch (err) {
  console.error("❌ Error en /register:", err);
  res.status(500).json({ error: "Error al registrar usuario", detalle: err.message });
}
});

// Login de usuario
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Usuario no encontrado" });  // ⚡ esto va aquí
    }

    const user = result.rows[0];

    // Comparar contraseña
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Contraseña incorrecta" });  // ⚡ y esto también
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });

    res.json({ message: "Login exitoso", token });
  } catch (err) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
// Ruta protegida: perfil
app.get("/perfil", (req, res) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({ error: "Token requerido" });
  }

  try {
    const token = auth.split(" ")[1]; // quitar "Bearer "
    const user = jwt.verify(token, SECRET); // verificar token
    res.json({ message: "Acceso permitido", user });
  } catch (err) {
    res.status(401).json({ error: "Token inválido" });
  }
});
