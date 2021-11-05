import  {Fragment} from "react";

const Footer = () => {
  return (
    <Fragment>
      <div class="container" id="footer">
        <div class="row">
          <div class="col col-sm-12">
            <h1>Follow Us</h1>
            <div class="btn-group">
              <a
                class="btn btn-facebook btn-lg"
                href="https://www.facebook.com/DefenseHealthAgency/live"
              >
                <i class="icon-facebook icon-large"></i> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <ul class="list-inline">
                <li>
                  <i class="icon-facebook icon-2x"></i>
                </li>
                <li>
                  <i class="icon-twitter icon-2x"></i>
                </li>
                <li>
                  <i class="icon-google-plus icon-2x"></i>
                </li>
                <li>
                  <i class="icon-pinterest icon-2x"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};


export default Footer;