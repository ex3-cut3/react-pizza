import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#e7d9d9"
        {...props}
    >
        <rect x="3" y="328" rx="5" ry="5" width="133" height="15" />
        <circle cx="137" cy="167" r="130" />
        <rect x="5" y="356" rx="5" ry="5" width="92" height="13" />
        <rect x="6" y="382" rx="5" ry="5" width="129" height="27" />
        <rect x="141" y="382" rx="5" ry="5" width="132" height="43" />
        <rect x="142" y="328" rx="5" ry="5" width="133" height="15" />
        <rect x="184" y="355" rx="5" ry="5" width="92" height="13" />
        <rect x="105" y="356" rx="5" ry="5" width="73" height="13" />
    </ContentLoader>
)

export default Skeleton
