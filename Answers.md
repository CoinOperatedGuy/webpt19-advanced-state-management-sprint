1. What problem does the context API help solve?
It allows you to control how you can pass props throughout your app, so instead of having the app having access to all the props and risking it being changed by a component that wasn't supposed to touch it, it becomes more restrictive.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
reducers: updates state based on what component it was coded for.
actions: dispatches the props based on an action to the reducer to update the state. 
store: collects and holds the data and stores a variable to be accessed from within the app.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is stored at the global level whereas the component state is stored in a localstorage in the app.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows us to run redux async to the rest of the app. 
1. What is your favorite state management system you've learned and this sprint? Please explain why!
i think i prefer context api because it requires less code to write. 
