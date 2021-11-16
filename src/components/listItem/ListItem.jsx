import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listitem.scss";

export default function ListItem({index}) {
    const [isHovered, setisHovered] = useState(false);
    const trailer = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/UD7CEz6/concept-animation-of-concept-animation-of-ecommerce-matte-included-matte-included_x1n9me5p__08fdc1e34ed98f642865db4d0b8c6e49__P360.mp4";
    return (
        <div className="listItem" onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)} style={{left: isHovered && index * 225 - 50 + index * 2.5}}>
            <img src="https://m.media-amazon.com/images/I/71CrUZTEeuL._SL1500_.jpg" alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay loop/>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, praesentium quod voluptatibus </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
