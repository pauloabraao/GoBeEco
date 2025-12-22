import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Ranking.css";

const Ranking = () => {
    const topRankers = [
        { rank: 1, name: "Natalia", points: 4565 },
        { rank: 2, name: "Dragon", points: 4545 },
        { rank: 3, name: "KingaKK", points: 4475 },
        { rank: 4, name: "Stephie", points: 4200 },
        { rank: 5, name: "JimmyJ", points: 3625 },
        { rank: 6, name: "E-co-lisa", points: 3490 },
        { rank: 7, name: "Suse", points: 2335 },
        { rank: 8, name: "Artek", points: 2252 },
        { rank: 9, name: "Sylvia", points: 1690 },
        { rank: 10, name: "Little T", points: 1280 },
    ];

    const userContextRankers = [
        { rank: 170, name: "Eco", points: 25 },
        { rank: 171, name: "Shinchen", points: 25 },
        { rank: 172, name: "Tiago", points: 25, isMe: true },
        { rank: 173, name: "slais", points: 20 },
        { rank: 174, name: "Renata", points: 20 },
    ];

    return (
        <>
            <Navbar />

            <div className="ranking-page">
                <h1 className="page-title">Ranking</h1>

                <div className="ranking-card">
                    <ul className="ranking-list">
                        {topRankers.map((user) => (
                            <li key={user.rank} className="ranking-item">
                                <div className="rank-info">
                                    <span className="rank-pos">{user.rank}.</span>
                                    <span className="rank-name">{user.name}</span>
                                </div>
                                <span className="rank-points">{user.points} pts</span>
                            </li>
                        ))}
                    </ul>

                    <div className="ranking-separator">
                        <span>...</span>
                    </div>

                    <ul className="ranking-list">
                        {userContextRankers.map((user) => (
                            <li
                                key={user.rank}
                                className={`ranking-item ${user.isMe ? "highlight-user" : ""}`}
                            >
                                <div className="rank-info">
                                    <span className="rank-pos">{user.rank}.</span>
                                    <span className="rank-name">{user.name}</span>
                                </div>
                                <span className="rank-points">{user.points} pts</span>
                            </li>
                        ))}

                        <div className="ranking-separator">
                            <span>...</span>
                        </div>
                    </ul>
                
                </div>
            </div>

            <Footer />
        </>
    )
};

export default Ranking;