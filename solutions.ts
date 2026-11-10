const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier) {
    return value * multiplier;
  } else if (multiplier === 0) {
    return 0;
  } else{
    return value * 2;
  }
}



const processInput = (inputNumber:string|number|boolean) =>{
    if (typeof inputNumber === 'string') {
        return inputNumber.trim().toLowerCase();
    }
    if (typeof inputNumber === 'number') {
        return inputNumber * 10;
    }
    if (typeof inputNumber === 'boolean') {
        if (inputNumber) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
}



const formatCoordinate = (coordinate: [number, number,string]) => {
    const [latitude, longitude, direction] = coordinate;
    return ` Location:   ${direction} , (${latitude} , ${longitude}) `;
}




const concatenateArrays = <t>(t1: t[], t2: t[], t3: t[] = []): t[] => {
    return [...t1, ...t2, ...t3];
}





interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[],minStudents: number) => {
    return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];





const pluckValues =  <T, K extends keyof T> (items:T[],key: K): T[K][] => {
    return items.map(item => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
]



class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department:string;
    constructor(name: string,baseSalary:number, department:string) {
        super(name, baseSalary);
        this.department = department;}
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice",50000,"Engineering");





// const  validateAgeAsync = async (age: number): Promise<string> => {
    
//     if (age < 18) {
//         return Promise.reject("Access Denied: Must be 18 or older");
//     }
//     if (age >= 18) {
//         setTimeout(() => Promise.resolve("Access granted") , 1000);
//     }
// }



// const validateAgeAsync = async (age: number): Promise<string> => {
//   if (age < 18) {
//     throw new Error("Access Denied: Must be 18 or older");
//   }
//   return new Promise<string>((resolve) => {
//     setTimeout(() => resolve("Access Granted"), 1000);
//   });
// };






