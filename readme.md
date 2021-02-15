
- [Demo](#Preview) 
- [Password-Generator](##Password-Generator)

![photo of application](password_gen.png)

# Preview
* Video
    - [Demo](https://drive.google.com/file/d/1N9KP5cHjLUYbihUC-kHX4JtpgdPm8hYE/view);

    * Prompt()
    * Determine Length of Password
        - [x] Password Must Be at Least 8 Characters
        - [ ] You must enter a number.
        - [x] Password must not be more than 128 Characters.
    * Confirm List of Character Requirements
        - [ ] You Must Select a Special Character [x]
        - [ ] You Must Selected an Upper Cased Letter [x]
        - [ ] You Must Selected a Lower Cased Letter [x]
## Password Generator
 
   ```javascript
function getRandom(arr) {
let randomI = Math.floor(Math.random() \* arr.length);
let randomE = arr[randomI];
return randomE;
} // function to retrieve input and trigger random character selection
function generatePassword() {
let options = getSelection();
let result = [];
}

````
|wrapper|card|
--------|-----
|Generate PWD|
--------------
|card-body|cardfooter|
----------|-----------

```mermaid

graph TD;
  SubGraph1 --> SubGraph1Flow
  subgraph "You Must select >=8 and <=128"
  * SubGraph1Flow(SubNode 1)
  end
  subgraph "Generate A New Password"
  Node1[Node 1] --> Node2[Node 2]
   * SubGraph1Flow -- HowManyChar --> EnterNumericChar[Must be >=8 and <=128]
  Node2 --> SubGraph1[MustSelectYes]
  SubGraph1 -->GeneratePossibleChar[GenerateRandomPassword]

* SubGraph1Flow -- YesforSpecialChar --> ClickOkay
* SubGraph1Flow -- YesforUpperCase --> ClickOkay
* SubGraph1Flow -- YesForLowerCase --> ClickOkay
end
````
