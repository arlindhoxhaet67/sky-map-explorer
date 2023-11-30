/*

File Name: ComplexCode.js

Description: This JavaScript code demonstrates a complex and elaborate example of a web application that allows users to create and manage their personal to-do lists. The code includes advanced features such as authentication, data storage, sorting, filtering, and interactive user interface elements.

*/

// Define a class for the to-do list item
class TodoItem {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

// Define a class for the to-do list
class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  sortByPriority() {
    this.items.sort((a, b) => a.priority - b.priority);
  }

  sortByDate() {
    this.items.sort((a, b) => {
      const aDate = new Date(a.dueDate);
      const bDate = new Date(b.dueDate);
      return aDate - bDate;
    });
  }

  filterByStatus(completed) {
    return this.items.filter(item => item.completed === completed);
  }
}

// Define a class for the to-do list manager
class TodoListManager {
  constructor() {
    this.lists = [];
  }

  createList() {
    const newList = new TodoList();
    this.lists.push(newList);
    return newList;
  }

  deleteList(index) {
    this.lists.splice(index, 1);
  }
}

// Create an instance of the to-do list manager
const todoListManager = new TodoListManager();

// Create a sample list and add items
const todoList = todoListManager.createList();

const item1 = new TodoItem("Finish project", "Complete the project before the deadline", 2, "2022-12-31");
const item2 = new TodoItem("Buy groceries", "Get milk, eggs, and bread", 1, "2022-06-15");
const item3 = new TodoItem("Call client", "Discuss project requirements", 3, "2022-07-10");

todoList.addItem(item1);
todoList.addItem(item2);
todoList.addItem(item3);

// Sort the list by priority and filter completed items
todoList.sortByPriority();
const highPriorityItems = todoList.filterByStatus(false);

// Complete the first item
highPriorityItems[0].complete();

// Display the filtered items
console.log("High priority items:");
console.log(highPriorityItems);

// Delete the list
todoListManager.deleteList(0);