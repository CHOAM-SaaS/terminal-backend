import { Schema, model, connect } from 'mongoose';

interface IJob {
  poster: string;
  description: string;
  spots: number;
  type: string;
  completed: boolean;
  assigned: string[];
}

const jobSchema = new Schema<IJob>({
  poster: { type: String, required: true },
  description: { type: String, required: true },
  spots: { type: Number, required: true },
  type: { type: String, required: true },
  completed: { type: Boolean, default: false },
  assigned: { type: [String], default: [] },
});

const Job = model<IJob>('Job', jobSchema);

export default Job;