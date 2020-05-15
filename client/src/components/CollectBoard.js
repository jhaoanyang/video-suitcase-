import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Video from './Video';
import { Pagination } from '@material-ui/lab';

function CollectBoard() {
    const collectItems = useSelector(state => state.collect.items);

    const [ activePage, setActivePage ] = useState(1);

    const pageCount = Math.ceil(collectItems.length / 12);
    
    return (
        <div>
            <div className="container">
                {collectItems.map((item, index) => {
                    if ((activePage - 1) * 12 <= index && index < activePage * 12) {
                        return (
                            <Video
                                id={item.id}
                                pic={item.pic}
                                length={item.length}
                                title={item.title}
                                description={"000" || item.description}
                            />
                        );
                    }
                })}
            </div>
            <div>
                <Pagination
                    count={pageCount}
                    onChange={(e, page) => setActivePage(page)}
                />
            </div>
        </div>
    );
}

export default CollectBoard;