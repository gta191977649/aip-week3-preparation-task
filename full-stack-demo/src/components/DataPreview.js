import React from 'react'
const DataPreview = ({data}) => (
    <div className="dataPreview">
        {data.id},{data.name}
    </div>
)

export default DataPreview