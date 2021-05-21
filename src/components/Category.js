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
const options = [
  { value: 17, label: "Science" },
  { value: 18, label: "Computers" },
  { value: 21, label: "Sports" },
  { value: 22, label: "Geography" },
  { value: 23, label: "History" },
  { value: 25, label: "Art" },
]
export default function Category() {
  const dispatch = useDispatch()
  const { categoryId } = useSelector(state => state)

  return (
    <CategoryStyle
      defaltValue={null}
      onChange={e => dispatch(selectCategory(e.value))}
      options={options}
      placeholder="All"
    />
  )
  {
    /* <select
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
      </select> */
  }
  {
    /* </CategoryStyle> */
  }
}
