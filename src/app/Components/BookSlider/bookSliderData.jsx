import CoreCourses from "../BookSlider/BookSlider";
import { coursesData } from "../../data";

const BookSliderComponent = () => {
  return (
    <>
      <div>
        {coursesData && coursesData.length > 0 && (
          <CoreCourses courses={coursesData} />
        )}
      </div>
    </>
  );
};
export default BookSliderComponent;
