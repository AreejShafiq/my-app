import React from 'react'


function Cards(props) {
  console.log(props);

  return(
    <div className="Cards">
       <h1 className="text-center text-success">
          Services
       </h1>

       <div className="container">
          <div className="row">
              <div className="col-md-4">
              <div class="card">
            <img class="card-img-top" src={props.Image1} alt="Card pic cap" />

              <div class="card-body">
            <h5 class="card-title">{props.Title}</h5>
          <p class="card-text">{props.Text}</p>
          <a href="/#" class="btn btn-primary">Read more</a>
        </div>
          </div>

              </div>

              <div className="col-md-4">
              <div class="card">
            <img class="card-img-top" src={props.Image2} alt="Card pic cap" />

              <div class="card-body">
            <h5 class="card-title">{props.Title2}</h5>
          <p class="card-text">{props.Text2}</p>
          <a href="/#" class="btn btn-primary">Read more</a>
        </div>
          </div>

              </div>

              <div className="col-md-4">
              <div class="card">
            <img class="card-img-top" src={props.Image3} alt="Card pic cap" />

              <div class="card-body">
            <h5 class="card-title">{props.Title3}</h5>
          <p class="card-text">{props.Text3}</p>
          <a href="/#" class="btn btn-primary">Read more</a>
        </div>
          </div>

              </div>


          </div>





       </div>
<hr></hr>
       </div>

    
  )
}


export default Cards; 