import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, X, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  onExtractedText: (text: string) => void;
}

const FileUpload = ({ onFileSelect, onExtractedText }: FileUploadProps) => {
  const [uploadType, setUploadType] = useState<"file" | "text">("file");
  const [textContent, setTextContent] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const processFile = async (file: File) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3001/extract", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to extract text");
      }

      const data = await response.json();
      setExtractedText(data.text);
      onExtractedText(data.text); // Call the new callback
    } catch (error) {
      toast.error("Failed to process file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          toast.error("File size should be less than 5MB");
          return;
        }
        setUploadedFile(file);
        onFileSelect(file);
        await processFile(file);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
    maxFiles: 1,
  });

  const handleTextChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = e.target.value;
    setTextContent(text);

    if (text) {
      const file = new File([text], "resume.txt", { type: "text/plain" });
      onFileSelect(file);
      await processFile(file);
    } else {
      onFileSelect(null);
      setExtractedText("");
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    setTextContent("");
    setExtractedText("");
    onFileSelect(null);
  };

  const handleFileClick = () => {
    if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      window.open(fileUrl, "_blank");
    }
  };

  return (
    <div className="space-y-4">
      <RadioGroup
        value={uploadType}
        onValueChange={(value: "file" | "text") => {
          setUploadType(value);
          clearFile();
        }}
        className="flex space-x-4 mb-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="file" id="file" />
          <label htmlFor="file" className="text-gray-200">
            Upload File
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="text" id="text" />
          <label htmlFor="text" className="text-gray-200">
            Paste Text
          </label>
        </div>
      </RadioGroup>

      {uploadType === "file" ? (
        <div
          {...getRootProps()}
          className={`file-drop-area ${
            isDragActive ? "dragging" : ""
          } cursor-pointer`}
        >
          <input {...getInputProps()} />
          <div className="text-center">
            <Upload className="mx-auto h-28 w-16 text-gray-400" />
            <p className="mt-2 text-lg text-gray-300">
              Drag and drop your resume here, or click to select
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Supported formats: PDF, DOC, DOCX, TXT (Max 5MB)
            </p>
          </div>
        </div>
      ) : (
        <textarea
          placeholder="Paste your resume text here..."
          value={textContent}
          onChange={handleTextChange}
          className="w-full h-52 p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}

      {(uploadedFile || textContent) && (
        <div className="relative p-4 bg-slate-700/50 rounded-lg border border-gray-600">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 hover:bg-slate-600/50"
            onClick={clearFile}
          >
            <X className="h-4 w-4 text-gray-300" />
          </Button>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleFileClick}
          >
            <FileText className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-200">
              {uploadedFile ? uploadedFile.name : "resume.txt"}
            </span>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center p-4 bg-slate-700/50 rounded-lg border border-gray-600">
          <Loader2 className="h-6 w-6 animate-spin text-blue-400 mr-2" />
          <span className="text-gray-200">Processing file...</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
