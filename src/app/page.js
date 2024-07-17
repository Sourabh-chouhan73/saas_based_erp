import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
  return (
    <>
      <section className="home-top-section">
        <div className="container">
          <div className="row home-top-row">
            <div className="col">
              <h2>Manage Customers, Projects, And Create Invoices in the cloud</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis distinctio consequuntur, illo quos quam.</p>
            </div>
          </div>
          </div>
      </section>
      <section className="home-top2-section">
        <div className="container">
          <div className="row home-top2-row">
            <div className="col">
              <h2>FEATURES AND BENEFITS</h2>
              <p>Explore the awesome Features that will help you to get your business to next level.</p>
            </div>
          </div>
          </div>
      </section>
     <section className="home-main-sec bg-white">
      <div className="container my-4">
        <div className="home-item-con">
          <Link href={''}>
            <div className="card home-item">
              <div className="card-body">
                  <div className="text-center m-2">
                  <FontAwesomeIcon icon={faEnvelope} height={45} width={45} />
                  </div>
                  <h5 className="text-center">Create good looking proposals</h5>
                  <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eveniet! Quae, maiores?</p>
              </div>
            </div>
          </Link>
          <Link href={''}>
            <div className="card  home-item">
              <div className="card-body">
                  <div className="text-center m-2">
                  <FontAwesomeIcon icon={faEnvelope} height={45} width={45} />
                  </div>
                  <h5 className="text-center">Create good looking proposals</h5>
                  <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eveniet! Quae, maiores?</p>
              </div>
            </div>
          </Link>
          <Link href={''}>
            <div className="card  home-item">
              <div className="card-body">
                  <div className="text-center m-2">
                  <FontAwesomeIcon icon={faEnvelope} height={45} width={45} />
                  </div>
                  <h5 className="text-center">Create good looking proposals</h5>
                  <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eveniet! Quae, maiores?</p>
              </div>
            </div>
          </Link>
          <Link href={''}>
            <div className="card  home-item">
              <div className="card-body">
                  <div className="text-center m-2">
                  <FontAwesomeIcon icon={faEnvelope} height={45} width={45} />
                  </div>
                  <h5 className="text-center">Create good looking proposals</h5>
                  <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eveniet! Quae, maiores?</p>
              </div>
            </div>
          </Link>
          <Link href={''}>
            <div className="card  home-item">
              <div className="card-body">
                  <div className="text-center m-2">
                  <FontAwesomeIcon icon={faEnvelope} height={45} width={45} />
                  </div>
                  <h5 className="text-center">Create good looking proposals</h5>
                  <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eveniet! Quae, maiores?</p>
              </div>
            </div>
          </Link>
          <Link href={''}>
            <div className="card home-item">
              <div className="card-body">
                  <div className="text-center m-2">
                  <FontAwesomeIcon icon={faEnvelope} height={45} width={45} />
                  </div>
                  <h5 className="text-center">Create good looking proposals</h5>
                  <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eveniet! Quae, maiores?</p>
              </div>
            </div>
          </Link>
          

        

        </div>
      </div>
     </section>
     <section className="home-bottom-section">
        <div className="container">
          <div className="row home-top2-row">
            <div className="col">
              <h2>TEST YOURSELF!</h2>
              <p>Try the demo to see how CRM can help to succeed.</p>
              <div className="d-flex justify-content-center align-item-center">
                  <button className="btn btn-primary w-25">TRY DEMO</button>
              </div>
            </div>
          </div>
          </div>
      </section>

    </>
  );
}
