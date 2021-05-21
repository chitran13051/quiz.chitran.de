import { useSelector, useDispatch } from "react-redux"

import { CategoryStyle } from "../Stylings"
import { selectCategory } from "../redux/quiz.actions"

const categoriesNumber = [null, 17, 18, 21, 22, 23, 25]
const categoriesName = [
  "All",
  "Science",
  "Computers",
  "Sports",
  "Geography",
  "History",
  "Art",
]
export default function Category() {
  const dispatch = useDispatch()
  const { categoryId } = useSelector(state => state)

  return (
    <CategoryStyle>
      {/* <h3>All</h3>
      <h3>Science & Nature</h3>
      <h3>Computers</h3>
      <h3>Sports</h3>
      <h3>Geography</h3>
      <h3>History</h3>
      <h3>Art</h3> */}
      <select
        onChange={e => {
          console.log(e.target.value)
          const cateId = categoriesNumber[e.target.value]
          dispatch(selectCategory(cateId))
        }}
      >
        {categoriesName.map((cate, i) => (
          <option key={i} value={i}>
            {" "}
            {cate}{" "}
          </option>
        ))}
      </select>
    </CategoryStyle>
  )
}
