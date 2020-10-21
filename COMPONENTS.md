# Frontend React Components

For consistency, ease of use and quick implementation, we have housed unit components for the app in
```
--src/
---unit-components/
```

## How to use
Import one or more unit components as required, from *unit-components.js* file in the root of the app onto the component you are working on and provide the rquired props. For example
```jsx
import { Button } from "./unit-components";

function MyComponent(){
  return (
    <Button
      text="Submit"
      onClick={handleSubmit}
    />
  );
}
```

## List of Components
#### InputText
For text inputs
> props
* label - name of input label
* value - value of input held in state
* onChange - function that handles input onChange events
***
#### InputPassword
For password inputs
> props
* label - name of input label
* value - value of input held in state
* onChange - function that handles input onChange events
***
#### Button
For button actions
> props
* text - button text
* onClick - function that handles button onClick events