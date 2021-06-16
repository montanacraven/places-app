interface Places {
    place : string;
    country: string;
    map: string;
    desc: string;
    picture: string;
  }
  
  function PlacesEntry(props: Places): JSX.Element {
    return (
      <section>
          <h2>{props.place}</h2>
        <p>
          <img src= {props.picture} alt = ""  width = "200"  height = "200" />
        </p>
        <p>
          <strong> {props.country} </strong> <a href= {props.map} >(map link) </a>
        </p>
        <p>{props.desc}</p>
      </section>
    );
  }
  export default PlacesEntry;