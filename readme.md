```mermaid          
graph TD;
  
  SubGraph1 --> SubGraph1Flow
  subgraph "You Must select >=8 and <=128"
  SubGraph1Flow(SubNode 1)
 
  

  end

  subgraph "Generate A New Password"
  Node1[Node 1] --> Node2[Node 2]
  Node2 --> SubGraph1[Jump to SubGraph1]
  SubGraph1 --> FinalThing[Final Thing]
end
```
*SubGraph1Flow -- YesforSpecialChar --> ClickOkay
  SubGraph1Flow -- YesforUpperCase --> ClickOkay
  SubGraph1Flow -- YesForLowerCase --> ClickOkay
* SubGraph1Flow -- HowManyChar --> EnterNumericChar

<!-- ## GIVEN I need a new, secure password
## WHEN I click the button to generate a password
## THEN I am presented with a series of prompts for password criteria
## WHEN prompted for password criteria
## THEN I select which criteria to include in the password
## WHEN prompted for the length of the password
## THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
|wrapper|card|
|Generate PWD|
|card-body|cardfooter|
* |TEST TEST TEST | -->
