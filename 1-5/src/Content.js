import Parts from "./Parts"

const Content = ({course}) => {
  return (
    <div>
      {course.map((n, i) => {
        return <Parts key={i} part={n.name} exercises={n.exercises} />
      })}
    </div>
  )
};

export default Content;