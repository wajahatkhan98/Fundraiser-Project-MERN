function Card(props)
{
    return <>
    <div className="items">
        <img src={props.image}/>
        <div className='text-section'>
        <div className='title-section'>
        <div className='first'>
        <svg width="23px" height="24px" viewBox="0 0 23 24" class="catalogvJNL7"><path class="catalog3v47Q" fill-rule="evenodd" d="M 11.5 17.86C 11.5 17.86-0 24-0 24-0 24-0 0-0 0-0 0 23 0 23 0 23 0 23 24 23 24 23 24 11.5 17.86 11.5 17.86Z"></path><path class="catalog1V1Qz" fill-rule="evenodd" d="M 6.5 0C 6.5 0 7.93 4.58 7.93 4.58 7.93 4.58 12.99 4.58 12.99 4.58 12.99 4.58 8.81 7.09 8.81 7.09 8.81 7.09 10.51 11.98 10.51 11.98 10.51 11.98 6.5 8.64 6.5 8.64 6.5 8.64 2.49 11.98 2.49 11.98 2.49 11.98 4.2 7.09 4.2 7.09 4.2 7.09 0.01 4.58 0.01 4.58 0.01 4.58 5.08 4.58 5.08 4.58 5.08 4.58 6.5 0 6.5 0"></path></svg>
        <h3>{props.title}</h3>
        </div>
        <div className='second'>
        <sub>${props.price}</sub>
        </div>
        </div>
        <p>{props.description}</p>
        </div>
    </div>
    </>
}

export default Card