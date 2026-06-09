const Events = (props) => {

    return(
        <div className='Events'>
            <h5>{props.events}</h5>
            <h6>{props.location}</h6>
        </div>
    )
}
export default Events;