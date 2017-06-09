# Zoo Animal Directory (Week 3 Advanced JS Project)

#### By Jonathon Kang

## Description

Exercise in Angular. This project emulates a single page internal site for zoo employees that lists out a simulated database of animals with their assorted attributes. Components allow for the dynamic adding of new animals and editing of existing ones.

## Prerequisites
* Node.js with NPM
* Angular 2

## Setup/Installation Requirements
1. Clone the directory to your local machine and navigate to project root directory.
2. Open your Node.JS terminal and run $ npm install.
3. Run $ ng serve to initiate the directory and take it live at localhost:4200.

## Technologies Used

HTML/CSS
Bootstrap
Javascript/Node.JS
Angular 2

### License

Copyright 2017 Jonathon Kang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Planning
1. Configuration/dependencies
  * Node.js/npm
  * Angular 2
  * Angular-Bootstrap

2. Layout
  * Animal model with attributes:
    1. Name(string)
    2. Age(number)
    3. Diet(string)
    4. Location(string)
    5. Caretakers(number)
    6. Sex(string)
    7. Likes(string)
    8. Dislikes(string)
    9. Admission Date(date)
  * new-animal component with form and button with click function that creates a new Animal class object and adds it to array of existing animals.
  * update-animal component that contains ngModel relationships with existing animal attributes to update them dynamically.
  * animal-list component that lists all current animal objects and contains buttons to trigger the update component.
  * age pipe, filters animals based on whether their age is >2 or <=2.

3. UX/UI
  * Include and modify bootstrap.
  * Custom styling.

4. Future Changes
  * Location selection for new animal and update forms should be a select form.
