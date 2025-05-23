import express from "express";
import cors from "cors";
import protectedRoutes from "./routes/protectedRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
