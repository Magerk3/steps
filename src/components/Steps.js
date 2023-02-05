import { e } from "mathjs";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Steps = () => {
    const [runs, setRuns] = useState([]);
    const [date, setDate] = useState();
    const [distance, setDistance] = useState();

    function handleChange(e) {
        switch (e.target.name) {
            case "date":
                setDate(e.target.value);
                break;
            case "distance":
                setDistance(e.target.value);
                break;
            default:
                return 0;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        setRuns((prevRuns) => [
            { date: date, distance: distance, id: uuidv4() },
            ...prevRuns,
        ]);
        setDate('')
        setDistance('')
    }
    function deleteRun(e) {
        setRuns(runs.filter(run => run.id !== e.target.id))
    }
    function editRun(e){
        setDate(runs.find(run => run.id === e.target.id).date)
        setDistance(runs.find(run => run.id === e.target.id).distance)
    }

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        name="date"
                        type="date"
                        value={date}
                        onChange={handleChange}
                    ></input>
                    <input
                        name="distance"
                        value={distance}
                        onChange={handleChange}
                    ></input>
                    <button type="submit">OK</button>
                </form>
            </section>
            <hr />
            <section>
                <h2>Runs</h2>
                <ul>
                    {runs
                        .sort(
                            (a, b) =>
                                Date.parse(new Date(b.date)) -
                                Date.parse(new Date(a.date))
                        )
                        .map((run) => (
                            <li id={run.id}>
                                {run.date} {run.distance}{" "}
                                <button id={run.id} onClick={deleteRun}> X </button>
                                <button id={run.id} onClick={editRun}> edit </button>
                            </li>
                        ))}
                </ul>
            </section>
        </div>
    );
};
