import { Suspense } from "react";
import { useLoaderData, useAsyncValue, Await } from "react-router";
import delay from "../util/delay";
import { MainHeading } from "./styled-elements";

const Books = () => {
  const { promise } = useLoaderData();

  console.log('promise: ', promise);

  return (
    <div>
      <MainHeading>Books</MainHeading>

      <div style={{ display: "block", margin: "16px 0" }}>
        <span><strong>Available Books: </strong></span>
        <Suspense fallback="Fetching...">
          <Await resolve={promise}>
            { data => <span>{data.bookCount}</span> }
          </Await>
        </Suspense>
      </div>

      <div>
        <span><strong>Authors: </strong> </span>
        <Suspense fallback="Fetching...">
          <Await resolve={promise}>
            <Authors />
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

const Authors = () => {
  const { authors } = useAsyncValue();
  return <strong>{authors}</strong>
}

async function loader() {
  const bookCount = delay(10, 1000);
  const authors = delay("Codelicks", 2000);

  return {
    promise: {
      bookCount: bookCount,
      authors: authors,
    }
  }
};

export const booksRoute = { element: <Books />, loader };
