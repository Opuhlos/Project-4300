import mongoose, {Schema, Document, Model} from "mongoose"
import { ObjectId } from "mongodb";

export interface IItem extends Document {
    _id: ObjectId;
    title: string;
    description?: string;
    image?: string;
    creator: string;
}

const itemSchema = new Schema<IItem>(
    {
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
        },
        creator: {
            type: String,
            required: true,
        },
   }, {collection: "items"});

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;