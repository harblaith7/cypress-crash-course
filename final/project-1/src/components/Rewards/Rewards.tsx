import React, { useEffect, useState } from 'react'
import "./Rewards.css"

function Rewards() {

    const [rewards, setReward] = useState([
        {
            id: 1,
            reward: "500 points for drinking 8 cups of water for 7 straight days",
            month: "January"
        },
        {
            id: 2,
            reward: "850 points for fasting for 5 days straight",
            month: "January"
        },
        {
            id: 3,
            reward: "250 points for exercising for 3 straight days",
            month: "January"
        },
        {
            id: 4,
            reward: "5000 points for getting a new job",
            month: "Feburary"
        },
        {
            id: 5,
            reward: "100 points for waking up early",
            month: "Feburary"
        },
        {
            id: 6,
            reward: "1250 points for making a new project",
            month: "March"
        },
        {
            id: 7,
            reward: "500 points for practicing basketball",
            month: "March"
        },
        {
            id: 8,
            reward: "5 points for staring into a wall for 30 seconds",
            month: "March"
        },
        {
            id: 9,
            reward: "1000 points for taking a cold shower for 10 straight days",
            month: "March"
        }
    ]);

    const [filteredRewards, setFilteredRewards] = useState(rewards);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        let updatedFilterRewards = rewards.filter((reward) => {
            if(filter === "All") return true
            return reward.month === filter
        });
        setFilteredRewards(updatedFilterRewards);
    }, [filter])

    return (
        <div className="Rewards">
            <div className="Rewards__heading-container">
                <h2 className="Rewards-header">Rewards</h2>
            </div>
            <div className="Rewards-cards-container">
                <select className="Rewards-dropdown" onChange={(e) => setFilter(e.target.value)}>
                    <option>All</option>
                    <option>January</option>
                    <option>Feburary</option>
                    <option>March</option>
                </select>
            </div>
            <ul className="Rewards-cards-container">
                {filteredRewards.map(reward => {
                    return (
                        <li className="Rewards-cards-list">
                            {reward.reward}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Rewards
