import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddPosition } from './positions-slice';
import data from './../../mock/data.json';

export const useFetchPosition = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AddPosition(data))
      }, [dispatch])  
} 