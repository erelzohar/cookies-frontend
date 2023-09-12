import "./Logo.css";
import { motion } from "framer-motion";
import macarons from "../../../Assets/Images/macarons.png";

const logoStrArr = ["E", "T", "T", "I", "'", "S", "C", "O", "O", "K", "I", "E", "S"];
const logoVariants = {
    hidden: {
        y: '-100vw'
    },
    visible: {
        y: 0,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 30,
            duration: 1

        }

    }
}
const macaronVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.8,
            type: "spring",
            stiffness: 30

        }

    }
}
const logoCharHover = {
    scale: 1.1,
    color: "rgb(178, 141, 28)",
    y: "-2vh",
    // origin:{x:0},
    transition: {
        type: "spring",
        stiffness: 500,
        mass: 0.5
    }
}
function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <motion.img className="img" width={"100%"} src={macarons} alt=""
                variants={macaronVariants}
                initial="hidden"
                animate="visible"
            />

            <motion.div className="inner-logo-div"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
            >
                {logoStrArr.map((e, i) => <motion.h1
                    key={i}
                    className="logoChar"
                    whileHover={logoCharHover}>
                    {e}
                </motion.h1>
                )}
            </motion.div>
        </div>
    );
}

export default Logo;
