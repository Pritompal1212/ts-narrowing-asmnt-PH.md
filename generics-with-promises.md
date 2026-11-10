Title : Generics Work in TypeScript 

Introduction:
It is a one of the most valuable feature in typescript. the generic in typescript safe and flexibility to the developers.using generic we can use it in our any typescript function, class and also interface. Whenever we need to pass a datatype as a parameter it is used. And the symbol of generic is T where it is commonly used but developer can also use others as their wise.

Example of generic type - 

const pluckValues =  <T, K extends keyof T> (items:T[],key: K): T[K][] => {
    return items.map(item => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
]


Promise<T>  : 

It says the resolve or reject of a operation . Thats means if the conditions is complete then also represent and even the failure of that operation then also it represent the work. 
what are the places it used -
Api data fatching and reading files related things

For example- 

const  validateAgeAsync = async (age: number): Promise<string> => {
    
    if (age < 18) {
        return Promise.reject("Access Denied: Must be 18 or older");
    }
    if (age >= 18) {
        setTimeout(() => Promise.resolve("Access granted") , 1000);
    }
}

here promise will solve either the one function or the another function thats means there will be a single operation means asynchronise will work here . Developers can create one function of generic and that can be used in many different places.


Advantages of generic :

It used for code resuability and pre-define type of a data , help to safe type and early error detection also can be detect.

Conclusion : 
Generic provide a way to create resuable and type safe functions, classes and interfaces. which will allow developers to work with different data types. asynchronous operations, Promise<T> which allow the either completion of the operation or else the default operation. and also t will return when its promise is resolved.