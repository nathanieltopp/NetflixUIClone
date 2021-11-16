import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventrue">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://cdn.vox-cdn.com/thumbor/aOBMhdSY1NBrgLQrJTOuGN7egac=/0x0:4500x3000/1200x800/filters:focal(1890x1140:2610x1860)/cdn.vox-cdn.com/uploads/chorus_image/image/69684337/1318341763.0.jpg" alt="" />
            <div className="info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy3w_CPmd5XzyarHXU2Id13OqWZAVJAeab5n4HvqLeyhYjevKC62Rb2-SDTvkLARnyg&usqp=CAU" alt="" />
                <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet suscipit excepturi dignissimos placeat, ullam voluptate, dolorem incidunt, officia adipisci quibusdam numquam? Repudiandae quasi debitis at blanditiis soluta qui earum incidunt.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
