import { FormEvent, useRef } from "react";
import Book from "../models/Book";
import Category from "../models/Category";

interface Props {
    book: Partial<Book>,
    categoryList: Category[],
}

function BookForm(props: Props) {
    const titlleRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const stockAmountRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)

 return (
        <div>
            <form>
                <div>
                    Title : <input type="text" defaultValue={props.book.title} ref={titlleRef} required />
                </div>
                <div>
                    Price : <input type="number" step="0.01" min='0' defaultValue={props.book.price} ref={priceRef}  />
                </div>
                <div>
                    Stock Amount : <input type="number" defaultValue={props.book.stockAmount} ref={stockAmountRef} /> 
                </div>
                <div>
                    Category :
                    <select defaultValue={props.book.category?.id} ref={categoryRef}>
                        <option hidden></option>
                        {props.categoryList.map(category => <option key={category.id} value={category.id}>{category.title}</option> )}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default BookForm
