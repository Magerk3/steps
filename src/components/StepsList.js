

export const StepsList = ({runs, deleteRun, editRun}) => {
    

    return (
        <div>
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
                                <button id={run.id} onClick={deleteRun}>
                                    {" "}
                                    X{" "}
                                </button>
                                <button id={run.id} onClick={editRun}>
                                    {" "}
                                    edit{" "}
                                </button>
                            </li>
                        ))}
                </ul>
        </div>
    )
}