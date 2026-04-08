import { includeUpdatableResource } from "./include-updateble-resource";

export const BookInfoForm = includeUpdatableResource(({ book, onChangeBook, onPostBook, onResetBook }) => {
    const { name, pages, title, price  } = book || {};

    return book ? (<>
        <label>
            Name:
            <input type="text" value={name} onChange={e => onChangeBook({ name: e.target.value })} />
        </label>

        <label>
            Pages:
            <input type="number" value={pages} onChange={e => onChangeBook({ pages: Number(e.target.value) })} />
        </label>

        <label>
            Title:
            <input type="text" value={title} onChange={e => onChangeBook({ title: e.target.value })} />
        </label>

        <label>
            Price:
            <input type="number" value={price} onChange={e => onChangeBook({ price: Number(e.target.value) })} />
        </label>

        <button onClick={onResetBook}>Reset</button>
        <button onClick={onPostBook}>Save</button>
    </>): <h3>Loading...</h3>
}, "/books/2", "book");