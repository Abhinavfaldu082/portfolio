import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "MediQuery AI: Intelligent Health Information Assistant",
    shortDescription:
      "Developed an AI-powered assistant for health Q&A and symptom exploration using RAG, hybrid search (FAISS/BM25), BioBERT, and Zero-Shot Classification.",
    detailedOverview:
      "MediQuery AI provides users with reliable medical information from MedlinePlus through an intuitive interface. The core Q&A feature utilizes a sophisticated Retrieval Augmented Generation (RAG) pipeline. This pipeline employs a hybrid search strategy, combining FAISS-based semantic vector search (with msmarco-distilbert-base-tas-b embeddings) and BM25 keyword search, with results fused using Reciprocal Rank Fusion (RRF) for optimal context retrieval. The retrieved context is then processed by a BioBERT extractive QA model to provide answers. A symptom exploration feature uses a Zero-Shot Classification model (BART-Large-MNLI) to identify key symptom categories from user descriptions, which then queries the RAG system for relevant information. The backend, built with FastAPI (Python), also supports speech-to-text (Whisper), OCR (EasyOCR), and generates PDF reports (ReportLab) of sessions. The project involved significant tuning of retrieval, chunking, and classification components to improve accuracy and relevance.",
    imageUrl: "./mediquery.png",
    imageHint: "Screenshot of MediQuery AI interface or conceptual diagram",
    githubLink: "https://github.com/Abhinavfaldu082/Medi_Query.git",
    tags: [
      "Artificial Intelligence",
      "NLP",
      "Python",
      "FastAPI",
      "RAG",
      "Hugging Face Transformers",
      "FAISS",
      "BM25",
      "BioBERT",
      "Information Retrieval",
      "Full-Stack AI",
    ],
  },
  {
    id: "2",
    title: "Veracity Vigilance: Fake News Detection",
    shortDescription:
    "Built a machine learning model to detect fake news using natural language processing, achieving over 93% accuracy on the IFND dataset.",
    detailedOverview:
    "This project focuses on combating misinformation by detecting fake news articles using machine learning. We used the IFND (Indian Fake News Dataset) which includes a wide range of real and fake news samples. The pipeline involved text preprocessing (tokenization, stopword removal, TF-IDF vectorization), followed by training multiple models including Logistic Regression, Random Forest, and a Bidirectional LSTM. We fine-tuned hyperparameters and compared performance across models. Our best-performing model achieved 93% accuracy and 91% F1-score. The results highlighted the effectiveness of combining classical ML with deep learning for textual classification",
    imageUrl: "./fakenews.png",
    imageHint: "analytics chart",
    githubLink: "https://github.com/Abhinavfaldu082/Veracity-Vigilance",
    tags: [
      "Machine Learning",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Classification",
    ],
  },
  {
    id: "3",
    title: "Twitter Sentiment Analysis",
    shortDescription:
      "Built a Flask web app that analyzes sentiment from tweet images using OCR and transformer models like BERT and RoBERTa.",
    detailedOverview:
      "This project aims to detect the sentiment of tweet images using Optical Character Recognition (OCR) and Natural Language Processing (NLP). The process begins with image preprocessing using OpenCV, followed by text extraction via pytesseract. The extracted text undergoes NLP-based preprocessing (punctuation removal, lowercasing, tokenization, stopword removal) using NLTK. The cleaned text is passed through pre-trained transformer models—BERT and RoBERTa—for sentiment classification into positive, negative, or neutral. A comparison between models showed that RoBERTa consistently delivered more accurate sentiment predictions. The project is deployed via a Flask-based web app that takes a tweet image as input and displays sentiment results.",
    imageUrl: "./sentiment.png",
    imageHint: "data visualization",
    githubLink: "https://github.com/Abhinavfaldu082/Twitter_sentiment_analysis",
    tags: ["Python", "OCR", "NLP", "OpenCV", "Flask", "BERT", "RoBERTa"],
  },
  {
    id: "4",
    title: "Image Classification with CNN",
    shortDescription:
      "Developed a CNN-based deep learning model to classify facial expressions as happy or sad, using the Adam optimizer for efficient training and achieving strong generalization on unseen data.",
    detailedOverview:
      "This project delves into the use of deep learning for binary image classification, specifically distinguishing between happy and sad facial expressions. A custom convolutional neural network (CNN) was designed and trained using a carefully curated dataset that included diversity in lighting, pose, age, and ethnicity. Preprocessing steps involved resizing, normalization, and data augmentation to enhance robustness. The Adam optimizer was employed to accelerate convergence and improve overall training efficiency. The model was evaluated using metrics such as accuracy, precision, recall, and F1-score, and it demonstrated strong generalization on the test set. The project highlights the advantages of using adaptive optimizers like Adam in CNN training and explores future enhancements such as transfer learning, deeper architectures like ResNet, and real-world deployment in sentiment analysis tools.",
    imageUrl: "./emotion-classification.png",
    imageHint: "facial emotion heatmap",
    githubLink: "https://github.com/Abhinavfaldu082/AI_IMAGE_CLASSIFICATION",
    tags: [
      "Deep Learning",
      "Computer Vision",
      "CNN",
      "Python",
      "TensorFlow",
      "Image Classification",
    ],
  },
];