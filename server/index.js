const express = require("express");
const multer = require("multer");
const cors = require("cors");
const pdf = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.post("/extract", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    let extractedText = "";

    switch (fileExtension) {
      case ".pdf":
        const pdfData = await fs.readFile(filePath);
        const pdfResult = await pdf(pdfData);
        extractedText = pdfResult.text;
        break;

      case ".docx":
      case ".doc":
        const { value } = await mammoth.extractRawText({ path: filePath });
        extractedText = value;
        break;

      case ".txt":
        extractedText = await fs.readFile(filePath, "utf-8");
        break;

      default:
        throw new Error("Unsupported file format");
    }

    await fs.unlink(filePath);

    res.json({ text: extractedText });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ error: "Failed to process file" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
