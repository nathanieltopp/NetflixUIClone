import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import {useRef, useState} from "react";
import "./list.scss";

export default function List() {
    const [slideNumber, setslideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false)
    const listRef = useRef()
    function handleClick(direction) {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        //where 50 is the width of the left arrow;
        if(direction === "left" && slideNumber > 0){
            setslideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
        }

        if(direction === "right" && slideNumber < 5){
            setslideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
        setIsMoved(true);
    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                    className="sliderArrow left" 
                    onClick={() => handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    <ListItem index={10}/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}
