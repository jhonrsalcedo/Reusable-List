import RegularList from './components/RegularList'
import authors from './components/authors'
import LargeAuthorListItem from './components/LargeAuthorListItem'
import SmallAuthorListItem from './components/SmallAuthorListItem'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Authors</h1>
      <h2>Large Cards</h2>
      <RegularList
        items={authors}
        sourceName='author'
        ItemComponent={LargeAuthorListItem}
      />
      <h2>Small Cards</h2>
      <RegularList
        items={authors}
        sourceName='author'
        ItemComponent={SmallAuthorListItem}
      />
    </div>
  )
}

export default App
