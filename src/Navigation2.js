import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SecondNavigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active text-light" href="#">
              ABOUT <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link text-light" href="#">
              BLOGVIN'
            </a>
            <a class="nav-item nav-link text-light" href="#">
              SUBSCRIBE
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default SecondNavigation;
