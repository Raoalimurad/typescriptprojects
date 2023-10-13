var student = /** @class */ (function () {
    function student(name) {
        this.studentName = name,
            this.studentId = printID(),
            this.enrolledCourses = [],
            this.balance = 0;
        this.avaliableCourses = ["Physcis", "Math", "Biology", "Chemistry", "English"];
    }
    student.prototype.printcourse = function () {
        console.log("WELCOME TO RAO ALI MURAD ACADEMY \n Avaliable coures are Here:");
        console.log(this.avaliableCourses);
    };
    student.prototype.enroll = function (courseName, amount) {
        if (this.avaliableCourses.includes(courseName)) {
            console.log("The ".concat(courseName, " subject is avaliable"));
            this.enrolledCourses.push(courseName);
        }
        else {
            console.log("This is invalid subject");
        }
        this.balance += amount;
    };
    student.prototype.tutitonFee = function (fee) {
        if (fee <= this.balance) {
            this.balance -= fee;
            console.log("you paid ".concat(fee, " towards tutiton fee Now ").concat(this.studentName, " your remaining amount is ").concat(this.balance));
        }
        else {
            console.log("This ".concat(fee, " amount is insufficent to pay fee"));
        }
    };
    student.prototype.courses = function (value, subject) {
    };
    student.prototype.showStatus = function () {
        console.log("***********student status");
        console.log("the name of student is ".concat(this.studentName));
        console.log("".concat(this.studentName, " id is ").concat(this.studentId));
        console.log("you are enrolled in this coures  ".concat(this.enrolledCourses.join(",")));
        console.log("".concat(this.studentName, " your total  amount is ").concat(this.balance));
    };
    return student;
}());
function printID() {
    var id = 10000 + Math.floor(Math.random() * 9000);
    return id;
}
var student1 = new student("rao");
student1.printcourse();
student1.enroll("physics", 400);
student1.enroll("Math", 600);
student1.tutitonFee(300);
student1.showStatus();
