import { Image, Video, Mic, Eye, Percent } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ArchitectureNode {
  id: string;
  label: string;
  detail: string;
}

export interface DeepShieldFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PerformanceMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  /** Mark true if this is a placeholder you still need to measure/confirm. */
  isEstimate?: boolean;
}

export const deepShieldCaseStudy = {
  title: "DeepShield",
  tagline:
    "A multimodal deepfake detection system combining visual and audio forensics, served through a low-latency FastAPI backend.",

  problemStatement:
    "Deepfake media — synthetically generated or manipulated video and audio — is increasingly difficult to distinguish from authentic content, and existing detectors often specialize in a single modality (just video or just audio), missing manipulations that only show up in the other channel.",

  motivation:
    "I wanted to go beyond a single-signal classifier and build something closer to how a person actually senses that something is 'off': cross-checking what's seen against what's heard. That meant combining a vision model with an audio forensics model and fusing their signals into one prediction, then wrapping it in an API fast enough to be genuinely usable.",

  // TODO: replace with the actual dataset(s), sizes, and split you trained on.
  dataset: [
    "Curated set of real and manipulated video clips spanning face-swap and reenactment techniques",
    "Paired audio tracks labeled for synthetic/spoofed speech",
    "Held-out validation split stratified by generation method, to check generalization beyond the training distribution",
  ],

  architecture: {
    visual: [
      { id: "video-input", label: "Video Input", detail: "Raw video/image upload" },
      { id: "frame-extraction", label: "Frame Extraction", detail: "OpenCV samples key frames" },
      { id: "efficientnet", label: "EfficientNetB0", detail: "Per-frame visual feature extraction" },
    ] as ArchitectureNode[],
    audio: [
      { id: "audio-input", label: "Audio Input", detail: "Extracted audio track" },
      { id: "mfcc", label: "MFCC Extraction", detail: "Librosa spectral features" },
      { id: "cnn-audio", label: "CNN (Audio)", detail: "Learns spoofing artifacts" },
    ] as ArchitectureNode[],
    fusion: [
      { id: "fusion", label: "Multimodal Fusion", detail: "Combines visual + audio signals" },
      { id: "classification", label: "Classification", detail: "Real vs. manipulated" },
      { id: "prediction", label: "Prediction + Confidence", detail: "Served via FastAPI" },
    ] as ArchitectureNode[],
  },

  features: [
    {
      icon: Image,
      title: "Image Detection",
      description: "Flags manipulated still frames using visual artifact analysis.",
    },
    {
      icon: Video,
      title: "Video Detection",
      description: "Samples and analyzes frames across a full clip, not just a single still.",
    },
    {
      icon: Mic,
      title: "Audio Detection",
      description: "Catches synthetic or spoofed speech that video-only models miss.",
    },
    {
      icon: Eye,
      title: "Explainable Output",
      description: "Surfaces which modality and region drove the verdict, not just a label.",
    },
    {
      icon: Percent,
      title: "Confidence Score",
      description: "Returns a calibrated confidence alongside every prediction.",
    },
  ] as DeepShieldFeature[],

  technologies: ["Python", "TensorFlow", "EfficientNetB0", "OpenCV", "Librosa", "FastAPI", "React"],

  challenges: [
    "Fusing two very different feature spaces (visual embeddings vs. audio spectral features) into one confident prediction, without either modality drowning out the other",
    "Keeping inference under 500ms per request while still running both a CNN vision pass and an audio pass",
    "Reducing overfitting to specific generation techniques so the model holds up against manipulation methods it wasn't trained on",
    "Building an API contract that stays simple for a frontend to consume while returning rich, per-modality explainability data",
  ],

  performance: [
    { id: "accuracy", label: "Accuracy", value: 94, suffix: "%" },
    { id: "precision", label: "Precision", value: 91, suffix: "%", isEstimate: true },
    { id: "recall", label: "Recall", value: 90, suffix: "%", isEstimate: true },
    { id: "f1", label: "F1 Score", value: 90, suffix: "%", isEstimate: true },
    { id: "inference", label: "Inference Speed", value: 500, suffix: "ms", isEstimate: true },
  ] as PerformanceMetric[],

  futureImprovements: [
    "Real-time detection on live video streams instead of uploaded clips",
    "Lightweight on-device / mobile variant for offline checks",
    "Adversarial robustness testing against newer generation methods",
    "Expanding training data diversity across languages and demographics",
  ],

  links: {
    // TODO: fill in a live demo URL if/when one is hosted.
    demo: undefined as string | undefined,
    github: "https://github.com/rithikagirish",
    // TODO: link a write-up or paper if you publish one.
    paper: undefined as string | undefined,
  },
};
