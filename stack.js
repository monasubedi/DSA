//LIFO
// class Stack {
//     constructor() {
//         this.Stack = [];
//     }

//     push(element) {
//         this.Stack.push(element);
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty."
//         }
//         return this.Stack.pop();
//     }
//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty."
//         }
//         return this.Stack[this.size() - 1];
//     }
//     isEmpty() {
//         return this.Stack.length === 0;
//     }
//     size() {
//         return this.Stack.length;
//     }
// }

//Ques 1: Given an input string s, reverse the order of the words

//Input: "the sky is blue"  -> Output: "blue is sky the"
//Input: " hello world "    -> Output: "world hello"
//Input: "a good  example"  -> Output: "example good a"

// function reverseWords(str) {
//     const splits = str.split(" ");
//     let stack = [];
//     for (let i of splits) {
//         stack.push(i);
//     }
//     let finalStr = "";
//     while (stack.length) {
//         let current = stack.pop();
//         if (current) {
//             finalStr += " " + current;
//         }
//     }
//     return finalStr.trim();
// }

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("a good  example"));


//Ques 2: Given a string s containing just the characters '(', ')', '{','}','[',']'
//         determine if the input string is valid.
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

//Input : "()"     -> Output: true
//Input : "([]{})" -> Output: true
//Input : "(]"     -> Output: false

function isValid(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        }
        else if (char === ")" || char === "}" || char === "]") {
            if (isEmpty(stack)) {
                return false;
            }
            const top = stack.pop();
            if ((char === ")" && top !== "(") || (char === "]" && top !== "[") || (char === "}" && top !== "{")) {
                return false;
            }
        }
    }
    return isEmpty(stack);
}

function isEmpty(stack) {
    return stack.length === 0;
}