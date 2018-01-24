# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.create(title: 'Buy Milk', body: 'I need to buy milk.', done: false)
Todo.create(title: 'Buy Bread', body: 'I need to buy bread.', done: false)
Todo.create(title: 'Buy Fruit', body: 'I need to buy fruit.', done: true)

Step.create(title: 'Step 1', body: 'go to grocery store', done: false, todo_id: 1)
Step.create(title: 'Step 2', body: 'go to another store', done: false, todo_id: 1)
Step.create(title: 'Step 3', body: 'go to the last store', done: false, todo_id: 1)
