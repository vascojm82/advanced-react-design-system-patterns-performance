import { SmallAuthorListItems } from "./components/authors/SmallListItems";
import { LargeAuthorListItems } from "./components/authors/LargeListItems";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { NumberedList } from "./components/lists/NumberedList"
import { RegularList } from "./components/lists/RegularList";
import { authors } from "./data/authors";
import {books} from "./data/books";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <br />
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>

      <RegularList 
        items={authors} 
        sourceName={"author"} 
        ItemComponent={SmallAuthorListItems} 
      />
      
      <NumberedList 
        items={authors} 
        sourceName={"author"} 
        ItemComponent={LargeAuthorListItems} 
      />

      <RegularList 
        items={books} 
        sourceName={"book"} 
        ItemComponent={SmallBookListItem} 
      />

      <NumberedList 
        items={books} 
        sourceName={"book"} 
        ItemComponent={LargeBookListItem} 
      />
    </>
  );
}

export default App;
