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
* label - `String` - name of input label
* value - `String` - value of input held in state
* onChange - `Function` - function that handles input onChange events
***
#### InputPassword
For password inputs
> props
* label - `String` - name of input label
* value - `String` - value of input held in state
* onChange - `Function` - function that handles input onChange events
***
#### Button
For button actions
> props
* text - `String` - button text
* size - `String` - button size (*small* or *big*). Default *big*
* width - `String` - button width. Button fills width of parent by default
* onClick - `Function` - function that handles button onClick events
***
#### VictimCard
To display victim data 
> props
* name - `String` - victim's name
* location - `Object` - victim's location object with keys *state* and *city*
* status - `String` - victim status e.g Murdered
* imageURL - `String` - URL to victim's photo
* victimStoryURL - `String` - URL to victim's story
* useCase - String - where card is used ('cases' or 'victims'). _View story_ link is visible by default but absent in 'cases'
***
#### TopNav
Top navigation bar with links
> props
* withLinks - Boolean - choose to display topnav with or without nav links
***
#### AccusedCard
Display details of accused officer/official
> props
* name - `String` - full name of accused officer
* rank - `String` - rank of accused officer
* postingState - `String` - state where accused officer s posted/serving
* offence - `String` - offence for which accused has been charged
* imageURL - `String` - link to accused photo
* caseURL - `String` - link to case involving accused