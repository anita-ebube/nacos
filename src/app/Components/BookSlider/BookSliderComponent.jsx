import BookComponent from './BookComponent'
import { coursesData } from "../../data";

const BookSliderComponent = () => {
  return (
    <>
      <div>
        {coursesData && coursesData.length > 0 && (
          <BookComponent courses={coursesData} />
        )}
      </div>
    </>
  );
};
export default BookSliderComponent;
