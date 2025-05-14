
import type { FC } from "react";
import ProjectCard from "./project-card";
import type { Project } from "@/types";

const projectsData: Project[] = [
  {
    id: "1",
    title: "Customer Churn Prediction",
    shortDescription: "Developed a machine learning model to predict customer churn for a telecom company, achieving 85% accuracy.",
    detailedOverview: "This project involved analyzing customer data to identify key factors leading to churn. Utilized logistic regression and random forest models. Performed extensive data preprocessing, feature engineering, and model evaluation. The insights helped in formulating retention strategies.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "analytics chart",
    githubLink: "https://github.com/yourusername/churn-prediction",
    tags: ["Machine Learning", "Python", "Scikit-learn", "Pandas", "Classification"]
  },
  {
    id: "2",
    title: "Sales Forecasting System",
    shortDescription: "Built a time series forecasting model to predict monthly sales for a retail business with a Mean Absolute Percentage Error (MAPE) of 12%.",
    detailedOverview: "This project focused on analyzing historical sales data. Employed ARIMA and Prophet models for time series forecasting. The system provides insights for inventory management and sales planning. Visualized trends and seasonality using Matplotlib and Seaborn.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data visualization",
    githubLink: "https://github.com/yourusername/sales-forecasting",
    tags: ["Time Series", "Python", "Prophet", "Statsmodels", "Forecasting"]
  },
  {
    id: "3",
    title: "Sentiment Analysis of Movie Reviews",
    shortDescription: "Implemented an NLP model to classify movie reviews as positive or negative using TensorFlow and Keras.",
    detailedOverview: "This project involved text preprocessing techniques like tokenization and stemming. Trained a recurrent neural network (LSTM) for sentiment classification on a large dataset of movie reviews. Achieved an F1-score of 0.88. Explored word embeddings like Word2Vec and GloVe.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "text analysis",
    githubLink: "https://github.com/yourusername/sentiment-analysis",
    tags: ["NLP", "TensorFlow", "Keras", "Python", "Deep Learning"]
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
