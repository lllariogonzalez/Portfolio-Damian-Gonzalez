import profile from "../../assets/profile.png";
import { motion } from "framer-motion";
import s from "./About.module.css";

export function About() {
    return (
        <section className={s.section}>
            <motion.div
                initial={{ x: -200 }}
                transition={{ duration: 0.25 }}
                animate={{
                    x: 0,
                    ease: "easeInOut"
                }}>
                <div className={s.container}>
                    <p style={{ lineHeight: "1.5rem" }}>
                        Soy desarrollador web, puedo desempeñarme como Front-end engineer, Back-end engineer o Fullstack (seniority level junior advanced), actualmente utilizo el stack PERN para realizar proyectos que sean escalables y modularizables. Poseo conocimientos en tecnologías como HTML, CSS, Javascript, React, Node, express, postgresSQL y sequelize.
                    </p><br />
                    <p style={{ lineHeight: "1.5rem" }}>
                        Soy proactivo, tenaz y comprometido, me encantan los entornos de desarrollo cooperativos y de trabajo en equipo utilizando metodologías ágiles como scrum. Tengo background en Contabilidad y Administración y me apasiona la tecnología. Poseo un Sólido manejo del inglés tanto oral como escrito (C2 Proficient Marco Común Europeo de Referencia para las lenguas).
                    </p>
                </div>
            </motion.div>
            <div className={s.div}>
                <motion.div className={s.motion}
                    initial={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    animate={{
                        scale: [1, 1.1, 1.1, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["50%", "40%", "30%", "40%", "50%"],
                        ease: "easeInOut",
                        type: "spring"
                    }}>
                </motion.div>
                <img className={s.img} src={profile} alt="photo Damian Gonzalez" />
            </div>
        </section>
    )
}