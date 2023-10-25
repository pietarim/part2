const Total = ({ course }) => {
  const sum = course.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <strong>total of {sum} exercises</strong>
  )
}

export default Total