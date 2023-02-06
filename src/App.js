import { Steps } from "./components/Steps";
import { useState } from "react";
import "./App.css";

function App() {
    const [runs, setRuns] = useState([]);
    const [date, setDate] = useState();
    const [distance, setDistance] = useState();
    const [mergedRuns, setMergedRuns] = useState([]);

    return (
        <div className="App">
            <Steps
                runs={runs}
                date={date}
                distance={distance}
                setRuns={setRuns}
                setDate={setDate}
                setDistance={setDistance}
                
            />
        </div>
    );
}

export default App;
