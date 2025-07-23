const bcrypt = require("bcrypt");
const User = require("../model/userModel");
let jwt = require("jsonwebtoken")
let path = require("path")
let sendMail = require("../middleware/sendMail")


const allUserController = async (req, res) => {
    try {

        const data = await User.find().select("-password");

        res.send({
            success: true,
            message: "Fetched all users",
            data
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};


const registController = async (req, res) => {
    try {
        const { name, email, password, contact, address } = req.body;
        let img = null;
        if (req.file) {
            img = {
                filename: req.file.filename,
                path: req.file.path
            }
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send({
                success: false,
                message: "User already registered"
            });
        }

        if (!password) {
            return res.status(400).send({
                success: false,
                message: "Please provide a password"
            });
        }

        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, saltRound);

        const newUser = new User({ name, email, password: hashPassword, contact, address, img });
        await newUser.save();

        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            data: newUser
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const loginController = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "user not found",
            })
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).send({
                success: false,
                message: "please provoid valid credencials"
            })
        }
        process.env.SECRET_KEY

        let token = jwt.sign({ id: user._id, email: user.email, name: user.name, img: user.img },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        )
        res.status(200).send({
            success: true,
            message: "login successfull", token
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;

        // Find user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }
        // Delete user
        const data = await User.findByIdAndDelete(id);
        res.send({ success: true, message: "User deleted successfully", data });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const updateUserController = async (req, res) => {
    try {
        const { email } = req.params;  // Get email from URL
        const updates = req.body;      // Fields to update

        // Find user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        // Update user
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: updates },
            { new: true } // Return the updated doc
        );

        res.send({
            success: true,
            message: "User updated successfully",
            data: updatedUser,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
        });
    }
};


let forgotpassword = async (req, res) => {
    try {

        let { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User Not Found" })
        }
        let genrateotp = () => {
            return Math.floor(100000 + Math.random() * 900000).toString();
        }

        let otp = genrateotp();

        let genratetoken = async (id) => {
            let token = await jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '300s' })
            return token
        }
        let forgot_token = await genratetoken(user._id);
        await User.findByIdAndUpdate(user._id, { forgot_password_otp: otp, forgot_password_token: forgot_token })

        await sendMail(email, `this is your otp:  ${otp}`);

        res.status(200).json({ success: true, message: "forgot otp sent , Please check your registered mail", token: forgot_token })

    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
}

let verifyOtp = async (req, res) => {
    try {
        let { otp, token } = req.body;
        let decode = await jwt.verify(token, process.env.SECRET_KEY);
        let user = await User.findById(decode.id);
        if (!user) {
            return res.status(404).send({ sucess: false, message: "user not found" });
        }
        if (otp != user.forgot_password_otp) {
            return res.status(404).send({ sucess: false, message: "Invalid Otp" });
        }

        let genratetoken = async (id) => {
            let token = await jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '1h' })
            return token
        }
        let forgot_token = await genratetoken(user._id);
        await User.findByIdAndUpdate(decode.id, { refresh_token: forgot_token })
        res.send({ decode, refresh_token: forgot_token })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
}

let newPassword = async (req, res) => {
    try {
        let { refresh_token, password } = req.body;

        let decode = await jwt.verify(refresh_token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).send({ success: false, message: "unauthorized" })
        }

        let user = await User.findById(decode.id);

        if (!user) {
            return res.status(401).send({ success: false, message: "user not found" })
        }
        if (!user.refresh_token) {
            return res.status(401).send({ success: false, message: "You are not able to access this resource" })
        }
        let saltround = await bcrypt.genSalt(10)
        let hashpassword = await bcrypt.hash(password, saltround);

        await User.findByIdAndUpdate(user._id, { password: hashpassword, forgot_password_otp: "", forgot_password_token: "", refresh_token: "" })
        res.send({ success: true, message: "password change successfully" })

    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
}
let resetPassword = async (req, res) => {
    try {
        let { email, oldpassword, newpassword } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send({ success: false, message: "user not found" })
        }
        let verifypassword = await bcrypt.compare(oldpassword, user.password);

        if (verifypassword) {
            user.password = await bcrypt.hash(newpassword, 10);
            user.save();

        } else {
            return res.status(401).send({ success: false, message: "Unauthorized" })
        }
        res.send({ success: true, message: "password reset successfully" })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
}


const getProfileController = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send({ success: false, message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const user = await User.findById(userId).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).send({ success: false, message: 'User not found' });
    }

    res.status(200).send({ success: true, data: user });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};



module.exports = { registController, newPassword, getProfileController, updateUserController, verifyOtp, forgotpassword, allUserController, deleteUserController, loginController, resetPassword }
