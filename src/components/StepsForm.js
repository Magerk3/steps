export const StepsForm = ({handleChange, handleSubmit, date, distance}) => {

    return (
        <div>
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
        </div>
    )
} 