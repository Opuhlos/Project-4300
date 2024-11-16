import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Item } from './styles/page';

const router = useRouter();
const { id } = router.query;
const [item, setItem] = useState<Item | null>(null);
useEffect(() => {
    const fetchItem = async () => {
        try {
            const response = await fetch(`api/items/${id}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json();
            const itemData = data.item;
            setItem({
                id: itemData.id || 0,
                title: itemData.title || '',
                description: itemData.description || '',
                image: itemData.image || '',
                creator: itemData.creator || '',
            });
        } catch (error) {
            console.log('Error from UpdateItemInfo');
        }
    };
    if (id) {
        fetchItem();
    }
}, [id]);