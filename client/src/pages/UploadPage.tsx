import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import FileUpload from "@/components/landing/FileUpload";
import JobDomains from "@/components/landing/JobDomains";
import StepperProgress from "@/components/landing/Stepper";
import { toast } from "sonner";

export const UploadPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [jobDomain, setJobDomain] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [showExtractedText, setShowExtractedText] = useState(true);

  const handleNext = () => {
    if (currentStep === 1 && !resumeFile && !extractedText.trim()) {
      toast.error("Please upload a resume or paste your resume text");
      return;
    }
    if (currentStep === 2 && (!jobDomain || !jobDescription.trim())) {
      toast.error("Please fill in all job details");
      return;
    }
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast.success("Resume optimization request submitted!");
    console.log({
      extractedText,
      jobDomain,
      jobDescription,
    });
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setResumeFile(null);
    setExtractedText("");
    setJobDomain("");
    setJobDescription("");
    setShowExtractedText(true);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-5xl mt-10 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Upload Details
          </h1>
          <p className="mt-2 text-gray-300">
            Let's optimize your resume for your dream job
          </p>
        </div>

        <StepperProgress currentStep={currentStep} totalSteps={2} />

        <Card className="bg-slate-800/50 border-gray-700">
          <CardContent className="pt-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">
                  Step 1: Upload Your Resume
                </h2>
                <FileUpload
                  onFileSelect={setResumeFile}
                  onExtractedText={(text) => {
                    setExtractedText(text);
                    setShowExtractedText(true);
                  }}
                />
                {showExtractedText && extractedText && (
                  <div className="p-4 bg-slate-700/50 rounded-lg border border-gray-600">
                    <h3 className="text-lg font-medium text-gray-200 mb-2">
                      Extracted Text
                    </h3>
                    <Textarea
                      value={extractedText}
                      onChange={(e) => setExtractedText(e.target.value)}
                      className="w-full h-96 p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">
                  Step 2: Enter Job Details
                </h2>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">
                    Job Domain
                  </label>
                  <JobDomains value={jobDomain} onChange={setJobDomain} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">
                    Job Description
                  </label>
                  <Textarea
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="h-40 bg-slate-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <div>
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="bg-slate-700/50 border-gray-600 text-gray-200 hover:bg-slate-600/50"
              >
                Previous
              </Button>
            )}
          </div>
          <div className="space-x-4">
            <Button
              variant="outline"
              onClick={handleRestart}
              className="bg-slate-700/50 border-gray-600 text-gray-200 hover:bg-slate-600/50"
            >
              Start Over
            </Button>
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:opacity-90"
            >
              {currentStep === 2 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
