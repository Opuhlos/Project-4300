import mongoose, {Schema, Document, Model} from "mongoose"

export interface IItem extends Document {
    title: string;
    description?: string;
    image?: string;
    updated_date: Date;
}

const itemSchema = new Schema<IItem>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    }
});
const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;