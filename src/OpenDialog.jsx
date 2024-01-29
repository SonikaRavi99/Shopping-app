import { useState } from "react";
import ViewProducts from "./ViewProducts";

const data = [
  {
    image:
      "https://assets.vogue.com/photos/64ee603692788f138e6931c6/3:4/w_1600%2Cc_limit/00-promo%2520(40).jpg",
    Name: "Suits",
  },
  {
    image:
      "https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image004.jpg?v=20210616T144221",
    Name: " Fasion",
  },
  {
    image:
      "https://www.beyours.in/cdn/shop/files/classic-black-shirt-1_1200x1200_crop_center.jpg?v=1696433287",
    Name: "Shirt",
  },
  {
    image: "https://images.meesho.com/images/products/117951011/fwdaw_512.webp",
    Name: "Pant",
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg",
    Name: "Dress",
  },
];

function OpenDialog() {
const [openDialog, setOpenDialog] = useState(false);

  return (
    <div style={{height:410}} className="suggestionBox">
        <div><h3>Latest Trends</h3></div>
      <div className="CardContainer">
        {data?.map((item) => {
          return (
            <div
              style={{ marginRight: 20, cursor:"pointer" }}
              onClick={() => setOpenDialog(true)}
            >
              <img className="card-image" src={item.image} alt="Image"></img>
              <p>{item.Name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <h3>Popular Suggetions</h3>
          <p >
            Generic Plastic Cheese <br />
            Rustic Rubber Shirt <br />
            Ergonomic Plastic Shoes <br />
            Awesome Fresh Computer <br />
          </p>
        </div>
      </div>
      <ViewProducts openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
}
export default OpenDialog;
