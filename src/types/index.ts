
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedOverview: string;
  imageUrl: string;
  imageHint: string;
  githubLink: string;
  tags: string[];
}

export interface Certificate {
  id: string;
  title:string;
  imageUrl: string;
  imageHint: string;
  certificateLink: string;
  issuedBy: string;
}
