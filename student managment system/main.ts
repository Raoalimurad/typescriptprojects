
class student{
    private studentName;
    private studentId;
    private enrolledCourses;
    private balance;
    private avaliableCourses
  

    constructor(name:string){
        this.studentName=name,
        this.studentId=printID(),
        this.enrolledCourses=[],
        this.balance=0; 
        this.avaliableCourses=["Physcis","Math","Biology","Chemistry","English"] 
    }
    printcourse(){
        console.log("WELCOME TO RAO ALI MURAD ACADEMY \n Avaliable coures are Here:")
        console.log(this.avaliableCourses)
    }

     enroll(courseName:string,amount:number){
        if(this.avaliableCourses.includes(courseName)){
            console.log(`The ${courseName} subject is avaliable`)
            this.enrolledCourses.push(courseName); 
        }
        else{
             console.log("This is invalid subject")
        }
        

        this.balance+=amount
    }
    
    tutitonFee(fee:number){
      if(fee<=this.balance){
        this.balance-=fee
        console.log(`you paid ${fee} towards tutiton fee Now ${this.studentName} your remaining amount is ${this.balance}`)
      }else{
        console.log(`This ${fee} amount is insufficent to pay fee`)
      }
    

    }
    courses(value:number,subject:string){
      
    }
    

    showStatus(){
        console.log("***********student status")
        console.log(`the name of student is ${this.studentName}`);
        console.log(`${this.studentName} id is ${this.studentId}`);
        console.log(`you are enrolled in this coures  ${this.enrolledCourses.join(",")}`)
        console.log(`${this.studentName} your total  amount is ${this.balance}`)

    }
    
}

function printID(){
   let id=10000+Math.floor(Math.random()*9000);
   return id;
  
}
let student1=new student("RAO")
student1.printcourse()
student1.enroll("physics",400)
student1.enroll("Math",600)
student1.tutitonFee(300)
student1.showStatus()


