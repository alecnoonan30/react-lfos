const Cards = (props) => {
    return (
        <>
        <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-3 mb-4">
            <a href={props.href} style={{ textDecoration: 'none' }}>
                <div className="card h-100">
                    <img src={props.img} alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}

export default Cards;