"use client"

export const DetailFooter = ({ id }) => {
    return (
        <div className="detail-foot-divider flex">
            <div className="detail-foot-divider-bar"></div>
            <div className="detail-foot-divider-id">0{id}</div>
        </div>
    )
} 