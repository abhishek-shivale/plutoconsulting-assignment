import jwt from "jsonwebtoken"
import { userModel } from "../model/userModel.js"
import { compare, hash } from "bcrypt";

export const Register = async(req, res ) =>{
    try {
        const { email, password, firstname, lastname } = req.body;
        const already = await userModel.findOne({ email: email });
        if (already) {
          return res.json({
            msg: "User Already Login",
            status: false,
          });
        }
        const hashPassword = await hash(password, 10);
        const user = await userModel.create({
          email: email,
          lastname: lastname,
          firstname: firstname,
          password: hashPassword,
        });
        if (user) {
          const token = jwt.sign(email, "JWRT");
          return res.cookie("token", token).json({
            msg: "account has been Created Successfully!!",
            status: true,
          });
        }
    } catch (error) {
        console.log(error)
        res.json({
            msg:"error while Register",
            status:false
        })
    }
}

export const Login = async (req, res) => {
  try {
    const { email, password} = req.body;
    const already = await userModel.findOne({ email: email });
    if (!already) {
       res.json({
        msg: "User Not Registerd",
        status: false,
      });
    }
    const comparePassword = await compare(password, already.password)
    if (comparePassword) {
      const token = jwt.sign(email, "JWRT");
      return res.cookie("token", token).json({
        msg: "account has been LoggedIN Successfully!!",
        status: true,
      });
    }
  } catch (error) {
    res.json({
      msg: "error while LOGIN",
      status: false,
    });
  }
};