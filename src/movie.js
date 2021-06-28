function Movie(props) {
    const {movie} = props;
    /*maps.genres*/
  
  return(
    <div>
<section >
 <div className="banniere">
 <img src={movie.images.banner} alt="banniere"></img>
 <h1>          {movie.title}
  </h1>
  <img src={movie.images.poster}></img>
   </div>
   <div><p>{movie.description}</p></div>
    <div>
      <div>
        <div>{movie.genres}</div>
         <div>
           <button>
             <i className="glyphicon glyphicon-heart-empty"></i>
           </button>
         </div>
       </div>
     </div>
</section>
</div>
  )
}

export default Movie;