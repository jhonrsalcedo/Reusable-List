interface RegularListProps<T> {
  items: T[]
  sourceName: string
  ItemComponent: React.FC<any>
}

const RegularList = <T,>({ items, sourceName, ItemComponent }: RegularListProps<T>) => {
  return (
    <div>
      {items.map((item: T, index: number) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </div>
  );
};

export default RegularList;
