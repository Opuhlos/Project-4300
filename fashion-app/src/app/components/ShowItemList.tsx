import { useEffect, useState } from "react";

export default function ShowItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/items');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItems(data.items);
            } catch (error) {
                console.log('Error from ShowItemList:', error);
            }
        };
        fetchItems();
    }, []);
}