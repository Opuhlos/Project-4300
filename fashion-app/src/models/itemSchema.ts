import mongoose, {Schema, Document, Model} from "mongoose"
import { ObjectId } from "mongodb";

// this is for posting, since we aren't posting and providing an id, mongo provides that for us
export interface IItemData {
    title: string;
    description: string;
    image: string;
    name: string;
    email: string;
}

// this is for getting, the document ensures that we get the _id
export interface IItem extends IItemData, Document {}

const itemSchema = new Schema<IItem>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
   }, {collection: "items"});

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;