import { Fragment } from "react";


const Header =(props)=>{

  return(
    <Fragment>
        <header class="navbar navbar-bright navbar-fixed-top" role="banner">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/" class="navbar-brand">HOME</a>
      </div>
      <nav class="collapse navbar-collapse" role="navigation">
        <ul class="nav navbar-nav" style={{paddingBottom: 5}}>

      </ul>
    </nav>
  </div>
</header>

<div id="masthead">  
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <h1>{props.title}
          <p class="lead"></p>
          </h1>
    </div>
    <div class="col-md-5">

      <div class="well well-lg">
        <div class="row">
          <div class="col-sm-12" style={{textAlign: 'center'}}>
            <img src="css/images/dha_medicine.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="top-spacer"> </div>
        </div>
      </div>
    </div>

</div>
    </Fragment>
  )

}

export default Header;
