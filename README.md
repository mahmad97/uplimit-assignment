# Uplimit Assignment

Takehome assignment for Uplimit. Made by Mohammad Ahmad.

### Instructions

1. Clone the repository
2. run `npm i` to install the required packages
3. run `npm run dev` to start the application on `localhost:3000`

### To add an MCQ

1. On the top right of the page toggle on the edit mode
2. At the bottom of the page there are several buttons allowing adding new components
3. Select the Question component to add a Question block
4. Type in a question statement
5. Click on the inputradio button to add as many options as needed
6. Edit the text in front of each option to make it what you want it to read out
7. Click save at the bottom of the page to store the current editor as HTML
8. You can now select an option and submit an answer to the question

### Limitations

1. The form is associated with the page url so it can effectively have one question per page. Possible solution is to add an id attribute to each form using react useID and store that with the answer data allowing multiple questions per page.
2. Can only have one 'question' per question component as all the input fields generated have the `name` attribute set to `answer`. Can allow a more complex form if a way to assign `name` and `value` attributes to the input elements is made. Was out of scope for this assignment.

### Other features

1. Implemented an extension for text input allowing normal text answers as well.
2. Allows the implementation of other kinds of input componenets to be added to the questions as the question extension is separate from the input extensions. (There is a consideration so the input elements are only allowed inside the question element, that can be changed if needed)

### Possible future work

1. Add an LLM-based study helper extension by passing the text of the entire page to train a question answering LLM then allow the student to type in a text question and provide it with the chat-bots answer.
2. Add other kinds of input elements for the question.
3. Address the limitations.
4. Improve UI.
