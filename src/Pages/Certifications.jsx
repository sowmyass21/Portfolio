import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
import FullStackCertificate from "../assets/fullstackcertificate.png";
import Pythoncertificate from "../assets/pythoncertificate.png";
import DSAcertificate from "../assets/dsacertificate.png";
export default function Certifications() {
    const certificates = [
                {
                id: 1,
                title: "Full Stack Web Development",
                issuer: "Apna College",
                img:FullStackCertificate,
                },
                {
                    id:2,
                    title:"Data Structures and Algorithms",
                    issuer:"Apna College",
                    img:DSAcertificate,
                },
                {
                    id:3,
                    title:"Python Programming",
                    issuer:"Coursera",
                    img:Pythoncertificate,
                },
                {
                    id:4,
                    title:"Java Programming",
                    issuer:"Apna College",
                    img:"",
                },
                
            ];
        const hanldeView = (imgUrl) => {
           if(imgUrl) {
            window.open(imgUrl, "_blank");
           } else {
            alert("Certificate image not available");
           }
        }
    return (
        <div className="app-bg">
            <section className="certificates">
                <h3>Certifications</h3>
                <div className="certifications-grid">
                    {certificates.map((c) => (
                        <article key={c.id} className="certificate-card">
                            <div className="certificate-image">
                                <img src={c.img} alt={c.title} />
                            </div>

                            <div className="certificate-info">
                                <h4>{c.title}</h4>
                                <p>Issued by: {c.issuer}</p>
                                <button
                                    className="primary-btn project-btn"
                                    onClick={() => hanldeView(c.img)}
                                >
                                    View
                                </button>
                            </div>

                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}