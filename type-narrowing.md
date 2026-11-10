Title: Type Narrowing

Introduction:
Type Narrowing is a nothing but a process which is used to reduce any variables type in typescript. It reduced a borderd type to specific one based on the statement.

Detailed Body Paragraphs with Code Examples:

typeof -> 
It checks the datatype of a variable in runtime. It is used in various type of primitive data type like
string, number or boolean type.
for example - 

function display(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

instanceof ->
it is a operator that check wheather an object belongs to the particular class or constructor.

for example - 
class car{
    drive() {
        console.log("Car is driving");
    }
}
class bike{
    ride() {
        console.log("Bike is moving");
    }
}
function start(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    } else {
        vehicle.ride();
    }
}

in ->

its a operator that checks whether the particular property exits inside the object or not.
for example - 
type admin = {
    name: string;
    permissions: string[];
};
type usar = {
    name: string;
    email: string;
};
function check(person: Admin | User) {
    if ("permissions" in person) {
        console.log(person.permissions);
    } else {
        console.log(person.email);
    }
}

Reason behind the use of type narrowing ->
It provide the safety of type by provide invalid operations on variables. Also it help to avoid unexpected type error by pre-define that type.
Why Type Narrowing important->
At the time of developing it plays a vital role. When any application is developing there is different source from where our data can come at that time this type narrowing is mostly works.
Real world applications->
1. user form validation 
2. any payment processing
3. api handling

Conclusion: 
Type Narrowing is a very important feature in TypeScript where the developer get more understand in code and for that reason the maintain become more easier and that help to other developer also. The operators of type narrowing are being used in diffferent places which is also the reason of code readability.