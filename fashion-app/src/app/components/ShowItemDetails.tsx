import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Item } from "../styles/page";

export default function ShowItemDetails() {
    const [item, setItem] = useState<Item | null>(null);
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`/api/items/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("DATA::::");
                console.log(data);
                setItem(data.item);
            } catch (error) {
                console.log('Error from ShowItemDetails');
            }
        };
        if (id) {
            fetchItem();
        }
    }, [id]);
}