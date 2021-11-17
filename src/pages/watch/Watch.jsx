import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/UD7CEz6/concept-animation-of-concept-animation-of-ecommerce-matte-included-matte-included_x1n9me5p__08fdc1e34ed98f642865db4d0b8c6e49__P360.mp4" autoPlay={true} progress controls/>
        </div>
    )
}
