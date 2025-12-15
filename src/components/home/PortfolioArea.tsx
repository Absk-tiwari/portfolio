 
import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

import portfolio_img_1 from "../../../public/assets/images/projects/POS system.png";
import portfolio_img_2 from "../../../public/assets/images/projects/JAJA ecommerce.png";
import portfolio_img_3 from "../../../public/assets/images/projects/Admin Panel.png";
import portfolio_img_4 from "../../../public/assets/images/projects/JOB portal.png";
import portfolio_img_5 from "../../../public/assets/images/projects/Parlour ecommerce.png"; 

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
}

const portfolio_data:DataType[] = [
  {
    id: 1,
    col: "6",
    image: portfolio_img_1,
    title: "POS system",
    category: "Utility & Tools",
  },
  {
    id: 2,
    col: "6",
    image: portfolio_img_2,
    title: "Jaja Trends",
    category: "E-commerce",
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "Admin Panels",
    category: "Website Supervision & Control",
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Green Plant on a Desk",
    category: "Job Platform",
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Beauty & Parlour Shop",
    category: "E-commerce",
  },
];

export default function PortfolioArea() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 5).map((item) => item.image);


  return (
    <>

      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div key={i} className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="portfolio-box">
                    <img src={item.image} alt="" style={{ height: "auto"}} data-rjs="2" />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </a>
              </div>
            ))} 
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  )
}
