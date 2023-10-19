import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        firstName : {
            type : String,
            require : true,
        },
        middleName : {
            type : String,
        },
        lastName : {
            type : String,
            require : true,
        },
        email : {
            type : String,
            require : true,
            unique : true,
        },
        password : {
            type : String,
            require : true,
            min : 5,
        },
        phone : {
            type : String,
            require : true,
        },
        picturePath : {
            type : String,
            default : "",
        },
        date : Date ,
        mothersName : {
            type : String,
            default : "",
        },
        fathersName : {
            type : String,
            default : "",
        },
        altEmail : {
            type : String,
            default : "",
        },
        nationality : {
            type : Boolean,
            default : true,
        },
        gender : {
            type : String,
            enum : ["Male","Female","Other"],
        },
        altphone : String,
        category : {
            type : String,
            enum : ["General","OBC","SC/ST"],
        },
        disability : {
            type : Boolean,
            default : false,
        },
        caddress : {
            address : String,
            country : String,
            district : String,
            state : String,
            city : String,
            pincode : String,
        },
        paddress : {
            address : String,
            country : String,
            district : String,
            state : String,
            city : String,
            pincode : String,
        },
        jeescore : {
            applicationNumber : {
                type : String,
                unique : true,
            },
            maths : String,
            chemistry : String,
            physics : String,
            rollno : {
                type : String,
                unique : true,
            },
            total : String,
        },
        tenth : {
            schoolName : String,
            board : {
                type : String,
                enum : ["CBSE","ICSE","Other"],
            },
            address : String,
        }

    } , {timestamps : true}
);


const Student = mongoose.model("Student",StudentSchema);
export default Student;
