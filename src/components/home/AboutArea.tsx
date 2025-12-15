 

const counter_data = [
  {
    id: 1,
    title: 'Years Of Experience',
    count: "3.5",
    cls: "plus",
  },
  {
    id: 2,
    title: 'Completed Projects',
    count: 100,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Client Satisfactions',
    count: 90,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>
                  I am Abhishek, a seasoned Full-stack Developer with more than 3.5 years of development experience. Hands on experience on development of web applications on OOPS and MVC based architecture. Willing to relocate to the job location accordingly as per the opportunities.
                </p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
