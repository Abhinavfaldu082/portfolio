
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
    title: "Sentiment Analysis of Movie Reviews",
    shortDescription:
      "Implemented an NLP model to classify movie reviews as positive or negative using TensorFlow and Keras.",
    detailedOverview:
      "This project involved text preprocessing techniques like tokenization and stemming. Trained a recurrent neural network (LSTM) for sentiment classification on a large dataset of movie reviews. Achieved an F1-score of 0.88. Explored word embeddings like Word2Vec and GloVe.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "text analysis",
    githubLink: "https://github.com/yourusername/sentiment-analysis",
    tags: ["NLP", "TensorFlow", "Keras", "Python", "Deep Learning"],
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
