import React, { useState } from 'react'
import "./HabitCard.css"
import close from "../../svg/close.svg"
import check from "../../svg/check.svg"

interface IProps {
    habit: {
        _id: string,
        habit: string,
        completed: boolean
    },
    habits: {
        _id: string,
        habit: string,
        completed: boolean
    }[],
    setHabits: React.Dispatch<React.SetStateAction<{
        _id: string,
        habit: string;
        completed: boolean;
    }[]>>
}

function HabitCard({ habit, setHabits, habits }: IProps) {

    const [complete, setComplete] = useState(false)

    return (
        <div className="HabitCard" onClick={() => {
            let newHabits = habits.map(updatedHabit => {
                if(updatedHabit._id === habit._id){
                    return {
                        ...habit,
                        completed: !habit.completed
                    }
                } else return updatedHabit
            });
            setHabits(newHabits)
        }}>
            <div className="HabitCard__completion-container">
                <img className="HabitCard__completion-icon" src={habit.completed ? check : close}/>
            </div>
            <div className="HabitCard__habit-container">
                {habit.habit}
            </div>
        </div>
    )
}

export default HabitCard
