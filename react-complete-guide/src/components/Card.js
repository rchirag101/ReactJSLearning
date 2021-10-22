import "./css/Card.css";

const Card = (props) => {
    // const Card = (props) => {} and function Card(props){} are same

    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
};
export default Card;
