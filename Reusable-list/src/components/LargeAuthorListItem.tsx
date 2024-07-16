interface Author {
  name: string
  age: number
  country: string
  books: string[]
}

interface LargeAuthorListItemProps {
  author: Author
}

const LargeAuthorListItem: React.FC<LargeAuthorListItemProps> = ({
  author
}) => {
  const { name, age, country, books } = author
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <p>
        Books:{' '}
        {books.map((book, index) => (
          <span key={index}>{book}</span>
        ))}
      </p>
    </>
  )
}

export default LargeAuthorListItem
