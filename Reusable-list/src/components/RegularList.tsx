interface RegularListProps<T> {
  items: T[]
  sourceName: string
  ItemComponent: React.FC<{ [key: number]: T }>
}

const RegularList = <T,>({
  items,
  sourceName,
  ItemComponent
}: RegularListProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </>
  )
}

export default RegularList
