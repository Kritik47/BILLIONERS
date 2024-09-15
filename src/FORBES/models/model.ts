import mongoose, { Schema, Document } from 'mongoose';
export interface Billioner extends Document {
  name: string;
  age: number;
  nationality: string;
  netWorth: number;
  sourceOfWealth: string;
  industry: string;
  ranking: number;
  company: string;
  residence?: string;
  philanthropist?: boolean;
  bio?: string;
  profileImage?: string;
  year: number;
}

const BillionerSchema = new Schema<Billioner>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
  netWorth: { type: Number, required: true },
  sourceOfWealth: { type: String, required: true },
  industry: { type: String, required: true },
  ranking: { type: Number, required: true },
  company: { type: String, required: true },
  residence: { type: String },
  philanthropist: { type: Boolean },
  bio: { type: String },
  profileImage: { type: String },
  year: { type: Number, required: true }
});


const Billioner = mongoose.model<Billioner>('Billioner', BillionerSchema);

export default Billioner;
