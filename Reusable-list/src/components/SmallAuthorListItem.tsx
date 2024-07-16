interface Author {
  name: string
  age: number
}

interface SmallAuthorListItemProps {
  author: Author
}
const SmallAuthorListItem: React.FC<SmallAuthorListItemProps> = ({
  author
}) => {
  const { name, age } = author
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </>
  )
}

export default SmallAuthorListItem
