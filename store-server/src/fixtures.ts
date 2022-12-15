import db from "./db"

async function loadFixtures(clearData = false){
  if(clearData){
    console.warn('clearing data')
    await db('book').del()
    await db('category').del()
    await db('book').del()
  }

  await db.batchInsert('category', [
    { id: 1, title: 'Fantasy' },
    { id: 2, title: 'Computer' },
  ])
  await db.batchInsert('book',[
    {id: 1,title: 'Harry Potter',price: 560,stock_amount: 10,category_id:1},
    {id: 2,title: 'The witcher I',price: 399,stock_amount: 6,category_id:1},
    {id: 3,title: 'Lord of mystery',price: 450,stock_amount: 3,category_id:2}
])


}

export default loadFixtures
