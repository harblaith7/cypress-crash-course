import React, { useState, useEffect } from 'react'
import HabitCard from '../HabitCard/HabitCard'
import Modal from "../Modal/Modal"
import "./Habit.css"
import axios from "axios"

type IState = {
    _id: string;
    habit: string;
    completed: boolean;
}[]

function Habit() {

    const [habits, setHabits] = useState<IState>([]);
    console.log(habits, "habits")

    return (
        <div className="Habit">
            <div className="Habit__heading-container">
                <h2 className="Habit-header">Habit Checklist</h2>
                <Modal 
                    habits={habits}
                    setHabits={setHabits}
                />
            </div>
            <div className="Habit-cards-container">
                {habits.map(habit => {
                    return <HabitCard habit={habit} setHabits={setHabits} habits={habits}/>
                })}
            </div>
        </div>
    )
}

export default Habit
