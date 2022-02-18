const Personaje = ({ personaje }) => {
  const { location, gender, name, species, image, status } = personaje;
  const color = {
    backgroundColor: "#3C3E44",
    borderRadius: "8px"
  };
  return (
    <div className="container-fluid col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
      <div className="card mb-3" style={color}>
        <div className="row g-0 text-light">
          <div className="col-4">
            <img
              src={image}
              alt={`imagen-${name}`}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="">
                {status} - {species}
              </h6>
              <div>
                <small className="text-muted">Last known location:</small>
                <h6 className="text-white">{location.name}</h6>
                <h6 className="text-muted">{gender}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
