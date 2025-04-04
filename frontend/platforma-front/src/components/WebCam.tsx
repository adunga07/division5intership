import Webcam from "react-webcam";
import { useRef, useState } from "react";

const videoConstraints = {
  width: 450,
  height: 450,
  facingMode: "user",
};

const WebCam = () => {
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const handleStartCapture = () => {
    setIsCapturing(true);
    navigator.mediaDevices.getUserMedia({audio:true,video:true})
    const stream = webcamRef.current?.video?.srcObject as MediaStream;
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: "video/mp4",
    });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorderRef.current.start();
  };

  const handleStopCapture = () => {
    setIsCapturing(false);
    mediaRecorderRef.current?.stop();
  };

  const handleDownload = () => {
    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);

      // Optionally trigger a download
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded-video.mp4";
      a.click();
    }
  };

  const handleCameraError = () => {
    setErrorMessage("Camera access was denied. Please allow camera permissions to use this feature.");
  };

  return (
    <div className="flex w-full items-center justify-center flex-col">
      {errorMessage ? (
        <div className="text-red-500 font-bold">{errorMessage}</div>
      ) : (
        <Webcam
          audio={true}
          ref={webcamRef}
          videoConstraints={videoConstraints}
          className="rounded-lg border-2"
          onUserMediaError={handleCameraError}
        />
      )}
      {!errorMessage && (
        <div className="flex w-full items-center justify-around flex-row m-4">
          {!isCapturing ? (
            <button
              onClick={handleStartCapture}
              className="rounded-2xl border-2 bg-amber-100 text-center p-3"
            >
              Start Recording
            </button>
          ) : (
            <button
              onClick={handleStopCapture}
              className="rounded-2xl border-2 bg-red-500 text-center p-3"
            >
              Stop Recording
            </button>
          )}
          <button
            onClick={handleDownload}
            className="rounded-2xl border-2 bg-green-500 text-center p-3"
            disabled={recordedChunks.length === 0}
          >
            Download Video
          </button>
        </div>
      )}
      {videoURL && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Recorded Video:</h3>
          <video
            src={videoURL}
            controls
            className="rounded-lg border-2 mt-2"
            width="450"
            height="450"
          />
        </div>
      )}
    </div>
  );
};

export default WebCam;