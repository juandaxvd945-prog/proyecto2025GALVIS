import express from "express";
import cors from "cors";
import pkg from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// 🔹 Conexión a PostgreSQL (directa, sin variables de entorno)
const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_u9FUfr3GlQhO@ep-tiny-meadow-ad5vso16-pooler.c-2.us-east-1.aws.neon.tech/miweb?sslmode=require&channel_binding=require",
  ssl: { rejectUnauthorized: false }
});

// 🔹 Clave secreta fija
const SECRET = "miclavesupersecreta";

// 👉 Mostrar index.html por defecto
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Registro de usuario
app.post("/api/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING nombre, email, password",
      [nombre, email, hashedPassword]
    );

    res.json({ user: result.rows[0] });
  } catch (err) {
    console.error("❌ Error en /register:", err);
    res.status(500).json({ error: "Error al registrar usuario", detalle: err.message });
  }
});

// Login de usuario
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

   const token = jwt.sign({ email: user.email, nombre: user.nombre }, SECRET, { expiresIn: "1h" });


    res.json({ message: "Login exitoso", token });
  } catch (err) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

// Ruta protegida
app.get("/api/perfil", (req, res) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({ error: "Token requerido" });
  }

  try {
    const token = auth.split(" ")[1]; // quitar "Bearer "
    const user = jwt.verify(token, SECRET);
    res.json({ message: "Acceso permitido", user });
  } catch (err) {
    res.status(401).json({ error: "Token inválido" });
  }
});

// 🔹 Exportar app (en Vercel no se usa app.listen)
export default app;
