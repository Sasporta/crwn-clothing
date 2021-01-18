import React from 'react';

const CollectionPreview = ({ title, items }) => {

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((v, i) => i < 4).map(({ id, name }) => <div key={id}>{name}</div>)}
            </div>
        </div>
    )
};

export default CollectionPreview;