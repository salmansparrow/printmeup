function Price() {
  return (
    <>
      <section className="price-section">
        <div className="container">
          <div className="price-headings">
            <h1 className="heading-1">Our Customized</h1>
            <h1 className="heading-2">Pricing Packages</h1>
          </div>
          <div className="price-cards pb-5">
            <div className="row row-cols-1 row-cols-md-3 mb-3">
              <div className="col">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title pricing-card-title">
                      Single standard t-shirt
                    </h6>
                    <div className="price-para">
                      <p>
                        Single standard t-shirt of any size for a single image
                        on one side.
                      </p>
                    </div>
                    <button type="button" className="price-button btn">
                      AED 40
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title pricing-card-title">
                      Double side print
                    </h6>
                    <div className="price-para">
                      <p>Double side print of any size.</p>
                    </div>
                    <button type="button" className="price-button btn">
                      AED 50
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title pricing-card-title">
                      Additional images
                    </h6>
                    <div className="price-para">
                      <p>Additional images on any side.</p>
                    </div>
                    <button type="button" className="price-button btn">
                      AED 10/Image
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* New row with two centered cards */}
            <div className="row row-cols-1 row-cols-md-2 justify-content-center">
              <div className="col-md-5 d-flex justify-content-center">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title pricing-card-title">
                      Delivery charges
                    </h6>
                    <div className="price-para">
                      <p>Custom design on any item.</p>
                    </div>
                    <button type="button" className="price-button btn">
                      AED 15
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-center">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title pricing-card-title">VAT</h6>
                    <div className="price-para">
                      <p>VAT to be charged based on regulatory requirements</p>
                    </div>
                    <button type="button" className="price-button btn">
                      AED 300
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Price;
