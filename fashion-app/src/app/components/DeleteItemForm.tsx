import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Item } from '../styles/page';

const router = useRouter();
const { id } = router.query;
const onDeleteClick = async () => {
    try {
        const response = await fetch(`api/items/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network resposne was not ok');
        }
        router.push('/');
    } catch (error) {
        console.log('Error in ShowItemDetails_deleteClick');
    }
};