import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation() {
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
        <nav class="navbar navbar-expand-lg d-flex" id="navigation-nav">
          <a
            class="navbar-brand mr-auto flex justify-left cursive text-5xl"
            href="#"
          >
            the STRIPE
          </a>
          <div class="p-2">STYLE</div>
          <div class="p-2">DIY</div>
          <div class="p-2">BEAUTY</div>
          <div class="p-2">FAVES</div>
          <div class="p-2">LIFESTYLE</div>
          <div class="p-2">TRAVEL</div>
          <div class="p-2">BOOKS</div>
          <div class="p-2">SHOP</div>
        </nav>
      </div>
    );
}
export default Navigation;
