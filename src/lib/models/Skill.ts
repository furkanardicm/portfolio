import mongoose from 'mongoose';

export interface ISkill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
}

export interface ISkillCategory {
  _id?: string;
  category: string;
  skills: ISkill[];
}

const skillSchema = new mongoose.Schema<ISkillCategory>({
  category: {
    type: String,
    required: true
  },
  skills: [{
    name: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }]
});

export default mongoose.models.Skill || mongoose.model<ISkillCategory>('Skill', skillSchema); 