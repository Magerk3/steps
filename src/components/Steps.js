import { e } from "mathjs";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StepsForm } from "./StepsForm";
import { StepsList } from "./StepsList";

export const Steps = ({
    runs,
    date,
    distance,
    setRuns,
    setDistance,
    setDate,
    setMergedRuns,
    mergedRuns,
}) => {
    function handleChange(e) {
        switch (e.target.name) {
            case "date":
                setDate(e.target.value);
                break;
            case "distance":
                setDistance(Number(e.target.value));
                break;
            default:
                return 0;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        setRuns((prevRuns) =>
            [
                { date: date, distance: distance, id: uuidv4() },
                ...prevRuns,
            ].reduce((acc, curr) => {
                const existingRun = acc.find((run) => run.date === curr.date);
                if (existingRun) {
                    existingRun.distance += curr.distance;
                } else {
                    acc.push(curr);
                }
                return acc;
            }, [])
        );
        setDate("");
        setDistance("");
    }
    function deleteRun(e) {
        setRuns(runs.filter((run) => run.id !== e.target.id));
    }
    function editRun(e) {
        setDate(runs.find((run) => run.id === e.target.id).date);
        setDistance(runs.find((run) => run.id === e.target.id).distance);
    }

    return (
        <div>
            <StepsForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                date={date}
                distance={distance}
            />
            <StepsList runs={runs} deleteRun={deleteRun} editRun={editRun} />
        </div>
    );
};
