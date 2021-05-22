import { useSelector, useDispatch } from "react-redux"

import { CategoryStyle } from "../Stylings"
import { selectCategory } from "../redux/quiz.actions"

const options = [
  { value: 17, label: "Science" },
  { value: 18, label: "Computers" },
  { value: 21, label: "Sports" },
  { value: 22, label: "Geography" },
  { value: 23, label: "History" },
  { value: 25, label: "Art" },
]

const customStyles = {
  /**
   * @Thanks https://github.com/JedWatson/react-select/issues/2728
   * customize outline color
   */
  control: (base, state) => ({
    ...base,
    boxShadow: "none",
    outLine: "none",
    borderColor: "hsl(0, 0%, 80%)",
    "&:hover": { borderColor: "hsl(0, 0%, 80%)" },
  }),
}

export default function Category() {
  const dispatch = useDispatch()
  const { categoryId } = useSelector(state => state)

  return (
    <CategoryStyle
      styles={customStyles}
      defaltValue={null}
      onChange={e => dispatch(selectCategory(e.value))}
      options={options}
      placeholder="All"
    />
  )
}
