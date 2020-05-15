import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

function CollectButton(props) {
    const collectIds = useSelector(state => state.collect.ids);

    const [ collected, setCollected ] = useState(false);
    const ifCollected = collectIds.find(item => item === props.id);
    useEffect(_ => {
        if (ifCollected) {
            setCollected(true);
        } else {
            setCollected(false);
        }
    },
    [collectIds])

  
    const dispatch = useDispatch();
    const handleCollect = () => {
        dispatch(actions.doCollect(props.id));
    };
    const handleDiscard = () => {
        dispatch(actions.deleteCollect(props.id));
    }

    return (
        <button
            onClick={
                collected ?
                    _ => handleDiscard()
                :
                    _ => handleCollect()
                }
        >
            {collected ? "Discard" : "Collect"}
        </button>
    );
};

export default CollectButton;