import { Schema, model, models, Types } from 'mongoose';

export interface IProject {
  _id: Types.ObjectId;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    githubUrl: { type: String, required: true },
    liveUrl: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, required: true }
  },
  { timestamps: true }
);

export default models.Project || model<IProject>('Project', projectSchema); 