import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Item } from '../styles/page';

const CreateItemForm = () => {
    const router = useRouter();
  
    const [item, setItem] = useState<Item>({
        id: 0,
        title: '',
        description: '',
        image: '',
        creator: '',
      });
    
    const OnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setItem({
                id: 0,
                title: '',
                description: '',
                image: '',
                creator: '',
            });
            router.push('/');
        } catch (error) {
            console.error('Error in CreateItem!', error);
        }
    };
}
