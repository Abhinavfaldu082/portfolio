
import type { FC } from "react";
import ProjectCard from "./project-card";
import type { Project } from "@/types";

const projectsData: Project[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">
            A showcase of my data science endeavors and problem-solving skills.
          </p>
        </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
